<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import AppFooter from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    AppFooter
  }
};
</script>
