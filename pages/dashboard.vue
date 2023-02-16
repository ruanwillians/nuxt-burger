<template>
  <div>
    <navbar />
    <h1>Dashboard</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DashboardPage",
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
