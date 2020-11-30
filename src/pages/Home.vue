<template>
  <page>
    <p>hi this is home</p>
    <button class="button" @click="showAlert">Click me</button>
  </page>
</template>

<script>
import Page from "../components/Page";

export default {
  components: { Page },

  data() {
    return {};
  },
  methods: {
    showAlert() {
      this.$store.commit("showAlert", {
        type: "warning",
        heading: "Warning",
        message: "Something bad happened"
      });
    }
  }
};
</script>
