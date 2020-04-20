import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import "fullpage.js/vendors/scrolloverflow";
// import "./fullpage.scrollHorizontally.min";
import VueFullPage from "vue-fullpage.js";
import "../node_modules/vue-fullpage.js/dist/vue-fullpage";
Vue.config.productionTip = false;
Vue.use(VueFullPage);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
