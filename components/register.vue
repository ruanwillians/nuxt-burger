<template>
  <div>
    <b-container style="display: flex" id="login">
      <b-img
        class="mt-3"
        id="image"
        src="../assets/login.svg"
        style="min-height: 550px"
      ></b-img>
      <b-container
        style="
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #fff;
          border-radius: 5px;
        "
        class="mt-3"
      >
        <b-img
          src="../assets/logo.svg"
          style="width: 150px; height: 150px"
          class="mt-2"
        />
        <h3>Registre-se</h3>

        <b-container style="width: 20em" fluid="sm">
          <b-form @submit.prevent="submit">
            <b-form-group label="Digite seu nome" size="sm" class="mb-1">
              <b-form-input
                v-model="userPayload.name"
                type="text"
                size="sm"
                class="mb-1"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Digite seu email" class="mb-1">
              <b-form-input
                v-model="userPayload.email"
                size="sm"
                type="email"
                class="mb-1"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Digite sua senha" class="mb-1">
              <b-form-input
                v-model="userPayload.password"
                size="sm"
                type="password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Confirme sua senha" class="mb-1">
              <b-form-input
                v-model="confirmPassword"
                size="sm"
                type="password"
                required
              ></b-form-input>
              <p class="mb-1" style="color: red" v-if="error">
                {{ error }}
              </p>
              <p class="mb-1" style="color: red" v-if="passwordError">
                {{ passwordError }}
              </p>
              <p class="mb-1">Já possui cadastro? <a href="/login"> faça login</a></p>
            </b-form-group>

            <b-button type="submit" variant="success"
              >Entrar <b-icon icon="arrow-right" class="arrow"
            /></b-button>
          </b-form>
        </b-container>
      </b-container>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "vuex";

export default Vue.extend({
  name: "Register",
  data() {
    return {
      userPayload: {
        name: "",
        email: "",
        password: "",
      },
      confirmPassword: "",
      passwordError: "",
    };
  },
  methods: {
    ...mapActions("UserStore", ["register", "cleanError"]),
    submit() {
      if (this.userPayload.password.length < 6) {
        this.cleanError();
        return (this.passwordError = "A senha devem ter mais de 6 caracteres");
      } else if (this.confirmPassword != this.userPayload.password) {
        this.cleanError();
        return (this.passwordError = "A senha e confirmação devem ser iguais");
      } else {
        this.cleanError();
        this.passwordError = "";
        this.register(this.userPayload);
      }
    },
  },
  computed: {
    ...mapState("UserStore", ["user", "error"]),
  },

  mounted() {
    this.cleanError();
  },
});
</script>

<style>
@media (max-width: 574px) {
  body {
    background-color: #fff;
  }

  #login {
    margin-bottom: 5%;
  }
  #image {
    display: none;
  }
}
</style>
