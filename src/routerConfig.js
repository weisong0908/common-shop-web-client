import VueRouter from "vue-router";
import { authGuard } from "./auth/authGuard";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import OrderSuccess from "./pages/OrderSuccess";
import MyOrders from "./pages/MyOrders";
import Login from "./pages/Login";
import AdminProducts from "./pages/AdminProducts";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProductDetail from "./pages/AdminProductDetail";
import AdminOrders from "./pages/AdminOrders";
import AdminOrderDetail from "./pages/AdminOrderDetail";

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
      title: "Welcome to Common Shop"
    },
    {
      name: "profile",
      path: "/profile",
      component: Profile,
      title: "Profile",
      beforeEnter: authGuard
    },
    {
      name: "products",
      path: "/products",
      component: Products,
      title: "Explore Our Products"
    },
    {
      name: "shoppingCart",
      path: "/shopping-cart",
      component: ShoppingCart,
      title: "Shopping Cart"
    },
    {
      name: "checkOut",
      path: "/check-out",
      component: CheckOut,
      title: "Check Out"
    },
    {
      name: "orderSuccess",
      path: "/order-success",
      component: OrderSuccess,
      title: "Order Is Successful"
    },
    {
      name: "myOrders",
      path: "/my/orders",
      component: MyOrders,
      title: "My Orders"
    },
    { name: "login", path: "/login", component: Login, title: "Login" },
    {
      name: "adminProducts",
      path: "/admin/products",
      component: AdminProducts,
      title: "Manage Products",
      parent: "adminDashboard"
    },
    {
      name: "adminUpdateProductDetail",
      path: "/admin/products/edit",
      component: AdminProductDetail,
      title: "Product Detail",
      parent: "adminProducts"
    },
    {
      name: "adminCreateProductDetail",
      path: "/admin/products/create",
      component: AdminProductDetail,
      title: "Product Detail",
      parent: "adminProducts"
    },
    {
      name: "adminOrders",
      path: "/admin/orders",
      component: AdminOrders,
      title: "Manage Orders",
      parent: "adminDashboard"
    },
    {
      name: "adminOrderDetail",
      path: "/admin/orders/:id",
      component: AdminOrderDetail,
      title: "Order Detail",
      parent: "adminOrders"
    },
    {
      name: "adminDashboard",
      path: "/admin",
      component: AdminDashboard,
      title: "Administator Dashboard"
    },
    { name: "notFound", path: "*", redirect: "/" }
  ]
});

export default router;
