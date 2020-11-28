<template>
  <div :class="isActive ? 'modal is-active' : 'modal'">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-content">
      <div class="box">
        <slot></slot>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="toggle"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["isActive"],
  methods: {
    toggle() {
      this.$emit("toggle");
    }
  }
};
</script>
