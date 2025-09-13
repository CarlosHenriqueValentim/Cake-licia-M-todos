function mostrarDica() {
    let dicas = [
        "O cupcake de Red Velvet é o mais pedido da nossa loja!",
        "Nosso sabor de Morango é perfeito para acompanhar um café.",
        "O Cupcake Tropical é ótimo para os dias quentes!",
        "O de Chocolate é sempre campeão entre as crianças!"
    ];
    let escolha = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dica").innerHTML = escolha;
}
