<template>
  <page>
    <breadcrumb></breadcrumb>
    <div class="field">
      <div class="control">
        <button class="button is-primary">New Product</button>
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
        <button class="button">
          Clear Search
        </button>
      </div>
    </div>
    <table class="table is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th></th>
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
              :to="{ name: 'adminProductDetail', params: { id: product.id } }"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
    <pagination
      :currentPageNumber="10"
      :totalPageCount="10"
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
      products: []
    };
  },
  mounted() {
    productService.getProducts().then(products => (this.products = products));
  },
  methods: {
    goToPage(pageNumber) {
      alert("go to " + pageNumber);
    }
  }
};
</script>
