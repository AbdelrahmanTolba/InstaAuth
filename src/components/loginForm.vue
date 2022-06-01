<template>
  <form action="" class="form" @submit="checkLogin">
    <div class="errorLogin disable">
      <p class="errorLogin__text" id="errorMsg">
        Your email and/or password are incorrect
      </p>
    </div>
    <div class="form__group">
      <label for="Email" class="form__label">Work Email</label>
      <input
        type="email"
        class="form__input"
        :class="{
          valid: emailValid,
          notValid: !emailValid,
        }"
        placeholder="you@company.com"
        id="Email"
        required
        @change="checkEmail"
        v-model="email"
      />
      <p
        class="errorMassage"
        :class="{
          disable: !emailValid,
          disable: emailValid,
        }"
        id="emailError"
      >
        Enter a valid email address.
      </p>
    </div>

    <div class="form__group">
      <div class="linking">
        <label for="Password" class="form__label">Password</label>
        <a href="#" class="linking__forgetPassword">Forget password?</a>
      </div>
      <input
        type="password"
        class="form__input valid"
        placeholder="8+ Characters"
        id="Password"
        required
        @change="
          passwordTouched = true;
          checkPassword();
        "
        @keyup="checkPassword"
        v-model="password"
      />
      <p class="errorMassage disable" id="passwordError">
        Password must be 6 characters or more
      </p>
    </div>
    <button
      class="form__btn"
      id="submit"
      :disabled="!isValid"
      :class="{ avalible: isValid, notAvalible: !isValid }"
    >
      Login
    </button>
  </form>
  <div class="linking">
    <p for="Password" class="form__label">
      Don't have an account?<a href="#" class="linking__signup"> Sign up</a>
    </p>
    <a href="#" class="linking__sso">Login via SSO</a>
  </div>
</template>
<script>
export default {
  name: "loginForm",
  data() {
    return {
      email: "",
      password: "",
      emailValid: true,
      passwordValid: false,

      passwordTouched: false,

      accounts: [
        { email: "mohamed@instabug.com", password: "A12345678" },
        { email: "mohamed1@instabug.com", password: "A12345678" },
        { email: "mohamed2@instabug.com", password: "A12345678" },
        { email: "mohamed3@instabug.com", password: "A12345678" },
        { email: "mohamed4@instabug.com", password: "A12345678" },
        { email: "mohamed5@instabug.com", password: "A12345678" },
        { email: "mohamed6@instabug.com", password: "A12345678" },
        { email: "mohamed7@instabug.com", password: "A12345678" },
      ],
    };
  },

  methods: {
    checkEmail() {
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(this.email)
        ? (this.emailValid = true)
        : (this.emailValid = false);
    },
    checkUpperCase(str) {
      return /[A-Z]/.test(str) && /[0-9]/.test(str);
    },
    checkPassword() {
      const userName = this.email.split("@")[0];
      if (
        this.password.length >= 6 &&
        this.checkUpperCase(this.password) &&
        this.password !== userName
      ) {
        document.getElementById("Password").classList.remove("notValid");
        document.getElementById("Password").classList.add("valid");
        document.getElementById("passwordError").classList.add("disable");
        this.passwordValid = true;
      } else if (this.passwordTouched) {
        document.getElementById("Password").classList.remove("valid");
        document.getElementById("Password").classList.add("notValid");
        document.getElementById("passwordError").classList.remove("disable");
        this.passwordValid = false;
      }
    },
    checkLogin(e) {
      e.preventDefault();
      const status = this.accounts.filter(
        (record) =>
          record.email === this.email && record.password === this.password
      );

      if (status.length > 0) {
        localStorage.setItem("userEmail", this.email);
        this.$router.push("/welcome");
      } else {
        document.querySelector(".errorLogin").classList.remove("disable");
        this.email = "";
        this.password = "";
        this.passwordValid = false;
      }
    },
  },

  computed: {
    isValid() {
      return this.emailValid && this.passwordValid && this.email;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/main.scss";
a:focus {
  outline: none;
}
.linking {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__forgetPassword,
  &__signup,
  &__sso {
    text-decoration: none;
    font-size: 1.3rem;
  }
  &__forgetPassword {
    color: $color__secondary;
  }
  &__signup,
  &__sso {
    color: $color__links;
    font-weight: 500;
  }
}
.form {
  width: 100%;
  &__group {
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
  &__input {
    height: 2rem;
    width: 100%;
    padding: 2rem 1rem;
    border-radius: 4px;
    color: $color__primary;
    border: 1px solid $color__secondary;
    &:focus,
    &:active {
      outline: none;
    }
    &:placeholder-shown,
    &::placeholder {
      color: $color__secondary;
    }
  }
  &__label {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: $color__primary;
  }
  &__btn {
    width: 100%;
    @include customBorder($color__primary, $color__secondary);
    color: $color__white;
    padding: 1rem;
    border-radius: 4px;
    margin-bottom: 1rem;

    cursor: pointer;
  }
}

.errorLogin {
  border-radius: 4px;
  margin: 0.5rem 0;
  padding: 1rem 1.5rem;
  @include customBorder(#fbe6e1, $color__gray--dark);
  &__text {
    font-size: 1.5rem;
    color: $color__gray--dark;
  }
}
.errorMassage {
  color: $color__warning;
  font-size: 1.2rem;
  margin-top: 1rem;
}
.notAvalible {
  background-color: $color__gray--light;
  cursor: default;
}
.avalible {
  background-color: $color__links;
  cursor: pointer;
}

.notValid,
.notValid:focus,
.notValid:active {
  border-color: $color__warning;
}
.valid:focus,
.valid:active {
  border-color: $color__links;
  box-shadow: inset 0 0 4px 0 $color__links;
}
.disable {
  display: none;
}
</style>
