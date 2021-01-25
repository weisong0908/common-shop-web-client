import Vue from "vue";
import Vuex from "vuex";
import shoppingCart from "./shoppingCart.js";
import utilities from "./utilities.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shoppingCart: {
      namespaced: true,
      ...shoppingCart
    },
    utilities: {
      namespaced: true,
      ...utilities
    }
  }
});

// export default new Vuex.Store({
//   state: {
//     shoppingCart: [],
//     order: {
//       products: [],
//       totalPrice: "",
//       customer: {}
//     },
//     alert: {
//       isActive: false,
//       type: "",
//       heading: "",
//       body: ""
//     }
//   },
//   mutations: {
//     //Shopping cart
//     addNewProductToShoppingCart(state, productId) {
//       state.shoppingCart.push({ id: productId, count: 1 });
//     },
//     updateProductCountInShoppingCart(state, payload) {
//       state.shoppingCart[payload.index].count = payload.count;
//     },
//     clearShoppingCart(state) {
//       state.shoppingCart = [];
//     },
//     //order
//     addProductsToOrder(state, products) {
//       state.order.products = [...products];
//     },
//     addTotalPriceToOrder(state, totalPrice) {
//       state.order.totalPrice = totalPrice;
//     },
//     addCustomerToOrder(state, customer) {
//       state.order.customer = { ...customer };
//     },
//     removeProductsFromOrder(state) {
//       state.order.products = [];
//     },
//     removeTotalPriceFromOrder(state) {
//       state.order.totalPrice = "";
//     },
//     removeCustomersFromOrder(state) {
//       state.order.customer = {};
//     },
//     //common
//     updateAlert(state, payload) {
//       state.alert = { ...payload };
//     }
//   },
//   actions: {
//     //shopping cart
//     addToShoppingCart({ state, commit }, productId) {
//       let index = state.shoppingCart.findIndex(p => p.id == productId);

//       if (index == -1) commit("addNewProductToShoppingCart", productId);
//       else
//         commit("updateProductCountInShoppingCart", {
//           index,
//           count: state.shoppingCart[index].count + 1
//         });
//     },
//     updateShoppingCart({ state, commit }, { productId, productCount }) {
//       let index = state.shoppingCart.findIndex(p => p.id == productId);

//       commit("updateProductCountInShoppingCart", {
//         index,
//         count: productCount
//       });
//     },
//     clearShoppingCart({ commit }) {
//       commit("clearShoppingCart");
//     },
//     //order
//     createOrder({ commit }, order) {
//       commit("addProductsToOrder", order.products);
//       commit("addTotalPriceToOrder", order.totalPrice);
//     },
//     placeOrder({ commit }, customer) {
//       commit("addCustomerToOrder", customer);
//     },
//     clearOrder({ commit }) {
//       commit("removeProductsFromOrder");
//       commit("removeTotalPriceFromOrder");
//       commit("removeCustomersFromOrder");
//     },
//     //common
//     showAlert({ commit }, alert) {
//       commit("updateAlert", { isActive: true, ...alert });
//     },
//     hideAlert({ commit }) {
//       commit("updateAlert", {
//         isActive: false,
//         type: "",
//         heading: "",
//         message: ""
//       });
//     }
//   }
// });
