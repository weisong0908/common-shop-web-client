<template>
  <aside class="menu">
    <p class="menu-label">
      Category
    </p>
    <ul class="menu-list">
      <li v-for="category in categories" :key="category.id">
        <a
          :class="selectedCategory === category ? 'is-active' : ''"
          @click="selectCategory(category.title)"
          >{{ category.title }}</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
import productService from "../services/productService";

export default {
  data() {
    return {
      categories: [],
      selectedCategory: ""
    };
  },
  created() {
    productService.getProductCategories().then(productCategories => {
      this.categories = productCategories;
    });

    const categoryQuery = this.$route.query.category;
    if (categoryQuery != "" && this.categories.includes(categoryQuery)) {
      this.selectedCategory = categoryQuery;
    }
  },
  methods: {
    selectCategory(category) {
      if (this.selectedCategory === category) return;
      this.selectedCategory = category;
      this.$router.push({
        name: "products",
        query: { category: this.selectedCategory }
      });
    }
  }
};
</script>
