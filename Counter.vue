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
