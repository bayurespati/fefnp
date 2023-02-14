<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title">Mapping Target</span>
      </v-card-title>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <!--======================================================================================
                TARGET
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="6">
              <v-autocomplete
                @input="$v.model.target.$touch()"
                @blur="$v.model.target.$touch()"
                :error-messages="targetError"
                v-model="model.target"
                :items="targets"
                item-text="nama"
                item-value="id"
                label="Target"
                small-chips
              >
              </v-autocomplete>
            </v-col>

            <!--======================================================================================
                TANGGAL 
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="6">
              <v-menu
                ref="menu"
                :close-on-content-click="false"
                :return-value.sync="model.tanggal"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="model.tanggal"
                    label="Tanggal"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="model.tanggal" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.menu.save(model.tanggal)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>

            <!--======================================================================================
                KANDIDAT 
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="6">
              <v-autocomplete
                v-model="model.kandidat"
                :items="users"
                item-text="name"
                item-value="id"
                label="Kandidat"
                small-chips
                multiple
              >
              </v-autocomplete>
            </v-col>

            <!--======================================================================================
                PENGUJI 
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="6">
              <v-autocomplete
                v-model="model.penguji"
                :items="penguji"
                item-text="user.name"
                item-value="id"
                label="Penguji"
                small-chips
                multiple
              >
                <template v-slot:selection="{ item }">
                  <v-chip>
                    {{ item.user.name }} - {{ item.position.name }}
                  </v-chip>
                </template>
                <template v-slot:item="{ item }">
                  {{ item.user.name }} - {{ item.position.name }}
                </template>
              </v-autocomplete>
            </v-col>

            <!--======================================================================================
                BUTTON
            ==========================================================================================-->
            <v-col cols="12 text-left">
              <v-btn
                rounded
                color="success"
                :loading="isRequest"
                @click="save()"
                >save
              </v-btn>
              <v-btn rounded color="error" class="ml-3" @click="close()">
                cancel
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      model: {
        tanggal: "",
        target: "",
        kandidat: "",
        penguji: "",
        user: "",
      },
      valid: false,
      isRequest: false,
      alert: true,
      users: [],
      penguji: [],
      targets: [],
    };
  },

  validations: {
    model: {
      target: { required },
      tanggal: { required },
      kandidat: { required },
      penguji: { required },
    },
  },

  computed: {
    isValid() {
      return this.targetError.length == 0;
    },

    targetError() {
      const errors = [];
      if (!this.$v.model.target.$dirty) return errors;
      !this.$v.model.target.required &&
        errors.push("Target jabatan harus diisi");
      return errors;
    },
  },

  beforeMount() {
    this.getUsers();
    this.getPenguji();
    this.getTargets();
  },

  methods: {
    getUsers() {
      let self = this;
      self.$store.dispatch("getUsers").then((response) => {
        self.users = response.data;
      });
    },

    getPenguji() {
      let self = this;
      self.$store.dispatch("getRoleUsers").then((response) => {
        self.penguji = response.data;
      });
    },

    getTargets() {
      let self = this;
      self.$store.dispatch("getTargets").then((response) => {
        self.targets = response.data;
      });
    },

    save() {
      this.$v.$touch();
      let self = this;
      if (!self.isRequest && self.isValid) {
        const data = {
          target_id: self.model.target,
          kandidat: self.model.kandidat,
          penguji: self.model.penguji,
          tanggal: self.model.tanggal,
        };

        self.isRequest = true;
        self.$store
          .dispatch("storeJabatan", data)
          .then((response) => {
            self.clearForm();
            window.events.$emit("flash", response);
            self.isRequest = false;
            self.close();
          })
          .catch((errors) => {
            Object.keys(errors).forEach((field) => {
              errors[field].forEach((message) => {
                window.events.$emit("flash", message, "danger", 5000);
              });
              self.isRequest = false;
            });
          });
      }
    },

    clearForm() {
      this.$v.$reset();
      this.model.target = "";
      this.model.kandidat = "";
      this.model.penguji = "";
      this.model.tanggal = "";
    },

    close() {
      this.$emit("cancelAdd", "table");
    },
  },
};
</script>
