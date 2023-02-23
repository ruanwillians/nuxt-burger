<template>
  <div>
    <div class="carroussel">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000; border-radius: 5px"
        fade
        indicators
        img-width="1920"
        img-height="1080"
      >
        <b-carousel-slide v-for="category in categories[0]" :key="category.id"
          :img-src="'https://burger-production.up.railway.app/uploads/'+category.path"
        >
          <h3>{{ category.name }}</h3>
          <b-button class="my-2 my-sm-" variant="success"
            >Acesse {{ category.name }}</b-button
          >
        </b-carousel-slide>

      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "carroussel",

  data(){
    return {
      categories: []
    }
  },

  mounted(){
    this.$axios.get('/category')
    .then((response) => {
      this.categories.push(response.data)
      console.log(this.categories)
    })
    .catch((err) => {
      return err
    })
  }
};
</script>

<style>
img {
  max-height: 480px;
}
@media only screen and (max-width: 500px) {
  .carroussel img {
    height: 35vh;
  }
}
</style>
