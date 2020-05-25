<template>
  <Navigation/>
  <h1>About</h1>
  <p>
    hi
  </p>
</template>

<script>
  import Navigation from "../Navigation.vue";
  
  const AboutPage = {
    components: {
      Navigation,
    },
  };
  
  export const route = {
    path: "/about/",
    component: AboutPage,
    meta: {
      title: "About",
    },
  };
  
  export default AboutPage;
</script>
