<template>
  <transition
    enterActiveClass="fade-in"
    leaveActiveClass="fade-out"
    mode="out-in"
  >
    <!--=========================================================================================
          N O T I F I C A T I O N S   W R A P P E R
      ==========================================================================================-->

    <div class="notification-wrapper" v-if="notificationExists">
      <transition-group
        enterActiveClass="fade-in-down"
        leaveActiveClass="fade-out"
        mode="out-in"
      >
        <!--=========================================================================================
              I N D I V I D U A L   N O T I F I C A T I O N
          ==========================================================================================-->
        <div
          v-for="(notification, index) in notifications"
          class="alert alert-contrast alert-position"
          :class="notification.alertClass"
          :style="getBottomPosition(index)"
          :key="notification.key"
        >
          <!--=========================================================================================
               N O T I F I C A T I O N   B O D Y
            ==========================================================================================-->
          <div class="message">
            <div class="close" @click="hide(0, index)">
              <span aria-hidden="true" class="s7-close"></span>
            </div>
            {{ notification.body }}
          </div>
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      notifications: [],
    };
  },

  created() {
    window.events.$on("flash", (message, type) => {
      this.flash(message, type, 3500);
    });
  },

  computed: {
    notificationExists() {
      return this.notifications.length > 0;
    },

    key() {
      return Math.random();
    },
  },

  methods: {
    flash(message, type = "success", duration = 3500) {
      if (this.notifications.length === 8) {
        this.hide(0);
      }

      this.display(message, type);

      this.hide(duration);
    },

    display(message, type) {
      this.notifications.push({
        key: Math.random(),
        body: message,
        type: type,
        alertClass: this.getAlertClass(type),
        alertIcon: this.getAlertIcon(type),
      });
    },

    hide(duration, index = 0) {
      setTimeout(() => {
        this.notifications.splice(index, 1);
      }, duration);
    },

    getAlertClass(type) {
      return "alert-" + type;
    },

    getAlertIcon(type) {
      if (type === "success") {
        return "mdi-alert-circle";
      } else if (type === "danger") {
        return "mdi-alert-circle";
      } else if (type === "info") {
        return "mdi-alert-circle";
      } else if (type === "warning") {
        return "mdi-alert-circle";
      } else {
        return "";
      }
    },

    getBottomPosition(index) {
      const margin = 0;
      const notificationHeight = 0;

      return {
        bottom: margin * (index + 1) + notificationHeight * index + "px",
      };
    },
  },
};
</script>

<style>
.notification-wrapper {
  position: fixed;
  right: 0;
  z-index: 1100 !important;
  bottom: 160px;
}

.alert-position {
  position: fixed;
  right: 25px;
}

.alert-contrast {
  padding-right: 30px;
}

.alert {
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.alert-heading {
  color: inherit;
}

.alert-link {
  font-weight: 700;
}

.alert-dismissible {
  padding-right: 3.85rem;
}

.alert-dismissible .close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: 0.75rem 1.25rem;
  color: inherit;
}

.alert-primary {
  color: #1b4b72;
  background-color: #d6e9f8;
  border-color: #c6e0f5;
}

.alert-primary hr {
  border-top-color: #b0d4f1;
}

.alert-primary .alert-link {
  color: #113049;
}

.alert-secondary {
  color: #383d41;
  background-color: #e2e3e5;
  border-color: #d6d8db;
}

.alert-secondary hr {
  border-top-color: #c8cbcf;
}

.alert-secondary .alert-link {
  color: #202326;
}

.alert-success {
  color: #1d643b;
  background-color: #d7f3e3;
  border-color: #c7eed8;
}

.alert-success hr {
  border-top-color: #b3e8ca;
}

.alert-success .alert-link {
  color: #123c24;
}

.alert-info {
  color: #385d7a;
  background-color: #e2f0fb;
  border-color: #d6e9f9;
}

.alert-info hr {
  border-top-color: #c0ddf6;
}

.alert-info .alert-link {
  color: #284257;
}

.alert-warning {
  color: #857b26;
  background-color: #fffbdb;
  border-color: #fffacc;
}

.alert-warning hr {
  border-top-color: #fff8b3;
}

.alert-warning .alert-link {
  color: #5d561b;
}

.alert-danger {
  color: #761b18;
  background-color: #f9d6d5;
  border-color: #f7c6c5;
}

.alert-danger hr {
  border-top-color: #f4b0af;
}

.alert-danger .alert-link {
  color: #4c110f;
}

.alert-light {
  color: #818182;
  background-color: #fefefe;
  border-color: #fdfdfe;
}

.alert-light hr {
  border-top-color: #ececf6;
}

.alert-light .alert-link {
  color: #686868;
}

.alert-dark {
  color: #1b1e21;
  background-color: #d6d8d9;
  border-color: #c6c8ca;
}

.alert-dark hr {
  border-top-color: #b9bbbe;
}

.alert-dark .alert-link {
  color: #040505;
}
</style>
