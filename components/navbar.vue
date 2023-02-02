<template>
  <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand>
        <img src="../assets/logo.svg" style=" height: 55px;" />
    </b-navbar-brand>

    <div>
      <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-navbar-toggle>
      <template>
        <b-icon icon="cart4"></b-icon>
      </template>
    </b-navbar-toggle>
    </div>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item href="/register">Registre-se</b-nav-item>

      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

 <script>

 export default {
   name: "Navbar",
 };

 </script>
<style>
  img {
    margin: 0;
    padding: 0;
  }
</style>
