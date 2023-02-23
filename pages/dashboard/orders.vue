<template>
  <div>
    <navbar />
    <dashboard :contents="orders" title="Pedidos"/>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState } from "vuex";


export default Vue.extend({
  name: "DashboardPage",

  data(){
    return {
      orders: []
    }
  },

  computed: {
    ...mapState('UserStore', [ 'token']),
  },

  created(){
    this.$axios.get('/order', {
      headers: {
            Authorization: `Bearer ${this.token}`,
          },
      })
    .then((response) => {
      this.orders.push(response.data)
    })
    .catch((err) => {
      return err
    })
  }

});
</script>

<style>
body {
  background-color: #f7f7f7;
}

@media (max-width: 574px) {
  body {
    background-color: #fff;
  }
  #image {
    display: none;
  }
}
</style>
