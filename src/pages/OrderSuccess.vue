<template>
  <page>
    <p>Thank you for shopping with us.</p>
    <p>Here is your order summary</p>
    <br />
    <order-summary :order="order" :customer="order.customer"></order-summary>
  </page>
</template>

<script>
import Page from "../components/Page";
import OrderSummary from "../components/OrderSummary";
import orderService from "../services/orderService";

export default {
  components: {
    Page,
    OrderSummary
  },
  data() {
    return {
      order: {}
    };
  },
  created() {
    const orderId = this.$route.query.orderId;
    this.order = orderService.getOrders().find(o => o.id == orderId);
  }
};
</script>
