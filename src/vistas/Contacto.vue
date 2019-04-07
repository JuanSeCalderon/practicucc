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
    
    
 <head>
<meta charset="utf-8"/>
<title>Formulario</title>
<link href="styles.css" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400' rel='stylesheet' type='text/css'>
</head>
<table align='center'WIDTH="70%">
<tr><td>
<body>
<h2>¿En que te podemos ayudar?</h2>
<br>
<p>En Casa Logieventos nos encantaría formar parte de tu día especial, por ello te ofrecemos nuestra oficina situada en el Barrio Cooperativo para que CON CITA PREVIA nos conozcamos y puedas contarnos todo lo relativo a tu evento deseado.</p>
<br>
<p>Nos movemos por toda la ciudad de Villavicencio, así que no dudes en contactar con nosotros.</p>
<br>
<p>Para ello, puedes escribirnos un email al correo bodaseventoslogieventos@hotmail.com y lo antes posible nos pondremos en contacto contigo.</p>
<br>
<h4>Direcciones:</h4>
<table><tr>
<th><img src="../assets/ubicacion.png">&nbsp;Calle 13# 25a 10 Barrio Cooperativo</th></tr><br>
<tr><th><img src="../assets/telefono.png">&nbsp;313-293-1003 / 312-504-7139</th></tr><br>
<tr><th><img src="../assets/correo.png">&nbsp;bodaseventoslogieventos@hotmail.com</th></tr></table>
</body>   
    </td>
    <td align='rigth'>
  <img src="../assets/imgencontacto.jpg" class='imagencont'>
  <form action="envio.php" method="post" class="form-consulta" align='center'> 	
    <label>Nombre y apellido: <span class='colorspan' >*</span>
			<input type="text" name="nombre" placeholder="Nombre y apellido" class="campo-form" required>
		</label>
		
		<label>Correo electronico: <span class='colorspan'>*</span>
			<input type="email" name="Correo electronico" placeholder="Email" class="campo-form" required>
		</label>
		
		<label>Consulta: <span class='colorspan'>*</span>
			<textarea name="consulta" class="campo-formt" required></textarea>
      <input type="submit" value="Enviar" class="btn-form">
		</label>
    </form>
    </td></tr>
    
    
    </table>

    
    
    <div class="foster">
Aqui viene el pie de pagina 
</div>
    </div>
</template>

<style>
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
  background-color: #2C3134;
}
.form-consulta {max-width: 550px; background: #eee; padding: 25px; font-family: 'Source Sans Pro', sans-serif;}
.campo-form {width:100%; height:36px; margin:2px 0 6px; padding-left:6px; box-sizing: border-box; border-radius:3px; border:0; font-family: 'Source Sans Pro', sans-serif; font-size:1em;}
.campo-formt {width:100%; height:85px; margin:2px 0 6px; padding-left:5px; box-sizing: border-box; border-radius:3px; border:0; font-family: 'Source Sans Pro', sans-serif; font-size:1em;}
.colorspan {color: #F30315}
.textarea {min-height: 150px!important;}
.btn-form {display: inline-block; border:0; background: #000; height: 46px; line-height: 46px; padding: 0 20px; border-radius: 6px; color:#fff; text-decoration: none; text-transform: uppercase; letter-spacing: 1px}
.btn-form:hover {background: #444}
.imagencont {max-width: 550px; padding: 5px;}
</style>
