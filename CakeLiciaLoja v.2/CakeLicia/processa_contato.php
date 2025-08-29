<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars($_POST['nome']);
    $email = htmlspecialchars($_POST['email']);
    $telefone = htmlspecialchars($_POST['telefone']);
    $mensagem = htmlspecialchars($_POST['mensagem']);

    $para = "atendimento@cakelicia.com"; 
    $assunto = "Novo contato de $nome";
    $conteudo = "Nome: $nome\nEmail: $email\nTelefone: $telefone\n\nMensagem:\n$mensagem";
    $cabecalhos = "From: $email";

    if(mail($para, $assunto, $conteudo, $cabecalhos)){
        echo "<h2>✅ Obrigado, $nome! Sua mensagem foi enviada com sucesso.</h2>";
    } else {
        echo "<h2>❌ Erro ao enviar a mensagem. Tente novamente.</h2>";
    }
}
?>
