import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.config.productionTip = false;

window.events = new Vue();

window.flash = function (message, type, duration) {
  window.events.$emit("flash", message, type, duration);
};

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
