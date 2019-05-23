<?php
header("Access-Control-Allow-Origin: *");
header("content-type: text/html; charset=utf-8");
$conn = new mysqli('localhost', 'root', '', 'logieventos');
if($conn->connect_error){
    die ('Error al conectarse a la base de datos');
}

$res = array ('error' => false);
$action = 'read';

if(isset($_GET['action'])){
    $action = $_GET['action'];
}
if($action == 'read'){
    $result = $conn->query("SELECT * FROM clientes");
    $clientes = array();

    while ($row = $result->fetch_assoc()){
        array_push($clientes,$row);
    }
    $res['clientes']=$result;
}

if ($action == 'create'){
    $NombreCliente = $_POST['Nombre'];
    $ApellidoCliente = $_POST['Apellido'];
    $Email = $_POST['Email'];
    $Celular = $_POST['Cel'];
    $Contraseña = $_POST['Contra'];


    $result = "INSERT INTO clientes (NombreCliente, ApellidoCliente, Email, Celular, Contraseña) VALUES ('$NombreCliente','$ApellidoCliente','$Email','$Celular','$Contraseña')";

    if($result){
        $res['message'] = 'Su registro fue con exito';

    } else {
        $res['error'] = true;
        $res['message'] = 'Error en el registro';
    }
}
$conn->close();
header( 'Content-type: application/json' );
echo json_encode($res);
?>