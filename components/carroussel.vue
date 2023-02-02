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
        <b-carousel-slide
          img-src="https://www.almapg.com.br/wp-content/uploads/2019/05/como_fazer_hamburguer_caseiro.jpg"
        >
          <h3>Nossos burgers</h3>
          <b-button class="my-2 my-sm-" variant="success"
            >Burgers em promoção</b-button
          >
        </b-carousel-slide>
        <b-carousel-slide
          img-src="https://kfcbrasil.com.br/wp-content/uploads/2020/08/BANNERS_SITE_coca.png"
        >
          <h3>Bebidas nós temos</h3>
          <b-button class="my-2 my-sm-" variant="success"
            >Adicione ao seu pedido</b-button
          ></b-carousel-slide
        >
        <b-carousel-slide
          img-src="https://mytbones.com/wp-content/uploads/2016/04/T-Bones_Kelowna_Fresh_Meal_Market_Sweet_potato_fries-1024x480.jpg"
        >
          <h3>Batata rústica!</h3>
          <b-button class="my-2 my-sm-" variant="success"
            >Eu Quero</b-button
          ></b-carousel-slide
        >
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "carroussel",
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
