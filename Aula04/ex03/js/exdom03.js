// vamos pegar o elemento botão com o id "alternarBotao" e o elemento de mensagem com o id "mensagem"
const botao = document.getElementById("alternarBotao");

const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.classList.toggle("oculto");
});

