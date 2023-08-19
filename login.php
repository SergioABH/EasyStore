<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "test";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (!$conn) {
	die("No hay conexión: " . mysqli_connect_error());
}

$nombre = $_POST["txtusuario"];
$pass = $_POST["txtpassword"];

$query = mysqli_prepare($conn, "SELECT * FROM login WHERE usuario = ? AND password = ?");
mysqli_stmt_bind_param($query, "ss", $nombre, $pass);
mysqli_stmt_execute($query);

$result = mysqli_stmt_get_result($query);
$nr = mysqli_num_rows($result);

if ($nr == 1) {
	header("Location: inicio.html");
} else if ($nr == 0) {
	echo "<script> alert('Error'); window.location = 'login.html'; </script>";
}
?>
