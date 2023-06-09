<?php
include('conexao.php');



if (isset($_POST['email']) || isset($_POST['nome']) || isset($_POST['password'])) {

  if (strlen($_POST['email']) == 0) {
    echo "Insira seu e-mail";
  } else if (strlen($_POST['nome']) == 0) {
    echo "Insira seu nome";
  } else if (strlen($_POST['password']) == 0) {
    echo "Insira sua senha";
  } else {

    $nome = $mysqli->real_escape_string($_POST['nome']);
    $email = $mysqli->real_escape_string($_POST['email']);
    $password = $mysqli->real_escape_string(($_POST['password']));

    $sql_code_cadastro = "INSERT INTO usuarios(email, nome, senha) VALUES ('$email', '$nome', '$password')";
    $sql_query = $mysqli->query($sql_code_cadastro) or die("Falha na execução do código SQL: " . $mysqli->error);


    header("Location: login.php");

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
    <div class="container-create-account">
      <h1 class="create-account">Criar Conta</h1>
      <form action="" method="">
        <div class="input">
          <label for="nome">Nome</label>
          <input type="text" name="nome" class="rectangle-input" required />
        </div>

        <div class="input">
          <label for="email">E-mail</label>
          <input type="text" name="email" class="rectangle-input" required />
        </div>

        <div class="input">
          <label for="password">Senha</label>
          <input type="password" name="password" class="rectangle-input" required />
        </div>

        <div class="input">
          <label for="password">Confirmar senha</label>
          <input type="password" name="password" class="rectangle-input" required />
        </div>

        <div class="input">
          <button class="btn-registro">Registrar</button>
          <p>Já possui uma conta? <a href="./login.html">idenfique-se aqui</a></p>
        </div>
      </form>
    </div>
  </main>
  <script src="./assets/js/form-validation.js"></script>
</body>

</html>