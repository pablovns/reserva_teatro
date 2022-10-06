// obter os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

// número de poltronas
const POLTRONAS = 240;

// vetor com as poltronas reservadas pelo cliente
const reservadas = [];

window.addEventListener("load", () => {
  // se houver dados salvos no localStorage, faz um split(";") e atribui esses dados ao array, caso contrário, inicializamos o array
  const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : ;

  // montar o número total de poltronas (definidas pela constante)
  for (let i = 1; i <= POLTRONAS; i++) {
    const figure = document.createElement("figure"); // cria a tag figure
    const imgStatus = document.createElement("img"); // cria a tag img

    // se a posição estiver ocupada, exibe a imagem ocupada, senão, a imagem disponível
    imgStatus.src = ocupadas.split(";");
  }
});
