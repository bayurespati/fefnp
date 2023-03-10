import axios from "../../axiosset";

const state = {
  kandidats: [],
};

const getters = {
  kandidats(state) {
    return state.kandidats;
  },
};

const mutations = {
  set_kandidats: (state, kandidats) => {
    state.kandidats = kandidats;
  },
};

const actions = {
  getKandidats({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/penguji/kandidat", {
          params: { user_role_id: data.user_role_id },
        })
        .then((response) => {
          resolve(response.data);
          commit("set_kandidats", response.data);
        })
        .catch((errors) => {
          reject(errors.response.data.errors);
        });
    });
  },

  getPenilaianKandidat({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/penguji/penilaian-kandidat", {
          params: { user_role_id: data.user_role_id },
        })
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
