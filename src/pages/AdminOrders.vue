<template>
  <page>
    <breadcrumb></breadcrumb>
    <div class="field has-addons">
      <div class="control has-icons-left is-expanded">
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
        <input type="text" class="input" />
      </div>
      <div class="control">
        <button class="button">
          Clear Search
        </button>
      </div>
    </div>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Date</th>
          <th>Total Price</th>
          <th>Customer ID</th>
          <th>Order Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.date }}</td>
          <td>{{ order.totalPrice }}</td>
          <td>{{ order.customerId }}</td>
          <td>{{ order.orderStatus }}</td>
          <td>
            <router-link
              :to="{ name: 'adminOrderDetail', params: { id: order.id } }"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :currentPageNumber="10"
      :totalPageCount="10"
      @goToPage="goToPage"
    ></pagination>
  </page>
</template>

<script>
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import orderService from "../services/orderService";

export default {
  components: {
    Page,
    Breadcrumb,
    Pagination
  },
  data() {
    return {
      orders: []
    };
  },
  mounted() {
    orderService.getOrdersForAdmin().then(orders => (this.orders = orders));
  },
  methods: {
    goToPage(pageNumber) {
      alert("go to " + pageNumber);
    }
  }
};
</script>
