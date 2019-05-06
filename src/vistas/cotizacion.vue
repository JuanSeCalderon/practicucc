<template>
<div>
    <form action="agregar.php" method="POST"> 
      
    <div id="content" align="center">
               
        <table border="0"> 
                <tr>
            <td>
                <label><h3>Numero de invitador: </h3></label><input  type="text" name="NumeroInvitados" value="">               
        </td></tr>    
        <tr>
            <td>
                <h6>Recuerda escoger la tematica según el evento que desea cotizar</h6>
                <label><h3>Tematica favorita: </h3></label> <select>
                <optgroup label="15 años">
                <option value="">Rosas</option>
                <option value="">Princesa</option>
                <option value="">Paris</option>
                <option value="">Winter Wonderland</option>
                <option value="">Mexicano</option>
                <option value="">Blanco y negro</option>
                <option value="">Animal print</option>
                <option value="">Hawaiana</option>
                <optgroup label="Bautizo"> 
                <option value="">Nubes y helado</option>
                <option value="">Ovejas</option>
                <option value="">Fiesta de carrusel</option>
                <option value="">Cruce</option>
                <option value="">Mariposas</option>
                <option value="">Polka dot</option>
                <optgroup label="Bodas"> 
                <option value="">Hawaiana</option>
                <option value="">Vitage</option>
                <option value="">Aire libre</option>
                <option value="">Rustica</option>
                <option value="">Boda floral y romantico</option>
                <option value="">Cultura y tradicion</option>
                <!--  ...  -->
                </select></td>
        </tr>

        <tr>
            <td>
                <label><h3>Numero de mesas: </h3></label><input  type="text" name="NumeroMesas" value="">
            </td>
        </tr>

         <tr>
        <td><label><h3 required>Necesita sonido </label></td><td>
                <label>
                        <input type="radio" name="si" value="" required> Si
                    </label>
                    <label>
                        <input type="radio" name="no" value=""> No
                    </label>
    </div>             
</template>
