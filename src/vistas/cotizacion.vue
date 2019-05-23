<template>
<div>
    <br>
    <br>
      <div>
          <table align="center"> 
                <tr><td>
                <label><h4>Numero de invitados: </h4></label><td><input  type="text" name="NumeroInvitados" value=""></td></tr>    
        <tr>
            
                <td><label><h4>Tematica favorita: </h4></label></td> <td>
            <b-form-select v-model="selected" width="20%">
                <option value="">Seleccione una opción</option>
                <optgroup label="15 años">
                <option value="">Rosas</option>
                <option value="">Princesa</option>
                <option value="">Paris</option>
                <option value="">Winter Wonderland</option>
                <option value="">Mexicano</option>
                <option value="">Blanco y negro</option>
                <option value="">Animal print</option>
                <option value="">Hawaiana</option></optgroup>
                <optgroup label="Bautizo"> 
                <option value="">Nubes y helado</option>
                <option value="">Ovejas</option>
                <option value="">Fiesta de carrusel</option>
                <option value="">Cruce</option>
                <option value="">Mariposas</option>
                <option value="">Polka dot</option></optgroup>
                <optgroup label="Bodas">
                <option value="">Hawaiana</option>
                <option value="">Vitage</option>
                <option value="">Aire libre</option>
                <option value="">Rustica</option>
                <option value="">Boda floral y romantico</option>
                <option value="">Cultura y tradicion</option></optgroup>
                <!--  ...  -->
      
    </b-form-select></td></tr>

    <tr>
            <td>
                <label><h4>Numero de mesas: </h4></label></td><td><input  type="text" name="NumeroMesas" value="">
            </td>
        </tr>

        <tr>
            <td><h4 required>¿Necesita sonido? </h4></td>
            <td>
                <input type="radio" id="Con-sonido" name="sonido" value="" v-b-toggle.collapse-1 variant="primary"> Si
                <input type="radio" id="Con-sonido" name="sonido" value="" v-b-toggle="'collapse-1'"> No
            </td>
<b-collapse id="collapse-1" class="mt-2">
    <td>
    <b-card>
      <h4>Seleccione el genero de musica a tu gusto </h4>
                    		<table WIDTH="600"><tr><td><label><input type="checkbox" name="MusicaClasica" value="first_checkbox">Musica clasica
                    		</label>&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Jazz" value="second_checkbox">Jazz</label>&nbsp;
                    		<label><input type="checkbox" name="RockRoll" id="Rock and roll" value="">Rock and roll</label></td>&nbsp;
                    		<tr><td><label><input type="checkbox" name="Rock" value="">Rock</label>&nbsp;
                    		<label><input type="checkbox" name="Metal" value="">Metal</label>&nbsp;
                    		<label><input type="checkbox" name="Country" value="">Country</label></td><tr>
                    		<tr><td><label><input type="checkbox" name="Disco" value="">Disco</label>&nbsp;
                    		<label><input type="checkbox" name="Techno" value="">Techno</label>&nbsp;
                    		<label><input type="checkbox" name="Pop" value="">Pop</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Ska" value="">Ska</label>&nbsp;
                    		<label><input type="checkbox" name="Reggae" value="">Reggae</label>&nbsp;
                    		<label><input type="checkbox" name="HipHop" value="">Hip hop</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Salsa" value="">Salsa</label>&nbsp;
                    		<label><input type="checkbox" name="Reggeton" value="">Reggeton</label>&nbsp;
                    		<label><input type="checkbox" name="Merengue" value="">Merengue</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Acapella" value="">Acapella</label>&nbsp;
                    		<label><input type="checkbox" name="instrumental" value="">Musica instrumental</label>&nbsp;
                    		<label><input type="checkbox" name="Dj's" value="">Dj´s</label></td></tr>
							<tr><td><label><h4>¿Otro? </h4></label><label><input  type="text" name="Otro" value=""></label></td></tr></table>
              <button v-b-toggle="'collapse-1'">Ya!</button>
      <b-collapse id="collapse-1-inner" class="mt-2">
        <b-card></b-card>
      </b-collapse>
    </b-card>
    </td>
  </b-collapse>
            
        </tr>


    <tr><td colspan="2">
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type {{ type }}:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
        </td>
    </tr>



    <tr>
            <td><h4 required>¿Necesita bufet? </h4></td>
            <td>
                <input type="radio" id="Con-sonido" name="bufet" value="" v-b-toggle.collapse-11 variant="primary"> Si
                <input type="radio" id="Con-sonido" name="bufet" value="" v-b-toggle="'collapse-11'" > No
            </td>
