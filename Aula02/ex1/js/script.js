const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal');
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva'];
const numeracao = [1, 2, 3, 4, 5];
const elementos = ['Primeiro', 'Segundo', 'Terceiro', 'Quarto', 'Quinto'];

exemploArrayLiteralDiv.innerHTML = `<h2>Exemplo de Array com Literal</h2>`;
exemploArrayLiteralDiv.innerHTML += `<p>Array de frutas: [${frutas.join(', ')}]</p>`;

const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso');

exemploArrayAcessoDiv.innerHTML = `<h2>Exemplo de Acesso a Elementos do Array</h2>`;
for (let i = 0; i < numeracao.length; i++) {
    exemploArrayAcessoDiv.innerHTML += `<p> ${elementos[i]} elemento: ${numeracao[i]}</p>`;
}

const exemploArrayModificadoDiv = document.getElementById('exemplo-array-modificado');

const cores = ['Vermelho', 'Verde', 'Azul'];

exemploArrayModificadoDiv.innerHTML = `<h2>Exemplo de Modificação de Array</h2>`;
exemploArrayModificadoDiv.innerHTML += `<p>Array de cores original: [${cores.join(', ')}]</p>`;

cores[0] = 'Amarelo'; // Modificando o primeiro elemento

exemploArrayModificadoDiv.innerHTML += `<p>Array de cores modificado: [${cores.join(', ')}]</p>`;
