<template>
  <page>
    <breadcrumb></breadcrumb>
    <article class="message">
      <div class="message-body">
        <strong>{{ totalProductCount }}</strong> product(s) in total
      </div>
    </article>
    <div class="field">
      <div class="control">
        <button class="button is-primary" @click="createNewProduct">
          New Product
        </button>
      </div>
    </div>
    <div class="field has-addons">
      <div class="control has-icons-left is-expanded">
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
        <input type="text" class="input" />
      </div>
      <div class="control">
        <button class="button">Clear Search</button>
      </div>
    </div>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Title</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.price }}</td>
          <td>
            <router-link
              :to="{
                name: 'adminUpdateProductDetail',
                query: { id: product.id }
              }"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :currentPageNumber="currentPageNumber"
      :totalPageCount="totalPageCount"
      @goToPage="goToPage"
    ></pagination>
  </page>
</template>

<script>
import Page from "../components/Page";
import Breadcrumb from "../components/Breadcrumb";
import Pagination from "../components/Pagination";
import productService from "../services/productService";

export default {
  components: {
    Page,
    Breadcrumb,
    Pagination
  },
  data() {
    return {
      products: [],
      productsPerPage: 10,
      totalProductCount: "",
      totalPageCount: "",
      currentPageNumber: 1
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    goToPage(pageNumber) {
      this.currentPageNumber = pageNumber;
      this.getProducts();
    },
    getProducts() {
      productService
        .getProducts(this.productsPerPage, this.currentPageNumber, "")
        .then(response => {
          this.products = response.products;
          this.totalProductCount = response.totalProductCount;
          this.totalPageCount = Math.ceil(
            this.totalProductCount / this.productsPerPage
          );
        });
    },
    createNewProduct() {
      this.$router.push({
        name: "adminCreateProductDetail"
      });
    }
  }
};
</script>
