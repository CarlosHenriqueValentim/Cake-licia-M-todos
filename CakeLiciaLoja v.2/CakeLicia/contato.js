document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    const mensagemEnviada = document.getElementById("mensagemEnviada");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

       
        if (nome === "" || email === "" || mensagem === "") {
            mensagemEnviada.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
            mensagemEnviada.style.color = "red";
            return;
        }

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensagemEnviada.textContent = "⚠️ Informe um e-mail válido.";
            mensagemEnviada.style.color = "red";
            return;
        }

     
        mensagemEnviada.innerHTML = `
            ✅ Obrigado, <strong>${nome}</strong>! Sua mensagem foi registrada com sucesso.<br>
            📧 E-mail: ${email}<br>
            📱 Telefone: ${telefone || "Não informado"}<br>
            💬 Mensagem: ${mensagem}
        `;
        mensagemEnviada.style.color = "green";

   
        form.reset();
    });
});
