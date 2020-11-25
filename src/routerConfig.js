import VueRouter from "vue-router";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import AdminProducts from "./pages/AdminProducts";
import AdminProductDetail from "./pages/AdminProductDetail";
import AdminOrders from "./pages/AdminOrders";

const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "products", path: "/products", component: Products },
    { name: "shoppingCart", path: "/shopping-cart", component: ShoppingCart },
    { name: "checkOut", path: "/check-out", component: CheckOut },
    { name: "orderSuccess", path: "/order-success", component: OrderSuccess },
    { name: "login", path: "/login", component: Login },
    {
      name: "adminProducts",
      path: "/admin/products",
      component: AdminProducts
    },
    {
      name: "adminProductDetail",
      path: "/admin/products/:id",
      component: AdminProductDetail
    },
    { name: "adminOrders", path: "/admin/orders", component: AdminOrders },
    { name: "notFound", path: "*", component: AdminOrders }
  ]
});

export default router;
