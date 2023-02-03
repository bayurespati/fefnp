<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="anjing">
          <v-card-title>
            <div>
              <h4>
                {{ jabatan.target.nama }}
              </h4>
            </div>
            <v-spacer></v-spacer>
            <v-btn rounded color="primary" dark @click="downloadItem()" class="mr-2">
              Download
            </v-btn>
            <v-btn rounded color="success" dark @click="close()"> BACK </v-btn>
          </v-card-title>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left" rowspan="2">Nama</th>
                  <th class="text-left" rowspan="2">NIK</th>
                  <th class="text-left" rowspan="2">LEVEL SAAT INI</th>
                  <th class="text-left" rowspan="2">JABATAN SAAT INI</th>
                  <th class="text-center" :colspan="jabatan.penguji.length">
                    NILAI
                  </th>
                  <th class="text-center" rowspan="2">Total</th>
                </tr>
                <tr>
                  <th
                    v-for="(penguji, index) in jabatan.penguji"
                    :key="index"
                    class="text-center"
                  >
                    {{ penguji.user.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(kandidat, index) in jabatan.kandidat" :key="index">
                  <td>{{ kandidat.user.name }}</td>
                  <td>{{ kandidat.user.nik }}</td>
                  <td>{{ kandidat.user.role.position.name }}</td>
                  <td>{{ kandidat.user.role.position.name }}</td>
                  <td
                    v-for="(nilai, index) in kandidat.penilaian"
                    :key="index"
                    class="text-center"
                  >
                    {{ nilai | setNilai }}
                  </td>
                  <td>{{ kandidat.penilaian | total }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Axios from "../../axiosset";
export default {
  props: { jabatan: {} },

  data: () => ({}),

  filters: {
    setNilai: function (data) {
      let nilai =
        data.enthuasiasm +
        data.totality +
        data.decision_making +
        data.business_acumen +
        data.visionery_thinking +
        data.networking +
        data.culture_implementation;
      return Math.round(nilai / 7);
    },

    total: function (value) {
      let temp = 0;
      for (let data in value) {
        let nilai =
          value[data].enthuasiasm +
          value[data].totality +
          value[data].decision_making +
          value[data].business_acumen +
          value[data].visionery_thinking +
          value[data].networking +
          value[data].culture_implementation;
        temp += Math.round(nilai / 7);
      }
      return temp;
    },
  },

  methods: {
    close() {
      this.$emit("cancelEdit", "table");
    },

    downloadItem() {
      let url = process.env.VUE_APP_URL;
      Axios.get(url + "/api/tpro/penilaian/export-resume", {
        params: { id: this.jabatan.id },
        responseType: "blob",
      })
        .then((response) => {
          const blob = new Blob([response.data], { type: "application/*" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download =  this.jabatan.target.nama+ ".pdf";
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
  },
};
</script>

<style scoped>
table,
tr th,
td {
  border: thin solid rgba(0, 0, 0, 0.12);
}
table {
  border-collapse: collapse;
}
</style>
