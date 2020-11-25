<template>
  <div>
    <div class="field">
      <label for="productTitle" class="label">Title</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-align-left"></i>
        </span>
        <input
          type="text"
          id="productTitle"
          class="input"
          v-model="product.title"
        />
      </div>
    </div>
    <div class="field">
      <label for="productPrice" class="label">Price</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-dollar-sign"></i>
        </span>
        <input
          type="number"
          min="0"
          step="0.01"
          id="productPrice"
          class="input"
          v-model="product.price"
        />
      </div>
    </div>
    <div class="field">
      <label for="productCategory" class="label">Category</label>
      <div class="control">
        <div class="select">
          <select v-model="product.category">
            <option>Select dropdown</option>
            <option value="category 1">Category 1</option>
            <option value="category 2">Category 2</option>
          </select>
        </div>
      </div>
    </div>
    <div class="field">
      <label for="productThumbnailUrl" class="label">ThumbnailUrl</label>
      <div class="control has-icons-left">
        <span class="icon is-small is-left">
          <i class="fas fa-globe"></i>
        </span>
        <input
          type="text"
          id="productThumbnailUrl"
          class="input"
          v-model="product.thumbnailUrl"
        />
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary">Save</button>
      </div>
      <div class="control">
        <button class="button is-danger">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>
