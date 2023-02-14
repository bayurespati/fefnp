<template>
  <v-app id="inspire">
    <nav>
      <v-navigation-drawer
        v-model="drawer"
        class="blue-grey lighten-2"
        app
        dark
      >
        <v-layout column align-center class="mt-5">
          <v-avatar size="100">
            <img src="image/round-logo-pins.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">PINS INDONESIA</p>
        </v-layout>

        <v-list dense rounded>
          <template v-for="(item, index) in menus">
            <v-list-group
              v-if="item.children"
              :prepend-icon="item.parent_icon"
              :key="index"
            >
              <template v-slot:activator>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </template>

              <v-list-item
                sub-group
                v-for="(child, i) in item.children"
                :to="child.link"
                :key="i"
                link
              >
                <v-list-item-icon></v-list-item-icon>
                <v-list-item-title v-text="child.text"></v-list-item-title>
              </v-list-item>
            </v-list-group>

            <v-list-item
              v-else
              :key="item.text"
              router
              :to="item.link"
              active-class="active-color"
            >
              <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app dense color="white">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title>
          <span class="font-weight-light">
            {{ user.name }}
          </span>
          -
          <span class="font-weight-light">
            {{ select_position.position.name }}
          </span>
        </v-toolbar-title>

        <v-tooltip bottom v-if="position.length > 1">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" @click="dialog = !dialog">
              <v-icon color="blue"> mdi-account-settings </v-icon>
            </v-btn>
          </template>
          <span>Pilih Jabatan</span>
        </v-tooltip>
        <v-spacer></v-spacer>
        <v-btn color="gray" @click="logout">
          <span> Sign Out </span>
          <v-icon right>mdi-logout-variant</v-icon>
        </v-btn>
      </v-app-bar>
    </nav>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <div style="margin-top: 100px">
      <flash></flash>
    </div>
    <!--======================================================================================
          MODAL
      ==========================================================================================-->
    <v-dialog v-model="dialog" class="text-center" max-width="500px">
      <v-card class="text-center pb-0">
        <v-card-text class="pb-0">
          <v-container>
            <v-row>
              <v-col cols="12" class="text-center mb-0">
                <v-select
                  :items="position"
                  item-text="position.name"
                  v-model="temp_position"
                  return-object
                  label="Jabatan"
                  outlined
                ></v-select>
                <v-btn
                  color="green darken-1"
                  @click="setPosition()"
                  outlined
                  text
                  sm
                >
                  <v-tooltip activator="parent" location="bottom">
                    <span> Pilih Jabatan </span>
                  </v-tooltip>
                  Pilih
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import Flash from "../components/global/FlashView.vue";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    drawer: null,
    dialog: false,
    temp_position: "",
    hr: [
      {
        icon: "mdi-18px mdi-crown",
        text: "Jabatan",
        link: "/jabatan",
        permission: [1, 2],
      },
      {
        icon: "mdi-18px mdi-clipboard-account",
        text: "Kandidat",
        link: "/kandidat",
        permission: [1, 2],
      },
      {
        icon: "mdi-18px mdi-account-check",
        text: "Penilaian",
        link: "/penilaian",
        permission: [1, 2],
      },
      {
        icon: "mdi-18px mdi-clipboard-text",
        text: "Resume",
        link: "/resume",
        permission: [1, 2],
      },
      {
        icon: "mdi-18px mdi-target",
        text: "Target",
        link: "/target",
        permission: [1, 2],
      },
    ],

    penilai: [
      {
        icon: "mdi-18px mdi-clipboard-account",
        text: "Kandidat",
        link: "/penguji-kandidat",
        permission: [1, 2],
      },
      {
        icon: "mdi-18px mdi-account-check",
        text: "Penilaian",
        link: "/penguji-penilaian",
        permission: [1, 2],
      },
    ],
  }),

  components: {
    Flash,
  },

  filters: {
    inisial: function (data) {
      if (data != undefined) return "Halo, " + data.split(" ")[0];
    },
  },

  computed: {
    ...mapGetters({
      user: "getUser",
      role: "getRole",
      position: "getPosition",
      select_position: "getSelectPosition",
    }),

    menus() {
      if (this.role == null) {
        return [];
      } else {
        return this.role.name == "TSPRO HCM" ? this.hr : this.penilai;
      }
    },
  },

  methods: {
    isHasPermision(item) {
      if (this.user.role_id != undefined)
        return item.permission.includes(this.user.role_id);
    },

    closeDialog() {
      this.dialog = false;
    },

    setPosition() {
      this.$store.commit("SET_SELECT_POSITION", {
        _array: null,
        _object: this.temp_position,
      });
      this.dialog = false;
    },

    logout() {
      this.$store
        .dispatch("logout")
        .then((response) => {
          response;
        })
        .catch((errors) => {
          errors;
        });
    },
  },
};
</script>

<style type="text/css">
.baseColor {
  color: #32c36c;
}
.mdi-chevron-up::before {
  content: "\F143";
  color: white;
}

.mdi-chevron-down::before {
  content: "\F140";
  color: white;
}

.mdi-format-page-break::before {
  content: "\F6D6";
  color: white;
}

.color-sub-title {
  color: #3490dc;
}
</style>

<style scoped>
.active-color {
  color: white;
}

.v-list-item__title {
  color: white;
}

a:hover {
  text-decoration: none;
}
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.6s ease;
  transition: opacity 0.6s;
}

.slide-leave-active {
  animation: slide-out 0.6s ease forwards;
  transition: opacity 0.6s;
  opacity: 0;
  position: absolute;
  width: 100%;
}

.slide-move {
  transition: transform 0.6s;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    background-color: white;
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
