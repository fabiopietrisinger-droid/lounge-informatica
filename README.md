# Site da LOUNGE Informática

Site de uma página em HTML, CSS e JavaScript puros. Não precisa de instalação nem de build.

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
| Textos, serviços, telefones, e-mail | `index.html` |
| Número do WhatsApp dos botões e do formulário | `script.js` (e os `href` de `wa.me` no `index.html`) |
| Cores e layout | `styles.css` |
| Logo e imagem de compartilhamento | `assets/` |

## Endereço

https://lounge-informatica.vercel.app

Se mudar de domínio, atualize `og:url`, `og:image` e `canonical` no `index.html`.
