// vamos pegar o elemento h1 co o id = titulo
const texto = document.getElementById("titulo");

// vamos pegar o elemento o elemento button com id = botao
const botao = document.getElementById("botao");

// manipulador de eventos método addEventListener
botao.addEventListener("click", function() {
    // vamos alterar o texto do elemento h1 para "Texto alterado com sucesso!"
    texto.textContent = "Texto alterado com sucesso!";
});