<template>  
<div>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      :interval="4000"
      img-width="800"
      img-height="480"
      
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/Imagen 1.jpg')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/Imagen2.png')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/imagen 3.jpg')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/Imagen4.png')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/Imagen 7.jpg')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/imagen 6.jpg')"/>
    <b-carousel-slide caption="" class="ImgTamaño" :img-src="require('../assets/Imagen5.png')"/>
  </b-carousel>
</div>



 <hr style="color: black;" noshade="noshade" width="100%"/>

 
 <h2 class="letraTitulo">Una breve Reseña historica</h2>
<p class="texto" >Casa Logieventos fue fundada en 2007 de la mano de una pareja emprendedora siendo los dueños  Mary Rojas y Jhon Alexander Babativa como empresa pionera de la ciudad de Villavicencio, Meta con especialidad en eventos lucrativos.
<p>
Cuenta con un equipo profesional y muy bien formado para garantizar un servicio de calidad a la altura del evento. </p>
<p>Somos perfeccionistas, cercanos y detallistas. Nos gustan las cosas bien hechas y sobre todo; hechas con amor, por lo que dejamos la huella de satisfacción en cada evento para conseguir la felicidad máxima de nuestros clientes.</p>

 <b-button variant="outline-info" class="botones" :to="{name:'cotizacion'}" >Contactanos ya!</b-button>
<br>
<hr style="color: black;" noshade="noshade" width="100%"/>
<br>
<div class="container1">
  <section class="intro1"></section>

    <div class="meta">
      <div class="meta__inner">
        <h3>Fiesta</h3>
        <p>Podemos ayudarlos con cualquier fiesta que vaya a organizar, ajustándonos a sus gustos y presupuestos, siempre asistidos por un equipo profesional que está a disposición 24/7 para nuestros clientes. <a href="#">Leer más...</a></p>
      </div>
    </div>
    
</div><br>
<div class="container1">
  <section class="intro2"></section>

    <div class="meta">
      <div class="meta__inner">
        <h3>Administración</h3>
        <p>Ofrecemos un servicio completo de organización tanto integral como parcial de todo lo necesario para este servicio. <a href="#">Leer más...</a></p>
      </div>
    </div>
    
</div><br>
<div class="container1">
  <section class="intro3"></section>

    <div class="meta">
      <div class="meta__inner">
        <h3>Recordar es vivir</h3>
        <p>Queremos ofrecerles la ayuda necesaria para facilitar todos los pasos a seguir y conseguir captar la idea que tienes en mente para plasmar el mejor momento de dicho recuerdo.
Ofrecemos nuestro servicio más completo para que partamos del punto que sea donde se encuentre dichos sentimientos y podamos crearla junto a ustedes de manera única y perfecta. <a href="#">Leer más...</a></p>
      </div>
    </div>
    
</div>

        <hr class="featurette-divider">






 <hr style="color: black;" noshade="noshade" width="100%"/>
 <br>
 <br>
 <br>
<h1 class="letraTitulo">Actividades realizadas <i class="fa fa-heart"></i></h1>

<div class="container">
  <div class="row">
    <div class="col-sm-6">
   
<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2066004936988483%2F&show_text=0&width=560"></iframe>
</div>
    </div>
    <div class="col-sm-6">

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1926038457651799%2F&show_text=0&width=560"></iframe>
</div>
    </div>
    <div class="col-sm-6">

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1945084715747173%2F&show_text=0&width=560"></iframe>
</div>
    </div>
    <div class="col-sm-6">

<div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2184693985115111%2F&show_text=0&width=560"></iframe>
</div>
    </div>
    <div class="col-sm-6">
 
    </div>
  </div>
</div>

</div>
</template>

<script scope>


  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
 
</script>
<style scoped>
*,
*:before,
*:after {
  box-sizing: border-box;
}

.container1 {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 70px;
  position: relative;
}

