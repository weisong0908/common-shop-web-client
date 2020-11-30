<template>
  <page>
    <article class="message">
      <div class="message-body">
        You have <strong>{{ productCountInShoppingCart }}</strong> items in your
        shopping cart.
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
              v-model="product.count"
              min="0"
              @change="changeProductCount(product.id)"
            />
          </td>
          <td>
            <strong> ${{ product.price * product.count }} </strong>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>${{ totalPrice }}</th>
        </tr>
      </tfoot>
    </table>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" @click="checkOut">
          Check Out
        </button>
      </div>
      <div class="control">
        <button class="button is-danger" @click="clearShoppingCart">
          Clear Shopping Cart
        </button>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page.vue";
import productService from "../services/productService";

export default {
  components: { Page },
  data() {
    return {
      products: []
    };
  },
  created() {
    const productsInShoppingCart = this.$store.state.productsInShoppingCart;

    this.products = productsInShoppingCart.map(product => {
      const productData = productService.getProduct(product.id);

      return {
        id: product.id,
        count: parseInt(product.count),
        title: productData.title,
        price: productData.price,
        thumbnailUrl: productData.thumbnailUrl
      };
    });
  },
  computed: {
    productCountInShoppingCart() {
      return this.$store.state.productsInShoppingCart.reduce((pv, cv) => {
        return pv + cv.count;
      }, 0);
    },
    totalPrice() {
      return this.products.reduce((pv, cv) => {
        return pv + cv.count * cv.price;
      }, 0);
    }
  },
  methods: {
    changeProductCount(productId) {
      this.$store.dispatch("appendShoppingCart", productId);
    },
    clearShoppingCart() {
      this.products = [];
      this.$store.dispatch("clearShoppingCart");
    },
    checkOut() {
      this.$store.dispatch("createOrder", {
        products: this.products.map(p => {
          return {
            id: p.id,
            title: p.title,
            price: p.price * p.count,
            count: p.count
          };
        }),
        totalPrice: this.totalPrice
      });

      this.$store.dispatch("clearShoppingCart");

      this.$router.push({ name: "checkOut" });
    }
  }
};
</script>
