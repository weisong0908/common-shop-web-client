import axios from "axios";
import createAuth0Client from "@auth0/auth0-spa-js";

export default {
  async getProducts(pageSize, pageNumber, category) {
    const auth0 = await createAuth0Client({
      domain: process.env.VUE_APP_AUTH_DOMAIN,
      client_id: process.env.VUE_APP_AUTH_CLIENT_ID,
      audience: process.env.VUE_APP_AUTH_AUDIENCE
    });

    const headers = {
      authorization: "bearer " + (await auth0.getTokenSilently())
    };

    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/products?pageSize=${pageSize}&pageNumber=${pageNumber}&category=${category}`,
      {
        headers: headers
      }
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
