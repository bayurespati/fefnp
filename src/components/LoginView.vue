<template>
  <div class="container-log">
    <div class="forms-container">
      <div class="signin-signup">
        <div class="form-login">
          <div class="sign-in-form">
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                id="username"
                name="username"
                required
                autofocus
                autocomplete="username"
                placeholder="Username"
                v-model="auth.username"
              />
            </div>

            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input
                id="password"
                type="password"
                name="Password"
                required
                v-model="auth.password"
                autocomplete="current-password"
                placeholder="Password"
              />
            </div>
            <div class="input-error" v-if="message">
              <span class="invalid-feedback" role="alert">
                <strong>{{ message }}</strong>
              </span>
            </div>

            <button
              class="btn btn-primary"
              style="color: white"
              @click="login()"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="panels-container">
      <div class="panel left-panel">
        <img src="icon.svg" class="image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      auth: {
        username: "",
        password: "",
      },
      processing: false,
      isRequest: false,
      message: "",
    };
  },
  methods: {
    login() {
      let self = this;

      if (!self.isRequest) {
        const data = {
          username: self.auth.username,
          password: self.auth.password,
        };
        self.isRequest = true;
        self.$store
          .dispatch("login", data)
          .then(() => {
            self.$store
              .dispatch("getUser")
              .then(() => {
                self.$store
                  .dispatch("getRole")
                  .then((response) => {
                    if (response == "Abort")
                      self.message = "User belum terdafatar";
                  })
                  .catch((error) => {
                    error;
                  });
              })
              .catch(() => {});
          })
          .catch((errors) => {
            self.message = errors.data.message;
          });
      }
    },
  },
};
</script>
