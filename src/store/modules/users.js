import axios from "../../axiosset";

const state = {
  users: [],
};

const getters = {
  users(state) {
    return state.users;
  },
};

const mutations = {
  set_users: (state, users) => {
    state.users = users;
  },
};

const actions = {
  getUsers({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/cms/user/get")
        .then((response) => {
          resolve(response.data);
          commit("set_users", response.data.data);
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
