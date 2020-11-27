<template>
  <div class="box">
    <p class="is-size-4 has-text-weight-bold">Order Summary</p>
    <p v-if="order.id" class="has-text-grey">Order ID: {{ order.id }}</p>
    <p class="has-text-weight-bold mt-3">Order Information</p>
    <p v-if="order.date">Order date: {{ order.date }}</p>
    <p>Order total: ${{ order.totalPrice }}</p>
    <p class="has-text-weight-bold mt-3">Products Purchased</p>
    <p>You have 4 items in your order</p>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Item</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in order.products" :key="product.id">
          <td>{{ product.count }} &times; {{ product.title }}</td>
          <td>${{ product.price }}</td>
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
    <p>{{ customer.name }}</p>
    <p>{{ customer.email }}</p>
    <p>{{ customer.address.line1 }}</p>
    <p>{{ customer.address.line2 }}</p>
    <p>{{ customer.address.postalCode }}</p>
  </div>
</template>

<script>
export default {
  props: ["order", "customer"]
};
</script>
