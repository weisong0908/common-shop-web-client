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
          :currentPageNumber="currentPageNumber"
          :totalPageCount="totalPageCount"
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
      selectedCategory: null,
      productsPerPage: 8,
      totalPageCount: "",
      currentPageNumber: 1
    };
  },
  created() {
    this.selectedCategory = this.$route.query.category;
    this.showProducts();
  },
  beforeRouteUpdate(to, from, next) {
    this.selectedCategory = to.query.category;
    this.showProducts();
    next();
  },
  methods: {
    showProducts() {
      productService
        .getProducts(
          this.productsPerPage,
          this.currentPageNumber,
          this.selectedCategory != undefined ? this.selectedCategory : ""
        )
        .then(response => {
          this.products = response.products;
          this.totalPageCount = Math.ceil(
            response.totalProductCount / this.productsPerPage
          );
        });
    },
    goToPage(pageNumber) {
      this.currentPageNumber = pageNumber;
      this.showProducts();
    }
  }
};
</script>
