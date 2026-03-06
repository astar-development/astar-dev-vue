<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p class="footer__text">
      &copy; {{ year }} Astar Dev &mdash; Built with Vue 3, Express &amp; TypeScript.
      Deployed to Azure via GitHub Actions.
    </p>
  </footer>
</template>

<style scoped>
.footer {
  background: #161b22;
  border-top: 1px solid #30363d;
  padding: 24px;
  text-align: center;
}

.footer__text {
  color: #8b949e;
  font-size: 0.9rem;
}
</style>
