import Router from "vue-router";
import Vue from "vue";

import store from "./store";

import Home from "./components/HomeView.vue";
import Login from "./components/LoginView.vue";
import Kandidat from "./components/kandidat/IndexView.vue";
import Penilaian from "./components/penilaian/IndexView.vue";
import Target from "./components/target/IndexView.vue";
import Jabatan from "./components/jabatan/IndexView.vue";
import Resume from "./components/resume/IndexView.vue";

import PengujiKandidat from "./components/penguji/kandidat/IndexView.vue";
import PengujiPenilaian from "./components/penguji/penilaian/IndexView.vue";

Vue.use(Router);

const router = new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        middleware: "auth",
      },
      children: [
        {
          path: "jabatan",
          name: "Jabatan",
          component: Jabatan,
          meta: { authorize: "TSPRO HCM" },
        },
        {
          path: "kandidat",
          name: "Kandidat",
          component: Kandidat,
          meta: { authorize: "TSPRO HCM" },
        },
        {
          path: "penilaian",
          name: "Penilaian",
          component: Penilaian,
          meta: { authorize: "TSPRO HCM" },
        },
        {
          path: "resume",
          name: "Resume",
          component: Resume,
          meta: { authorize: "TSPRO HCM" },
        },
        {
          path: "target",
          name: "Target",
          component: Target,
          meta: { authorize: "TSPRO HCM" },
        },
        {
          path: "penguji-kandidat",
          name: "Penguji-Kandidat",
          component: PengujiKandidat,
          meta: { authorize: "TSPRO PENGUJI" },
        },
        {
          path: "penguji-penilaian",
          name: "Penguji-penilaian",
          component: PengujiPenilaian,
          meta: { authorize: "TSPRO PENGUJI" },
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: {
        middleware: "guest",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.middleware == "guest") {
    if (store.state.auth.token) {
      next({ name: "Home" });
    }
    next();
  } else {
    if (store.state.auth.token) {
      if (to.meta.authorize == store.state.auth.role.name) {
        next();
      } else {
        if (store.state.auth.role.name == "TSPRO PENGUJI") {
          next({ name: "Penguji-Kandidat" });
        } else {
          next({ name: "Jabatan" });
        }
      }
    } else {
      next({ name: "Login" });
    }
  }
});

export default router;
