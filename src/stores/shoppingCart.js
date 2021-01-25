export default {
  state: {
    shoppingCart: []
  },
  getters: {
    shoppingCart: state => {
      return state.shoppingCart;
    },
    productCount: (state, getters) => {
      const count = getters.shoppingCart.reduce((pv, cv) => {
        return pv + cv.count;
      }, 0);
      console.log("count", parseInt(count));
      return parseInt(count);
    }
  },
  mutations: {
    addNewProductToShoppingCart(state, productId) {
      state.shoppingCart.push({ id: productId, count: 1 });
    },
    updateProductCountInShoppingCart(state, payload) {
      state.shoppingCart[payload.index].count = payload.count;
    },
    clearShoppingCart(state) {
      state.shoppingCart = [];
    }
  },
  actions: {
    push({ state, commit }, productId) {
      let index = state.shoppingCart.findIndex(p => p.id == productId);

      if (index == -1) commit("addNewProductToShoppingCart", productId);
      else
        commit("updateProductCountInShoppingCart", {
          index,
          count: state.shoppingCart[index].count + 1
        });
    },
    update({ state, commit }, { productId, productCount }) {
      let index = state.shoppingCart.findIndex(p => p.id == productId);

      commit("updateProductCountInShoppingCart", {
        index,
        count: productCount
      });
    },
    clear({ commit }) {
      commit("clearShoppingCart");
    }
  }
};
