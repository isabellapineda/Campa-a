<?php
$Marca = $_POST['Marca'];
$Categoria = $_POST['Categoria']; 
$Direccion = $_POST['Direccion']; 
$Web = $_POST['web'];
$Nombre = $_POST['Nombre']; 
$Celular = $_POST['Celular']; 
$Email = $_POST['email']; 


$header = 'From: ' . $Email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";
$mensaje = "Este mensaje fue enviado por " . $Nombre . ",\r\n";
$mensaje .= "Su e-mail es: " . $Email . " \r\n";
$mensaje .= "Su marca: " . $_POST['Marca'] . " \r\n";
$mensaje .= "Categoria: " . $_POST['Categoria'] . " \r\n";
$mensaje .= "Celular: " . $_POST['Celular'] . " \r\n";
$mensaje .= "Web o RRSS: " . $_POST['web'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'contacto@yoelijopymecolina.cl';
$asunto = 'Mensaje desde #YOELIJOPYMECOLINA';

mail($para, $asunto, utf8_decode($mensaje), $header);
header("Location:index.html");


?>