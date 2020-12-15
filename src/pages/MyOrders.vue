<template>
  <page>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.date }}</td>
          <td>
            <a @click="showOrderDetail(order)">View</a>
          </td>
        </tr>
      </tbody>
    </table>
    <modal :isActive="isModalShown" @close="isModalShown = false">
      <order-summary
        v-if="selectedOrder.id"
        :order="selectedOrder"
        :customer="selectedOrder.customer"
        :shippingAddress="selectedOrder.shippingAddress"
      ></order-summary>
    </modal>
  </page>
</template>

<script>
import Page from "../components/Page";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";
import orderService from "../services/orderService";

export default {
  components: {
    Page,
    Modal,
    OrderSummary
  },
  data() {
    return {
      orders: [],
      selectedOrder: {},
      isModalShown: false
    };
  },
  created() {
    orderService.getOrders().then(orders => {
      this.orders = orders;
    });
  },
  methods: {
    showOrderDetail(order) {
      orderService.getOrder(order.id).then(order => {
        this.selectedOrder = order;
        this.isModalShown = true;
      });
    }
  }
};
</script>
