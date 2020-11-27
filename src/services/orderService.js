export default {
  getOrders() {
    return orders;
  }
};

const orders = [
  {
    id: 1,
    date: "2020-8-1",
    totalPrice: 40,
    products: [
      {
        id: 1,
        title: "Product 1",
        count: 1,
        unitPrice: 10,
        price: 10
      },
      {
        id: 2,
        title: "Product 2",
        count: 3,
        unitPrice: 10,
        price: 30
      }
    ],
    customer: {
      name: "Customer 1",
      email: "email@example.com",
      address: {
        line1: "address 1",
        line2: "address 2",
        postalCode: "123456"
      }
    }
  }
];
