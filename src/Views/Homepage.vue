!
<template>
  <div class="home">
    <h1 class="home__heading">
      Welcome <strong> {{ email }} </strong>
    </h1>
    <button @click="goLogin" class="home__btn">Logout</button>
  </div>
  <div class="container"></div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
    };
  },
  created() {
    this.email = window.localStorage.getItem("userEmail");
  },
  methods: {
    goLogin() {
      window.localStorage.removeItem("userEmail");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
.home {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__heading {
    font-size: 3rem;
    color: $color__primary;
    margin-bottom: 2rem;
  }
  &__btn {
    @include customBorder(transparent, $color__primary);
    color: $color__primary;
    padding: 1rem 4rem;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      @include customBorder($color__primary, #fff);
      color: #fff;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
}
</style>
