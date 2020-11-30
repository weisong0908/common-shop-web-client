import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsInShoppingCart: [],
    order: {
      products: [],
      totalPrice: "",
      customer: {}
    },
    alert: {
      isActive: false,
      type: "",
      heading: "",
      body: ""
    }
  },
  mutations: {
    addNewProductInShoppingCart(state, productId) {
      state.productsInShoppingCart.push({ id: productId, count: 1 });
    },
    increaseProductCountInShoppingCart(state, index) {
      state.productsInShoppingCart[index].count += 1;
    },
    clearShoppingCart(state) {
      state.productsInShoppingCart = [];
    },
    addProductsToOrder(state, products) {
      state.order.products = [...products];
    },
    addTotalPriceToOrder(state, totalPrice) {
      state.order.totalPrice = totalPrice;
    },
    addCustomerToOrder(state, customer) {
      state.order.customer = { ...customer };
    },
    removeProductsFromOrder(state) {
      state.order.products = [];
    },
    removeTotalPriceFromOrder(state) {
      state.order.totalPrice = "";
    },
    removeCustomersFromOrder(state) {
      state.order.customer = {};
    },
    updateAlert(state, payload) {
      state.alert = { ...payload };
    }
  },
  actions: {
    appendShoppingCart({ state, commit }, productId) {
      let index = state.productsInShoppingCart.findIndex(
        p => p.id == productId
      );

      if (index == -1) commit("addNewProductInShoppingCart", productId);
      else commit("increaseProductCountInShoppingCart", index);
    },
    clearShoppingCart({ commit }) {
      commit("clearShoppingCart");
    },
    createOrder({ commit }, order) {
      commit("addProductsToOrder", order.products);
      commit("addTotalPriceToOrder", order.totalPrice);
    },
    placeOrder({ commit }, customer) {
      commit("addCustomerToOrder", customer);
    },
    clearOrder({ commit }) {
      commit("removeProductsFromOrder");
      commit("removeTotalPriceFromOrder");
      commit("removeCustomersFromOrder");
    },
    showAlert({ commit }, alert) {
      commit("updateAlert", { isActive: true, ...alert });
    },
    hideAlert({ commit }) {
      commit("updateAlert", {
        isActive: false,
        type: "",
        heading: "",
        message: ""
      });
    }
  }
});
