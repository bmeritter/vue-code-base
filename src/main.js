import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "./util/axios.js";

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.prototype.HOST = '/api'

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
