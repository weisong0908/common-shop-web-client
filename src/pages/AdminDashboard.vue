<template>
  <page title="Administator Dashboard">
    <p class="title is-size-4 has-text-centered">Overview</p>
    <nav class="level p-3">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Products Available</p>
          <router-link :to="{ name: 'adminProducts' }">
            <p class="title">3,456</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Orders Made</p>
          <router-link :to="{ name: 'adminOrders' }">
            <p class="title">3,456</p>
          </router-link>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Users Registered</p>
          <p class="title">456</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Issues Reported</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>
  </page>
</template>

<script>
import Page from "../components/Page";

export default {
  components: {
    Page
  }
};
</script>
