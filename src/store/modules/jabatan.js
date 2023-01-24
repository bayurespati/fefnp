import axios from "axios";
axios.defaults.baseURL = "http://masterapi.test";

const state = {
  jabatans: [],
};

const getters = {
  jabatans(state) {
    return state.jabatans;
  },
};

const mutations = {};

const actions = {
  getJabatanProgress({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/jabatan/progress")
        .then((response) => {
          commit;
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  storeJabatan({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/tpro/jabatan", data)
        .then((response) => {
          console.log(response);
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
          console.log(errors);
          reject(errors.response.data.errors);
        });
    });
  },

  editJabatan({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .patch("/api/tpro/target/" + data.id, data)
        .then((response) => {
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  deleteJabatan({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/api/tpro/target/" + data)
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
