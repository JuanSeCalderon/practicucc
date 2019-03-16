<template>  
<div>
<b-navbar class="navbar fixed-top" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand :to="{name:'Inicio'}" id="logo"> Casa LogiEventos</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name:'Eventos'}" exact class="Letranavbar"> </b-nav-item>
          <b-nav-item :to="{name:'Eventos'}" class="Letranavbar">Eventos</b-nav-item>
          <b-nav-item :to="{name:'Galeria'}" class="Letranavbar">Galeria</b-nav-item>
          <b-nav-item :to="{name:'Contacto'}" class="Letranavbar">Contacto</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2 buscarcuadro" type="text" placeholder="Buscar"/>
            <b-nav-item :to="{name:'buscar'}" size="sm" class="my-2 my-sm-0">
              <i class="fas fa-search"></i>
            </b-nav-item>
          </b-nav-form>

          <b-collapse is-nav class="nav_collapse">
            <b-nav-item :to="{name:'carrito'}">
              <i class="fas fa-shopping-bag"></i>
            </b-nav-item>

            <b-nav-item @click="showModal">
              <i class="fas fa-user"></i>
            </b-nav-item>
            <b-modal ref="myModalRef" id="modalxl" size="xl" centered hide-footer hide-header>
              <b-container class="bv-example-row">
                <b-row>
                  <b-col>
                    <div class="d-block text-center">
                      <h2 class="logo2">Fashion</h2>
                      <h6 class="letramodal">Elija una de las opciones para confirmar su identidad</h6>
                      <b-card
                        overlay
                        img-src="https://www.google.com/search?q=login+icon+png&tbm=isch&source=iu&ictx=1&fir=Nhb2CvWg04znMM%253A%252C6s7k4sEEIirsAM%252C_&vet=1&usg=AI4_-kQm34hzXDZ2Ag9q_mpL8gRMMBDKjw&sa=X&ved=2ahUKEwjS5JG46oXhAhXts1kKHd0TC-sQ9QEwBHoECAUQDA#imgrc=Nhb2CvWg04znMM:&vet=1"
                      ></b-card>
                    </div>
                  </b-col>
                  <b-col>
                    <div>
                      <b-tabs content-class="mt-2">
                        <b-tab title="Registrarse" active>
                          <div>
                            <b-form @submit.prevent>
                              <b-row class="mt-3">
                                <b-col>
                                  <b-input
                                    type="text"
                                    id="textNambe"
                                    required
                                    placeholder="Nombre"
                                  />
                                </b-col>
                                <b-col>
                                  <b-input
                                    type="text"
                                    id="textApellido"
                                    required
                                    placeholder="Apellido"
                                  />
                                </b-col>
                              </b-row>
                              <b-row class="mt-3">
                                <b-col>
                                  <b-input
                                    type="email"
                                    id="textEmail"
                                    required
                                    placeholder="Correo electronico"
                                  />
                                </b-col>
                                <b-col>
                                  <b-input
                                    type="tel"
                                    id="textTelefono"
                                    required
                                    placeholder="Numero de celular"
                                  />
                                </b-col>
                              </b-row>

                              <b-input
                                class="mt-3"
                                type="password"
                                id="textPassword"
                                aria-describedby="passwordHelpBlock"
                                required
                                placeholder="Contraseña"
                              />

                              <b-form-text
                                id="alertaRegistro"
                              >Al hacer clic en "Registrarse", aceptas nuestras Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</b-form-text>
                              <b-button class="mt-3" variant="outline-primary">Registrarse</b-button>
                            </b-form>
                          </div>
                        </b-tab>
                        <b-tab title="Iniciar sesiòn">
                          <b-form @submit.prevent>
                            <b-input
                              class="mt-3"
                              type="email"
                              id="textEmail"
                              required
                              placeholder="Correo electronico"
                            />
                            <b-input
                              class="mt-3"
                              type="password"
                              id="textPassword"
                              aria-describedby="passwordHelpBlock"
                              required
                              placeholder="Contraseña"
                            />
                            <b-button class="mt-3" variant="outline-primary">Ingresar</b-button>
                          </b-form>
                        </b-tab>
                      </b-tabs>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </b-modal>
          </b-collapse>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" />
    <b-carousel-slide caption="Four slide" img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide caption="Five Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Six Slide" img-src="https://picsum.photos/1024/480/?image=22" />
  </b-carousel>
</div>
<div>

</div>
 <hr style="color: black;" noshade="noshade" width="100%"/>
 <h2>Nuestras experiencias</h2>
 <p>
 Somos una Empresa dedicada a la organización de eventos tales como fiestas infantiles, 15 años, bodas, aniversarios y eventos empresariales.

Casa Logieventos tiene  una trayectoria de 9 años de experiencia.


Todo nuestro trabajo está orientado a cumplir con las exigencias de los clientes que buscan la exclusividad en el diseño para sus eventos 
 </p>
<br>
 <hr style="color: black;" noshade="noshade" width="100%"/>

  <div class="mt-4">
    <h4>Left and Right (or Start and End)</h4>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-right>
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>

    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
      <b-card-text>
        Some quick example text to build on the card and make up the bulk of the card's content.
      </b-card-text>
    </b-card>
  </div>

 <hr style="color: black;" noshade="noshade" width="100%"/>
 <br>
 <br>
 <h2 align="center">Nuestro trabajo</h2>
 <br>
 <br>
 <table class="egt" align="center" width="100%" >
  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2066004936988483%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1926038457651799%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2075732152682428%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2184693985115111%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

</table>
 </div>
</template>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>


