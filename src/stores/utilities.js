export default {
  state: {
    alert: {
      isActive: false,
      type: "",
      heading: "",
      body: ""
    }
  },
  mutations: {
    updateAlert(state, payload) {
      state.alert = { ...payload };
    }
  },
  dispatch: {
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
};
