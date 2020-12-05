<template>
  <page>
    <div class="columns">
      <div class="column is-one-quarter">
        <product-category-filter></product-category-filter>
      </div>
      <div class="column">
        <article class="message">
          <div class="message-body" v-if="selectedCategory">
            Showing products in <strong>{{ selectedCategory }}</strong>
          </div>
          <div class="message-body" v-else>
            Showing all products
          </div>
        </article>
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
        <pagination
          :currentPageNumber="2"
          :totalPageCount="20"
          @goToPage="goToPage"
        ></pagination>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import ProductCategoryFilter from "../components/ProductCategoryFilter";
import Pagination from "../components/Pagination";
import productService from "../services/productService";

export default {
  components: { Page, ProductCard, ProductCategoryFilter, Pagination },
  data() {
    return {
      products: [],
      selectedCategory: null
    };
  },
  created() {
    this.showProducts(this.$route.query.category);
  },
  beforeRouteUpdate(to, from, next) {
    this.showProducts(to.query.category);
    next();
  },
  methods: {
    showProducts(category) {
      if (category == null) {
        productService.getProducts().then(products => {
          this.products = products;
        });
      } else {
        productService
          .getProducts()
          .then(
            products =>
              (this.products = products.filter(p => p.category === category))
          );
      }
      this.selectedCategory = category;
    },
    goToPage(pageNumber) {
      alert("go to " + pageNumber);
    }
  }
};
</script>
