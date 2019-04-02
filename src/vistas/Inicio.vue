<template>  

<div>
<b-navbar class="navbar fixed-top" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand :to="{name:'Inicio'}" id="logo" class="nameInicio"> Casa Logieventos</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name:'Eventos'}" > </b-nav-item>
          <b-nav-item :to="{name:'Eventos'}" class="nameroute" >Eventos</b-nav-item>
          <b-nav-item :to="{name:'Galeria'}" class="nameroute" >Galeria</b-nav-item>
          <b-nav-item :to="{name:'Contacto'}" class="nameroute" >Contacto</b-nav-item>
          
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
           <b-collapse is-nav class="nav_collapse">
            <a href="https://www.facebook.com/bodaslogieventos/" target="_blank"><img alt="FanPage Casa Logieventos" src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png" width=32 height=32  /></a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/logieventos/?hl=es-la" target="_blank"><img alt="Insta Casa Logieventos" src="https://lh5.googleusercontent.com/-2cd4qn_7yDs/UIqEfqncDaI/AAAAAAAABfw/qhUaWfiH7DU/s32/instagram32.png" width=32 height=32  /></a>&nbsp;&nbsp;&nbsp;
            <a href="https://api.whatsapp.com/send?phone=573143182893&text=Hola,%20quisiera%20alquilar%20un%20servicio%20de%20eventos" target="_blank"><img alt="Whatsapp Casa Logieventos" src="../assets/WhatsApp.png" width=32 height=32  /></a>&nbsp;&nbsp;
          

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 buscarcuadro" type="text" placeholder="Buscar"/>
            <b-nav-item :to="{name:'Buscar'}" size="sm" class="nameroute">Buscar</b-nav-item>
              <i class="fas fa-search"></i>
          </b-nav-form>

<div>
  <b-button v-b-modal.modal1> <img alt="Login" src="../assets/Login.png" width=32 height=32/></b-button>

  <!-- Modal Component -->
  <b-modal id="modal1" title="Bienvenido">
  <div class="d-block text-center">
                      <h2>Casa Logieventos</h2>
                      
                    <!--  <b-card
                        overlay
                        :img-src="require('../assets/empresa.png')"
                      ></b-card>-->
                    </div>
        <md-tab md-label="Iniciar sesiòn">
                        <div>
                          <b-form @submit.prevent="loginClientes">
                            <b-input
                              class="mt-3"
                              name="email"
                              type="text"
                              required
                              v-model="email"
                              placeholder="Correo electronico"
                            />
                            <b-input
                              class="mt-3"
                              name="password"
                              type="password"
                              v-model="password"
                              required
                              aria-describedby="passwordHelpBlock"
                              placeholder="Contraseña"
                            />
<br>
    <p align="left" ><input type="checkbox" name="traslado"><label>Recordar usuario</label></p>
                           
                            <b-button
                              class="mt-3 botonModal"
                              variant="outline-primary"
                              type="submit"
                            >Iniciar sesiòn</b-button>
                          </b-form>
                        </div>
                      </md-tab>
                     <div>
  <br>
  <b-button v-b-modal.modal-1 variant="outline-primary">Registrarme</b-button>

  <!-- Modal Component -->
  <b-modal id="modal-1" title="Se parte de nuestros clientes">
    <p class="my-4" >Registrate</p>
    <md-tab md-label="Registro">
                          <div><b-form @submit.prevent="createClientes">
                            <b-row class="mt-3">
                              <b-col>
                                <b-input name="nombre" type="text" required placeholder="Nombre"/>
                              </b-col>
                              <b-col>
                                <b-input
                                  name="apellido"
                                  type="text"
                                  required
                                  placeholder="Apellido"
                                />
                              </b-col>
                            </b-row>
                            <b-row class="mt-3">
                              <b-col>
                                <b-input
                                  name="email"
                                  type="text"
                                  required
                                  placeholder="Correo electronico"
                                />
                              </b-col>
                              <b-col>
                                <b-input
                                  name="celular"
                                  type="tel"
                                  required
                                  placeholder="Numero de celular"
                                />
                              </b-col>
                            </b-row>

                            <b-input
                              class="mt-3"
                              name="password"
                              type="password"
                              aria-describedby="passwordHelpBlock"
                              required
                              placeholder="Contraseña"
                            />
                            <b-button
                              class="mt-3 botonModal"
                              variant="outline-primary"
                              type="submit"
                            >Registrarse</b-button>
                          </b-form>
                           </div>
                      </md-tab>
  </b-modal>
</div>
           </b-modal>
  
