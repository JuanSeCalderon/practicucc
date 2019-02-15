<template>
  <div class="hello"  style="width: 18rem;">
    <img class="card-img-top" src="@/assets/mis15.png" alt="Imagen">
    <div class="card-body">
      <h5 class="card-title">Mis 15 años</h5>
      <p class="card-text">Somos una empresa que garantiza el mayor espectaculo para el mejor momento de las quinceañeras</p>
    </div>
    <h3>Servicios adqueridos</h3>
    <table>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Alquiler de sonido y luces</li>
      <li class="list-group-item">Buffe y meseros disponibles</li>
      <li class="list-group-item">hora loca</li>
    </ul></table>
    <div class="card-body">
      <a  class="card-link">Valor $700.000</a>
      <br>
      <a href="tel:+3143182893" class="card-link">Contactanos</a>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
