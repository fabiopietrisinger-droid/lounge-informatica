// Cena do gabinete: é só uma demonstração visual, não mede nada no aparelho do visitante.
(() => {
  const gabinete = document.querySelector(".gabinete");
  const numero = document.getElementById("temp");
  const botaoJogo = document.getElementById("simular");
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let temp = 38;
  let jogando = false;
  let velocidade = 1;

  const mostrar = () => {
    numero.textContent = `${Math.round(temp)}°`;
    gabinete.style.setProperty("--temp-p", temp);
  };

  // Fans aceleram e desaceleram aos poucos, sem saltos
  const ajustarFans = () => {
    gabinete.getAnimations({ subtree: true })
      .filter((a) => a.animationName === "rodar" || a.animationName === "fluir")
      .forEach((a) => a.updatePlaybackRate(velocidade));
  };

  setInterval(() => {
    if (document.hidden) return;
    const alvo = (jogando ? 64 : 38) + (Math.random() * 3 - 1.5);
    temp += (alvo - temp) * (semMovimento ? 1 : 0.14);
    velocidade += ((jogando ? 2.8 : 1) - velocidade) * 0.14;
    mostrar();
    if (!semMovimento) ajustarFans();
  }, 400);

  botaoJogo.addEventListener("click", () => {
    jogando = !jogando;
    botaoJogo.setAttribute("aria-pressed", jogando);
  });

  mostrar();
})();
