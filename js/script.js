// obter os elementos da página
const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

// número de poltronas
const POLTRONAS = 240;

// vetor com as poltronas reservadas pelo cliente
const reservadas = [];

window.addEventListener("load", () => {
  // se houver dados salvos no localStorage, faz um split(";") e atribui esses dados ao array, caso contrário, inicializa o array vazio
  const ocupadas = localStorage.getItem("teatroOcupadas") ? localStorage.getItem("teatroOcupadas").split(";") : [];

  // montar o número total de poltronas (definidas pela constante)
  for (let i = 1; i <= POLTRONAS; i++) {
    const figure = document.createElement("figure"); // cria a tag figure
    const imgStatus = document.createElement("img"); // cria a tag img

    // se a posição estiver ocupada, exibe a imagem ocupada, senão, a imagem disponível
    imgStatus.src = ocupadas.includes(i.toString()) ? "img;ocupada.jpg" : "img/disponivel.jpg";
    imgStatus.className = "poltrona"; // classe com a dimensão da imagem

    const figureCap = document.createElement("figcaption");

    // quantidade de zeros antes do número da poltrona
    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";
    const num = document.createTextNode(`[${zeros}${i}]`); // cria o texto

    // define os pais de cada tag criada
    figureCap.appendChild(num);
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    // se i módulo 24 == 12 (é o corredor): define margem direita 60px
    if (i % 24 == 12) {
      figure.style.marginRight = "60px";
    }
    
    dvPalco.appendChild(figure); 

    // se i módulo 24 == 0: o código após o && será executado (inserindo quebra de linha)

    if (i % 24 == 0) {
      dvPalco.appendChild(document.createElement("br"))
    }    
  }
});