<b-collapse id="collapse-11" class="mt-2">
    <td>
    <b-card>

                    		<table WIDTH="600">
								<tr>
                    	<td><h4>Como desea el bufet </h4>
                    		<tr><td><label><input type="checkbox" name="MusicaClasica" value="first_checkbox">Bufet de mesa compartida con menú colectivo</label>
                    		<label><input type="checkbox" name="Jazz" value="second_checkbox">Bufet para servr como opción de menú</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="RockRoll" id="Rock and roll" value="">Bufet a la carta</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Rock" value="">Bufet tipo coctel</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Metal" value="">Zonas de comida</label></td></tr>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<tr><td><label><h3>¿Otro? </h3></label><label><input  type="text" name="Otro" value=""></label></td></tr>
                    	</td></tr></table>
      <b-collapse id="collapse-11-inner" class="mt-2">
        <b-card></b-card>
      </b-collapse>
    </b-card>
    </td>
  </b-collapse>
            </tr>
   
        
    <tr>
            <td><h4 required>¿Necesita bebidas? </h4></td>
            <td>
                <input type="radio" id="Si registra" name="meseros" value="" v-b-toggle.collapse-12 variant="primary"> Si
                <input type="radio" id="No registra" name="meseros" value="" v-b-toggle="'collapse-12'" > No
            </td>
<b-collapse id="collapse-12" class="mt-2">
    <td>
    <b-card>
  
                    		<table WIDTH="600" >
								<tr>
                    	<td><h4>Que bebidas le gustaria </h4>
                    		<tr><td><label><input type="checkbox" name="MusicaClasica" value="first_checkbox">Vino blanco
                    		</label>&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Jazz" value="second_checkbox">Vino tinto</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="RockRoll" id="Rock and roll" value="">Champagne</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Rock" value="">Coñac</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Metal" value="">Baileys</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Country" value="">Whisky</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Disco" value="">Ron</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Techno" value="">Vodka</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Pop" value="">Tequila</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Ska" value="">Gaseosa</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Reggae" value="">Cerveza</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="HipHop" value="">Coctel</label></td></tr>
							<tr><td><label><h3>¿Otro? </h3></label><label><input  type="text" name="Otro" value=""></label></td></tr>
							</td></tr></table>
      <b-collapse id="collapse-12-inner" class="mt-2">
        <b-card></b-card>
      </b-collapse>
    </b-card>
    </td>
  </b-collapse>
            </tr>
    
    
    <tr>
            <td><h4 required>¿Necesita efectos de luces? </h4></td>
            <td>
                <input type="radio" id="Si registra" name="meseros" value="" v-b-toggle.collapse-13 variant="primary"> Si
                <input type="radio" id="No registra" name="meseros" value="" v-b-toggle="'collapse-13'" > No
            </td>
<b-collapse id="collapse-13" class="mt-2">
    <td>
    <b-card>
  
                    		<table WIDTH="600" >
							<tr>
                    	<td><h3>Que efecto de luces le gustaria </h3>
                    		<tr><td><label><input type="checkbox" name="MusicaClasica" value="first_checkbox">Cabezas moviles
                    		</label>
                    		<label><input type="checkbox" name="Jazz" value="second_checkbox">Iluminación led</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="RockRoll" id="Rock and roll" value="">Reflectores</label></td></tr>
                    		<tr><td><label><input type="checkbox" name="Rock" value="">Control dmx</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Metal" value="">Show laser efectos</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    		<label><input type="checkbox" name="Country" value="">Show venturi</label></td></tr>
							<tr><td><label><h3>¿Otro? </h3></label><label><input  type="text" name="Otro" value=""></label></td></tr>
                    	</td></tr></table>
      <b-collapse id="collapse-13-inner" class="mt-2">
        <b-card></b-card>
      </b-collapse>
    </b-card>
    </td>
  </b-collapse>
            </tr>
    
    <tr>

        <td><h4 required>¿Requiere lugar del evento? </h4></td>
            <td>
                <input type="radio" id="Si registra" name="meseros" value=""  variant="primary"> Si
                <input type="radio" id="No registra" name="meseros" value="" > No
            </td></tr>

                    <tr>
        <td><h4 required>¿Tiene algún protocolo predefinido? </h4></td>
            <td>
                <input type="radio" id="Si registra" name="meseros" value=""  variant="primary"> Si
                <input type="radio" id="No registra" name="meseros" value="" > No
            </td></tr>



                    <tr><td colspan="2" align="center">
                    	<input type="submit" value="Enviar" class="btn-form">
                    </td></tr>
    
    </table>

      </div>
  </div>


   
 
</template>

<script>
  export default {
    data() {
      return {
        types: [
          
          'date',
          `time`,
          'time'
        
        ]
      }
      return {
        selected: null
      }
    }}

</script>