<template>
  <button @click="count++">Clicks: {{ count }}</button>
</template>

<script>
  export default {
    setup() {
      return {
        count: 0,
      };
    },
  };
</script>

<style lang="scss">
  button {
    border-radius: 4px;
    height: 32px;
  }
</style>
