<template>
  <page title="Home">
    <p>hi this is home</p>
    <modal :isActive="showModal" @toggle="showModal = !showModal">
      <p>This is a modal</p>
    </modal>
    <button @click="doshowmodal"></button>
  </page>
</template>

<script>
import Page from "../components/Page";
import Modal from "../components/Modal";

export default {
  components: { Page, Modal },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    doshowmodal() {
      this.showModal = true;
    }
  }
};
</script>
