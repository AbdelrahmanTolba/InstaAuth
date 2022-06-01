!
<template>
  <div class="container">
    <SliderContainer />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginFooter.vue";
import SliderContainer from "@/components/SliderContainer.vue";
export default {
  name: "LoginPage",
  components: { LoginForm, SliderContainer },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(10, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] 1fr [full-end];
  margin: 0 auto;
}
</style>
