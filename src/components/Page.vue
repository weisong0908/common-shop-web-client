<template>
  <section class="section">
    <div class="container is-fluid">
      <h1 class="title">{{ title }}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  created() {
    document.title = process.env.VUE_APP_TITLE + " | " + this.title;
  },
  props: {
    title: String
  }
};
</script>
