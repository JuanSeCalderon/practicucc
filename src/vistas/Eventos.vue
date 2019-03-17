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
    </b-collapse>
  </b-navbar>
</div>
<div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
</template>
