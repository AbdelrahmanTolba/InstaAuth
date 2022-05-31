!
<template>
  <div class="cinemas__container">
    <h1>This is Homepage</h1>
    <button @click="goLogin">Logout</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
