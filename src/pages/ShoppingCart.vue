<template>
  <page title="Shopping Cart">
    <article class="message">
      <div class="message-body">
        You have <strong>2</strong> items in your shopping cart.
      </div>
    </article>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <figure class="image is-128x128">
              <img :src="product.thumbnailUrl" />
            </figure>
          </td>
          <td>
            <p>
              {{ product.title }}
            </p>
            <p class="has-text-grey">${{ product.price }} each</p>
          </td>
          <td>
            <input
              class="input"
              style="max-width:100px"
              type="number"
              step="1"
            />
          </td>
          <td>
            <strong> ${{ product.price }} </strong>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>$20</th>
        </tr>
      </tfoot>
    </table>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Check Out</button>
      </div>
      <div class="control">
        <button class="button is-danger">Clear Shopping Cart</button>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page.vue";
export default {
  components: { Page },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = [
      {
        id: "1",
        title: "Product 1",
        price: 10.0,
        category: "Category 1",
        thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
      },
      {
        id: "2",
        title: "Product 2",
        price: 10.0,
        category: "Category 1",
        thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
      }
    ];
  }
};
</script>
