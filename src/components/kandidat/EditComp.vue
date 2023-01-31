<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="pl-0">
        <v-card outlined elevation="5">
          <v-layout column align-center class="mt-5">
            <v-avatar color="indigo" size="150">
              <img
                v-if="calon.user.image"
                :src="calon.user.image ? calon.user.image.link : 'goks.avif'"
              />
              <span v-else class="white--text bold text-h2">{{
                calon.user.name | name
              }}</span>
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
            <v-row align="center" class="mx-0"> </v-row>
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
                        <th class="text-left">KRITERIA</th>
                        <th class="text-left">DESKRIPSI PENIALAIAN</th>
                        <th class="text-left">NILAI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowspan="2" style="font-weight: bold">CHARACTER</td>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Enthusiasm
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Passion dan antusisme terhdap penugasan-penugasan
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
                        <td rowspan="3" style="font-weight: bold">
                          COMPETENCE
                        </td>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Decision Making
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Kemampuan mengambil keputusan atau tindakan yang
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
                          {{ n.visionery_thinking }}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold">COLLABORATION</td>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Networking
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Komitmen untuk menciptakan, mendorong serta
                            memelihara hubungan kolaborasi lintas unit kerja,
                            sinergi Telkom Group, dan strategik partner lainnya
                            (Government, Community, dll).
                          </span>
                        </td>
                        <td>
                          {{ n.networking }}
                        </td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold">CULTURE FIT</td>
                        <td>
                          <span style="font-weight: bold; font-size: 12px">
                            Culture Implementation
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Apa yang akan dilakukan jika nantinya menduduki
                            target posisi tersebut terkait dengan Budaya
                            perusahaan. Komitmen dan kepedulian untuk mendukung
                            aktivasi budaya Telkom Group dan
                            menginternalisasikan ke dalam prilaku serta dalam
                            melaksanakan pekerjaan.
                          </span>
                        </td>
                        <td>
                          {{ n.culture_implementation }}
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <span style="font-weight: bold; font-size: 14px">
                            SUCCESS STORY
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Jelaskan keberhasilan-keberhasilan apa yang telah
                            dicapai selama ini dalam lingkup pekerjaannya :
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            {{ n.success_story }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <span style="font-weight: bold; font-size: 14px">
                            WINNING PROGRAM / BREAKTHROUGH
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            Jelaskan apa yang akan dilakukan jika nantinya
                            menduduki posisi tersebut:
                          </span>
                          <br />
                          <span style="font-size: 12px">
                            {{ n.winning_program }}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="3">
                          <div style="font-size: 14px">
                            <p style="margin-top: 5px">
                              KESIMPULAN REKOMENDASI AKHIR :
                              <span style="font-weight: bold">
                                {{ n.kesimpulan }}
                              </span>
                            </p>
                            <p style="font-size: 12px">
                              Catatan:
                              <br />
                              <span style="font-weight: bold">
                                {{ n.catatan_kesimpulan }}
                              </span>
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn rounded color="primary" dark @click="downloadItem(n)">
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
import Axios from "../../axiosset";
export default {
  props: { calon: {} },
  data: () => ({
    length: 3,
    window: 0,
  }),

  filters: {
    name: function (data) {
      let temp = data.split(" ");
      return temp[0][0] + temp[temp.length - 1][0];
    },
  },

  methods: {
    close() {
      this.$emit("cancelEdit", "table");
    },

    downloadItem(n) {
      let url = process.env.VUE_APP_URL;
      Axios.get(url + "/api/tpro/penilaian/export", {
        params: { id: n.id },
        responseType: "blob",
      })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/*" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = n.penguji.user.name + ".pdf";
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
  },
};
</script>
