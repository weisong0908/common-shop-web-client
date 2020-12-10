import axios from "axios";

export default {
  getOrders() {
    return axios
      .get(`${process.env.VUE_APP_WEBAPI}/orders`)
      .then(resp => resp.data);
  },
  getOrder(id) {
    return axios
      .get(`${process.env.VUE_APP_WEBAPI}/orders/${id}`)
      .then(resp => resp.data);
  }
};
