import axios from "axios";
axios.defaults.baseURL = "http://masterapi.test";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  storePenilaian({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/tpro/penilaian", data)
        .then((response) => {
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
          console.log(errors);
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
