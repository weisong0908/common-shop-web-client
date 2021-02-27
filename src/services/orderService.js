import axios from "axios";

export default {
  async getOrders(pageSize, pageNumber) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/orders?pageSize=${pageSize}&pageNumber=${pageNumber}`
    );
    return resp.data;
  },
  async getOrdersForAdmin(pageSize, pageNumber) {
    const resp = await axios.get(
      `${process.env.VUE_APP_WEBAPI}/orders/admin?pageSize=${pageSize}&pageNumber=${pageNumber}`
    );
    return resp.data;
  },
  async getOrder(id) {
    const resp = await axios.get(`${process.env.VUE_APP_WEBAPI}/orders/${id}`);
    return resp.data;
  }
};
