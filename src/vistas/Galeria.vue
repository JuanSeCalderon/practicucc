<template>

  <div>
  <b-breadcrumb :items="items" />
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
            <b-nav-item :to="{name:'buscar'}" size="sm" class="my-2 my-sm-0">
            <i class="fas fa-search"></i>
            </b-nav-item>
        </b-nav-form>    
        </b-collapse>
      </b-navbar-nav>
  </b-navbar>
  <div>
  <b-card 
    overlay
    img-src="https://i.ytimg.com/vi/8LH2DgvJJQo/maxresdefault.jpg"
    img-alt="Card Image"
    
  >
       <b-button variant="secondary">15 Años</b-button>
  </b-card>
</div>
 <div>
  <b-card 
    overlay
    img-src="http://maneltamayo.com/wp-content/uploads/2015/11/boda-michelle-bradley-novios-pose-manel-tamayo-fotogrago-bodas.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Bodas</b-button>
  </b-card>
</div>
 <div>
  <b-card 
    overlay
    img-src="http://www.revistacompensar.com/wp-content/uploads/2018/02/15-de-febrero-10.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Fiestas Infantiles</b-button>
  </b-card>
</div>
<div>
  <b-card 
    overlay
    img-src="https://colegiomayordelosandes.edu.co/wp-content/uploads/2018/03/primeras-comuniones-cma3-1024x683.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Primeras Comuniones</b-button>
  </b-card>
</div>
<div>
  <b-card 
    overlay
    img-src="https://elduendelibrecom.files.wordpress.com/2018/03/universidad-gratis.jpeg?w=950"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Grados</b-button>
  </b-card>
</div>
<div>
  <b-card 
    overlay
    img-src="https://www.violetarodriguez.com/images/com_osgallery/gal-13/original/fotos-bautizo-madrid-021B349321-982C-882E-B8C8-1A457BAC2C3C.jpg"
    img-alt="Card Image"
    
  >
      <b-button variant="secondary">Bautizos</b-button>
  </b-card>
</div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            text: 'Casa LogiEventos',
            href: '#'
          },
          {
            text: 'Eventos',
            href: '#'
          },
          {
            text: 'Galeria',
            active: true    
          },
          {
            text: 'Contacto',
             href: '#'
          }
        ]
      }
    }
  }
  
</script>