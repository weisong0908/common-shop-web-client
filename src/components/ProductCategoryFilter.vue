<template>
  <aside class="menu">
    <p class="menu-label">
      Category
    </p>
    <ul class="menu-list">
      <li v-for="category in categories" :key="category">
        <a
          :class="selectedCategory === category ? 'is-active' : ''"
          @click="selectCategory(category)"
          >{{ category }}</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
      selectedCategory: ""
    };
  },
  created() {
    this.categories = ["Category 1", "Category 2"];

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
