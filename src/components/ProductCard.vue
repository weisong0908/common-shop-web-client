<template>
  <div class="card" style="min-width:250px">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.thumbnailUrl" alt="Product thumbnail image" />
      </figure>
    </div>
    <div class="card-content">
      <p class="has-text-grey is-size-7">{{ product.category }}</p>
      <p class="is-size-4 has-text-weight-bold">{{ product.title }}</p>
      <p class="is-size-6">$ {{ product.price }}</p>
    </div>
    <footer v-if="isPreview === false" class="card-footer">
      <a @click="addToCart(product)" class="card-footer-item">Add to Cart</a>
      <a href="#" class="card-footer-item">Learn More</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ["product", "isPreview"],
  methods: {
    addToCart(product) {
      this.$store.commit("addProductToShoppingCart", product.id);
    }
  }
};
</script>
