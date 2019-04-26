<template>
    <div>
  <div id="Appa">
  <b-card-group deck class="container">
  <b-card 
    title="Bodas"
    img-src="http://memoflores.com/fotos-de-bodas-01.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      Casa Logieventos quiere hacer parte de la boda de tus sueños. Ese momento en el que todo el mundo te mira con sonrisas y lágrimas; es uno de los mejores recuerdos que tendrás.
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  <b-card
    title="15 Años"
    img-src="http://www.fiestade15.com/ideas/imagenes/cake_topper_para_pastel_de_15_anos_1.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      Ya que cumplir 15 años es algo inolvidable, Casa Logieventos quiere hacer parte de ese día tan especial para ti y brindarte tus servicios en eventos, para que tu fiesta sea tan especial como tu lo soñaste... 
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
  <b-card-group deck  class="container">
  
  <b-card
    title="Fiestas Infantiles"
    img-src="https://www.somosmamas.com.ar/wp-content/uploads/2018/11/juegos-para-fiestas-infantiles.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      Nuestas fiestas son únicas y variadas, poseemos diseños temáticos especiales que incluyen decoración alusiva al tema de la fiesta.  
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
 <b-card 
    title="Primeras Comuniones"
    img-src="https://www.fomento.edu/pinoalbar/sites/default/files/styles/noticia_interior/public/dsc_5935.jpg?itok=RQD6_d-n"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"  
   
  >
    <b-card-text>
     
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
  <b-card-group deck  class="container">
  <b-card
    title="Grados"
    img-src="https://cordopolis.es/la-ultima-oportunidad/files/2018/04/master_universitario.jpg" 
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  <b-card
    title="Bautizos"
    img-src="https://www.carolbravo.com/wp-content/uploads/Fotografos-bautizos-madrid-00.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 500px;"
    class="mb-2"
  >
    <b-card-text>
      
    </b-card-text>
    <b-button href="#" variant="primary">Ver Más</b-button>
  </b-card>
  </b-card-group>
</div>
 <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerFront}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront" width="200" height="200">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>
        <div @click="isToggle=!isToggle" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
        
</div>
</template>


<script>


export default {
 
    data() {
        return {
            isToggle: false,
        }
    }, props: {
        imgFront: {
            type: String,
            default: ''
        },
        imgBack: {
            type: String,
            default: ''
        },
        front: {
            type: String,
            default: ''
        },
        back: {
            type: String,
            default: ''
        },
        textSizeFront: {
            type: String,
            default: '2em'
        },
        textSizeBack: {
            type: String,
            default: '2em'
        },
        colorTextFront: {
            type: String,
            default: 'black'
        },
        colorTextBack: {
            type: String,
            default: 'white'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: '#2ecc71'
        },
        headerFront: {
            type: String,
            default: 'Do you know?'
        },
        headerBack: {
            type: String,
            default: 'Answer'
        },
        footerFront: {
            type: String,
            default: 'Click to show Back'
        },
        footerBack: {
            type: String,
            default: 'Click to show Front'
        }


    }
}
</script>

<style scoped>
.center {
    text-align: center;
}

.flashcard {
    cursor: pointer;
    border-radius: 10px;
    margin: 20px;
    padding: 25px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
}

.flashcard:hover {
    box-shadow: 0 0px 25px rgba(0, 0, 0, 0.8);
}

.animated {
    animation-duration: 1s;
    animation-fill-mode: both;
}

@keyframes flipInX {
    from {
        transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }
    to {
        transform: perspective(400px);
    }
}

.flipInX {
    backface-visibility: visible !important;
    animation-name: flipInX;
}



.container {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.b-card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  
  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .b-card-info p {
      opacity: 1;
    }
    .b-card-info, .b-card-info p {
      transition: 0.6s $hoverEasing;
    }
    .b-card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .b-card-bg {
      transition: 
        0.6s $hoverEasing,
        opacity 5s $hoverEasing;
      opacity: 0.8;
    }
    .b-card {
      transition:
        0.6s $hoverEasing,
        box-shadow 2s $hoverEasing;
      box-shadow:
        rgba(white, 0.2) 0 0 40px 5px,
        rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0,
        inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.b-card {
  justify-content: center;
  position: relative;
  flex: 0 0 240px;
  width: 240px;
  height: 320px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:
    rgba(black, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.b-card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px; left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition:
    1s $returnEasing,
    opacity 5s 1s $returnEasing;
  pointer-events: none;
}

.b-card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
</style>