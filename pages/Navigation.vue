<template>
  <nav class="Navigation">
    <router-link to="/">Home</router-link>
    <router-link to="/about/">About</router-link>
  </nav>
</template>

<style lang="scss" scoped>
  .Navigation {
    display: flex;
    
    & > :not(:last-child) {
      margin-right: 0.5rem;
    }
  }
</style>
