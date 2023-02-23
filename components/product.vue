<template>
  <div id="container" style="display:flex; flex-wrap: wrap; justify-content: center;" >
    <b-card-group v-for="product in products[0]" :key="product.id">
      <b-card
        :title="product.name"
        :img-src="'https://burger-production.up.railway.app/uploads/'+product.path"
        :sub-title="'R$:'+product.price"
        img-alt="Image"
        tag="article"
        style="max-width: 17rem"
        class="mb-2 ml-3 mr-3 mt-2"
      >
      <b-button variant="success">Adicionar ao carrinho</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: "product",

  data(){
    return {
      products: []
    }
  },

  mounted(){
    this.$axios.get('/products')
    .then((response) => {
      this.products.push(response.data)
    })
    .catch((err) => {
      return err
    })
  }
};

</script>

<style>
</style>
