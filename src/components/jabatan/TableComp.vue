<template>
  <v-card>
    <v-card-title>
      <div class="text-center mt-4">
        <v-btn rounded color="primary" dark @click="add()">Mapping target jabatan</v-btn>
      </div>
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

      <!--======================================================================================
          MODAL
      ==========================================================================================-->
      <v-dialog v-model="dialog" class="text-center" max-width="500px">
        <v-card class="text-center pb-0">
          <v-card-text class="pb-0">
            <v-container>
              <v-row>
                <v-col cols="12" class="text-center mb-0">
                  <v-text-field
                    outlined
                    color="red"
                    v-model="key_word"
                    class="text--danger-3 mt-3 text-xs-center"
                    label="ketik 'DELETE' untuk melajutkan"
                  ></v-text-field>
                  <v-btn
                    sm
                    outlined
                    color="green darken-1"
                    text
                    @click="closeDialog"
                    >Cancel</v-btn
                  >
                  <v-btn
                    sm
                    outlined
                    color="red darken-1"
                    text
                    @click="deleteJabatan"
                    >Delete</v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card-title>

    <!--======================================================================================
        TABLE 
      ==========================================================================================-->
    <v-data-table
      :headers="headers"
      :items="jabatans"
      :search="search"
      :items-per-page="5"
      :footer-props="footerProps"
    >
      <template v-slot:[`item.kandidat`]="{ item }">
        <div class="p-2">
          {{ item.kandidat.length }}
        </div>
      </template>
      <template v-slot:[`item.penguji`]="{ item }">
        <div class="p-2">
          {{ item.penguji.length }}
        </div>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon color="orange" small class="mr-2" @click="edit(item)">
          mdi-pencil-box
        </v-icon>
        <v-icon color="red" small class="mr-2" @click="openDialog(item)">
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn sm outlined color="indigo" style="border: 0">No data</v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import _ from "lodash";
export default {
  data() {
    return {
      search: "",
      deleteIndex: -1,
      dialog: false,
      isRequest: false,
      jabatans: [],
      jabatan: {},
      key_word: "",

      footerProps: { "items-per-page-options": [10, 20, 50] },
      headers: [
        {
          text: "Target",
          value: "target.nama",
        },
        {
          text: "Tanggal",
          value: "tanggal",
        },
        {
          text: "Kandidat",
          value: "kandidat",
        },
        {
          text: "Penguji",
          value: "penguji",
        },
        { text: "Actions", value: "action", sortable: false },
      ],
    };
  },

  beforeMount() {
    this.getProgress();
  },

  methods: {
    getProgress() {
      let self = this;
      self.$store.dispatch("getJabatanProgress").then((response) => {
        self.jabatans = response.data;
      });
    },

    deleteJabatan() {
      let self = this;
      if (!self.isRequest && self.key_word === "DELETE") {
        self.isRequest = true;

        self.$store
          .dispatch("deleteJabatan", self.jabatan.id)
          .then((response) => {
            self.key_word = "";
            self.deleteCurrentJabatan();
            window.events.$emit("flash", response);
            self.isRequest = false;
            self.closeDialog();
          })
          .catch(() => {
            self.key_word = "";
            self.isRequest = false;
            self.closeDialog();
          });
      }
    },

    deleteCurrentJabatan() {
      let self = this;
      let index = _.findIndex(self.jabatans, function (jabatan) {
        return jabatan.id === self.jabatan.id;
      });

      self.jabatanss.splice(index, 1);
    },

    openDialog(item) {
      this.jabatan = item;
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
'
