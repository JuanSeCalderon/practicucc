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
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2 buscarcuadro" type="text" placeholder="Buscar"/>
            <b-nav-item :to="{name:'buscar'}" size="sm" class="my-2 my-sm-0">
            <i class="fas fa-search"></i>
            </b-nav-item>
        </b-nav-form>    
      </b-navbar-nav>
  </b-navbar>
  <div>
  <b-card-group deck>
  <b-card
    title="Bodas"
    img-src="http://memoflores.com/fotos-de-bodas-01.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Casa Logieventos quiere hacer parte de la boda de tus sueños. Ese momento en el que todo el mundo te mira con sonrisas y lágrimas; es uno de los mejores recuerdos que tendrás.
    </b-card-text>
    <b-button href="#" variant="primary">See more</b-button>
  </b-card>
  <b-card
    title="15 Años"
    img-src="http://www.fiestade15.com/ideas/imagenes/cake_topper_para_pastel_de_15_anos_1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Ya que cumplir 15 años es algo inolvidable, Casa Logieventos quiere hacer parte de ese día tan especial para ti y brindarte tus servicios en eventos, para que tu fiesta sea tan especial como tu lo soñaste... 
    </b-card-text>
    <b-button href="#" variant="primary">See more</b-button>
  </b-card>
  <b-card
    title="Fiestas Infantiles"
    img-src="https://www.somosmamas.com.ar/wp-content/uploads/2018/11/juegos-para-fiestas-infantiles.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Nuestas fiestas son únicas y variadas, poseemos diseños temáticos especiales que incluyen decoración alusiva al tema de la fiesta.  
    </b-card-text>
    <b-button href="#" variant="primary">See more</b-button>
  </b-card>
 <b-card
    title="Primeras Comuniones"
    img-src="http://www.fiestade15.com/ideas/imagenes/cake_topper_para_pastel_de_15_anos_1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     
    </b-card-text>
    <b-button href="#" variant="primary">See more</b-button>
  </b-card>
  </b-card-group>
</div>
</div>
</template>
