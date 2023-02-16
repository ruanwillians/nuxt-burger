<template>
  <div>
    <navbar/>
    <carroussel />
    <div style="display: flex; justify-content: center;">
      <h1 class="mt-4 mb-3">Promoções</h1>
    </div>
    <div>
       <product/>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

