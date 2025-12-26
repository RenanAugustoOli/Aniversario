const palavra = "PRINCESA"; // palavra secreta
let tentativa = 0;

const grid = document.getElementById("grid");
const input = document.getElementById("palpite");
const btn = document.getElementById("enviar");

// cria o grid
for (let i = 0; i < 6; i++) {
  const linha = document.createElement("div");
  linha.className = "linha";

  for (let j = 0; j < 8; j++) {
    const celula = document.createElement("div");
    celula.className = "celula";
    linha.appendChild(celula);
  }

  grid.appendChild(linha);
}

btn.onclick = () => {
  const valor = input.value.toUpperCase();

  if (valor.length !== 8) return;

  const linha = grid.children[tentativa];
  const letras = linha.children;

  for (let i = 0; i < 8; i++) {
    letras[i].textContent = valor[i];

    if (valor[i] === palavra[i]) {
      letras[i].classList.add("correta");
    } 
    else if (palavra.includes(valor[i])) {
      letras[i].classList.add("presente");
    } 
    else {
      letras[i].classList.add("errada");
    }
  }

  if (valor === palavra) {
    alert("🎉 Você acertou!");
    return;
  }

  tentativa++;
  input.value = "";

  if (tentativa === 6) {
    alert("😢 Acabaram as tentativas! Palavra era: " + palavra);
  }
};
