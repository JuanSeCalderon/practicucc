<template>
  <div class="contmenu" >
  <div class="menu">
        <div class="logo">
        <img
         align="left"
          width="200"
          height="60"
          src="logologieventos.png"
          alt="image slot"
        /></div>
        <nav class="nav">
            <ul class="list-menu">
                <li class="link-menu" v-for="(item, index) in list" :key="index">{{item}}</li>
            </ul>
        </nav>
       
        </div>
     
</div>



  
</template>

<script>
export default {
    data(){
        return {
            list: ['Inicio','Eventos','Alquiler','Contactenos']
        }
    }
    
    }

</script>

<style scoped>
.contmenu {
    background-color: #DF0174;
}
.menu {
    max-width: 1000px;
    width: 100%;
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
.link-menu {
    list-style: none;
    cursor: pointer;
    color: #fff;
}
.list-menu {
    width: 350px;
    display: flex;
    justify-content: space-between;
}
</style>