</div>
             
          </b-collapse>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
    <b-carousel-slide caption="First slide" class="ImgTamaño" :img-src="require('../assets/Imagen 1.jpg')"/>
    <b-carousel-slide caption="Second Slide" class="ImgTamaño" :img-src="require('../assets/Imagen2.png')"/>
    <b-carousel-slide caption="Third Slide" class="ImgTamaño" :img-src="require('../assets/Imagen 3.jpg')"/>
    <b-carousel-slide caption="Four slide" class="ImgTamaño" :img-src="require('../assets/Imagen4.png')"/>
    <b-carousel-slide caption="Five Slide" class="ImgTamaño" :img-src="require('../assets/Imagen 7.jpg')"/>
    <b-carousel-slide caption="Six Slide" class="ImgTamaño" :img-src="require('../assets/Imagen 6.jpg')"/>
    <b-carousel-slide caption="Seven Slide" class="ImgTamaño" :img-src="require('../assets/Imagen5.png')"/>
  </b-carousel>
</div>
<div>

</div>
 <hr style="color: black;" noshade="noshade" width="100%"/>
 <h2 class="letraTitulo">Una breve Reseña historica</h2>
<p class="texto" >Casa Logieventos fue fundada en 2007 de la mano de una pareja emprendedora siendo los dueños  Mary Rojas y Jhon Alexander Babativa como empresa pionera de la ciudad de Villavicencio, Meta con especialidad en eventos lucrativos.
<p>
Cuenta con un equipo profesional y muy bien formado para garantizar un servicio de calidad a la altura del evento. </p>
<p>Somos perfeccionistas, cercanos y detallistas. Nos gustan las cosas bien hechas y sobre todo; hechas con amor, por lo que dejamos la huella de satisfacción en cada evento para conseguir la felicidad máxima de nuestros clientes.</p>

 <b-nav-item :to="{name:'Contacto'}" ><b-button variant="outline-info" class="letraTitulo" >Contactanos ya!</b-button></b-nav-item>
<br>
 <hr style="color: black;" noshade="noshade" width="100%"/>

  <div class="mt-4">
    <h2 class="letraTitulo" >Calidad y servicios</h2>
    <b-card :img-src="require('../assets/fiestaa.png')" img-alt="Card image" img-left class="mb-3" footer-text-variant>
      <b-card-text class="texto" >
      Podemos ayudarlos con cualquier fiesta que vaya a organizar, ajustándonos a sus gustos y presupuestos, siempre asistidos por un equipo profesional que está a disposición 24/7 para nuestros clientes.
</b-card-text>
<ul align="left" class="texto">
<li type="square">Bautizos</li>
<li type="square">Baby Showers</li>
<li type="square">Comuniones</li>
<li type="square">Cumpleaños</li>
<li type="square">Fiestas temáticas</li>
</ul>
    </b-card>

    <b-card :img-src="require('../assets/empresa.png')" img-alt="Card image" img-right class="mb-3">
      <b-card-text class="texto">
        Ofrecemos un servicio completo de organización tanto integral como parcial de todo lo necesario para este servicio
        
      </b-card-text>
   <ul align="left" class="texto">
<li type="square">Material audiovisual y técnico</li>
<li type="square">Restauración</li>
<li type="square">Meseros</li>
<li type="square">Buffe</li>
<li type="square">Eventos coporativos</li>
</ul> 
    </b-card>

    <b-card :img-src="require('../assets/recordatorio.png')" img-alt="Card image" img-left class="mb-4">
      <b-card-text class="texto">
        El primer paso está claro y la decisión tomada. A partir de este momento, las dudas y dificultades aparecen al enfrentaros a un tema ajeno a nosotros.
Queremos ofrecerles la ayuda necesaria para facilitar todos los pasos a seguir y conseguir captar la idea que tienes en mente para plasmarla el mejor momento de dicho recuerdo.
Ofrecemos nuestro servicio más completo para que partamos del punto que sea donde se encuentre dichos sentimientos y podamos crearla junto a ustedes de manera única y perfecta.

      </b-card-text>
   <ul align="left" class="texto">
<li type="square">Aniversarios</li>
<li type="square">Graduaciones</li>
<li type="square">Jubilaciones</li>
<li type="square">Bodas</li>
</ul> 
    </b-card>
  </div>
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
<div class="foster">
Aqui viene el pie de pagina 
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
.ImgTamaño {
  height: 590px;

}
.mb-3{
  height: 230px;
  
}
.mb-4{
  height: 235px;
}
.nameroute {
font-family: Century Gothic, sans-serif;
}
.nameInicio{
font-style: oblique;
font-family: mountains;
  font-size: 150%;
}

.letraTitulo{
  font-family: mountains;
  font-style: oblique;
}
.texto {
font-family: Verdana, Arial, Helvetica, sans-serif;
}
.foster{
  height: 15vh;
  background-color: #666;
}

</style>
