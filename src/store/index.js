import Vue from "vue";
import Vuex from "vuex";

import kandidat from "./modules/kandidat";
import target from "./modules/target";
import jabatan from "./modules/jabatan";
import users from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    kandidat,
    target,
    jabatan,
    users
  },
});
