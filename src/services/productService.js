export default {
  getProducts() {
    return products;
  },
  getProduct(id) {
    return products.filter(p => p.id === id)[0];
  }
};

const products = [
  {
    id: "1",
    title: "Product 1",
    price: 10.0,
    category: "category 1",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "2",
    title: "Product 2",
    price: 10.0,
    category: "category 1",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "3",
    title: "Product 3",
    price: 10.0,
    category: "category 2",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "4",
    title: "Product 4",
    price: 10.0,
    category: "category 2",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  }
];
