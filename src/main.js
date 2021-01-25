import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.css";
import VueRouter from "vue-router";
import routerConfig from "./routerConfig.js";
import Vuex from "vuex";
import store from "./stores/store.js";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

global.jQuery = require("jquery");
let $ = global.jQuery;
window.$ = $;

new Vue({
  render: h => h(App),
  router: routerConfig,
  store: store
}).$mount("#app");
