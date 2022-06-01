<template>
  <div class="error"></div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
.error {
  height: 60vh;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: url(../assets/Error.jpg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "404 - Page Not Found!";
    color: $color__instabug;
    font-size: 2.5rem;
    margin: 2rem 0;
    font-weight: 600;
    position: absolute;
    bottom: -10rem;
  }
  &::after {
    content: "Sorry, that page doesn't exist. What would you like to do?";
    color: $color__gray--light;
    font-size: 1.8rem;
    position: absolute;
    bottom: -12rem;
  }
}
</style>
