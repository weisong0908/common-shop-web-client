export default {
  getOrders() {
    return orders;
  }
};

const orders = [
  {
    id: 1,
    date: "2020-8-1",
    products: [
      {
        id: 1,
        title: "Product 1",
        count: 1,
        price: 10
      },
      {
        id: 2,
        title: "Product 2",
        count: 3,
        price: 40
      }
    ]
  }
];
