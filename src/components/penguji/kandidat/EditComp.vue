<template>
  <div>
    <v-card>
      <v-card-title>
        <span class="title">
          {{ kandidat.user.name }}
          - {{ kandidat.user.role.position.name }}
        </span>
      </v-card-title>
      <v-card-subtitle>
        SANGAT KURANG
        <span style="font-weight: bold"> (0-20) </span> &nbsp;&nbsp;&nbsp;
        KURANG
        <span style="font-weight: bold"> (>20-40) </span> &nbsp;&nbsp;&nbsp;
        CUKUP
        <span style="font-weight: bold"> (>40-60) </span> &nbsp;&nbsp;&nbsp;
        BAIK
        <span style="font-weight: bold"> (>60-80) </span> &nbsp;&nbsp;&nbsp;
        BAIK SEKALI <span style="font-weight: bold"> (>80-100) </span>
      </v-card-subtitle>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <!--======================================================================================
               ENTHUASIASM 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.enthuasiasm"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.enthuasiasm.$touch()"
                    @blur="$v.model.enthuasiasm.$touch()"
                    @focusout="showTooltip('enthuasiasm')"
                    @focusin="showTooltip('enthuasiasm')"
                    v-model="model.enthuasiasm"
                    :error-messages="enthuasiasmError"
                    type="number"
                    label="Enthuasiasm"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Passion dan antusiasme terhdap penugasan-penugasan yang
                  diberikan.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
               TOTALITY 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.totality"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.totality.$touch()"
                    @blur="$v.model.totality.$touch()"
                    @focusout="showTooltip('totality')"
                    @focusin="showTooltip('totality')"
                    v-model="model.totality"
                    :error-messages="totalityError"
                    type="number"
                    label="Totality"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Komitmen untuk mendedikasikan seluruh potensi & kemampuan
                  dalam menjalankan tugas.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
               DECISION MAKING 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.decision_making"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.decision_making.$touch()"
                    @blur="$v.model.decision_making.$touch()"
                    @focusout="showTooltip('decision_making')"
                    @focusin="showTooltip('decision_making')"
                    v-model="model.decision_making"
                    :error-messages="decisionMakingError"
                    type="number"
                    label="Decision Making"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Kemampuan mengambil keputusan atau tondakan yang tepat dan
                  efektif dalam menyelesaikan masalah.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
               BUSINESS ACUMEN 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.business_acumen"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.business_acumen.$touch()"
                    @blur="$v.model.business_acumen.$touch()"
                    @focusout="showTooltip('business_acumen')"
                    @focusin="showTooltip('business_acumen')"
                    v-model="model.business_acumen"
                    :error-messages="businessAcumenError"
                    type="number"
                    label="Business Acumen"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Kemampuan memanfaatkan peluang dalam memperoleh profit dan
                  mengembangkan aktivitas bisnis perusahaan.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
               VISIONERY THINKING 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.visionery_thinking"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.visionery_thinking.$touch()"
                    @blur="$v.model.visionery_thinking.$touch()"
                    @focusout="showTooltip('visionery_thinking')"
                    @focusin="showTooltip('visionery_thinking')"
                    v-model="model.visionery_thinking"
                    :error-messages="visioneryThinkingError"
                    type="number"
                    label="Visionery Thinking"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Kemampuan berfikir jangka panjang dan menyeluruh, serta
                  mengkomunikasikan visinya kepada orang-orang di sekitarnya
                  dalam organisasi.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
                NETWORKING 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                color="primary"
                v-model="tooltip.networking"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.networking.$touch()"
                    @blur="$v.model.networking.$touch()"
                    @focusout="showTooltip('networking')"
                    @focusin="showTooltip('networking')"
                    v-model="model.networking"
                    :error-messages="networkingError"
                    type="number"
                    label="Networking"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Komitmen untuk menciptkan, mendorong serta memelihara hubungan
                  kolaborasi lintas unit kerja, sinergi Telkom group, dan
                  strategik partner lainnya (Government, Community, dll).
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
                CULTURE IMPLEMENTATION 
            ==========================================================================================-->
            <v-col cols="3" xs="3" md="3">
              <v-tooltip
                v-model="tooltip.culture_implementation"
                color="primary"
                top
                max-width="600"
              >
                <template v-slot:activator="{}">
                  <v-text-field
                    @input="$v.model.culture_implementation.$touch()"
                    @blur="$v.model.culture_implementation.$touch()"
                    @focusout="showTooltip('culture_implementation')"
                    @focusin="showTooltip('culture_implementation')"
                    v-model="model.culture_implementation"
                    :error-messages="cultureImplementationError"
                    type="number"
                    label="Culture Implementation"
                    required
                    outlined
                    dense
                  >
                  </v-text-field>
                </template>
                <span>
                  Apa yang akan dilakukan jika nantinya menduduki target posisi
                  tersebut terkait dengan Budaya perusahaan. Komitmen dan
                  kepedulian untuk mendukung aktivasi budaya telkom Group dan
                  menginternalisasikan ke dalam prilaku serta dalam melaksanakan
                  pekerjaan.
                </span>
              </v-tooltip>
            </v-col>

            <!--======================================================================================
                SUCCESS STORY 
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="12">
              <v-textarea
                @input="$v.model.success_story.$touch()"
                @blur="$v.model.success_story.$touch()"
                @focusout="showTooltip('success_story')"
                @focusin="showTooltip('success_story')"
                v-model="model.success_story"
                :error-messages="successStoryError"
                label="Success Story"
                required
                placeholder="Jelaskan keberhasilan-keberhasilan apa yang telah dicapai selama ini dalam lingkup pekerjaannya :"
                outlined
                dense
              >
              </v-textarea>
            </v-col>

            <!--======================================================================================
                WINNING PROGRAM 
            ==========================================================================================-->
            <v-col cols="12" xs="12" md="12" dense>
              <v-textarea
                @input="$v.model.winning_program.$touch()"
                @blur="$v.model.winning_program.$touch()"
                @focusout="showTooltip('winning_program')"
                @focusin="showTooltip('winning_program')"
                v-model="model.winning_program"
                :error-messages="winningProgramError"
                label="Winning Program"
                placeholder="Jelaskan apa yang akan dilakukan jika nantinya menduduki posisi tersebut:"
                required
                outlined
                dense
              >
              </v-textarea>
            </v-col>

            <!--======================================================================================
                KESIMPULAN 
            ==========================================================================================-->
            <v-col cols="4" xs="4" md="4" dense>
              <v-select
                @input="$v.model.kesimpulan.$touch()"
                @blur="$v.model.kesimpulan.$touch()"
                :error-messages="kesimpulanError"
                v-model="model.kesimpulan"
                :items="kesimpulans"
                label="Kesimpulan"
                item-text="value"
                item-value="value"
                persistent-hint
                outlined
                required
                small-chips
              ></v-select>
            </v-col>

            <v-col cols="8" xs="8" md="8" dense>
              <v-textarea
                @input="$v.model.catatan_kesimpulan.$touch()"
                @blur="$v.model.catatan_kesimpulan.$touch()"
                :error-messages="catatanKesimpulanError"
                v-model="model.catatan_kesimpulan"
                label="Catatan"
                required
                outlined
                dense
              >
              </v-textarea>
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
              >
                save
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
// import kandidat from "@/store/modules/kandidat";
import { required } from "vuelidate/lib/validators";
export default {
  props: { kandidat: {} },
  data() {
    return {
      model: {
        enthuasiasm: "",
        totality: "",
        decision_making: "",
        business_acumen: "",
        visionery_thinking: "",
        networking: "",
        culture_implementation: "",
        success_story: "",
        winning_program: "",
        kesimpulan: "",
        catatan_kesimpulan: "",
      },
      tooltip: {
        enthuasiasm: false,
        totality: false,
        decision_making: false,
        business_acumen: false,
        visionery_thinking: false,
        networking: false,
        culture_implementation: false,
        success_story: false,
        winning_program: false,
        kesimpulan: false,
        catatan_kesimpulan: false,
      },
      valid: false,
      isRequest: false,
      alert: true,
      users: [],
      show: false,
      targets: [],
      kesimpulans: [
        { value: "DAPAT DISARANKAN" },
        { value: "DAPAT DISARANKAN DENGAN CATATAN" },
        { value: "TIDAK DISARANKAN" },
      ],
    };
  },

  validations: {
    model: {
      enthuasiasm: { required },
      totality: { required },
      decision_making: { required },
      business_acumen: { required },
      visionery_thinking: { required },
      networking: { required },
      culture_implementation: { required },
      success_story: { required },
      winning_program: { required },
      kesimpulan: { required },
      catatan_kesimpulan: { required },
    },
  },

  computed: {
    totalityError() {
      const errors = [];
      if (!this.$v.model.totality.$dirty) return errors;
      !this.$v.model.totality.required &&
        errors.push("Nilai Totality harus diisi");
      return errors;
    },

    enthuasiasmError() {
      const errors = [];
      if (!this.$v.model.enthuasiasm.$dirty) return errors;
      !this.$v.model.enthuasiasm.required &&
        errors.push("Nilai Enthuasiasm harus diisi");
      return errors;
    },

    decisionMakingError() {
      const errors = [];
      if (!this.$v.model.decision_making.$dirty) return errors;
      !this.$v.model.decision_making.required &&
        errors.push("Nilai Decision Making harus diisi");
      return errors;
    },

    businessAcumenError() {
      const errors = [];
      if (!this.$v.model.business_acumen.$dirty) return errors;
      !this.$v.model.business_acumen.required &&
        errors.push("Nilai Business Acumen harus diisi");
      return errors;
    },

    visioneryThinkingError() {
      const errors = [];
      if (!this.$v.model.visionery_thinking.$dirty) return errors;
      !this.$v.model.visionery_thinking.required &&
        errors.push("Nilai Visionery Thinking harus diisi");
      return errors;
    },

    networkingError() {
      const errors = [];
      if (!this.$v.model.networking.$dirty) return errors;
      !this.$v.model.networking.required &&
        errors.push("Nilai Networking harus diisi");
      return errors;
    },

    cultureImplementationError() {
      const errors = [];
      if (!this.$v.model.culture_implementation.$dirty) return errors;
      !this.$v.model.culture_implementation.required &&
        errors.push("Nilai Culture Implementation harus diisi");
      return errors;
    },

    successStoryError() {
      const errors = [];
      if (!this.$v.model.success_story.$dirty) return errors;
      !this.$v.model.success_story.required &&
        errors.push("Success Story harus diisi");
      return errors;
    },

    winningProgramError() {
      const errors = [];
      if (!this.$v.model.winning_program.$dirty) return errors;
      !this.$v.model.winning_program.required &&
        errors.push("Winning Program harus diisi");
      return errors;
    },

    kesimpulanError() {
      const errors = [];
      if (!this.$v.model.kesimpulan.$dirty) return errors;
      !this.$v.model.kesimpulan.required &&
        errors.push("Kesimpulan harus diisi");
      return errors;
    },

    catatanKesimpulanError() {
      const errors = [];
      if (!this.$v.model.catatan_kesimpulan.$dirty) return errors;
      !this.$v.model.catatan_kesimpulan.required &&
        errors.push("Catatan kesimpulan harus diisi");
      return errors;
    },

    isValid() {
      return (
        this.totalityError.length == 0 && this.enthuasiasmError.length == 0
      );
    },
  },

  methods: {
    showTooltip(att) {
      this.tooltip[att] = !this.tooltip[att];
    },
    save() {
      this.$v.$touch();
      let self = this;

      if (!self.isRequest && self.isValid) {
        const data = {
          penguji_id: self.kandidat.jabatan.penguji[0].id,
          kandidat_id: self.kandidat.id,
          jabatan_id: self.kandidat.jabatan_id,
          enthuasiasm: self.model.enthuasiasm,
          totality: self.model.totality,
          decision_making: self.model.decision_making,
          business_acumen: self.model.business_acumen,
          visionery_thinking: self.model.visionery_thinking,
          networking: self.model.networking,
          culture_implementation: self.model.culture_implementation,
          success_story: self.model.success_story,
          winning_program: self.model.winning_program,
          kesimpulan: self.model.kesimpulan,
          catatan_kesimpulan: self.model.catatan_kesimpulan,
        };

        self.isRequest = true;
        self.$store
          .dispatch("storePenilaian", data)
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
      this.model.enthuasiasm = "";
      this.model.totality = "";
      this.model.decision_making = "";
      this.model.business_acumen = "";
      this.model.visionery_thinking = "";
      this.model.networking = "";
      this.model.culture_implementation = "";
      this.model.success_story = "";
      this.model.winning_program = "";
    },

    close() {
      this.$emit("cancelEdit", "table");
    },
  },
};
</script>
