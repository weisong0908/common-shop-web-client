import axios from "axios";

export default {
  getProducts() {
    return axios
      .get(`${process.env.VUE_APP_WEBAPI}/products`)
      .then(resp => resp.data);
  },
  getProduct(id) {
    return axios
      .get(`${process.env.VUE_APP_WEBAPI}/products/${id}`)
      .then(resp => resp.data);
  }
};