.intro1 {
  position: relative;
  min-height: 300px;
  height: 100%;
  width: 100%;
  background: transparent url(https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/58374122_2270788996510075_3114577169137795072_n.jpg?_nc_cat=107&_nc_ht=scontent.fbog11-1.fna&oh=b6736a4e18e03f2fd63c03a0f1798fbc&oe=5D694FA4) top center no-repeat;
  background-size: 100%;
  overflow: hidden;
  transition: all .72s ease-in-out;
}
.intro2 {
  position: relative;
  min-height: 300px;
  height: 100%;
  width: 100%;
  background: transparent url(https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/21150096_1926027950986183_1672347389300530932_n.jpg?_nc_cat=109&_nc_ht=scontent.fbog11-1.fna&oh=809f40df87ea40769e06a2a48fa65965&oe=5D9FBDB3) top center no-repeat;
  background-size: 100%;
  overflow: hidden;
  transition: all .72s ease-in-out;
}
.intro3 {
  position: relative;
  min-height: 300px;
  height: 100%;
  width: 100%;
  background: transparent url(https://scontent.fbog11-1.fna.fbcdn.net/v/t1.0-9/27657004_1995381470717497_8016716330715295767_n.jpg?_nc_cat=111&_nc_ht=scontent.fbog11-1.fna&oh=78afe81eff9d036a2b89668175dbb2af&oe=5D66FA88) top center no-repeat;
  background-size: 100%;
  overflow: hidden;
  transition: all .72s ease-in-out;
}

.intro:after {
  content: '';
  display: block;
  position: absolute;
  /* width: 100%; */
  height: 500px;
  right: -100%;
  left: 0;
  transform: skew(100deg);
  background: #fff;
  bottom: -70%;
  box-shadow: inset 1px 0px 5px 0px rgba(204, 204, 204, 0.72);
}

.container1:after {
  content: '';
  max-width: 300px;
  width: 100%;
  margin: 0% auto 0;
  position: absolute;
  left: 0;
  bottom: 0;
  top:0;
  right: 0;
  box-shadow: 0px 5px 5px 0px rgba(204, 204, 204, 0.72);
  z-index: -1;
  transition: all .52s ease-in-out;
}

.meta {
  max-width: 300px;
  width: 100%;
  margin: 0% auto 0;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding-top: 110px;
  overflow: hidden;
  
  transition: all .52s ease-in-out;
}

.meta__inner {
  padding: .25rem 1rem;
  line-height: 1.5rem;
  position: relative;  
  background: #fff;
  z-index: 15;
  background: #fff;
  border: 1px solid #ccc;
  border-top: none;
}

.meta:after {
  content: '';
  display: block;
  position: absolute;
  left:0;
  right: 0;
  top: 80px;
  max-width: 300px;
  height: 300px;
  background: #fff;
  border: 1px solid #ccc;
  transform: rotate(90deg) skew(10deg);
  z-index: 4;
}

h3 {
    position: relative;
    font-family: sans-serif;
    font-weight: 300;
    border-left: 4px solid #e91e63;
    padding-left: .72rem;  
}

p {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: .85rem;
  font-weight: inherit;
  color: #555;
  text-align: justify;
}

p a {
  color: #e91e63;
  text-decoration: none;
  opacity: .72;
  
  transition: all .27s ease-in-out;
}

p a:hover {
  opacity: 1;
  text-decoration: underline;
}
.container1:hover .meta{
  transform: translateY(5px);
}

.container1:hover .intro {
  transform: translateY(-5px);
}

.container1:hover:after {
  transform: translateY(5px);
}
.container {
  margin-bottom: 20px;
  padding-bottom: 50px;
}
h1, h4 {
  text-align: center;
  margin-bottom: 50px;
}
h1 i {
  color: pink;
}
.ImgTamaño {
  height: 590px;

}
.mb-3{
  height: 100px;
  width: 1200px;
}

.mb-4{
  height: 235px;
}
.nameroute {
font-family: Century Gothic, sans-serif;

}
.nameInicio{
text-align: left; 
font-family: Comic Sans MS; 
font-weight:bold; 
font-size: 30px; 
color: #ffc1d3; 
text-shadow: -1px 0 #414D68, 0 1px #414D68, 1px 0 #414D68, 0 -1px #414D68, -2px 2px 0 #414D68, 2px 2px 0 #414D68, 1px 1px #414D68, 2px 2px #414D68, 3px 3px #414D68, 4px 4px #414D68, 5px 5px #414D68; 
}

.botones{
  cursor:pointer;
}
.letraTitulo{
  font-family: mountains;
  font-style: oblique;
}
.texto {
font-family: Verdana, Arial, Helvetica, sans-serif;
}
.efectRosa img {
transition: all 0.2s linear;
}
.efectRosa .mascara {
opacity: 0;
transition: all 0.3s ease-in-out;
}
.efectRosa h2 {
transform: translateX(-200px);
opacity: 0;
transition: all 0.7s ease-in-out;
}
.efectRosa p {
transform: translateX(230px);
opacity: 0;
transition: all 0.4s linear;
}
.efectRosa a.link{
opacity: 0;
transition: all 0.4s ease-in-out;
transform: translateY(230px)
}
.efectRosa:hover img {
transform: scale(1.1);
}
.efectRosa:hover .mascara {
opacity: 1;
}
.efectRosa:hover h2,
.efectRosa:hover p,
.efectRosa:hover a.link {
opacity: 1;
transform: translateX(0px);
}
.efectRosa:hover p {
transition-delay: 0.1s;
}
.efectRosa:hover a.link {
transition-delay: 0.2s; 
transform: translateY(0px);
}
.s1 {
  color: #80C9D8;
  font: bold 200% monospace;

}
.s2 {
  color: #D880CC;
  font: bold 200% monospace;
}
.s3 {
  color: #74E715;
  font: bold 200% monospace;
}
img{
  padding-bottom: 0;
}
</style>
