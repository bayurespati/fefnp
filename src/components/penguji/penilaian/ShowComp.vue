<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="pl-0">
        <v-card outlined elevation="5">
          <v-layout column align-center class="mt-5">
            <v-avatar color="indigo" size="250">
              <img
                v-if="kandidat.user.image"
                :src="
                  kandidat.user.image ? kandidat.user.image.link : 'goks.avif'
                "
              />
              <span v-else class="white--text bold text-h2">
                {{ kandidat.user.name | name }}
              </span>
            </v-avatar>
            <v-list-item-title class="text-h6">
              {{ kandidat.user.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-h7 mb-1">
              {{ kandidat.user.nik }}
            </v-list-item-subtitle>
          </v-layout>
          <v-spacer></v-spacer>
          <v-divider></v-divider>
          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>
            <div class="my-4 text-subtitle-1"></div>
            <div>
              Posisi : {{ kandidat.user.role.position.name }}
              <br />
              Email : {{ kandidat.user.email }}
              <br />
              Telephone : {{ kandidat.user.phone }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>
            <div class="text-center mt-4">
              <h4>
                {{ kandidat.jabatan.target.nama }}
              </h4>
            </div>
            <v-spacer></v-spacer>
            <v-btn rounded color="success" dark @click="close()"> BACK </v-btn>
          </v-card-title>
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
                        Passion dan antusiasme terhadap penugasan-penugasan yang
                        diberikan.
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].enthuasiasm }}
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
                      {{ kandidat.penilaian[0].totality }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: bold; font-size: 12px">
                        Decision Making
                      </span>
                      <br />
                      <span style="font-size: 12px">
                        Kemampuan mengambil keputusan atau tindakan yang tepat
                        dan efektif dalam menyelesaikan masalah.
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].decision_making }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: bold; font-size: 12px">
                        Business Acumen
                      </span>
                      <br />
                      <span style="font-size: 12px">
                        Kemampuan memanfaatkan peluang dalam memperoleh profit
                        dan mengembangkan aktivitas bisnis perusahaan.
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].business_acumen }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: bold; font-size: 12px">
                        Visionery Thinking
                      </span>
                      <br />
                      <span style="font-size: 12px">
                        Kemampuan berfikir jangka panjang dan menyeluruh, serta
                        mengkomunikasikan visinya kepada orang-orang di
                        sekitarnya dalam organisasi.
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].visionery_thinking }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: bold; font-size: 12px">
                        Networking
                      </span>
                      <br />
                      <span style="font-size: 12px">
                        Komitmen untuk menciptkan, mendorong serta memelihara
                        hubungan kolaborasi lintas unit kerja, sinergi Telkom
                        group, dan strategik partner lainnya (Government,
                        Community, dll).
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].networking }}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span style="font-weight: bold; font-size: 12px">
                        Culuture Implementation
                      </span>
                      <br />
                      <span style="font-size: 12px">
                        Apa yang akan dilakukan jika nantinya menduduki target
                        posisi tersebut terkait dengan Budaya perusahaan.
                        Komitmen dan kepedulian untuk mendukung aktivasi budaya
                        telkom Group dan menginternalisasikan ke dalam prilaku
                        serta dalam melaksanakan pekerjaan.
                      </span>
                    </td>
                    <td>
                      {{ kandidat.penilaian[0].culture_implementation }}
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
                        {{ kandidat.penilaian[0].success_story }}
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
                        Jelaskan apa yang akan dilakukan jika nantinya menduduki
                        posisi tersebut:
                      </span>
                      <br />
                      <span>
                        {{ kandidat.penilaian[0].winning_program }}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div style="font-size: 14px">
                        <p style="margin-top: 5px">
                          KESIMPULAN REKOMENDASI AKHIR :
                          <span style="font-weight: bold">
                            {{ kandidat.penilaian[0].kesimpulan }}
                          </span>
                        </p>
                        <p style="font-size: 14px">
                          Catatan:
                          <br />
                          {{ kandidat.penilaian[0].catatan_kesimpulan }}
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <!-- <v-btn rounded color="primary" dark @click="close()">
              Download
            </v-btn> -->
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: { kandidat: {} },
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
  },
};
</script>
