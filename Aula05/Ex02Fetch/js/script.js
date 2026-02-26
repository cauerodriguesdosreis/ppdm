const loadingElement = document.getElementById('loading');
const produtoElement = document.getElementById('produto');
const errorElement = document.getElementById('error');

fetch('https://fakestoreapi.com/products/8') // vamos pegar o produto de id 1
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do produto: ' + response.status);
        }  
        return response.json();
    })
    .then(data => {
        loadingElement.style.display = 'none';
        produtoElement.innerHTML = `
            <h2>${data.title}</h2>
            <p>Preço: $${data.price}</p>
            <p>${data.description}</p>
            <img src="${data.image}" alt="${data.title}" width="200">
        `;
    })
    .catch(error => {
        loadingElement.style.display = 'none';
        errorElement.textContent = 'Error fetching product data: ' + error.message;
    });