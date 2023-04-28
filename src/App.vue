

<head>
    <title>Formulário de Edição de Perfil</title>
</head>
<body>
    <h1>Formulário de Edição de Perfil</h1>
    <form action="processa_formulario.php" method="post">
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
        </select><br><br>

        <label for="hobbies">Hobbies:</label>
        <input type="text" id="hobbies" name="hobbies"><br><br>

        <label for="linguagens


<script>
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;
  const confirmacaoSenha = document.querySelector('#confirmacao-senha').value;
  const dataNascimento = document.querySelector('#data-nascimento').value;
  const endereco = document.querySelector('#endereco').value;
  const cidade = document.querySelector('#cidade').value;
  const estado = document.querySelector('#estado').value;
  const estadoNome = document.querySelector('#estado option:checked').text;
  const hobbies = document.querySelector('#hobbies').value;
  const linguagensProgramacao = document.querySelector('#linguagens-programacao').value;
  const biografia = document.querySelector('#biografia').value;
  
  console.log('Nome:', nome);
  console.log('E-mail:', email);
  console.log('Senha:', senha);
  console.log('Confirmação de senha:', confirmacaoSenha);
  console.log('Data de nascimento:', dataNascimento);
  console.log('Endereço:', endereco);
  console.log('Cidade:', cidade);
  console.log('Estado:', estadoNome);
  console.log('Hobbies:', hobbies);
  console.log('Linguagens de programação:', linguagensProgramacao);
  console.log('Biografia:', biografia);
});
<script>


