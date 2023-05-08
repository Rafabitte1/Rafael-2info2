<style>orm {
  max-width: 500px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}


input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  height: 40px;
}

textarea {
  height: 100px;
}


input[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}


br {
  margin-top: 10px;
  margin-bottom: 10px;
}</style>


<script>function isValidDate(birthdate) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(birthdate)) {
    return false;
  }
  const parts = birthdate.split("-");
  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const day = parseInt(parts[2], 10);
  if (year < 1900 || year > new Date().getFullYear()) {
    return false;
  }
  if (month < 1 || month > 12) {
    return false;
  }
  if (day < 1 || day > 31) {
    return false;
  }
  return true;}</script>


<title>Formulário de Edição de Perfil</title>
    <head></head>
<template>
        <h1>Formulário de Edição de Perfil</h1>
        
    
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome" required><br><br>
  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email" required><br><br>

  <label for="senha">Senha:</label>
  <input type="password" id="senha" name="senha" required><br><br>

  <label for="confirmacao_senha">Confirmação de Senha:</label>
  <input type="password" id="confirmacao_senha" name="confirmacao_senha" required><br><br>

  <label for="data_nascimento">Data de Nascimento:</label>
  <input type="date" id="data_nascimento" name="data_nascimento" required><br><br>

  <label for="endereco">Endereço:</label>
  <input type="text" id="endereco" name="endereco" required><br><br>

  <label for="cidade">Cidade:</label>
  <input type="text" id="cidade" name="cidade" required><br><br>

  <label for="estado">Estado:</label>
  <select id="estado" name="estado" required>
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
  </select>
  <br>
  <label for="hobbies">Hobbies:</label>
  <input type="text" id="hobbies" name="hobbies"><br><br>
