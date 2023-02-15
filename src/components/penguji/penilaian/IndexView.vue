<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="base-title">
            <h2>Penilaian Kandidat</h2>
            <p class="color-sub-title">
              List kandidat yang sudah mendapatkan nilai
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
              :kandidat="kandidat"
            ></show>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import List from "./TableComp.vue";
import Show from "./ShowComp.vue";

export default {
  data() {
    return {
      status: "table",
      kandidat: "",
    };
  },

  components: {
    List,
    Show,
  },

  computed: {
    ...mapGetters({
      select_position: "getSelectPosition",
    }),
  },

  watch: {
    select_position() {
      this.status == "table";
    },
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
      self.kandidat = value;
      setTimeout(function () {
        self.status = "edit";
      }, 300);
    },
  },
};
</script>
