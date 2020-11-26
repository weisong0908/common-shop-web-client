<template>
  <page title="Explore Our Products">
    <div class="columns">
      <div class="column is-one-quarter">
        <product-category-filter></product-category-filter>
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
import ProductCategoryFilter from "../components/ProductCategoryFilter";
import productService from "../services/productService";

export default {
  components: { Page, ProductCard, ProductCategoryFilter },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.products = productService.getProducts();
  },
  beforeRouteUpdate(to, from, next) {
    this.products = productService
      .getProducts()
      .filter(p => p.category === to.query.category);
    next();
  }
};
</script>
