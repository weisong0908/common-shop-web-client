<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'home' }" class="navbar-item">
        <img src="../assets/logo.png" />
      </router-link>

      <a
        role="button"
        :class="
          isNavbarBurgerMenuActive
            ? 'navbar-burger burger is-active'
            : 'navbar-burger burger'
        "
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
        @click="isNavbarBurgerMenuActive = !isNavbarBurgerMenuActive"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarMenu"
      :class="
        isNavbarBurgerMenuActive ? 'navbar-menu is-active' : 'navbar-menu'
      "
      @click="isNavbarBurgerMenuActive = false"
    >
      <div class="navbar-start">
        <router-link
          class="navbar-item"
          active-class="has-background-white-bis"
          v-for="page in pages"
          :to="{ name: page.name }"
          :key="page.title"
        >
          {{ page.title }}
          <span
            v-if="page.name == 'shoppingCart'"
            class="tag is-rounded is-warning mx-1"
          >
            {{ productCountInShoppingCart }}
          </span>
        </router-link>
      </div>

      <div class="navbar-end">
        <div
          class="navbar-item has-dropdown is-hoverable"
          v-if="!$auth.loading && $auth.isAuthenticated"
        >
          <a class="navbar-link"> Hi {{ $auth.user.nickname }}! </a>
          <div class="navbar-dropdown">
            <router-link class="navbar-item" :to="{ name: 'profile' }">
              Profile
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'myOrders' }">
              My Orders
            </router-link>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
            <hr class="navbar-divider" />
            <div class="navbar-item has-text-info is-size-7">Adminstration</div>
            <router-link class="navbar-item" :to="{ name: 'adminDashboard' }">
              Dashboard
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'adminProducts' }">
              Manage Products
            </router-link>
            <router-link class="navbar-item" :to="{ name: 'adminOrders' }">
              Manage Orders
            </router-link>
          </div>
        </div>
        <div class="navbar-item" v-if="!$auth.loading">
          <div class="buttons">
            <a class="button is-primary" v-if="!$auth.isAuthenticated">
              <strong>Sign up</strong>
            </a>
            <a
              class="button is-light"
              v-if="$auth.isAuthenticated"
              @click="logout"
            >
              Log out
            </a>
            <a
              class="button is-light"
              v-if="!$auth.isAuthenticated"
              @click="login"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarBurgerMenuActive: false,
      pages: [
        {
          title: "Products",
          name: "products"
        },
        {
          title: "Shopping Cart",
          name: "shoppingCart"
        }
      ]
    };
  },
  computed: {
    productCountInShoppingCart() {
      return this.$store.getters["shoppingCart/productCount"];
    }
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
