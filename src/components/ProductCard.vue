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
      <p class="is-size-6">${{ product.price }}</p>
    </div>
    <footer v-if="isPreview === false" class="card-footer">
      <a @click="addToCart(product)" class="card-footer-item">Add to Cart</a>
      <a @click="showProductModal()" class="card-footer-item">Learn More</a>
    </footer>
    <div :class="isShowModal ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="isShowModal = false"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ product.title }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="isShowModal = false"
          ></button>
        </header>
        <section class="modal-card-body">
          <p>{{ product.category }}</p>
          <figure class="image is-4by3 my-3">
            <img :src="product.thumbnailUrl" alt="Product thumbnail image" />
          </figure>
          <p class="my-3">{{ product.description }}</p>
          <p>${{ product.price }}</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-primary" @click="addToCart(product)">
            Add to Cart
          </button>
          <button class="button" @click="isShowModal = false">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "isPreview"],
  data() {
    return {
      isShowModal: false
    };
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addProductToShoppingCart", product.id);
      this.isShowModal = false;
    },
    showProductModal() {
      this.isShowModal = true;
    }
  }
};
</script>
