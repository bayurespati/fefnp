import router from "../../router";
import axios from "../../axiosset";

const state = {
  authenticated: false,
  user: {},
  token: "",
  menu: "",
  role: null,
};

const getters = {
  authenticated(state) {
    return state.authenticated;
  },
  getUser(state) {
    return state.user;
  },
  getTokens(state) {
    return state.token;
  },
  getRole(state) {
    return state.role;
  },
};

const mutations = {
  SET_USER(state, value) {
    state.user = value;
  },

  SET_TOKEN(state, value) {
    state.token = value;
  },

  SET_MENU(state, value) {
    state.menu = value;
  },

  SET_ROLE(state, value) {
    state.role = value;
  },
};

const actions = {
  login({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/auth/token/request", data)
        .then((response) => {
          response;
          commit;
          commit("SET_TOKEN", response.data.data.access_token);
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response);
        });
    });
  },

  getMenu({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/menu")
        .then((response) => {
          commit("SET_MENU", response.data);
          resolve(response);
        })
        .catch((errors) => {
          reject(errors.response);
        });
    });
  },

  getRole({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/tpro/role")
        .then((response) => {
          commit;
          if (Object.keys(response.data).length == 0) {
            commit("SET_USER", {});
            commit("SET_TOKEN", null);
            commit("SET_ROLE", null);
            commit("SET_MENU", null);
            resolve("Abort");
          } else {
            commit("SET_ROLE", response.data);

            if (response.data.name == "TSPRO HCM") {
              router.push({ name: "Jabatan" });
            } else {
              router.push({ name: "Penguji-Kandidat" });
            }
            resolve(response);
          }
        })
        .catch((errors) => {
          reject(errors.response);
        });
    });
  },

  getUser({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/user/profile/get")
        .then((response) => {
          commit("SET_USER", response.data.data);
          resolve();
        })
        .catch((errors) => {
          reject(errors.response);
        });
    });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/auth/token/revoke", {
          headers: {
            Authorization: "Bearer " + state.token,
          },
        })
        .then((response) => {
          commit("SET_USER", {});
          commit("SET_TOKEN", null);
          commit("SET_ROLE", null);
          commit("SET_MENU", null);
          resolve(response);
          router.push({ name: "Login" });
        })
        .catch((errors) => {
          if (errors.response.data.message == "Unauthenticated.") {
            commit("SET_USER", {});
            commit("SET_TOKEN", null);
            router.push({ name: "Login" });
          }
          reject(errors.response);
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
