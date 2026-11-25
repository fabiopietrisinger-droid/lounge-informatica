// Animações ilustrativas da página gamer: nada aqui mede o aparelho do visitante.
(() => {
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Painel de temperatura do water cooler
  const gabinete = document.querySelector(".gabinete");
  const temperatura = document.getElementById("temp");
  setInterval(() => {
    if (document.hidden || semMovimento) return;
    const temp = 38 + (Math.random() * 4 - 2);
    temperatura.textContent = `${Math.round(temp)}°`;
    gabinete.style.setProperty("--temp-p", temp);
  }, 1200);

  // Placa de vídeo e FPS: ciclo de "antes" e "depois" do upgrade
  const palco = document.querySelector(".fps-palco");
  const numero = document.getElementById("fps-numero");
  const fase = palco.querySelector(".medidor-fase");
  const ANTES = 45;
  const DEPOIS = 120;

  // avanço vai de 0 (antes) a 1 (depois)
  const mostrar = (avanco, oscilacao = 0) => {
    const depois = avanco > 0.5;
    palco.dataset.fase = depois ? "depois" : "antes";
    fase.textContent = depois ? "Depois do upgrade" : "Antes do upgrade";
    numero.textContent = Math.round(ANTES + (DEPOIS - ANTES) * avanco + oscilacao);
    palco.style.setProperty("--desenho", 40 + 60 * avanco);
  };

  if (semMovimento) {
    mostrar(1);
    return;
  }

  let visivel = false;
  let tempo = 0;
  let anterior = null;
  let oscilacao = 0;
  let ultimaTroca = 0;
  let ventoinhas = null;

  const quadro = (agora) => {
    if (!visivel) return;
    tempo = (tempo + (anterior === null ? 0 : agora - anterior)) % 8000;
    anterior = agora;
    // 3s antes, 1,6s subindo, 3,4s depois
    const t = Math.min(Math.max((tempo - 3000) / 1600, 0), 1);
    const avanco = t * t * (3 - 2 * t);
    if (agora - ultimaTroca > 250) {
      ultimaTroca = agora;
      oscilacao = Math.random() * 4 - 2;
      ventoinhas ??= palco.getAnimations({ subtree: true }).filter((a) => a.animationName === "rodar");
      ventoinhas.forEach((a) => a.updatePlaybackRate(0.6 + avanco * 2));
    }
    mostrar(avanco, oscilacao);
    requestAnimationFrame(quadro);
  };

  // Começa do "antes" quando a seção aparece na tela
  new IntersectionObserver(([entrada]) => {
    if (entrada.isIntersecting === visivel) return;
    visivel = entrada.isIntersecting;
    if (visivel) {
      tempo = 0;
      anterior = null;
      requestAnimationFrame(quadro);
    }
  }, { threshold: 0.35 }).observe(palco);
})();
