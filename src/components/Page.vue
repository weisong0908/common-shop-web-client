<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>
