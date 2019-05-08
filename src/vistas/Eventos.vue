<template>
    <div>
  <div id="Appa">
  <center>
  <table>
  <tr>
  <td>
  <div @click="isToggle1=!isToggle1" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle1" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerFront1}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront1" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>

        
        <div @click="isToggle1=!isToggle1" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle1" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack1}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
</td>
<td>
        <div @click="isToggle2=!isToggle2" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle2" class="animated flipInX flashcard">
            <div class="card-header2" style="padding-bottom: 15px;"> {{headerFront2}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront2" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>

        
        <div @click="isToggle2=!isToggle2" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle2" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack2}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
        </td>
</tr>
<tr>
<td>
        <div @click="isToggle3=!isToggle3" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle3" class="animated flipInX flashcard">
            <div class="card-header3" style="padding-bottom: 15px;"> {{headerFront3}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront3" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>
        
        <div @click="isToggle3=!isToggle3" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle3" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack3}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
</td>
<td>
        <div @click="isToggle4=!isToggle4" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle4" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerFront4}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront4" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>

        
        <div @click="isToggle4=!isToggle4" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle4" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack4}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
        </td>
</tr>
<tr>
<td>
        <div @click="isToggle5=!isToggle5" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle5" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerFront5}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront5" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>

        
        <div @click="isToggle5=!isToggle5" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle5" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack5}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
</td>
<td>
 <div @click="isToggle6=!isToggle6" v-bind:style="{backgroundColor: colorFront, color: colorTextFront}" v-show="!isToggle6" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerFront6}} </div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeFront,fontWeight: 'bold'}">{{front}}</p>
                <img v-if="imgFront!=''" :src="imgFront6" width="100%" height="100%">
            </div>
            <div class="card-footer">{{footerFront}}</div>
        </div>

        
        <div @click="isToggle6=!isToggle6" v-bind:style="{backgroundColor: colorBack, color: colorTextBack}" v-show="isToggle6" class="animated flipInX flashcard">
            <div class="card-header" style="padding-bottom: 15px;"> {{headerBack6}}</div>
            <div class="card-content center">
                <p v-bind:style="{fontSize: textSizeBack, fontWeight: 'bold'}">{{back}}</p>
                <img v-if="imgBack!=''" :src="imgBack" width="200" height="200">
            </div>
            <div class="card-footer">{{footerBack}}</div>
        </div>
        </td>
        </tr>
        </table>
        </center>
  </div>      
</div>
</template>
<script>
export default {
 
    data() {
        return {
            isToggle1: false,
            isToggle2: false,
            isToggle3: false,
            isToggle4: false,
            isToggle5: false,
            isToggle6: false,
        }
    }, props: {
        imgFront1: {
            type: String,
            default: 'http://memoflores.com/fotos-de-bodas-01.jpg'
        },
        imgFront2:{
            type: String,
            default: 'http://www.fiestade15.com/ideas/imagenes/cake_topper_para_pastel_de_15_anos_1.jpg'
        },
        imgFront3:{
            type: String,
            default: 'https://www.somosmamas.com.ar/wp-content/uploads/2018/11/juegos-para-fiestas-infantiles.jpg'
        },
        imgFront4:{
            type: String,
            default: 'https://www.fomento.edu/pinoalbar/sites/default/files/styles/noticia_interior/public/dsc_5935.jpg?itok=RQD6_d-n'
        },
        imgFront5:{
            type: String,
            default: 'https://cordopolis.es/la-ultima-oportunidad/files/2018/04/master_universitario.jpg'
        },
        imgFront6:{
            type: String,
            default: 'https://www.carolbravo.com/wp-content/uploads/Fotografos-bautizos-madrid-00.jpg'
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
            default: 'black'
        },
        colorFront: {
            type: String,
            default: 'white'
        },
        colorBack: {
            type: String,
            default: 'white'
        },
        headerFront1: {
            type: String,
            default: 'BODAS'
        },
         headerFront2: {
            type: String,
            default: '15 AÑOS'
        },
         headerFront3: {
            type: String,
            default: 'FIESTAS INFANTILES'
        },
         headerFront4: {
            type: String,
            default: 'PRIMERAS COMUNIONES'
        },
         headerFront5: {
            type: String,
            default: 'GRADOS'
        },
         headerFront6: {
            type: String,
            default: 'BAUTIZOS'
        },
        headerBack1: {
            type: String,
            default: 'Casa Logieventos quiere hacer parte de la boda de tus sueños. Ese momento en el que todo el mundo te mira con sonrisas y lágrimas; es uno de los mejores recuerdos que tendrás.'
        },
         headerBack2: {
            type: String,
            default: 'Ya que cumplir 15 años es algo inolvidable, Casa Logieventos quiere hacer parte de ese día tan especial para ti y brindarte tus servicios en eventos, para que tu fiesta sea tan especial como tu lo soñaste...'
        },
         headerBack3: {
            type: String,
            default: 'Nuestas fiestas son únicas y variadas, poseemos diseños temáticos especiales que incluyen decoración alusiva al tema de la fiesta.'
        },
         headerBack4: {
            type: String,
            default: 'Casa LogiEventos te invita a que celebremos todos juntos este sacramento de Dios, y vamos a invitar a toda la familia, ya que son ellos los que acompañan y comparten la vida de tu hijo(a).'
        },
         headerBack5: {
            type: String,
            default: 'Cuando uno decide una carrera sabe que tiene que dedicar años de su vida en estudiar y que esto viene también de grandes sacrificios. Casa LogiEventos eventos quiere ofrecerte un servicio en el que ustedes como graduados se sientan satisfechos y orgullosos de sí mismos'
        },
         headerBack6: {
            type: String,
            default: 'Casa LogiEventos quiere hacer parte de la que quizas sea tu primera fiesta, o tal vez no, lo unico que estoy seguro es que te acompañar las personas mas lindas de este mundo, tus papitos y toda tu familia, y lo mejor de todo es que lo hacen con la bendición de Dios'
        },
        footerBack: {
            type: String,
            default: 'Ver Mas '
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
    margin: 50px;
    padding: 20px;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.4);
    text-align: center;
    max-width: 500px;
    

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
</style>