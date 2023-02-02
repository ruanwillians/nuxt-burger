<template>
  <div>
    <b-container style="display: flex;" id="login" >
      <b-img class="mt-3" id="image" src="../assets/login.svg" style="min-height: 550px;"></b-img>
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
        <b-img src="../assets/logo.svg" style="width: 150px; height: 150px" class="mt-2" />
        <h2>Registre-se</h2>

        <b-container style="width: 20em;" fluid="sm">

          <b-form>
             <b-form-group
            id="fieldset-1"
            label="Digite seu nome"
            label-for="input-1"
             size="sm"
            class="mb-1"
          >
            <b-form-input
              id="input-1"
              trim
              type="text"
              size="sm"
              class="mb-1"
            ></b-form-input>
          </b-form-group>

             <b-form-group
            id="fieldset-1"
            label="Digite seu email"
            label-for="input-1"
            class="mb-1"
          >
            <b-form-input
              id="input-1"
              trim
              size="sm"
              type="email"
              class="mb-1"
            ></b-form-input>
          </b-form-group>

             <b-form-group
            id="fieldset-1"
            label="Digite sua senha"
            label-for="input-1"
            class="mb-1"
          >
            <b-form-input
              id="input-1"
              trim
              size="sm"
              type="password"
            ></b-form-input>
          </b-form-group>

             <b-form-group
            id="fieldset-1"
            label="Confirme sua senha"
            label-for="input-1"
            class="mb-2"
          >
            <b-form-input
              id="input-1"
              trim
              size="sm"
              type="password"
              class="mb-1"
            ></b-form-input>
            <p>Já possui cadastro, <a href="/register"> faça login</a></p>
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
  name: "Register",
});
</script>

<style>
@media (max-width: 574px) {
  body {
    background-color: #fff;
  }

  #login{
    margin-bottom: 5%;
  }
  #image {
    display: none;
  }
}
</style>
