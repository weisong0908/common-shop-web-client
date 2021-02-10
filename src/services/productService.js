import axios from "axios";

export default {
  async getProducts(pageSize, pageNumber, category) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products?pageSize=${pageSize}&pageNumber=${pageNumber}&category=${category}`
    );
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
  },

  async createProduct(product) {
    const resp = await axios.post(
      `${process.env.VUE_APP_WEBAPI}/products`,
      product
    );

    return resp.data;
  },

  async removeProduct(id) {
    const resp = await axios.delete(
      `${process.env.VUE_APP_WEBAPI}/products/${id}`
    );
    return resp.data;
  },

  async getProductCategories() {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products/categories`
    );
    return resp.data;
  }
};
