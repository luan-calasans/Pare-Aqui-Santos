<?php

include('conexao.php');
if (isset($_POST['email']) || isset($_POST['senha'])) {

  if (strlen($_POST['email']) == 0) {
    echo "Insira seu e-mail";
  } else if (strlen($_POST['email']) == 0) {
    echo "Insira sua senha";
  } else {

    $email = $mysqli->real_escape_string($_POST['email']);
    $senha = $mysqli->real_escape_string($_POST['senha']);

    $sql_code = "SELECT * FROM usuarios WHERE email = '$email' AND senha = '$senha'";
    $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

    $quantidade = $sql_query->num_rows;

    if ($quantidade == 1) {

      $usuario = $sql_query->fetch_assoc();

      if (!isset($_SESSION)) {
        session_start();
      }

      $_SESSION['user'] = $usuario['id'];
      $_SESSION['nome'] = $usuario['nome'];

      header("Location: index.php");

    } else {
      echo "Falha ao logar! E-mail ou senha incorretos";
    }

  }
}

?>

<!DOCTYPE html>
<html lang="pt-Br">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="./assets/imgs/logo-favicon.svg" type="image/x-icon" />
  <link rel="stylesheet" href="./assets/css/main.css" />
  <title>Pare-Aqui - Criar Conta</title>
</head>

<body class="create_account">
  <nav class="navigation" class="navigation-parking" id="navigation-identify">
    <div class="nav-menu">
      <div id="img-logo-pareaqui">
        <a href="./index.html">
          <img id="logo-pareaqui" src="assets/imgs/logo.svg" alt="logo pare aqui">
        </a>
      </div>
    </div>
  </nav>

  <main>
    <form action="" method="" class="container-login-page" id="login-form">
      <h1 class="login">Identificar</h1>
      <div>
        <label for="email">E-mail</label>
        <input type="text" name="email" class="rectangle-input" required />
      </div>
      <div>
        <label for="senha">Senha</label>
        <input type="text" name="senha" class="rectangle-input" required />
      </div>

      <div class="dontLogged">
        <button class="btn-login">Login</button>
        <p>
          Não está registrado?
          <a class="registered" href="./createaccount.html">Crie sua conta agora</a>
        </p>
      </div>
    </form>

  </main>
  <script src="./assets/js/form-validation.js"></script>
</body>

</html>