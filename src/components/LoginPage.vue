!
<template>
  <div class="cinemas__container">
    <Photo__content />
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/login.vue";
import Photo__content from "@/components/photo__content.vue";
export default {
  name: "LoginPage",
  components: { LoginForm, Photo__content },
};
</script>

<style></style>
