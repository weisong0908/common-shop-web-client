<template>
  <page title="Orders">
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
    <div :class="isShowModal ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="isShowModal = false"></div>
      <div class="modal-content">
        <div class="box">
          <pre>
            {{ selectedOrder }}
          </pre>
          <p>Order ID: {{ selectedOrder.id }}</p>
          <p>Order date: {{ selectedOrder.date }}</p>
          <ul>
            <li v-for="product in selectedOrder.products" :key="product.id">
              <p>Product ID: {{ product.id }}</p>
              <p>Product title: {{ product.title }}</p>
              <p>Product quantity: {{ product.count }}</p>
              <p>Product price: {{ product.price }}</p>
            </li>
          </ul>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="isShowModal = false"
      ></button>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import orderService from "../services/orderService";

export default {
  components: {
    Page
  },
  data() {
    return {
      orders: [],
      selectedOrder: {},
      isShowModal: false
    };
  },
  created() {
    this.orders = orderService.getOrders();
  },
  methods: {
    showOrderDetail(order) {
      this.selectedOrder = order;
      this.isShowModal = true;
    }
  }
};
</script>
