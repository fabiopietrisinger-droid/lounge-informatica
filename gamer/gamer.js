// Cena do gabinete: é só uma demonstração visual, não mede nada no aparelho do visitante.
(() => {
  const gabinete = document.querySelector(".gabinete");
  const numero = document.getElementById("temp");
  const botaoJogo = document.getElementById("simular");
  const botaoPausa = document.getElementById("pausar");
  const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let temp = 38;
  let jogando = false;
  let parado = false;
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
    if (parado || document.hidden) return;
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

  document.querySelectorAll("[data-cor-set]").forEach((botao) => {
    botao.addEventListener("click", () => {
      gabinete.dataset.cor = botao.dataset.corSet;
      document.querySelectorAll("[data-cor-set]").forEach((b) => b.setAttribute("aria-pressed", b === botao));
    });
  });

  if (semMovimento) botaoPausa.hidden = true;
  botaoPausa.addEventListener("click", () => {
    parado = !parado;
    document.body.classList.toggle("parado", parado);
    botaoPausa.setAttribute("aria-pressed", parado);
  });

  mostrar();
})();
