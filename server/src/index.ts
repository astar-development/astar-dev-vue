import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT: number = parseInt(process.env.PORT ?? '3000', 10)

// Security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
      },
    },
  }),
)

// Rate limiting – protect all routes from abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
})
app.use(limiter)

// Parse JSON bodies
app.use(express.json())

// Health-check endpoint
app.get('/api/health', (_req: Request, res: Response): void => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve the compiled Vue frontend
const clientDistCandidates = [
  // Preferred for Azure/App Service: runtime CWD usually /home/site/wwwroot
  path.resolve(process.cwd(), 'client/dist'),
  // Alternate runtime CWD if app root is one level above wwwroot
  path.resolve(process.cwd(), 'wwwroot/client/dist'),
  // Local monorepo run: server/dist -> ../../client/dist
  path.resolve(__dirname, '../../client/dist'),
  // Azure deploy artifact run: dist -> ../client/dist
  path.resolve(__dirname, '../client/dist'),
]

const clientDist =
  clientDistCandidates.find((candidate) => fs.existsSync(path.join(candidate, 'index.html'))) ??
  ''

if (clientDist) {
  app.use(express.static(clientDist))
}

// Fall back to index.html for client-side routing
app.get('*', (_req: Request, res: Response): void => {
  if (!clientDist) {
    res.status(503).json({
      error: 'Frontend Not Available',
      message: 'No built frontend found. Expected index.html in one of the candidate paths.',
      candidates: clientDistCandidates,
    })
    return
  }

  res.sendFile(path.join(clientDist, 'index.html'))
})

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  const errorId = Date.now().toString(36)
  console.error(`[${errorId}]`, err.stack)
  const body: Record<string, string> = { error: 'Internal Server Error', errorId }
  if (process.env.NODE_ENV !== 'production') {
    body.message = err.message
  }
  res.status(500).json(body)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

export default app
