<script setup lang="ts">
const title: string = 'Welcome to Astar Dev'
const subtitle: string =
  'A modern web application built with Vue 3, Express, and TypeScript.'
</script>

<template>
  <header class="hero">
    <div class="hero__content">
      <div class="hero__badge">⭐ Powered by Vue 3 + TypeScript</div>
      <h1 class="hero__title">{{ title }}</h1>
      <p class="hero__subtitle">{{ subtitle }}</p>
      <div class="hero__actions">
        <a
          href="https://github.com/astar-development/astar-dev-vue"
          class="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
        >View on GitHub</a>
        <a href="#features" class="btn btn--secondary">Learn More</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0d1117 0%, #161b22 50%, #0d1117 100%);
  border-bottom: 1px solid #30363d;
  padding: 80px 24px;
  text-align: center;
}

.hero__content {
  max-width: 800px;
  margin: 0 auto;
}

.hero__badge {
  display: inline-block;
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid rgba(88, 166, 255, 0.3);
  color: #58a6ff;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #f0f6fc;
  line-height: 1.2;
  margin-bottom: 16px;
}

.hero__subtitle {
  font-size: 1.15rem;
  color: #8b949e;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

.btn--primary {
  background: #238636;
  color: #ffffff;
  border: 1px solid #2ea043;
}

.btn--secondary {
  background: transparent;
  color: #58a6ff;
  border: 1px solid #30363d;
}
</style>
