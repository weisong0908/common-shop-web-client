import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsInShoppingCart: []
  },
  mutations: {
    addProductToShoppingCart(state, productId) {
      let index = state.productsInShoppingCart.findIndex(
        p => p.id == productId
      );

      if (index == -1) {
        state.productsInShoppingCart.push({ id: productId, count: 1 });
      } else {
        state.productsInShoppingCart[index].count += 1;
      }
    },
    clearShoppingCart(state) {
      state.productsInShoppingCart = [];
    }
  }
});
