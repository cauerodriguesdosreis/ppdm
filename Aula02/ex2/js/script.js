const produtos = {
    produto1: {
        nome: "Camiseta",
        preco: 59.99,
        descricao: "Camiseta de algodão confortável e estilosa.",
        disponivel: true
    },
    produto2: {
        nome: "Calça Jeans",
        preco: 79.99,
        descricao: "Calça jeans azul escura, confortável e durável.",
        disponivel: true
    },
    produto3: {
        nome: "Tênis Esportivo",
        preco: 129.99,
        descricao: "Tênis esportivo leve e respirável, ideal para corridas.",
        disponivel: false
    }

};

const listaProdutosDiv = document.getElementById("lista-produtos");

for (const key in produtos) {
    if (produtos.hasOwnProperty(key)) {
        const element = produtos[key];

        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produtos");
    
        const nomeH3 = document.createElement("h2");
        nomeH3.textContent = element.nome;

        const precoP = document.createElement("p");
        precoP.textContent = `Preço: R$ ${element.preco.toFixed(2)}`;

        const descricaoP = document.createElement("p");
        descricaoP.textContent = element.descricao;

        const disponibilidadeP = document.createElement("p");
        disponibilidadeP.textContent = "Disponibilidade: ";

        const spanDisponibilidade = document.createElement("span");
        spanDisponibilidade.textContent = element.disponivel ? "disponivel" : "indisponivel";
        spanDisponibilidade.classList.add(element.disponivel ? "disponivel" : "indisponivel");

        disponibilidadeP.appendChild(spanDisponibilidade);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.appendChild(precoP);
        produtoDiv.appendChild(descricaoP);
        produtoDiv.appendChild(disponibilidadeP);
        listaProdutosDiv.appendChild(produtoDiv);

    }
}
