<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="base-title">
          <h2>Manage Kandidat</h2>
          <p class="color-sub-title">List sejumlah kandidat</p>
        </div>
        <transition name="fade-transition">
          <list
            v-if="status === 'table'"
            @showEdit="showEdit($event)"
            @changeStatus="changeStatus($event)"
          ></list>
          <add v-if="status === 'add'" @cancelAdd="changeStatus($event)"></add>
          <edit
            v-if="status === 'edit'"
            @cancelEdit="changeStatus($event)"
            :calon="calon"
          ></edit>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "./TableComp.vue";
import Edit from "./EditComp.vue";
import Add from "./AddComp.vue";
export default {
  data() {
    return {
      status: "table",
      calon: "",
    };
  },

  components: {
    List,
    Edit,
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
