<template>
  <div >
    <b-container class="mt-5">
      <b-row>
        <b-col cols="3">
          <b-card>
            <img src="../assets/logo.svg" style="height: 200px">
            <b-card-title>Dashboard</b-card-title>
            <b-list-group>
              <b-list-group-item href="/dashboard/orders">Pedidos</b-list-group-item>
              <b-list-group-item href="/dashboard/categories">Categorias</b-list-group-item>
              <b-list-group-item href="/dashboard/products">Produtos</b-list-group-item>
              <b-list-group-item href="/dashboard/users">Usuários</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
        <b-col cols="9">
          <b-card>
            <b-card-title>{{ title }}</b-card-title>
            <b-list-group v-for="content in contents" :key="content.id">
              <b-list-group-item href="#">{{ content }}</b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "dashboard",
  props: {contents: Array, title: String},

  created(){
    console.log(this.content)
  }
});
</script>

<style>

</style>
