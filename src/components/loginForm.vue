<template>
  <form action="" class="form" @submit="checkLogin">
    <div class="form__group">
      <label for="Email" class="form__label">Work Email</label>
      <input
        type="email"
        class="form__input"
        placeholder="you@company.com"
        id="Email"
        required
        v-model="email"
      />
    </div>

    <div class="form__group">
      <div class="linking">
        <label for="Password" class="form__label">Password</label>
        <a href="#" class="linking__forgetPassword">Forget password?</a>
      </div>
      <input
        type="password"
        class="form__input"
        placeholder="8+ Characters"
        id="Password"
        required
        v-model="password"
      />
    </div>
    <button class="form__btn notAvalible">Login</button>
  </form>
  <div class="linking">
    <p for="Password" class="form__label">
      Don't have an account?<a href="#" class="linking__signup"> Sign up</a>
    </p>
    <a href="#" class="linking__sso">Login via SSO</a>
  </div>
</template>
<script>
export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",

      accounts: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
        { email: "mhmd@mm.com", password: "12345" },
      ],
    };
  },

  methods: {
    checkLogin(e) {
      e.preventDefault();
      const status = this.accounts.filter(
        (record) =>
          record.email === this.email && record.password === this.password
      );
      if (status.length > 0) {
        alert("logined");
        this.$router.push("/welcome");
      } else {
        alert("un authorized");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/components/variables.scss";
@import "@/components/loginForm.scss";
</style>
