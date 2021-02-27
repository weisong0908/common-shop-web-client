import Vue from "vue";
import App from "./App.vue";
import "../node_modules/bulma/css/bulma.css";
import VueRouter from "vue-router";
import routerConfig from "./routerConfig.js";
import Vuex from "vuex";
import store from "./stores/store.js";
import { Auth0Plugin } from "./auth";

Vue.config.productionTip = false;

const domain = process.env.VUE_APP_AUTH_DOMAIN;
const clientId = process.env.VUE_APP_AUTH_CLIENT_ID;
const audience = process.env.VUE_APP_AUTH_AUDIENCE;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    routerConfig.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

global.jQuery = require("jquery");
let $ = global.jQuery;
window.$ = $;

new Vue({
  render: h => h(App),
  router: routerConfig,
  store: store
}).$mount("#app");
