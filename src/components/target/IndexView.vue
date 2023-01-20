<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <div class="base-title">
            <h2>Manage Target</h2>
            <p class="color-sub-title">Halaman untuk master target jabatan</p>
          </div>
          <transition name="fade-transition">
            <list
              v-if="status === 'table'"
              @showEdit="showEdit($event)"
              @changeStatus="changeStatus($event)"
            ></list>
            <add
              v-if="status === 'add'"
              @cancelAdd="changeStatus($event)"
            ></add>
            <edit
              v-if="status === 'edit'"
              @cancelEdit="changeStatus($event)"
              :target="target"
            ></edit>
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import List from "./TableComp.vue";
import Edit from "./EditComp.vue";
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
      self.target = value;
      setTimeout(function () {
        self.status = "edit";
      }, 300);
    },
  },
};
</script>
