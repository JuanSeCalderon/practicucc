<template>  
<html>
  <head></head>
  <body>
<div>
<b-navbar class="navbar fixed-top" toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"/>
      <b-navbar-brand :to="{name:'Inicio'}" id="logo" class="nameInicio"> Casa Logieventos</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name:'Eventos'}" > </b-nav-item>
          <b-nav-item :to="{name:'Eventos'}" class="nameroute" ><strong class="s1">/</strong>Eventos</b-nav-item>
          <b-nav-item :to="{name:'Galeria'}" class="nameroute" ><strong  class="s2">/</strong>Galeria</b-nav-item>
          <b-nav-item :to="{name:'Contacto'}" class="nameroute" ><strong  class="s3">/</strong>Contacto</b-nav-item>
          
          
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
  <form ref="from"  lazy-validation
  @submit.prevent="RegistroCliente">
  <b-modal id="modal-1" title="Se parte de nuestros clientes">
    <p clasnos="my-4" >Registrate</p>
    <md-tab md-label="Registro">
                          <div><b-form @submit.prevent="RegistrarCliente" ref="form">
                            <b-row class="mt-3">
                              <b-col>
                                <b-input name="Nombre" 
                                type="text" 
                                required placeholder="Nombre"
                                v-model="Nombre"
                                />
                              </b-col>
                              <b-col>
                                <b-input
                                  name="Apellido"
                                  type="text"
                                  required
                                  placeholder="Apellido"
                                  v-model="Apellido"
                                />
                              </b-col>
                            </b-row>
                            <b-row class="mt-3">
                              <b-col>
                                <b-input
                                  name="Email"
                                  type="text"
                                  required
                                  placeholder="Correo electronico"
                                  v-model="Email" 
                               />
                              </b-col>
                              <b-col>
                                <b-input
                                  name="Cel"
                                  type="tel"
                                  required
                                  placeholder="Numero de celular"
                                  v-model="Cel"
                                />
                              </b-col>
                            </b-row>

                            <b-input
                              class="mt-3"
                              name="Contra"
                              type="password"
                              aria-describedby="passwordHelpBlock"
                              required
                              placeholder="Contraseña"
                              v-model="Contra"
                            />
                            <b-button
                              class="mt-3 botonModal"
                              variant="outline-primary"
                              type="submit"
                             
                            >Registrarse</b-button>
                          </b-form>
                           </div>
                      </md-tab>
  </b-modal></form>
</div>
           </b-modal>
  
</div>
             
          </b-collapse>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

  
</div></body>
</html>
    </template>

<style scoped>

template{
  background-image: url("../assets/fondo.jpg");
  background-size: 100% 100%;
  background-attachment: fixed;
  border: transparent;
}

.ImgTamaño {
  height: 590px;

}
.mb-3{
  height: 250px;
  
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
</style>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      nombreRegister: " ",
      apellidoRegister: " ",
      emailRegister: "",
      telefonoRegister:"",
      contrasenaRegister:"",
      errorMessage: '',
      successMessage: '',
      Nombre: "",
      NombreRules: [
        v => !!v || "El nombre es obligatorio"
      ],
      Apellido: "",
      ApellidoRules: [
        v => !!v || "El apellido es obligatorio"
      ],
      email: "",
      emailRules: [
        v => !!v || "El Email es obligatorio",
        v => /.+@.+/.test(v)||"Email invalido"
      ],
      show1: false,
      password: '',
      rules: {
        required: value => !!value || 'La contraseña es obligatoria',
        min: v => v.length >= 8|| 'Minimo 8 digitos',
        emailMatch: () => ('El correo electronico y la contraseña ')

      },
  check: ''
    };
  },

  methods: {
    registrarUsuario(){
      console.log(this.nombreRegister)
    },
    redirect(ruta){
      this.$router.push(ruta);
    },
    validate(){
      if(this.$refs.form.validate()){
        this.snackbar = true;
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000
        });
        Toast.fire({
          type:"Error",
          title:"Llenar todos los campos"
        });
      }
    },
    setMessages(res){
      if (res.data.error){
        this.errorMessage = res.data.message;
      } else {
        this.successMessage = res.data.message;
      }
      setTimeout (() => {
        this.errorMessage = false;
        this.successMessage = false;
      }, 2000);
    },

    RegistrarCliente (e){
      axios
      .post (
        "http://localhost/practicucc-master/src/vistas/Registro.php?action=create",
        new FormData(e.target)
      ).then(res =>{
        this.setMessages(res)
      });
    }
  },
 };  
</script>
