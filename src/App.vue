<template>
  <v-app>
    <router-view> </router-view>
    <div style="margin-top: 100px">
      <flash></flash>
    </div>
  </v-app>
</template>

<script>
import Flash from "./components/global/FlashView.vue";
export default {
  components: {
    Flash,
  },
};
</script>
