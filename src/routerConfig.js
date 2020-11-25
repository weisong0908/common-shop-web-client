import VueRouter from "vue-router";

import Home from "./pages/Home";

const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "home", path: "/", component: Home },
    { name: "notFound", path: "*", component: Home }
  ]
});

export default router;
