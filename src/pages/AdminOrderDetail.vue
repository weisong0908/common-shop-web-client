<template>
  <page>
    <breadcrumb></breadcrumb>
    <div v-if="order != {}">
      <div class="columns">
        <div class="column">
          <div class="field">
            <p class="has-text-grey">Order ID: {{ order.id }}</p>
          </div>
        </div>
        <div class="column">
          <pre>
            <code>
              {{ order }}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb.vue";
import orderService from "../services/orderService";

export default {
  components: {
    Page,
    Breadcrumb
  },
  data() {
    return {
      order: {}
    };
  },
  created() {
    orderService
      .getOrder(this.$route.params.id)
      .then(order => (this.order = order));
  }
};
</script>
