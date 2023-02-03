<template>
  <v-card>
    <v-card-title>
      <div class="text-center mt-4"></div>
      <!--======================================================================================
          SEARCH 
      ==========================================================================================-->
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <!--======================================================================================
        TABLE 
      ==========================================================================================-->
    <v-data-table
      :headers="headers"
      :items="calons"
      :search="search"
      :items-per-page="5"
      :footer-props="footerProps"
    >
      <template v-slot:[`item.action`]="{ item }">
        <v-icon color="green" small class="mr-2" @click="edit(item)">
          mdi-eye
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn sm outlined color="indigo" style="border: 0">No data</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      deleteIndex: -1,
      dialog: false,
      isRequest: false,
      calons: [],
      calon: {},
      key_word: "",

      footerProps: { "items-per-page-options": [10, 20, 50] },
      headers: [
        { text: "NIK", align: "left", value: "user.nik" },
        { text: "Nama", align: "left", value: "user.name" },
        { text: "Posisi", value: "user.role.position.name" },
        { text: "Target", value: "jabatan.target.nama" },
        { text: "Actions", value: "action", sortable: false },
      ],
    };
  },

  beforeMount() {
    this.getCalons();
  },

  methods: {
    getCalons() {
      let self = this;
      self.$store.dispatch("getCalons").then((response) => {
        self.calons = response.data;
      });
    },

    openDialog(item) {
      this.calon = item;
      this.dialog = true;
    },

    closeDialog() {
      this.key_word = "";
      this.dialog = false;
    },

    add() {
      this.$emit("changeStatus", "add");
    },

    edit(item) {
      this.$emit("showEdit", item);
    },
  },
};
</script>
