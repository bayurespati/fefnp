<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="base-title">
            <h2>Manage Penilaian Kandidat</h2>
            <p class="color-sub-title">
              List sejumlah kandidat yang sudah mendapat penilaian
            </p>
          </div>
          <transition name="fade-transition">
            <list
              v-if="status === 'table'"
              @showEdit="showEdit($event)"
              @changeStatus="changeStatus($event)"
            ></list>
            <show
              v-if="status === 'edit'"
              @cancelEdit="changeStatus($event)"
              :calon="calon"
            ></show>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import List from "./TableComp.vue";
import Show from "./ShowComp.vue";
export default {
  data() {
    return {
      status: "table",
      calon: "",
    };
  },

  components: {
    List,
    Show,
  },

  methods: {
    changeStatus(value) {
      this.status = "";
      let self = this;
      setTimeout(function () {
        self.status = value;
      }, 300);
    },

    showEdit(value) {
      let self = this;
      this.status = "";
      self.calon = value;
      setTimeout(function () {
        self.status = "edit";
      }, 300);
    },
  },
};
</script>
