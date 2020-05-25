<template>
  <Navigation/>
  <h1>Home</h1>
  <Counter/>
</template>

<script>
  import Counter from "./Counter.vue";
  import Navigation from "./Navigation.vue";
  
  const HomePage = {
    components: {
      Counter,
      Navigation,
    },
  };
  
  export const route = {
    path: "/",
    component: HomePage,
    meta: {
      title: "Home",
    },
  };
  
  export default HomePage;
</script>
