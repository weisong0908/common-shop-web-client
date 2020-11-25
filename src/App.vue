<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <home></home>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>
