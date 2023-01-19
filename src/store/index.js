import Vue from "vue";
import Vuex from "vuex";

import kandidat from "./modules/kandidat";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    kandidat,
  },
});
