<template>
  <div>    
 <head>
<meta charset="utf-8"/>
<title>Formulario</title>
<link href="styles.css" rel="stylesheet">
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400' rel='stylesheet' type='text/css'>
</head>
<table align='center' WIDTH="70%">
<tr><td>
<body>
  <br>
<h2>¿En que te podemos ayudar?</h2>
<br>
<p>En Casa Logieventos nos encantaría formar parte de tu día especial, por ello te ofrecemos nuestra oficina situada en el Barrio Cooperativo para que CON CITA PREVIA nos conozcamos y puedas contarnos todo lo relativo a tu evento deseado.</p>
<br>
<p>Nos movemos por toda la ciudad de Villavicencio, así que no dudes en contactar con nosotros.</p>
<br>
<p>Para ello, puedes escribirnos un email al correo bodaseventoslogieventos@hotmail.com y lo antes posible nos pondremos en contacto contigo.</p>
<br>
<h4>Direcciones:</h4>
<table><tr>
<th><img src="../assets/ubicacion.png">&nbsp;Calle 13# 25a 10 Barrio Cooperativo</th></tr><br>
<tr><th><img src="../assets/telefono.png">&nbsp;313-293-1003 / 312-504-7139</th></tr><br>
<tr><th><img src="../assets/correo.png">&nbsp;bodaseventoslogieventos@hotmail.com</th></tr></table>
</body>   
    </td>
    <td align='rigth'>
  <img src="../assets/imgencontacto.jpg" class='imagencont'>
  <form action="envio.php" method="post" class="form-consulta" align='center'> 	
    <label>Nombre y apellido: <span class='colorspan' >*</span>
			<input type="text" name="nombre" placeholder="Nombre y apellido" class="campo-form" required>
		</label>
		
		<label>Correo electronico: <span class='colorspan'>*</span>
			<input type="email" name="Correo electronico" placeholder="Email" class="campo-form" required>
		</label>
		
		<label>Consulta: <span class='colorspan'>*</span>
			<textarea name="consulta" class="campo-formt" required></textarea>
      <input type="submit" value="Enviar" class="btn-form">
		</label>
    </form>
    </td></tr>
    
    
    </table>

    <br>
    
    </div>
</template>

<style>
.mb-3{
  height: 230px;
  
}
.mb-4{
  height: 235px;
}
.nameroute {
font-family: Century Gothic, sans-serif;
}
.nameInicio{
font-style: oblique;
font-family: mountains;
  font-size: 150%;
}

.letraTitulo{
  font-family: mountains;
  font-style: oblique;
}
.texto {
font-family: Verdana, Arial, Helvetica, sans-serif;

}
.form-consulta {max-width: 550px; background: #eee; padding: 25px; font-family: 'Source Sans Pro', sans-serif;}
.campo-form {width:100%; height:36px; margin:2px 0 6px; padding-left:6px; box-sizing: border-box; border-radius:3px; border:0; font-family: 'Source Sans Pro', sans-serif; font-size:1em;}
.campo-formt {width:100%; height:85px; margin:2px 0 6px; padding-left:5px; box-sizing: border-box; border-radius:3px; border:0; font-family: 'Source Sans Pro', sans-serif; font-size:1em;}
.colorspan {color: #F30315}
.textarea {min-height: 150px!important;}
.btn-form {display: inline-block; border:0; background: #000; height: 46px; line-height: 46px; padding: 0 20px; border-radius: 6px; color:#fff; text-decoration: none; text-transform: uppercase; letter-spacing: 1px}
.btn-form:hover {background: #444}
.imagencont {max-width: 550px; padding: 5px;}
</style>
