import axios from "axios";

export default {
  async getProducts() {
    const resp = await axios.get(`${process.env.VUE_APP_WEBAPI}/products`);
    return resp.data;
  },
  async getProduct(id) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products/${id}`
    );
    return resp.data;
  },
  async updateProduct(product) {
    const resp = await axios.put(
      `${process.env.VUE_APP_WEBAPI}/products/${product.id}`,
      product
    );

    return resp.data;
  }
};
