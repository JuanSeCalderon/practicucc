<template>

  <div>
  <div class="container">
  <b-card 
    overlay
    img-src="https://i.ytimg.com/vi/8LH2DgvJJQo/maxresdefault.jpg"
    img-alt="Card Image"
    
  >
       <b-button variant="secondary">15 Años</b-button>
  </b-card>
</div>
 <div class="container">
  <b-card 
    overlay
    img-src="http://maneltamayo.com/wp-content/uploads/2015/11/boda-michelle-bradley-novios-pose-manel-tamayo-fotogrago-bodas.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Bodas</b-button>
  </b-card>
</div>
 <div class="container">
  <b-card 
    overlay
    img-src="http://www.revistacompensar.com/wp-content/uploads/2018/02/15-de-febrero-10.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Fiestas Infantiles</b-button>
  </b-card>
</div>
<div class="container">
  <b-card 
    overlay
    img-src="https://colegiomayordelosandes.edu.co/wp-content/uploads/2018/03/primeras-comuniones-cma3-1024x683.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Primeras Comuniones</b-button>
  </b-card>
</div>
<div class="container">
  <b-card 
    overlay
    img-src="https://elduendelibrecom.files.wordpress.com/2018/03/universidad-gratis.jpeg?w=950"
    img-alt="Card Image"
    
    
  >
      <b-button variant="secondary">Grados</b-button>
  </b-card>
</div>
<div class="container">
  <b-card 
    overlay
    img-src="https://www.violetarodriguez.com/images/com_osgallery/gal-13/original/fotos-bautizo-madrid-021B349321-982C-882E-B8C8-1A457BAC2C3C.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Bautizos</b-button>
  </b-card>
</div>
 <div id="Galeria">
        <image-wall>  <h2>Hola</h2>
        </image-wall>
    </div>

</div>
</template>
<script>
import ImageWall from "../components/ImageWall";
    export default {
        name: 'Galeria',
        components: {ImageWall}}
</script>

<style scoped >
.container {
  padding: 40px 80px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
}

</style>