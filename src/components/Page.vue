<template>
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">{{ title }}</h1>
      <alert></alert>
      <slot></slot>
    </div>
  </section>
</template>

<script>
import Alert from "../components/Alert";

export default {
  components: {
    Alert
  },
  data() {
    return {
      title: ""
    };
  },
  created() {
    this.title = this.$router.options.routes.find(
      r => r.name == this.$route.name
    ).title;
    document.title = process.env.VUE_APP_TITLE + " | " + this.title;
  }
};
</script>
