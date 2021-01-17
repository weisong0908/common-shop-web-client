import axios from "axios";

export default {
  async getOrders() {
    const resp = await axios.get(`${process.env.VUE_APP_WEBAPI}/orders`);
    return resp.data;
  },
  async getOrdersForAdmin() {
    const resp = await axios.get(`${process.env.VUE_APP_WEBAPI}/orders/admin`);
    return resp.data;
  },
  async getOrder(id) {
    const resp = await axios.get(`${process.env.VUE_APP_WEBAPI}/orders/${id}`);
    return resp.data;
  }
};
