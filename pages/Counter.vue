<template>
  <button @click="count--">−</button>
  <span style="margin: 0.5rem;">{{ count }}</span>
  <button @click="count++">+</button>
  <button @click="reset">Reset</button>
</template>

<script>
  import { ref } from "vue";
  
  function setup() {
    const count = ref(0);
    
    function reset() {
      count.value = 0;
    }
    
    return {
      count,
      reset,
    };
  }
  
  export default {
    setup,
  };
</script>

<style lang="scss">
  button {
    border-radius: 4px;
    height: 32px;
  }
</style>
