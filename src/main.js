import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.css";
import VueRouter from "vue-router";
import routerConfig from "./routerConfig.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: routerConfig
}).$mount("#app");
