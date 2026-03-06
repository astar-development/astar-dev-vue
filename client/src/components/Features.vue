<script setup lang="ts">
interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '💚',
    title: 'Vue 3',
    description:
      'Built with the Composition API and <script setup> syntax for clean, reactive UI components.',
  },
  {
    icon: '🔷',
    title: 'TypeScript',
    description:
      'Full TypeScript support across both the frontend and backend for type-safe, maintainable code.',
  },
  {
    icon: '🚀',
    title: 'Express',
    description:
      'A lightweight Express server serves the application and provides a foundation for REST APIs.',
  },
  {
    icon: '⚡',
    title: 'Vite',
    description:
      'Lightning-fast development server and optimised production builds powered by Vite.',
  },
  {
    icon: '☁️',
    title: 'Azure Deployment',
    description:
      'Automated CI/CD pipeline via GitHub Actions deploys the site to Azure Web App on every push.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'Helmet middleware secures HTTP headers; secrets are managed through GitHub and Azure.',
  },
]
</script>

<template>
  <section id="features" class="features">
    <div class="features__container">
      <h2 class="features__heading">What's Inside</h2>
      <p class="features__intro">
        Everything you need to build and deploy a modern, production-ready web application.
      </p>
      <div class="features__grid">
        <article v-for="feature in features" :key="feature.title" class="card">
          <div class="card__icon">{{ feature.icon }}</div>
          <h3 class="card__title">{{ feature.title }}</h3>
          <p class="card__description">{{ feature.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features {
  flex: 1;
  padding: 80px 24px;
  background-color: #0d1117;
}

.features__container {
  max-width: 1100px;
  margin: 0 auto;
}

.features__heading {
  font-size: 2rem;
  font-weight: 700;
  color: #f0f6fc;
  text-align: center;
  margin-bottom: 12px;
}

.features__intro {
  text-align: center;
  color: #8b949e;
  font-size: 1.05rem;
  margin-bottom: 56px;
}

.features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 28px 24px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card:hover {
  border-color: #58a6ff;
  transform: translateY(-2px);
}

.card__icon {
  font-size: 2rem;
  margin-bottom: 16px;
}

.card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f0f6fc;
  margin-bottom: 10px;
}

.card__description {
  color: #8b949e;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
