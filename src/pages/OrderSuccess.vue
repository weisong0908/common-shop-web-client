<template>
  <page title="Order Success">
    <p>Thank you for shopping with us.</p>
    <p>Here is your order summary</p>
    <order-summary
      :order="$store.state.order"
      :customer="$store.state.order.customer"
    ></order-summary>
  </page>
</template>

<script>
import Page from "../components/Page";
import OrderSummary from "../components/OrderSummary";

export default {
  components: {
    Page,
    OrderSummary
  }
};
</script>
