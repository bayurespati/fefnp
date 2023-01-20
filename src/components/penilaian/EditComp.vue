<template>
  <v-container>
    <v-row dense>
      <v-col cols="4">
        <v-card outlined elevation="5">
          <v-layout column align-center class="mt-5">
            <v-avatar size="150">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar>
            <v-list-item-title class="text-h6">
              {{ calon.user.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-h7 mb-1">
              {{ calon.user.nik }}
            </v-list-item-subtitle>
          </v-layout>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>
            <div class="my-4 text-subtitle-1"></div>
            <div>
              Posisi : {{ calon.user.role.position.name }}
              <br />
              Email : {{ calon.user.email }}
              <br />
              Telephone : {{ calon.user.phone }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <div class="text-center mt-4">
              <h4>
                {{ calon.jabatan.target.nama }}
              </h4>
            </div>
            <v-spacer></v-spacer>
            <v-btn rounded color="success" dark @click="close()"> BACK </v-btn>
          </v-card-title>
          <v-tabs color="deep-purple accent-4" left>
            <v-tab v-for="(n, key) in calon.penilaian" :key="key">
              {{ n.penguji.user.name }}
            </v-tab>

            <v-tab-item v-for="(n, index) in calon.penilaian" :key="index">
              <v-container fluid>
                <v-simple-table>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">DESKRIPSI PENIALAIAN</th>
                        <th class="text-left">NILAI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Enthuasiasm
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Passion dan antusiasme terhdap penugasan-penugasan
                            yang diberikan.
                          </span>
                        </td>
                        <td>
                          {{ n.enthuasiasm }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Totality
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Komitmen untuk mendedikasikan seluruh potensi &
                            kemampuan dalam menjalankan tugas.
                          </span>
                        </td>
                        <td>
                          {{ n.totality }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Decision Making
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Kemampuan mengambil keputusan atau tondakan yang
                            tepat dan efektif dalam menyelesaikan masalah.
                          </span>
                        </td>
                        <td>
                          {{ n.decision_making }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Business Acumen
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Kemampuan memanfaatkan peluang dalam memperoleh
                            profit dan mengembangkan aktivitas bisnis
                            perusahaan.
                          </span>
                        </td>
                        <td>
                          {{ n.business_acumen }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Visionery Thinking
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Kemampuan berfikir jangka panjang dan menyeluruh,
                            serta mengkomunikasikan visinya kepada orang-orang
                            di sekitarnya dalam organisasi.
                          </span>
                        </td>
                        <td>
                          {{ n.visionery_thiking }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Networking
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Komitmen untuk menciptkan, mendorong serta
                            memelihara hubungan kolaborasi lintas unit kerja,
                            sinergi Telkom group, dan strategik partner lainnya
                            (Government, Community, dll).
                          </span>
                        </td>
                        <td>
                          {{ n.networking }}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Culuture Implementation
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Apa yang akan dilakukan jika nantinya menduduki
                            target posisi tersebut terkait dengan Budaya
                            perusahaan. Komitmen dan kepedulian untuk mendukung
                            aktivasi budaya telkom Group dan
                            menginternalisasikan ke dalam prilaku serta dalam
                            melaksanakan pekerjaan.
                          </span>
                        </td>
                        <td>
                          {{ n.culture_implementation }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <span style="font-weight: bold; font-size: 12px">
                            SUCCESS STORY
                          </span>
                          <br />
                          <span>
                            Jelaskan keberhasilan-keberhasilan apa yang telah
                            dicapai selama ini dalam lingkup pekerjaannya :
                          </span>
                          <br />
                          <span>
                            {{ n.success_story }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <span style="font-weight: bold; font-size: 12px">
                            WINNING PROGRAM/ BREAK THROUGH
                          </span>
                          <br />
                          <span>
                            Jelaskan apa yang akan dilakukan jika nantinya
                            menduduki posisi tersebut:
                          </span>
                          <br />
                          <span>
                            {{ n.winning_program }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <div style="font-size: 14px">
                            <p style="margin-top: 5px">
                              KESIMPULAN REKOMENDASI AKHIR :
                              <span style="font-weight: bold">
                                {{ n.kesimpulan }}
                              </span>
                            </p>
                            <p style="font-size: 14px">
                              Catatan:
                              <br />
                              {{ n.catatan_kesimpulan }}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn rounded color="primary" dark @click="close()">
                  Download
                </v-btn>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: { calon: {} },
  data: () => ({
    length: 3,
    window: 0,
  }),

  methods: {
    close() {
      this.$emit("cancelEdit", "table");
    },
  },
};
</script>
