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

    <div class="foster">
Aqui viene el pie de pagina 
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