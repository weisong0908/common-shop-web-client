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
            <div class="field has-addons">
              <div class="control">
                <button
                  class="button is-primary"
                  :disabled="product.count === 0"
                  @click="stepDownProductCount(product.id)"
                >
                  <span class="icon">
                    <i class="fas fa-minus"></i>
                  </span>
                </button>
              </div>
              <div class="control">
                <input
                  class="input"
                  style="max-width:100px"
                  type="number"
                  v-model="product.count"
                  min="0"
                  @change="changeProductCount(product.id, product.count)"
                />
              </div>
              <div class="control">
                <button
                  class="button is-primary"
                  @click="stepUpProductCount(product.id)"
                >
                  <span class="icon">
                    <i class="fas fa-plus"></i>
                  </span>
                </button>
              </div>
            </div>
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
        <button
          class="button is-primary"
          :disabled="productCountInShoppingCart === 0"
          @click="checkOut"
        >
          Check Out
        </button>
      </div>
      <div class="control">
        <button
          class="button is-danger"
          :disabled="productCountInShoppingCart === 0"
          @click="clearShoppingCart"
        >
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
    const shoppingCart = this.$store.state.shoppingCart.shoppingCart;

    shoppingCart.forEach(element => {
      productService.getProduct(element.id).then(product => {
        this.products.push({
          id: product.id,
          count: element.count,
          title: product.title,
          price: product.price,
          thumbnailUrl: product.thumbnailUrl
        });
      });
    });
  },
  computed: {
    productCountInShoppingCart() {
      return this.$store.getters["shoppingCart/productCount"];
    },
    totalPrice() {
      return this.products.reduce((pv, cv) => {
        return pv + cv.count * cv.price;
      }, 0);
    }
  },
  methods: {
    stepDownProductCount(productId) {
      const product = this.products.find(p => p.id == productId);
      product.count--;
      this.$store.dispatch("shoppingCart/update", {
        productId,
        productCount: product.count
      });
    },
    stepUpProductCount(productId) {
      const product = this.products.find(p => p.id == productId);
      product.count++;
      this.$store.dispatch("shoppingCart/update", {
        productId,
        productCount: product.count
      });
    },
    changeProductCount(productId, productCount) {
      this.$store.dispatch("shoppingCart/update", {
        productId,
        productCount
      });
    },
    clearShoppingCart() {
      this.products = [];
      this.$store.dispatch("shoppingCart/clear");
    },
    checkOut() {
      this.$store.dispatch("order/createNew", {
        products: this.products.map(p => {
          return {
            id: p.id,
            title: p.title,
            price: p.price * p.count,
            quantity: p.count
          };
        }),
        totalPrice: this.totalPrice + 2,
        date: new Date().toLocaleString(),
        fees: [
          {
            cost: 2,
            id: "02238e28-1b03-48db-94b9-c0b335ae6d7a",
            title: "Shipping fee"
          }
        ],
        customer: {
          email: "weisong0908@gmail.com",
          id: "97bdd552-ae59-403a-ba6c-3162d17560ec",
          name: "John 3",
          phone: "98765432",
          primaryAddress: {
            id: "c9871377-210e-4979-a006-a8e156b05147",
            line1: "Block 3 Street 6",
            line2: "#7-9",
            postalCode: "123456"
          }
        }
      });

      this.$store.dispatch("shoppingCart/clear");

      this.$router.push({ name: "checkOut" });
    }
  }
};
</script>
