<template>
  <page>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Date</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.date }}</td>
          <td>${{ order.totalPrice }}</td>
          <td>
            <a @click="showOrderDetail(order)">View</a>
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :currentPageNumber="currentPageNumber"
      :totalPageCount="totalPageCount"
      @goToPage="goToPage"
    ></pagination>
    <modal :isActive="isModalShown" @close="isModalShown = false">
      <order-summary
        v-if="selectedOrder.id"
        :order="selectedOrder"
      ></order-summary>
    </modal>
  </page>
</template>

<script>
import Page from "../components/Page";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";
import OrderSummary from "../components/OrderSummary";
import orderService from "../services/orderService";

export default {
  components: {
    Page,
    Pagination,
    Modal,
    OrderSummary
  },
  data() {
    return {
      orders: [],
      ordersPerPage: 3,
      totalOrderCount: "",
      totalPageCount: "",
      currentPageNumber: 1,
      selectedOrder: {},
      isModalShown: false
    };
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPageNumber = pageNumber;
      this.getOrders();
    },
    getOrders() {
      orderService
        .getOrders(this.ordersPerPage, this.currentPageNumber)
        .then(response => {
          this.orders = response.orders;
          this.totalOrderCount = response.totalOrderCount;
          this.totalPageCount = Math.ceil(
            this.totalOrderCount / this.ordersPerPage
          );
        });
    },
    showOrderDetail(order) {
      orderService.getOrder(order.id).then(order => {
        this.selectedOrder = order;
        this.isModalShown = true;
      });
    }
  }
};
</script>
