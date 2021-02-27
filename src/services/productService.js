import axios from "axios";
import createAuth0Client from "@auth0/auth0-spa-js";

export default {
  async getHeaders() {
    const auth0 = await createAuth0Client({
      domain: process.env.VUE_APP_AUTH_DOMAIN,
      client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
      audience: process.env.VUE_APP_AUTH_AUDIENCE
    });
    const token = await auth0.getTokenSilently();

    return {
      authorization: "bearer " + token
    };
  },
  async getProducts(pageSize, pageNumber, category) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products?pageSize=${pageSize}&pageNumber=${pageNumber}&category=${category}`,
      {
        headers: await this.getHeaders()
      }
    );
    return resp.data;
  },

  async getProduct(id) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products/${id}`,
      {
        headers: await this.getHeaders()
      }
    );
    return resp.data;
  },

  async updateProduct(product) {
    const resp = await axios.put(
      `${process.env.VUE_APP_WEBAPI}/products/${product.id}`,
      product,
      {
        headers: await this.getHeaders()
      }
    );

    return resp.data;
  },

  async createProduct(product) {
    const resp = await axios.post(
      `${process.env.VUE_APP_WEBAPI}/products`,
      product,
      {
        headers: await this.getHeaders()
      }
    );

    return resp.data;
  },

  async removeProduct(id) {
    const resp = await axios.delete(
      `${process.env.VUE_APP_WEBAPI}/products/${id}`,
      {
        headers: await this.getHeaders()
      }
    );
    return resp.data;
  },

  async getProductCategories() {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products/categories`,
      {
        headers: await this.getHeaders()
      }
    );
    return resp.data;
  }
};
