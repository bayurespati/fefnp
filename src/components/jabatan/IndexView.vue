<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="base-title">
            <h2>Manage Target Jabatan</h2>
            <p class="color-sub-title">Halaman untuk mapping target jabatan</p>
          </div>
          <transition name="fade-transition">
            <list
              v-if="status === 'table'"
              @showView="show($event)"
              @changeStatus="changeStatus($event)"
            ></list>
            <add
              v-if="status === 'add'"
              @cancelAdd="changeStatus($event)"
            ></add>
            <show
              v-if="status === 'show'"
              @cancelShow="changeStatus($event)"
              :target="target"
            ></show>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import List from "./TableComp.vue";
import Show from "./ShowView.vue";
import Add from "./AddComp.vue";

export default {
  data() {
    return {
      status: "table",
      target: "",
    };
  },

  components: {
    List,
    Show,
    Add,
  },

  methods: {
    changeStatus(value) {
      this.status = "";
      let self = this;
      setTimeout(function () {
        self.status = value;
      }, 300);
    },

    show(value) {
      let self = this;
      this.status = "";
      self.target = value;
      setTimeout(function () {
        self.status = "show";
      }, 300);
    },
  },
};
</script>
