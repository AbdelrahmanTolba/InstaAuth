<template>
  <div class="login">
    <img src="../assets/logo.svg" alt="instabug logo" class="logo" />
    <h1 class="heading--1">Log in to Instabug</h1>
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
        <img
          class="topcompany__img"
          v-for="(img, index) in imgs"
          :class="{ smaller: index === 0 }"
          :key="index"
          :src="img"
          :alt="`Photo ${index}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoginOptions from "./loginOptions.vue";
import LoginForm from "./loginForm.vue";

import image1 from "@/assets/lyft-full-logo.svg";
import image2 from "@/assets/buzzfeed-full-logo.svg";
import image3 from "@/assets/asana-full-logo.svg";
import image4 from "@/assets/one-plus-logo.svg";
import image5 from "@/assets/house-party-logo.svg";

export default {
  name: "loginForm",
  components: { LoginOptions, LoginForm },
  data() {
    return {
      imgs: [image1, image2, image3, image4, image5],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/main.scss";
.login {
  grid-column: col-start 7 / full-end;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
  @media only screen and (max-width: 37.5em) /*600px*/ {
    & {
      padding: 0 5rem;
    }
  }
  @media only screen and (max-width: 18.75em) /*300px*/ {
    & {
      grid-column: full-start / full-end;
    }
  }
}

.logo {
  width: 5rem;
  height: 5rem;
}

.or {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  width: 100%;
  color: $color__gray--dark;
}
.or span {
  background-color: $color__gray--dark;
  color: $color__gray--dark;
  width: 50%;
  height: 1px;
}

.topcompany {
  width: 100%;
  display: flex;
  flex-direction: column;
  &__imgs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  &__img {
    width: 7rem;
    height: 100%;
    object-fit: contain;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
.smaller {
  width: 5rem;
}
</style>
