import Router from "vue-router";
import Vue from "vue";

import Home from "./components/HomeView.vue";
import Kandidat from "./components/kandidat/IndexView.vue";
import Penilaian from "./components/penilaian/IndexView.vue";
import Target from "./components/target/IndexView.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      children: [
        {
          path: "kandidat",
          name: "Kandidat",
          component: Kandidat,
        },
        {
          path: "penilaian",
          name: "Penilaian",
          component: Penilaian,
        },
        {
          path: "target",
          name: "Target",
          component: Target,
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Home,
    },
  ],
});

export default router;
