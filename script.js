// ======================
// ⏳ CONTADOR DE TEMPO
// ======================
const inicio = new Date("2025-05-20T00:00:00");


function atualizar() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizar, 1000);
atualizar();


// ======================
// 💌 CARTA
// ======================
const abrirCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");
const fecharCarta = document.getElementById("fechar");

abrirCarta.onclick = () => carta.classList.add("ativa");
fecharCarta.onclick = () => carta.classList.remove("ativa");


// ======================
// 🖼️ SLIDESHOW
// ======================
const fotos = document.querySelectorAll(".slideshow img");
let indexFoto = 0;

setInterval(() => {
  fotos[indexFoto].classList.remove("ativo");
  indexFoto = (indexFoto + 1) % fotos.length;
  fotos[indexFoto].classList.add("ativo");
}, 3000);


// ======================
// 🔐 SENHA + MÚSICA
// ======================
const senhaCorreta = "a"; // 🔴 MUDE AQUI

const entrar = document.getElementById("entrar");
const senhaInput = document.getElementById("senha");
const lock = document.getElementById("lock");
const site = document.getElementById("site");
const erro = document.getElementById("erro");
const musica = document.getElementById("musica");

entrar.onclick = () => {
  if (senhaInput.value === senhaCorreta) {
    lock.style.opacity = 0;

    setTimeout(() => {
      lock.style.display = "none";
      site.style.display = "block";

      musica.volume = 0.5;
      musica.play().then(() => {
        mostrarPopupMusica();
      });
    }, 500);
  } else {
    erro.style.display = "block";
    senhaInput.value = "";
  }
};


// ======================
// 🎶 POPUP DA MÚSICA
// ======================
function mostrarPopupMusica() {
  const popup = document.createElement("div");

  popup.innerHTML = "🎶 Essa música é pra você 💖";
  popup.style.position = "fixed";
  popup.style.bottom = "30px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.background = "#1f1f1f";
  popup.style.color = "white";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "20px";
  popup.style.fontSize = "14px";
  popup.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
  popup.style.zIndex = "9999";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.5s";

  document.body.appendChild(popup);

  setTimeout(() => popup.style.opacity = "1", 100);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}


const heartsContainer = document.getElementById("hearts");
const emojis = ["💖", "💗", "💕", "💞"];

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heart.style.animationDuration = 10 + Math.random() * 15 + "s";
  heart.style.animationDelay = Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);
}
