document.addEventListener('DOMContentLoaded', function() {

    const produtoFormElement = document.getElementById('produtoForm');
    const produtoTableElement = document.getElementById('produtoTable');
    getElementsByName("tbody")[0];
    const produtoIdElement = document.getElementById('produtoId');
    const cancelarBrnElement = document.getElementById('cancelar');


    //variavel para rastrear se estamos editando um produto
    let editing = false;

    //função para atualizar a tabela de produtos
    function getProdutos() {
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse(produtos) : [];
    }
});

    function saveProduto(produto) {
        localStorage.setItem('produtos', JSON.stringify(produto));
    }

    function excluirProduto(id) {
        produto.innerHTML = '';
        const produtos = getProdutos();
        
        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            const row = produtoTableElement.insertRow();


            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.nome;

            const precoCell = row.insertCell();
            precoCell.textContent = 'R$' + produto.preco;

    }
}