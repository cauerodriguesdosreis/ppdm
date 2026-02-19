// vamos trazer os dados dos dos usuários do jsonplaceholder usando o fetch
fetch('https://jsonplaceholder.typicode.com/users')

// será gerado uma promessa (Promise) que irá resolver quando a resposta chegar
    .then(response => response.json()) // converte a resposta para json
    .then(users => {
        const userList = document.getElementById('userList'); // seleciona a lista onde os usuários serão exibidos
        users.forEach(user => {
            const listItem = document.createElement('li'); // cria um item de lista para cada usuário
            listItem.textContent = `${user.name} (${user.email})`; // define o texto do item de lista com o nome e email do usuário
            userList.appendChild(listItem); // adiciona o item de lista à lista de usuários
        });
    })
        .catch(error => console.error('Erro ao buscar os usuários:', error)); // captura e exibe qualquer erro que ocorrer durante a busca
