import axios from "../../axiosset";

const state = {
  targets: [],
};

const getters = {
  targets(state) {
    return state.targets;
  },
};

const mutations = {};

const actions = {
  getTargets({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/target")
        .then((response) => {
          commit;
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  storeTarget({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/tpro/target", data)
        .then((response) => {
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  editTarget({ commit }, data) {
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

  deleteTarget({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .delete("/api/tpro/target/" + data)
        .then((response) => {
          commit;
          resolve(response.data);
        })
        .catch((errors) => {
          reject(errors.response.data);
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
