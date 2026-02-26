const fatoGatoElement = document.getElementById("fatogato");
const buscarFatoElement = document.getElementById("buscarfato");

async function buscarFatoGato() {

    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        fatoGatoElement.textContent = data.fact;
    } catch (error) {
        fatoGatoElement.textContent = "Erro ao buscar fato do gato";
    }
}
buscarFatoElement.addEventListener("click", buscarFatoGato);
buscarFatoGato();