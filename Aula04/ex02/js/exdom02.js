// vamos pegar a lista de produtos com o id = lista

const lista = document.getElementById("lista");

// vamos pegar o primeiro item com o id = novoItem
const input = document.getElementById("novoItem");

// vamos pegar o botão com o id = adicionar
const btnAdicionar = document.getElementById("adicionar");

// vamos adicionar um evento de clique no botão para adicionar um novo item à lista
btnAdicionar.addEventListener("click", function() {

    // vamos ler o texto digitado no input
    const novoItem = input.value;

    // vamos fazer a validação para verificar se o campo não está vazio
    if (novoItem.trim() !== "") {
        // vamos criar um novo elemento de lista (li)
        const li = document.createElement("li");
        li.textContent = novoItem;
        lista.appendChild(li);
        input.value = "";
    }
});