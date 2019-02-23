<template>  
<div class="cont-menu" >
<p>Inicio</p>
<p>Experiencias</p>
<p>Contactos</p>
</div>

</template>

<script>
export default {
    data(){
        return {
            list: ['Inicio','Eventos','Galeria','Alquiler']
        }
    }
}
</script>

<style scoped>
.cont-menu {
    background-color: #FA58D0;
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
