<template>
  <page>
    <div class="columns">
      <div class="column">
        <shipping-form :customer="customer"></shipping-form>
      </div>
      <div class="column">
        <div class="box">
          <order-summary
            :order="$store.state.order"
            :customer="customer"
          ></order-summary>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import ShippingForm from "../components/ShippingForm";
import OrderSummary from "../components/OrderSummary";

export default {
  components: {
    Page,
    ShippingForm,
    OrderSummary
  },
  data() {
    return {
      customer: {
        name: "",
        address: {
          line1: "",
          line2: "",
          postalCode: ""
        }
      },
      order: {}
    };
  }
};
</script>
