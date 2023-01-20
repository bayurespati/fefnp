import axios from "axios";
axios.defaults.baseURL = "http://masterapi.test";

const state = {
  calons: [],
};

const getters = {
  calons(state) {
    return state.calons;
  },
};

const mutations = {};

const actions = {
  getCalons({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("api/tpro/kandidat/calon")
        .then((response) => {
          commit;
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  getPenilaianCalons({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("api/tpro/kandidat/penilaian")
        .then((response) => {
          commit;
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
