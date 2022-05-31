<template>
  <div class="login">
    <img src="../assets/instabug__logo.png" alt="instabug logo" class="logo" />
    <h1 class="heading--1">Log in to instabug</h1>
    <LoginOptions />

    <div class="or">
      <span></span>
      <h3 class="heading--3 u-margin--1x">OR</h3>
      <span></span>
    </div>
    <LoginForm />
    <div class="topcompany">
      <h1 class="heading--3 u-text--center u-margin--2x">
        Trusted by the top companies.
      </h1>

      <div class="topcompany__imgs">
        <img src="../assets/Lyft_logo.svg.png" alt="" class="topcompany__img" />
        <img
          src="../assets/1280px-BuzzFeed.svg.png"
          alt=""
          class="topcompany__img"
        />
        <img
          src="../assets/Asana_logo.svg.png"
          alt=""
          class="topcompany__img"
        />
        <img
          src="../assets/Houseparty_(app)-Logo.wine.png"
          alt=""
          class="topcompany__img"
        />
        <img
          src="../assets/1280px-PayPal_logo.svg.png"
          alt=""
          class="topcompany__img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginOptions from "./loginOptions.vue";
import LoginForm from "./loginForm.vue";
export default {
  name: "loginForm",
  components: { LoginOptions, LoginForm },
};
</script>
<style lang="scss" scoped>
@import "@/components/variables.scss";
@import "@/components/login.scss";
</style>
