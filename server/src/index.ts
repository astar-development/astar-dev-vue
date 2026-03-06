import express, { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
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
const clientDist = path.join(__dirname, '../../client/dist')
app.use(express.static(clientDist))

// Fall back to index.html for client-side routing
app.get('*', (_req: Request, res: Response): void => {
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
