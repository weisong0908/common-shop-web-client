<template>
  <div>
    <div class="card">
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
        <a href="#" class="card-footer-item"><strong>Add to Cart</strong></a>
        <a href="#" class="card-footer-item">Learn More</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "isPreview"]
};
</script>
