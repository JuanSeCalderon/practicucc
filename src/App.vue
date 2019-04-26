<template>
  <div id="app">
    <Menu />
    <div>
      <router-view />
    </div>
    <div id="app">
<foster />
    </div>
     
  </div>
</template>

<script>
import Menu from "./vistas/Menu.vue";
import foster from "./vistas/foster.vue";

export default {
  components: {
    Menu
  },
  data() {
    return {
      
    }
  }
}
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
