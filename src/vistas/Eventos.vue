<template>
<div>

 <b-navbar class="navbar fixed-top" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"/>
    <b-navbar-toggle target="nav_collapse" />
    <b-navbar-nav>
    <b-navbar-brand :to="{name:'Inicio'}" id="logo"> Casa LogiEventos</b-navbar-brand>
          <b-nav-item :to="{name:'Eventos'}" exact class="Letranavbar"> </b-nav-item>
          <b-nav-item :to="{name:'Eventos'}" class="Letranavbar">Eventos</b-nav-item>
          <b-nav-item :to="{name:'Galeria'}" class="Letranavbar">Galeria</b-nav-item>
          <b-nav-item :to="{name:'Contacto'}" class="Letranavbar">Contacto</b-nav-item>
        </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
         <b-collapse is-nav class="nav_collapse">
            <a href="https://www.facebook.com/bodaslogieventos/" target="_blank"><img alt="FanPage Casa Logieventos" src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png" width=32 height=32  /></a>&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/logieventos/?hl=es-la" target="_blank"><img alt="Insta Casa Logieventos" src="https://lh5.googleusercontent.com/-2cd4qn_7yDs/UIqEfqncDaI/AAAAAAAABfw/qhUaWfiH7DU/s32/instagram32.png" width=32 height=32  /></a>&nbsp;&nbsp;&nbsp;
            <a href="https://api.whatsapp.com/send?phone=573143182893&text=Hola,%20quisiera%20alquilar%20un%20servicio%20de%20eventos" target="_blank"><img alt="Whatsapp Casa Logieventos" src="../assets/WhatsApp.png" width=32 height=32  /></a>&nbsp;&nbsp;
        <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 buscarcuadro" type="text" placeholder="Buscar"/>
            <b-nav-item :to="{name:'Buscar'}" size="sm" class="Letranavbar">Buscar</b-nav-item>
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
  </b-navbar>
  <div id="Appa">
  <b-card-group deck class="container">
  <b-card 
    title="Bodas"
    img-src="http://memoflores.com/fotos-de-bodas-01.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      Casa Logieventos quiere hacer parte de la boda de tus sueños. Ese momento en el que todo el mundo te mira con sonrisas y lágrimas; es uno de los mejores recuerdos que tendrás.
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  <b-card
    title="15 Años"
    img-src="http://www.fiestade15.com/ideas/imagenes/cake_topper_para_pastel_de_15_anos_1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      Ya que cumplir 15 años es algo inolvidable, Casa Logieventos quiere hacer parte de ese día tan especial para ti y brindarte tus servicios en eventos, para que tu fiesta sea tan especial como tu lo soñaste... 
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
  <b-card-group deck  class="container">
  
  <b-card
    title="Fiestas Infantiles"
    img-src="https://www.somosmamas.com.ar/wp-content/uploads/2018/11/juegos-para-fiestas-infantiles.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      Nuestas fiestas son únicas y variadas, poseemos diseños temáticos especiales que incluyen decoración alusiva al tema de la fiesta.  
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
 <b-card 
    title="Primeras Comuniones"
    img-src="https://www.fomento.edu/pinoalbar/sites/default/files/styles/noticia_interior/public/dsc_5935.jpg?itok=RQD6_d-n"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"  
   
  >
    <b-card-text>
     
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
  <b-card-group deck  class="container">
  <b-card
    title="Grados"
    img-src="https://cordopolis.es/la-ultima-oportunidad/files/2018/04/master_universitario.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  <b-card
    title="Bautizos"
    img-src="https://www.carolbravo.com/wp-content/uploads/Fotografos-bautizos-madrid-00.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
</div>

</div>
</template>
<script>

</script>

<style>
.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.b-card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .b-card-info p {
      opacity: 1;
    }
    .b-card-info, .b-card-info p {
      transition: 0.6s $hoverEasing;
    }
    .b-card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .b-card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .b-card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.b-card {
  justify-content: center;
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.b-card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.b-card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>