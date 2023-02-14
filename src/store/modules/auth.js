import router from "../../router";
import axios from "../../axiosset";

const state = {
  authenticated: false,
  user: {},
  token: "",
  menu: "",
  position: "",
  select_position: "",
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
  getPosition(state) {
    return state.position;
  },
  getSelectPosition(state) {
    return state.select_position;
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

  SET_POSITION(state, value) {
    state.position = value;
  },

  SET_SELECT_POSITION(state, { _array = null, _object = null }) {
    if (_array == null && _object == null) state.select_position = "";

    if (_array != null) {
      for (var i = 0; i < _array.length; i++) {
        if (_array[i].is_pgs == 0) state.select_position = _array[i];
      }
    }

    if (_object != null) {
      state.select_position = _object;
    }
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
          commit("SET_USER", {});
          commit("SET_TOKEN", null);
          commit("SET_ROLE", null);
          commit("SET_POSITION", null);
          commit("SET_SELECT_POSITION", {
            _array: null,
            _object: null,
          });
          commit("SET_MENU", null);
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
          commit("SET_USER", {});
          commit("SET_TOKEN", null);
          commit("SET_ROLE", null);
          commit("SET_POSITION", null);
          commit("SET_SELECT_POSITION", {
            _array: null,
            _object: null,
          });
          commit("SET_MENU", null);
          reject(errors.response);
        });
    });
  },

  getPosition({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("/api/user/profile/get-position")
        .then((response) => {
          commit("SET_POSITION", response.data.data);
          commit("SET_SELECT_POSITION", {
            _array: response.data.data,
            _object: this.temp_position,
          });
          resolve();
        })
        .catch((errors) => {
          commit("SET_USER", {});
          commit("SET_TOKEN", null);
          commit("SET_ROLE", null);
          commit("SET_POSITION", null);
          commit("SET_SELECT_POSITION", {
            _array: null,
            _object: null,
          });
          commit("SET_MENU", null);
          reject(errors.response);
        });
    });
  },

  logout({ commit }, data) {
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
          commit("SET_POSITION", null);
          commit("SET_SELECT_POSITION", {
            _array: null,
            _object: null,
          });
          commit("SET_MENU", null);
          resolve(response);
          if (data != "Login") router.push({ name: "Login" });
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
