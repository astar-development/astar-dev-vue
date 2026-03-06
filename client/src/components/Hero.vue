<script setup lang="ts">
const navItems: { label: string; href: string }[] = [
  { label: 'Services', href: '#services' },
  { label: 'NuGet', href: '#packages' },
  { label: 'Setlist', href: '#tracks' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="hero">
    <div class="topbar">
      <div class="topbar__brand">
        <span class="topbar__logo">
          <img src="./../../public/astar.png" alt="AStar" style="width:50px; height: 50px;" />
        </span>
        <div>
          <p class="topbar__title">AStar Development</p>
          <p class="topbar__subtitle">Architecture, pipelines, and observability with real momentum</p>
        </div>
      </div>

      <nav class="topbar__nav" aria-label="Primary">
        <a v-for="item in navItems" :key="item.label" :href="item.href" class="topbar__link">
          {{ item.label }}
        </a>
      </nav>
    </div>

    <div class="hero__content">
      <p class="hero__eyebrow">PRODUCTION // CLARITY</p>

      <h1 class="hero__title">
        Production‑grade .NET systems, designed to stay calm under load.
      </h1>

      <p class="hero__subtitle">
        Architecture, pipelines, and observability shaped for real teams and real constraints.
        Enough energy to move fast, enough discipline to stay reliable.
      </p>

      <div class="hero__tags">
        <span class="hero__tag">Tests that shape design</span>
        <span class="hero__tag">Boundaries you can reason about</span>
        <span class="hero__tag">Signals over guesswork</span>
      </div>

      <div class="hero__actions">
        <a href="#services" class="btn btn--secondary">Explore services</a>
        <a href="#contact" class="btn btn--secondary">Start a conversation</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  border-bottom: 1px solid #26303d;
  padding: 24px 24px 84px;
  background:
    radial-gradient(circle at 86% 9%, rgba(45, 212, 191, 0.18), transparent 30%),
    radial-gradient(circle at 5% 0%, rgba(251, 146, 60, 0.18), transparent 30%),
    linear-gradient(165deg, #09131f 0%, #07121d 50%, #0f1a26 100%);
}

.topbar {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.topbar__brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  font-weight: 700;
}

.topbar__title {
  color: #f3f6fb;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.2;
}

.topbar__subtitle {
  color: #89a0b6;
  font-size: 0.78rem;
}

.topbar__nav {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.topbar__link {
  color: #b8cadb;
  text-decoration: none;
  font-size: 0.82rem;
}

.topbar__link:hover {
  color: #2dd4bf;
}

.hero__content {
  max-width: 920px;
  margin: 56px auto 0;
  text-align: center;
}

.hero__title {
  font-size: clamp(2.1rem, 5vw, 3.6rem);
  font-weight: 700;
  color: #f3f6fb;
  line-height: 1.2;
  margin-bottom: 14px;
}

.hero__subtitle {
  font-size: 1.08rem;
  color: #b5c5d5;
  margin-bottom: 24px;
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;
}

.hero__eyebrow {
  margin-bottom: 14px;
  letter-spacing: 0.25em;
  font-size: 0.65rem;
  font-weight: 700;
  color: #f0abfc;
  text-transform: uppercase;
}

.hero__tags {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.hero__tag {
  border: 1px solid #324255;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 0.78rem;
  color: #c9d7e4;
  background: rgba(12, 24, 35, 0.8);
}

.hero__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease, border-color 0.15s ease;
}

.btn:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

.btn--primary {
  background: #2dd4bf;
  color: #0f1a26;
  border: 1px solid #5de0d0;
}

.btn--secondary {
  background: transparent;
  color: #d6e5f4;
  border: 1px solid #3a4a5d;
}

.btn--secondary:hover {
  border-color: #2dd4bf;
}

@media (max-width: 860px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topbar__nav {
    width: 100%;
    gap: 12px;
  }
}
</style>
