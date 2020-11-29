<template>
  <div :class="isActive ? 'modal is-active is-clipped' : 'modal'">
    <div class="modal-background" @click="close"></div>
    <div class="modal-content">
      <div class="box">
        <slot></slot>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="close"
    ></button>
  </div>
</template>

<script>
export default {
  props: ["isActive"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
