# Portfólio | Renato Moura

Portfólio profissional de **Renato Moura**, estudante de Análise e Desenvolvimento de Sistemas (ADS) em Belém, Pará, em busca de oportunidade de estágio em desenvolvimento de software.

Site estático feito com **HTML5, CSS3 e JavaScript**, sem frameworks e sem etapa de build. Tema escuro, responsivo e pronto para o **GitHub Pages**.

## Meus links profissionais

| Item | Link |
|---|---|
| GitHub | `[CAMPO PARA INSERIR MEU LINK]` |
| LinkedIn | `[CAMPO PARA INSERIR MEU LINK]` |
| Portfólio online | `[CAMPO PARA INSERIR O LINK PUBLICADO]` |
| E-mail profissional | `[CAMPO PARA INSERIR MEU E-MAIL]` |

## Links dos projetos

**Projeto 1 — GL Fit Academia**
- Repositório GitHub: `[LINK DO REPOSITÓRIO]`
- Projeto publicado: `[LINK DO SITE]`

**Projeto 2 — Python**
- Repositório GitHub: `[LINK DO REPOSITÓRIO]`
- Projeto publicado ou demonstração: `[LINK]`

**Projeto 3 — Java**
- Repositório GitHub: `[LINK DO REPOSITÓRIO]`
- Projeto publicado ou demonstração: `[LINK]`

> Troque os campos acima quando tiver os links reais. Não deixe colchetes no README publicado.

## Estrutura do projeto

```
portfolio-renato-moura/
├── index.html        # estrutura e conteúdo
├── style.css         # estilos (cores nas variáveis de :root)
├── script.js         # links editáveis, menu mobile e animações
├── README.md
├── .gitignore
└── assets/
    ├── favicon.svg
    └── img/          # capturas de tela dos projetos
```

## Como personalizar (3 passos)

### 1. Trocar seus links
Abra o `script.js`. No topo há dois objetos, `LINKS` e `PROJECTS`. Preencha com seus links reais. O site inteiro se atualiza sozinho (botões do início, contato e cards).

```js
const LINKS = {
  github: "https://github.com/seu-usuario",
  linkedin: "https://www.linkedin.com/in/seu-perfil",
  email: "seu-email@gmail.com",
};

const PROJECTS = {
  "glfit-site": "https://seu-usuario.github.io/gl-fit-academia/",
  "glfit-repo": "https://github.com/seu-usuario/gl-fit-academia",
  // ...
};
```

Enquanto um link de projeto estiver vazio (`""`), o botão aparece desativado. Isso evita um botão que leva a lugar nenhum.

No `index.html`, procure também por `SEU-USUARIO`, `SEU-PERFIL` e `SEU-EMAIL`: esses valores aparecem como texto padrão e são substituídos pelo `script.js`, mas vale trocá-los também (ajuda quem abre o site com JavaScript desativado e os robôs de busca).

### 2. Completar os projetos
No `index.html`, procure os textos em amarelo marcados com `[ ... ]` (classe `todo`). Substitua pelo que o projeto realmente faz e pelas tecnologias que você de fato usou. Quando terminar, remova o selo "A preencher".

### 3. Adicionar capturas de tela
Salve a imagem em `assets/img/` (por exemplo `glfit.png`) e altere o `src` da `<img>` do card correspondente.

## Abrir no VS Code

