<template>
  <div id="app">
    <Menu />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {
      usuarios: "",
      experiencias: [
        {
          nombre: "Inicio"
        },
        {
          nombre: "Eventos"
        },
        {
          nombre: "Alquiler"
        }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.experiencias {
  background-color: blue;
}
</style>
