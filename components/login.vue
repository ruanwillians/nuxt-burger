<template>
  <div>
    <b-container style="display: flex" id="register">
      <b-img class="mt-5" id="image" src="../assets/login.svg"></b-img>
      <b-container
        style="
          display: flex;
          align-items: center;
          flex-direction: column;
          background-color: #fff;
          border-radius: 5px;
        "
        class="mt-5"
      >
        <b-img src="../assets/logo.svg" style="width: 150px; height: 150px" />
        <h1>Login</h1>

        <b-container style="width: 20em" fluid="sm">
          <b-form @submit.prevent="submit">
            <b-form-group label="Digite seu email">
              <b-form-input
                type="email"
                v-model="payloadUser.email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Digite sua senha">
              <b-form-input
                type="password"
                class="mb-2"
                v-model="payloadUser.password"
                required
              ></b-form-input>
              <p class="mb-2" style="color: red" v-if="error">
                {{ error }}
              </p>
              <p>
                Ainda não possui cadastro, <a href="/register">registre-se</a>
              </p>
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
import { mapActions, mapState} from "vuex";

export default Vue.extend({
  name: "Login",
  data() {
    return {
      payloadUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("UserStore", ["login", 'cleanError']),
    submit() {
      this.login(this.payloadUser);
    },
  },
  computed: {
    ...mapState("UserStore", ["user", "error"]),
  },

  mounted(){
    this.cleanError()
  }
});
</script>

<style>
@media (max-width: 574px) {
  body {
    background-color: #fff;
  }
  #register {
    margin-top: 10%;
  }
  #image {
    display: none;
  }
}
</style>
