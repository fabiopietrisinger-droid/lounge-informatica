// Troque aqui se o número do WhatsApp mudar (DDI + DDD + número).
const WHATSAPP = "5511967150797";
const linkWhatsApp = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

// Botões com mensagem pronta
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = linkWhatsApp(el.dataset.wa);
});

// Abertura: trabalho ou jogo
const hero = document.querySelector(".hero");
hero.querySelectorAll("[data-set]").forEach((botao) => {
  botao.addEventListener("click", () => {
    const modo = botao.dataset.set;
    hero.dataset.mode = modo;
    hero.querySelectorAll("[data-set]").forEach((b) => b.setAttribute("aria-pressed", String(b === botao)));
    hero.querySelector(".pane-trabalho").hidden = modo !== "trabalho";
    hero.querySelector(".pane-gamer").hidden = modo !== "gamer";
  });
});

// Formulário: nada é armazenado, só monta a mensagem do WhatsApp
document.getElementById("form-wa").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const { uso, problema } = evento.target.elements;
  const texto = `Olá! Vim pelo site.\nUso: ${uso.value}\nProblema: ${problema.value.trim()}`;
  window.open(linkWhatsApp(texto), "_blank", "noopener");
});
