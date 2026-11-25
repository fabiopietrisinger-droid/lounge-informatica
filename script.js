// Troque aqui se o número do WhatsApp mudar (DDI + DDD + número).
const WHATSAPP = "5511967150797";
const linkWhatsApp = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

// Botões com mensagem pronta
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = linkWhatsApp(el.dataset.wa);
});

// Formulário: nada é armazenado, só monta a mensagem do WhatsApp
document.getElementById("form-wa")?.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const { uso, config, problema } = evento.target.elements;
  const linhas = ["Olá! Vim pelo site.", `Uso: ${uso.value}`];
  if (config?.value.trim()) linhas.push(`Peças: ${config.value.trim()}`);
  linhas.push(`Problema: ${problema.value.trim()}`);
  window.open(linkWhatsApp(linhas.join("\n")), "_blank", "noopener");
});
