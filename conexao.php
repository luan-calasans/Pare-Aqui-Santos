<?php

$usuario = "root";
$senha = "";
$database = "tcc";
$host = "localhost";
$mysqli = new mysqli($host, $usuario, $senha, $database);

if ($mysqli->error) {
  die("falha ao conectar ao banco de dados: " . $mysqli->error);
}