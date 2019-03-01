<template>
  <div class="cont-menu">

    <router-link to="/Inicio">
      <p>Inicio</p>
    </router-link>

    <router-link to="/Eventos">
      <p>Eventos</p>
    </router-link>
    
    <router-link to="/Galeria">
      <p>Galeria</p>
    </router-link>

    <router-link to="/Contacto">
      <p>Contacto</p>
    </router-link>

  </div>

</template>

<script>
export default {
  data() {
    return {
      list: ["Inicio", "Eventos", "Galeria", "Alquiler"]
    };
  }
};
</script>

<style scoped>
.cont-menu {
  background-color: #C0C4CC;
}
.cont-menu {
  max-width: 1000px;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
</style>