1. Instale o [VS Code](https://code.visualstudio.com/).
2. Extraia o ZIP em uma pasta de fácil acesso.
3. No VS Code: **File → Open Folder** e escolha `portfolio-renato-moura`.
4. Para visualizar: instale a extensão **Live Server** (Ritwick Dey), clique com o botão direito no `index.html` e escolha **Open with Live Server**. Alternativa: dê dois cliques no `index.html` para abrir no navegador.

## Criar o repositório no GitHub

1. Entre em [github.com](https://github.com) (crie a conta se ainda não tiver).
2. Clique em **+ → New repository**.
3. Nome do repositório: use `portfolio` (ou outro nome simples, sem espaços ou acentos).
4. Marque **Public** (obrigatório para o GitHub Pages gratuito).
5. Não marque "Add a README" (você já tem um). Clique em **Create repository**.

> Opção especial: se o repositório se chamar exatamente `SEU-USUARIO.github.io`, o link do site será `https://SEU-USUARIO.github.io/` (sem `/portfolio/` no final).

## Enviar os arquivos

### Opção A: pelo navegador (mais simples)
1. Na página do repositório recém-criado, clique em **uploading an existing file**.
2. Arraste **o conteúdo da pasta** (index.html, style.css, script.js, README.md, assets...), não a pasta em si. O `index.html` precisa ficar na raiz do repositório.
3. Clique em **Commit changes**.

### Opção B: pelo Git (bom para praticar)
Com o [Git instalado](https://git-scm.com/downloads), no terminal do VS Code (**Terminal → New Terminal**), dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Primeira versão do portfólio"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/portfolio.git
git push -u origin main
```

Na primeira vez, o Git pode pedir login. Se pedir senha, use um **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens), pois o GitHub não aceita mais a senha da conta.

## Publicar no GitHub Pages

1. No repositório, vá em **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
4. Aguarde de 1 a 3 minutos e atualize a página. O link aparece no topo, em "Your site is live at...".

## Obter o link definitivo do portfólio

O endereço segue o padrão:

```
https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
```

Exemplo: usuário `renatomoura` e repositório `portfolio` → `https://renatomoura.github.io/portfolio/`. Abra o link no navegador para confirmar que carrega. Depois:
- coloque-o no campo `portfolio` do `LINKS` em `script.js`;
- adicione-o ao LinkedIn (**Informações de contato** e seção **Em destaque**) e ao currículo;
- descomente e preencha a linha `og:url` no `<head>` do `index.html`.

Para atualizar o site depois, basta enviar os arquivos alterados (novo commit). O Pages republica sozinho em poucos minutos.

## Obter os links individuais dos projetos (para o currículo)

- **Link do repositório:** abra o repositório do projeto no GitHub e copie o endereço da barra do navegador. Formato: `https://github.com/SEU-USUARIO/NOME-DO-PROJETO`.
- **Link do projeto publicado (sites em HTML/CSS/JS, como a GL Fit Academia):** ative o GitHub Pages no repositório do projeto (mesmos passos acima). O link será `https://SEU-USUARIO.github.io/NOME-DO-PROJETO/`.
- **Projetos em Python ou Java:** o GitHub Pages só publica sites estáticos, então esses projetos normalmente não têm "link publicado". Use o link do repositório e, se quiser, uma demonstração (um README bom com descrição, como executar e uma captura de tela ou GIF já funciona como demonstração).

Cada projeto deve ter um README próprio explicando o que faz e como rodar.

## Modelo para o currículo

```
PORTFÓLIO: https://SEU-USUARIO.github.io/portfolio/
GITHUB: https://github.com/SEU-USUARIO
LINKEDIN: https://www.linkedin.com/in/SEU-PERFIL

PROJETOS:
- GL Fit Academia — https://SEU-USUARIO.github.io/gl-fit-academia/
- Projeto Python — https://github.com/SEU-USUARIO/NOME-DO-PROJETO-PYTHON
- Projeto Java — https://github.com/SEU-USUARIO/NOME-DO-PROJETO-JAVA
```

Dicas:
- Para cada projeto, escreva uma linha só com o que ele faz e as tecnologias usadas, apenas o que é verdade.
- Em PDF, confira se os links ficam clicáveis.
- Só liste projetos cujos repositórios estejam públicos e com README.

## Checklist antes de divulgar

- [ ] `LINKS` e `PROJECTS` preenchidos em `script.js`
- [ ] Nenhum `SEU-USUARIO`, `SEU-PERFIL`, `SEU-EMAIL` ou `[ ... ]` restando no site
- [ ] Capturas de tela reais nos cards
- [ ] Textos `todo` amarelos dos projetos substituídos ou cards removidos
- [ ] Site aberto no celular e no computador
- [ ] Todos os botões testados no link publicado
- [ ] README deste repositório com os links reais

## Tecnologias do site

HTML5 · CSS3 (Grid, Flexbox, variáveis CSS) · JavaScript (DOM, IntersectionObserver) · Fontes Inter e JetBrains Mono (Google Fonts)

---

Feito por Renato Moura · Belém, Pará
