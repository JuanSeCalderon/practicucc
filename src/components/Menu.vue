<template>
  <div class="cont-menu">

    <router-link to="/">
      <p>Inicio</p>
    </router-link>
    <router-link to="/contacto">
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
  background-color: #fa58d0;
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
