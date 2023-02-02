<template>
  <div>
    <navbar />
    <login/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LoginPage",
});
</script>

<style>

body {
    background-color: #f7f7f7;
  }

@media(max-width: 574px) {
  body {
    background-color: #fff;
  }
#image{
  display: none;
}
}
</style>
