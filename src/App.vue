<template>
  <div>
    <!-- <p>
      <router-link to="/login">Go to login</router-link>
      <router-link to="/">Go to homepage</router-link>
    </p> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
@import "@/components/variables.scss";
@import "@/components/main.scss";

.cinemas__container {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns:
    [full-start] 1fr
    [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
    [center-end] 1fr [full-end];
  margin: 0 auto;
}
</style>
