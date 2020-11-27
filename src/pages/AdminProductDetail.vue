<template>
  <page title="Edit Product">
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

export default {
  components: {
    Page,
    ProductForm,
    ProductCard
  },
  data() {
    return {
      product: {}
    };
  },
  created() {
    this.product = productService.getProduct(this.$route.params.id);
  }
};
</script>
