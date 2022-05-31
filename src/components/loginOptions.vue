<template>
  <div class="login__options">
    <div class="login__option login__option--google">
      <img
        src="../assets/google.webp"
        alt="google logo"
        class="login__option--logo"
      />
      <a href="#" class="login__option--btn">Google</a>
    </div>
    <div class="login__option login__option--github">
      <img
        src="../assets/github__logo.png"
        alt="github logo"
        class="login__option--logo"
      />
      <a href="#" class="login__option--btn">Github</a>
    </div>
    <div class="login__option login__option--microsoft">
      <img
        src="../assets/Microsoft_logo.svg"
        alt="github logo"
        class="login__option--logo"
      />
      <a href="#" class="login__option--microsoftBtn">Microsoft</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginOptions",
};
</script>
<style lang="scss" scoped>
@import "@/components/variables.scss";
@import "@/components/loginOptions.scss";
</style>
