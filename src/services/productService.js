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
    description: "some description",
    price: 10.0,
    category: "Category 1",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "2",
    title: "Product 2",
    description: "some description",
    price: 10.0,
    category: "Category 1",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "3",
    title: "Product 3",
    description: "some description",
    price: 10.0,
    category: "Category 2",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  },
  {
    id: "4",
    title: "Product 4",
    description: "some description",
    price: 10.0,
    category: "Category 2",
    thumbnailUrl: "https://bulma.io/images/placeholders/640x480.png"
  }
];
