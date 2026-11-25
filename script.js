// Troque aqui se o número do WhatsApp mudar (DDI + DDD + número).
const WHATSAPP = "5511967150797";
const linkWhatsApp = (texto) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;

// Botões com mensagem pronta
document.querySelectorAll("[data-wa]").forEach((el) => {
  el.href = linkWhatsApp(el.dataset.wa);
});
