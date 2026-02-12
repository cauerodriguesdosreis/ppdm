let produtos = [];

async function carregarProdutos() {
  try {
    const response = await fetch("produtos.json");
    produtos = await response.json();
    exibirProdutos();
  } catch (error) {
    console.error("Erro ao carregar produtos:", error);
    alert("Erro ao carregar produtos. Por favor, tente novamente mais tarde.");
  }
}

function adicionarProduto() {
  const nome = document.getElementById("nome").value.toLowerCase();
  const preco = parseFloat(document.getElementById("preco").value);
  const disponivel = document.getElementById("disponivel").value == "true";

  if (nome && !isNaN(preco)) {
    const novoProduto = {
      nome: nome,
      preco: preco,
      disponivel: disponivel,
    }
    produtos.push(novoProduto);

    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("disponivel").value = "true";
    exibirProdutos();
  }

  else {
    alert("Por favor, preencha o nome e o preço corretamente.");
  }

function exibirProdutos() {
  const listaProdutos = document.getElementById("lista-produtos");
  listaProdutos.innerHTML = "";

  if (produtos.length === 0) {
    listaProdutos.innerHTML = "<p>Nenhum produto cadastrado.</p>";
    return;
  }

  produtos.forEach((produto) => {
    const produtoDiv = document.createElement("div");
    produtoDiv.classList.add("produto");

    const nomeProduto = document.createElement("h3");
    nomeProduto.textContent = produto.nome;

    const precoP = document.createElement("p");
    precoP.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

    const disponivelP = document.createElement("p");
    disponivelP.textContent = `Disponível: ${produto.disponivel ? "Sim" : "Não"}`;

    produtoDiv.appendChild(nomeProduto);
    produtoDiv.appendChild(precoP);
    produtoDiv.appendChild(disponivelP);

    listaProdutos.appendChild(produtoDiv);
  });
}
}
carregarProdutos();