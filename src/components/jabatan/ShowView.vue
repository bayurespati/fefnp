<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title">{{ target.target.nama }}</span>
        <v-spacer></v-spacer>
        <v-btn rounded color="success" dark @click="close()"> BACK </v-btn>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col cols="6" xs="6" md="6">
            <v-card-title> Kandidat </v-card-title>
            <v-card
              outlined
              v-for="(kandidat, index) in target.kandidat"
              :key="index"
              class="mb-5"
            >
              <v-row>
                <v-col cols="2">
                  <v-layout column align-center class="mr-0 p-0">
                    <v-avatar
                      color="indigo"
                      size="60"
                      align-center
                      class="mt-2"
                    >
                      <img
                        :src="
                          kandidat.user.image
                            ? kandidat.user.image.link
                            : 'image/round-logo-pins.png'
                        "
                        alt=""
                      />
                    </v-avatar>
                  </v-layout>
                </v-col>
                <v-col cols="10" class="pl-0">
                  <v-card-subtitle class="pl-0">
                    <span style="font-weight: bold">
                      {{ kandidat.user.name }}
                      <br />
                    </span>
                    {{ kandidat.user.role.position.name }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col cols="6" xs="6" md="6">
            <v-card-title> Penguji </v-card-title>
            <v-card
              v-for="(penguji, index) in target.penguji"
              :key="index"
              class="mb-5"
            >
              <v-row>
                <v-col cols="2">
                  <v-layout column align-center class="mr-0 p-0">
                    <v-avatar
                      color="indigo"
                      size="60"
                      align-center
                      class="mt-2"
                    >
                      <img
                        :src="
                          penguji.user.image
                            ? penguji.user.image.link
                            : 'image/round-logo-pins.png'
                        "
                        alt=""
                      />
                    </v-avatar>
                  </v-layout>
                </v-col>
                <v-col cols="10" class="pl-0">
                  <v-card-subtitle class="pl-0">
                    <span style="font-weight: bold">
                      {{ penguji.user.name }}
                      <br />
                    </span>
                    {{ penguji.user.role.position.name }}
                  </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  components: {},

  props: { target: {} },

  data() {
    return {
      model: {},
      valid: false,
      isRequest: false,
      alert: true,
    };
  },

  validations: {
    model: {},
  },

  computed: {},

  methods: {
    save() {},

    close() {
      this.$emit("cancelShow", "table");
    },
  },
};
</script>
