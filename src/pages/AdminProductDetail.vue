<template>
  <page>
    <breadcrumb></breadcrumb>
    <div v-if="product != {}">
      <div class="columns">
        <div class="column">
          <div class="field">
            <p class="has-text-grey">Product ID: {{ product.id }}</p>
          </div>
          <product-form :product="product"></product-form>
        </div>
        <div class="column">
          <product-card :product="product" :isPreview="true"></product-card>
        </div>
      </div>
    </div>
  </page>
</template>

<script>
import Page from "../components/Page";
import ProductForm from "../components/ProductForm";
import ProductCard from "../components/ProductCard";
import productService from "../services/productService";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  components: {
    Page,
    Breadcrumb,
    ProductForm,
    ProductCard
  },
  data() {
    return {
      product: {}
    };
  },
  created() {
    productService
      .getProduct(this.$route.params.id)
      .then(product => (this.product = product));
  }
};
</script>
