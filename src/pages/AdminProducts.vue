<template>
  <page title="Manage Products">
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
    <nav class="pagination" role="navigation" aria-label="pagination">
      <a class="pagination-previous">Previous</a>
      <a class="pagination-next">Next page</a>
      <ul class="pagination-list">
        <li>
          <a class="pagination-link" aria-label="Goto page 1">1</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 45">45</a>
        </li>
        <li>
          <a
            class="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
            >46</a
          >
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 47">47</a>
        </li>
        <li>
          <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a class="pagination-link" aria-label="Goto page 86">86</a>
        </li>
      </ul>
    </nav>
  </page>
</template>

<script>
import Page from "../components/Page";

import productService from "../services/productService";

export default {
  components: {
    Page
  },
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
