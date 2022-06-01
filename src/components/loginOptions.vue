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
@import "@/style/main.scss";
a {
  text-decoration: none;
}
.login {
  &__options {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__option {
    position: relative;
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.1rem;
    padding: 1.8rem 15rem;
    font-weight: 600;
    user-select: none;
    border-radius: 4px;
    @media only screen and (max-width: 43.75em) /*700px*/ {
      & {
        padding: 1.8rem 10rem;
      }
    }
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
    &:hover {
      cursor: pointer;
    }
    &--google {
      background-color: #4285f4;
    }
    &--github {
      background-color: #000;
    }
    &--microsoft {
      @include customBorder($color__white, $color__gray--dark);
    }

    &--logo {
      position: absolute;
      width: 3rem;
      height: 3rem;
      left: 0;
      background-color: $color__white;
      border-radius: 3px;
      margin-left: 1rem;
    }
    &--microsoftBtn {
      color: $color__gray--dark;
    }
    &--btn {
      color: $color__white;
    }
  }
}
</style>
