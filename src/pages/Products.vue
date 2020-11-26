<template>
  <page title="Explore Our Products">
    <div class="columns">
      <div class="column is-one-quarter">
        <aside class="menu">
          <p class="menu-label">
            Category
          </p>
          <ul class="menu-list">
            <li><a class="is-active">Category 1</a></li>
            <li><a>Category 1</a></li>
          </ul>
          <p class="menu-label">
            Category
          </p>
          <ul class="menu-list">
            <li><a>Category 1</a></li>
            <li><a>Category 1</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <div class="columns is-multiline">
          <div v-for="product in products" :key="product.id">
            <div class="column">
              <product-card
                :product="product"
                :is-preview="false"
              ></product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import productService from "../services/productService";

export default {
  components: { Page, ProductCard },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.products = productService.getProducts();
  }
};
</script>
