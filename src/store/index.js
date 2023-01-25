import Vue from "vue";
import Vuex from "vuex";

import kandidat from "./modules/kandidat";
import target from "./modules/target";
import jabatan from "./modules/jabatan";
import users from "./modules/users";
import penguji from "./modules/penguji";
import penilaian from "./modules/penilaian";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    kandidat,
    target,
    jabatan,
    users,
    penguji,
    penilaian,
  },
});
