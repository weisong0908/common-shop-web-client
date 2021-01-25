<template>
  <article
    v-if="$store.state.utilities.alert.isActive"
    :class="'message is-' + $store.state.utilities.alert.type"
  >
    <div class="message-header">
      <p>{{ $store.state.utilities.alert.heading }}</p>
      <button class="delete" aria-label="delete" @click="hideAlert"></button>
    </div>
    <div class="message-body">
      {{ $store.state.utilities.alert.message }}
    </div>
  </article>
</template>

<script>
export default {
  methods: {
    hideAlert() {
      this.$store.dispatch("utilities/hideAlert");
    }
  }
};
</script>
