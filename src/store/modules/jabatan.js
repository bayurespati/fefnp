import axios from "../../axiosset";

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
  getJabatanProgress({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/jabatan/progress", data)
        .then((response) => {
          commit;
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  getJabatanResume({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/jabatan/resume", data)
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
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
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
        .delete("/api/tpro/jabatan/" + data)
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
