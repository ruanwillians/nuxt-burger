<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand>
      <img src="../assets/logo.svg" style="height: 55px" />
    </b-navbar-brand>

    <div style="display: flex; align-items: center;">
      <h6 v-if="user" class="mt-2 mr-2" style="color: #fff" >Olá {{user.username}}</h6>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-navbar-toggle target class="mr-2" >
        <template>
          <b-icon icon="cart4"></b-icon>
        </template>
      </b-navbar-toggle>
    </div>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <div v-if="user">
          <div v-if="admin === false">
             <b-nav-item  href="">Meu perfil</b-nav-item>
          </div>
          <div v-else>
             <b-nav-item  href="">Dashboard</b-nav-item>
          </div>

          <b-nav-item @click="logout" href="/login">Sair</b-nav-item>
        </div>
        <div v-else>
        <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item href="/register">Registre-se</b-nav-item>
        </div>
        <b-nav-item href="/register">Produtos</b-nav-item>


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

 <script>
import { mapState, mapActions, mapGetters} from "vuex";

export default {
  name: "Navbar",

  data(){
  return {
    userInfo: ''
  }
},

  methods: {
    ...mapActions('UserStore',['logout']),
  },

  computed: {
    ...mapState('UserStore', ['user', 'admin']),
    ...mapGetters('UserStore', ['token'])
  },
};
</script>
<style>
img {
  margin: 0;
  padding: 0;
}
</style>
