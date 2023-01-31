import axios from "../../axiosset";

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
