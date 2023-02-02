<template>
  <div>
    <b-container style="display: flex;" id="register">
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

        <b-container style="width: 20em;" fluid="sm">

          <b-form>
             <b-form-group
            id="fieldset-1"
            label="Digite seu email"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              trim
              type="email"
              icon="email"
            ></b-form-input>
          </b-form-group>

             <b-form-group
            id="fieldset-1"
            label="Digite sua senha"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              trim
              type="password"
              class="mb-3"
            ></b-form-input>
            <p>Ainda não possui cadastro, <a href="/register">registre-se</a></p>
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

export default Vue.extend({
  name: "Login",
});
</script>

<style>
@media (max-width: 574px) {
  body {
    background-color: #fff;
  }
  #register{
    margin-top: 10%;
  }
  #image {
    display: none;
  }
}
</style>
