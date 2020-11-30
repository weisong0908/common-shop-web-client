<template>
  <div class="card" style="min-width: 250px">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="product.thumbnailUrl" alt="Product thumbnail image" />
      </figure>
    </div>
    <div class="card-content">
      <p class="has-text-grey is-size-7">{{ product.category }}</p>
      <p class="title is-4">{{ product.title }}</p>
      <p>${{ product.price }}</p>
    </div>
    <footer v-if="isPreview === false" class="card-footer">
      <a @click="addToCart(product)" class="card-footer-item">Add to Cart</a>
      <a @click="showProductModal()" class="card-footer-item">Learn More</a>
    </footer>
    <modal :isActive="isModalShown" @close="isModalShown = false">
      <p class="title is-4">{{ product.title }}</p>
      <p v-if="product.category" class="has-text-grey">
        {{ product.category }}
      </p>
      <figure class="image is-4by3 my-3">
        <img :src="product.thumbnailUrl" alt="Product thumbnail image" />
      </figure>
      <p class="my-3">{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <br />
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" @click="addToCart(product)">
            Add to Cart
          </button>
        </div>
        <div class="control">
          <button class="button" @click="isModalShown = false">Cancel</button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "../components/Modal";

export default {
  props: ["product", "isPreview"],
  components: {
    Modal
  },
  data() {
    return {
      isModalShown: false
    };
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("appendShoppingCart", product.id);
      this.isModalShown = false;
    },
    showProductModal() {
      this.isModalShown = true;
    }
  }
};
</script>
