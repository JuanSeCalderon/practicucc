<template>  
<div>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"
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

 <b-nav-item :to="{name:'Contacto'}" ><b-button variant="outline-info" class="botones" :to="{name:'cotizacion'}" >Contactanos ya!</b-button></b-nav-item>
<br>

<hr class="featurette-divider">
<div class="bg-info text-white" style="font-family: mountains font-style: oblique"><br>
  <h2><i>Recreación</i></h2>
        <div class="texto">
          <div class="col-md-5">
           <!-- <img class="mb-3" src="../assets/fiesta.jpg" alt="Generic placeholder image">-->
          </div>
          
          <div class="contenedor-img efectRosa bg-info text-white">
            
            <h2 class="featurette-heading">Fiestas</h2>
            <p class="bg-info text-white">Podemos ayudarlos con cualquier fiesta que vaya a organizar, ajustándonos a sus gustos y presupuestos, siempre asistidos por un equipo profesional que está a disposición 24/7 para nuestros clientes.</p>
          <div class="mascara">  
                    <ul align="left" class="texto">
                      <li type="square">Bautizos</li>
                      <li type="square">Baby Showers</li>
                      <li type="square">Comuniones</li>
                      <li type="square">Cumpleaños</li>
                      <li type="square">Fiestas temáticas</li> 
                    </ul>  
                </div>
          </div> <div><b-button variant = "dark" class="botones" :to="{name:'Eventos'}" >Ver más</b-button>
          <br></div>
        </div>
</div>
        <hr class="featurette-divider">



<hr class="featurette-divider">
<div class="bg-info text-white" style="font-family: mountains font-style: oblique"><br>
  <h2><i>Glamour</i></h2>
        <div class="texto">
          <div class="col-md-5">
           <!-- <img class="mb-3" src="../assets/fiesta.jpg" alt="Generic placeholder image">-->
          </div>
          
          <div class="contenedor-img efectRosa bg-danger text-white">
            
            <h2 class="featurette-heading">Ejecutivo</h2>
            <p class="bg-danger text-white">Ofrecemos un servicio completo de organización tanto integral como parcial de todo lo necesario para este servicio.</p>
          <div class="mascara">  
                     <ul align="left" class="texto">
<li type="square">Material audiovisual y técnico</li>
<li type="square">Restauración</li>
<li type="square">Meseros</li>
<li type="square">Buffe</li>
<li type="square">Eventos coporativos</li>
</ul>   
                </div>
          </div> <div><b-button variant = "secondary" class="botones" :to="{name:'Eventos'}" >Ver más</b-button>
          <br></div>
        </div>
</div>
        <hr class="featurette-divider">




<hr class="featurette-divider">
<div class="bg-dark text-white" style="font-family: mountains font-style: oblique"><br>
  <h2><i>Momentos</i></h2>
        <div class="texto">
          <div class="col-md-5">
           <!-- <img class="mb-3" src="../assets/fiesta.jpg" alt="Generic placeholder image">-->
          </div>
          
          <div class="contenedor-img efectRosa bg-dark text-white">
            
            <h2 class="featurette-heading">Recordar es vivir</h2>
            <p class="bg-dark text-white">Queremos ofrecerles la ayuda necesaria para facilitar todos los pasos a seguir y conseguir captar la idea que tienes en mente para plasmar el mejor momento de dicho recuerdo.
Ofrecemos nuestro servicio más completo para que partamos del punto que sea donde se encuentre dichos sentimientos y podamos crearla junto a ustedes de manera única y perfecta.
</p>
          <div class="mascara">  
                      <ul align="left" class="texto">
<li type="square">Aniversarios</li>
<li type="square">Graduaciones</li>
<li type="square">Jubilaciones</li>
<li type="square">Bodas</li>
</ul>   
                </div>
          </div> <div><b-button variant = "info" class="botones" :to="{name:'Eventos'}" >Ver más</b-button>
          <br></div>
        </div>
</div>
        <hr class="featurette-divider">



 <hr style="color: black;" noshade="noshade" width="100%"/>
 <br>
 <h2 align="center" class="letraTitulo">Actividades realizadas</h2>
 <br>
 <br>
 <table class="egt" align="center" width="100%" >
  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2066004936988483%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1926038457651799%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1945084715747173%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2184693985115111%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

</table>

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
