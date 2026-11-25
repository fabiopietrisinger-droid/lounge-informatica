# Site da LOUNGE Informática

Site em HTML, CSS e JavaScript puros, com uma versão para cada público:

- `/` escolha do público (`index.html`)
- `/empresas` empresas e home office (`empresas/index.html`)
- `/gamer` PC gamer (`gamer/index.html`, com a cena animada em `gamer/gamer.css` e `gamer/gamer.js`)
- `/links` links para a bio do Instagram, fora do menu e fora das buscas (`links/`)

Não precisa de instalação nem de build.

## Publicar na Vercel

1. Envie estes arquivos para a raiz de um repositório no GitHub.
2. Na Vercel: **Add New > Project** e importe o repositório.
3. Em **Framework Preset**, escolha **Other**. Deixe os comandos de build vazios.
4. Clique em **Deploy**. Cada novo envio para a branch principal publica sozinho.

## Ver no computador

```
npx serve .
```

Os caminhos começam com `/`, então abrir o `index.html` direto com dois cliques não carrega o estilo.

## Onde editar

| O que | Arquivo |
|---|---|
| Textos, serviços, telefone, horários | `index.html`, `empresas/index.html`, `gamer/index.html` |
| Número do WhatsApp dos botões | `script.js` (e os `href` e o número escrito nas páginas) |
| Cores e layout | `styles.css` |
| Logo e imagem de compartilhamento | `assets/` |

## Endereço

https://lounge-informatica.vercel.app

Se mudar de domínio, atualize `og:url`, `og:image` e `canonical` nas três páginas.
