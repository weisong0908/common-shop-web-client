<template>
  <div class="card" style="min-width:250px">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.thumbnailUrl" alt="Product thumbnail image" />
      </figure>
    </div>
    <div class="card-content">
      <h2 class="title is-4">{{ product.title }}</h2>
      <p>
        <strong> $ {{ product.price }} </strong>
      </p>
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
      this.$store.commit("addCount", 1);
      this.$store.commit("addProductToShoppingCart", product.id);
    }
  }
};
</script>
