export default {
  state: {
    order: {}
  },
  getters: {
    order: state => {
      return state.order;
    }
  },
  mutations: {
    setOrderStatus(state, orderStatus) {
      state.order.orderStatus = orderStatus;
    },
    setCustomer(state, customer) {
      state.order.customer = { ...customer };
    },
    setDate(state, date) {
      state.order.date = date;
    },
    setFees(state, fees) {
      state.order.fees = { ...fees };
    },
    setTotalPrice(state, totalPrice) {
      state.order.totalPrice = totalPrice;
    },
    setProducts(state, products) {
      state.order.products = [...products];
    }
  },
  actions: {
    reset({ state }) {
      state.order = {};
    },
    createNew({ commit }, order) {
      commit("setOrderStatus", "New");
      commit("setCustomer", order.customer);
      commit("setDate", order.date);
      commit("setFees", order.fees);
      commit("setTotalPrice", order.totalPrice);
      commit("setProducts", order.products);
    }
  }
};
