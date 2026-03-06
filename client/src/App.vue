<script setup lang="ts">
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <Hero />
    <Features />
    <Footer />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: #08131f;
  color: #e8f1fa;
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
