<template>
  <div>
    <p class="title is-4">Order Summary</p>
    <p v-if="order.id">Order ID: {{ order.id }}</p>
    <p v-if="order.date">Order date: {{ order.date }}</p>
    <p>Order total: ${{ order.totalPrice }}</p>
    <p>Order status: {{ order.orderStatus }}</p>
    <p class="has-text-weight-bold mt-3">Products Purchased</p>
    <p>You have the following item(s) in your order:</p>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in order.products" :key="product.id">
          <td>{{ product.quantity }} &times; {{ product.title }}</td>
          <td>${{ product.price }}</td>
        </tr>
        <tr v-for="fee in order.fees" :key="fee.id">
          <td>{{ fee.title }}</td>
          <td>${{ fee.cost }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>${{ order.totalPrice }}</th>
        </tr>
      </tfoot>
    </table>
    <p class="has-text-weight-bold mt-3">Shipping Information</p>
    <p>Ship to:</p>
    <p>{{ order.customer.name }}</p>
    <p>{{ order.customer.primaryAddress.line1 }}</p>
    <p>{{ order.customer.primaryAddress.line2 }}</p>
    <p>{{ order.customer.primaryAddress.postalCode }}</p>
  </div>
</template>

<script>
export default {
  props: ["order"]
};
</script>
