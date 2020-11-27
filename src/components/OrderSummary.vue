<template>
  <div class="box">
    <p class="is-size-4 has-text-weight-bold">Preview Your Order</p>
    <p class="has-text-weight-bold mt-2">Order Summary</p>
    <p>You have 4 items in your order</p>
    <table class=" my-4 table is-hoverable is-fullwidth">
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
    <p class="has-text-weight-bold mt-2">Shipping Information</p>
    <p>Ship to: {{ customer.name }}</p>
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
