import store from "./store";
import Axios from "axios";

const axios = Axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    responseType: "json",
  },
});

if (process.env.VUE_APP_LOCATION == "LOCAL") {
  axios.defaults.baseURL = process.env.VUE_APP_URL_LOCAL;
} else {
  axios.defaults.baseURL = process.env.VUE_APP_URL_SERVER;
}

axios.interceptors.request.use((config) => {
  const token = store.getters.getTokens;

  if (!token) {
    return config;
  }

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default axios;
