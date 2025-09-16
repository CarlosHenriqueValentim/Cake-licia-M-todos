let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    let itemExistente = carrinho.find(item => item.nome === nome);
    
    if(itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }

    atualizarCarrinho();
}

function removerDoCarrinho(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let lista = document.getElementById("itensCarrinho");
    let totalEl = document.getElementById("total");
    lista.innerHTML = "";

    let total = 0;

    carrinho.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerDoCarrinho(item.nome);

        li.appendChild(botaoRemover);
        lista.appendChild(li);

        total += item.preco * item.quantidade;
    });

    totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    if(carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let resumo = "🛒 Resumo da Compra:\n\n";
    let total = 0;

    carrinho.forEach(item => {
        resumo += `${item.nome} x${item.quantidade} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
        total += item.preco * item.quantidade;
    });

    resumo += `\n💰 Total: R$ ${total.toFixed(2)}\n\nObrigado pela sua compra! 🎉`;

    alert(resumo);

    carrinho = [];
    atualizarCarrinho();
}


function mostrarDescricao(nome, descricao) {
    let modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-conteudo">
            <h2>${nome}</h2>
            <p>${descricao}</p>
            <button onclick="this.closest('.modal').remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}
