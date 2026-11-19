<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Renato Moura | Estudante de ADS e Desenvolvedor em Formação</title>
  <meta name="description" content="Portfólio de Renato Moura, estudante de Análise e Desenvolvimento de Sistemas em Belém, Pará. Em busca de estágio em desenvolvimento de software." />
  <meta name="theme-color" content="#0a0f1e" />
  <meta property="og:url" content="https://rentoxkjz11.github.io/portfolio/" />
  <meta property="og:title" content="Renato Moura | Desenvolvedor em Formação" />
  <meta property="og:description" content="Estudante de ADS buscando estágio em desenvolvimento de software. Foco em Java, Python e back-end." />
  <meta property="og:type" content="website" />
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ========== NAVEGAÇÃO ========== -->
  <header class="header" id="header">
    <nav class="nav container" aria-label="Navegação principal">
      <a href="#inicio" class="logo" aria-label="Início">
        <span class="logo-bracket">&lt;</span>RM<span class="logo-bracket">/&gt;</span>
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav-menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="#sobre" class="nav-link">Sobre</a></li>
        <li><a href="#formacao" class="nav-link">Formação</a></li>
        <li><a href="#habilidades" class="nav-link">Habilidades</a></li>
        <li><a href="#projetos" class="nav-link">Projetos</a></li>
        <li><a href="#objetivos" class="nav-link">Objetivos</a></li>
        <li><a href="#contato" class="nav-link nav-cta">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>

    <!-- ========== INÍCIO ========== -->
    <section class="hero" id="inicio">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="container hero-grid">
        <div class="hero-content reveal">
          <p class="eyebrow"><span class="dot"></span> Disponível para oportunidades de estágio</p>
          <h1>Olá, eu sou <span class="gradient-text">Renato Moura</span></h1>
          <p class="hero-role">Estudante de Análise e Desenvolvimento de Sistemas<span class="cursor" aria-hidden="true">_</span></p>
          <p class="hero-text">
            Estou construindo minha carreira em tecnologia, com foco em desenvolvimento de software e back-end.
            Aprendo na prática, com projetos próprios, e busco um estágio para evoluir como desenvolvedor e trabalhar em equipe.
          </p>
          <div class="hero-actions">
            <a href="#projetos" class="btn btn-primary">Ver projetos</a>
            <a href="#contato" class="btn btn-ghost">Entrar em contato</a>
          </div>
          <ul class="social-row" aria-label="Redes e contatos">
            <li><a href="https://github.com/rentoxkjz11" class="social-btn" data-link="github" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/renatomoura114/" class="social-btn" data-link="linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:Renatoxx278@gmail.com" class="social-btn" data-link="email">E-mail</a></li>
          </ul>
        </div>

        <div class="hero-card reveal" aria-hidden="true">
          <div class="code-window">
            <div class="code-bar"><span></span><span></span><span></span><em>renato.py</em></div>
<pre><code><span class="c-k">class</span> <span class="c-f">Desenvolvedor</span>:
    nome = <span class="c-s">"Renato Moura"</span>
    cidade = <span class="c-s">"Belém, PA"</span>
    curso = <span class="c-s">"ADS (em andamento)"</span>
    foco = [<span class="c-s">"Java"</span>, <span class="c-s">"Python"</span>, <span class="c-s">"Back-end"</span>]
    objetivo = <span class="c-s">"Estágio em desenvolvimento"</span>

    <span class="c-k">def</span> <span class="c-f">aprender</span>(self):
        <span class="c-k">return</span> <span class="c-s">"todos os dias"</span></code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== SOBRE ========== -->
    <section class="section" id="sobre">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">01 / Sobre mim</span>
          <h2>Quem sou eu</h2>
        </header>
        <div class="about-grid">
          <div class="about-text reveal">
            <p>
              Sou estudante de Análise e Desenvolvimento de Sistemas e moro em Belém, no Pará.
              Tenho interesse em desenvolvimento de software, programação, desenvolvimento web
              e na criação de soluções tecnológicas.
            </p>
            <p>
              Estou no início da minha trajetória profissional. Por isso, procuro evoluir por meio dos estudos,
              da prática e da construção de projetos, com atenção às boas práticas de desenvolvimento.
            </p>
            <p>
              Quero aprofundar meus conhecimentos em <strong>Java</strong> e em <strong>desenvolvimento back-end</strong>,
              e conquistar um estágio para ganhar experiência real em equipe.
            </p>
          </div>
          <ul class="facts reveal">
            <li><span class="fact-label">Localização</span><span class="fact-value">Belém, Pará, Brasil</span></li>
            <li><span class="fact-label">Curso</span><span class="fact-value">Análise e Desenvolvimento de Sistemas</span></li>
            <li><span class="fact-label">Momento</span><span class="fact-value">2º semestre da graduação</span></li>
            <li><span class="fact-label">Objetivo</span><span class="fact-value">Estágio em desenvolvimento</span></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ========== FORMAÇÃO ========== -->
    <section class="section section-alt" id="formacao">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">02 / Formação acadêmica</span>
          <h2>Minha formação</h2>
        </header>
        <ol class="timeline">
          <li class="timeline-item reveal">
            <span class="timeline-dot" aria-hidden="true"></span>
            <div class="card">
              <span class="badge badge-live">Em andamento</span>
              <h3>Análise e Desenvolvimento de Sistemas (ADS)</h3>
              <p class="muted">Wyden Faculdade Ideal</p>
              <p class="meta">Início: março de 2026 · Atualmente no 2º semestre</p>
            </div>
          </li>
          <li class="timeline-item reveal">
            <span class="timeline-dot" aria-hidden="true"></span>
            <div class="card">
              <span class="badge">Concluído</span>
              <h3>Ensino Médio</h3>
              <p class="muted">Escola José Veríssimo</p>
              <p class="meta">Conclusão: 2025</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- ========== HABILIDADES ========== -->
    <section class="section" id="habilidades">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">03 / Habilidades técnicas</span>
          <h2>Tecnologias e conhecimentos</h2>
          <p class="section-sub">
            Sou estudante: estes são os assuntos que estudo e pratico, não uma lista de especialidades.
          </p>
        </header>

        <div class="skills-grid">
          <article class="card reveal">
            <h3>Base de estudo e prática</h3>
            <p class="muted small">Tecnologias com as quais já trabalho nos estudos e projetos.</p>
            <ul class="chips">
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>Java</li>
              <li>Programação Orientada a Objetos</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </article>

          <article class="card reveal" id="aprendizado">
            <h3>Em aprendizado</h3>
            <p class="muted small">Áreas que estou começando a explorar ou aprofundar.</p>
            <ul class="chips chips-outline">
              <li>Banco de dados</li>
              <li>Desenvolvimento web</li>
              <li>Fundamentos de computação em nuvem</li>
              <li>Fundamentos de segurança da informação</li>
              <li>Java avançado e back-end</li>
            </ul>
          </article>
        </div>

        <p class="note reveal">
          <strong>Foco de aprofundamento:</strong> Java e desenvolvimento back-end.
        </p>
      </div>
    </section>

    <!-- ========== PROJETOS ========== -->
    <section class="section section-alt" id="projetos">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">04 / Projetos</span>
          <h2>Projetos</h2>
          <p class="section-sub">
            Projetos que desenvolvo ao longo dos estudos, para praticar o que aprendo.
          </p>
        </header>

        <div class="projects-grid">

          <!-- ===== PROJETO 1: GL FIT ACADEMIA ===== -->
          <article class="project-card reveal">
            <button type="button" class="project-thumb zoomable" id="glfit-main" data-gallery="glfit" aria-label="Ampliar captura de tela da GL Fit Academia">
              <img src="assets/img/glfit-1-inicio.jpg" alt="Página inicial do site da GL Fit Academia, com o título 'Sua melhor versão começa aqui' e botões de ação" loading="lazy" />
              <span class="tag-float">Desenvolvimento Web</span>
            </button>
            <div class="thumbs" role="group" aria-label="Capturas de tela da GL Fit Academia">
              <button type="button" class="thumb is-active" data-index="0" aria-label="Ver captura 1: página inicial"><img src="assets/img/glfit-1-inicio.jpg" alt="" loading="lazy" /></button>
              <button type="button" class="thumb" data-index="1" aria-label="Ver captura 2: estrutura e modalidades"><img src="assets/img/glfit-2-estrutura.jpg" alt="" loading="lazy" /></button>
              <button type="button" class="thumb" data-index="2" aria-label="Ver captura 3: rodapé e contato"><img src="assets/img/glfit-3-contato.jpg" alt="" loading="lazy" /></button>
            </div>
            <div class="project-body">
              <h3>GL Fit Academia</h3>
              <p class="project-desc">
                Projeto de desenvolvimento web para uma academia, com foco em apresentar os serviços e as informações do estabelecimento.
              </p>
              <dl class="project-info">
                <div><dt>Objetivo</dt><dd>Apresentar os serviços e as informações da academia na web.</dd></div>
              </dl>
              <p class="project-note">O site não está mais hospedado. As capturas de tela mostram o resultado.</p>
              <div class="project-links">
                <button type="button" class="btn btn-small btn-primary" data-open-gallery="glfit">Ver capturas</button>
                <a href="#" class="btn btn-small btn-ghost" data-project="glfit-repo" data-hide-if-empty target="_blank" rel="noopener noreferrer">Repositório</a>
              </div>
            </div>
          </article>

          <!-- ===== PROJETO 2: PYTHON ===== -->
          <article class="project-card reveal">
            <div class="project-thumb">
              <img src="assets/img/placeholder-python.svg" alt="Gerenciador de Tarefas em Python" loading="lazy" />
              <span class="tag-float">Python</span>
            </div>
            <div class="project-body">
              <h3>Gerenciador de Tarefas</h3>
              <p class="project-desc">
                Aplicação de terminal para cadastrar, listar, concluir e remover tarefas, com prioridades e dados salvos em arquivo JSON.
              </p>
              <dl class="project-info">
                <div><dt>Objetivo</dt><dd>Praticar fundamentos de Python: funções, classes, arquivos JSON, tratamento de erros e testes automáticos.</dd></div>
                <div><dt>Tecnologias</dt><dd>Python (biblioteca padrão) e unittest</dd></div>
              </dl>
              <div class="project-links">
                <a href="#" class="btn btn-small btn-primary" data-project="python-repo" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </div>
            </div>
          </article>

          <!-- ===== PROJETO 3: JAVA ===== -->
          <article class="project-card reveal">
            <div class="project-thumb">
              <img src="assets/img/placeholder-java.svg" alt="Sistema de Biblioteca em Java" loading="lazy" />
              <span class="tag-float">Java · POO</span>
            </div>
            <div class="project-body">
              <h3>Sistema de Biblioteca</h3>
              <p class="project-desc">
                Aplicação de terminal para cadastrar livros e revistas, buscar por título, emprestar e devolver itens do acervo.
              </p>
              <dl class="project-info">
                <div><dt>Objetivo</dt><dd>Praticar Programação Orientada a Objetos: classe abstrata, herança, interface, polimorfismo e encapsulamento.</dd></div>
                <div><dt>Tecnologias</dt><dd>Java (sem frameworks)</dd></div>
              </dl>
              <div class="project-links">
                <a href="#" class="btn btn-small btn-primary" data-project="java-repo" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
              </div>
            </div>
          </article>

          <!-- ===== PROJETOS FUTUROS ===== -->
          <article class="project-card project-card-future reveal">
            <div class="future-inner">
              <span class="future-plus" aria-hidden="true">+</span>
              <h3>Próximos projetos</h3>
              <p>Novos trabalhos serão adicionados aqui conforme eu evoluir nos estudos.</p>
              <a href="#" class="btn btn-small btn-ghost" data-link="github" target="_blank" rel="noopener noreferrer">Acompanhar no GitHub</a>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- ========== OBJETIVOS ========== -->
    <section class="section" id="objetivos">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">05 / Objetivos profissionais</span>
          <h2>Para onde estou indo</h2>
        </header>
        <div class="goals-grid">
          <article class="goal reveal"><span class="goal-n">01</span><h3>Conquistar um estágio</h3><p>Entrar na área de desenvolvimento para ganhar experiência profissional e trabalhar em equipe.</p></article>
          <article class="goal reveal"><span class="goal-n">02</span><h3>Evoluir em Java e Python</h3><p>Aprimorar o que já estudo, com foco em Java e back-end.</p></article>
          <article class="goal reveal"><span class="goal-n">03</span><h3>Construir projetos próprios</h3><p>Praticar com projetos reais e manter um portfólio consistente para recrutadores.</p></article>
          <article class="goal reveal"><span class="goal-n">04</span><h3>Aprender boas práticas</h3><p>Desenvolver código organizado, versionado e fácil de manter.</p></article>
        </div>
      </div>
    </section>

    <!-- ========== CONTATO ========== -->
    <section class="section section-alt" id="contato">
      <div class="container">
        <header class="section-head reveal">
          <span class="section-tag">06 / Contato</span>
          <h2>Vamos conversar</h2>
          <p class="section-sub">
            Estou à procura de uma oportunidade de estágio em desenvolvimento de software. Se faz sentido para a sua equipe, fale comigo.
          </p>
        </header>
        <div class="contact-grid reveal">
          <a class="contact-card" href="mailto:Renatoxx278@gmail.com" data-link="email">
            <span class="contact-label">E-mail</span>
            <span class="contact-value" data-text="email">Renatoxx278@gmail.com</span>
          </a>
          <a class="contact-card" href="https://www.linkedin.com/in/renatomoura114/" data-link="linkedin" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">LinkedIn</span>
            <span class="contact-value" data-text="linkedin">linkedin.com/in/renatomoura114</span>
          </a>
          <a class="contact-card" href="https://github.com/rentoxkjz11" data-link="github" target="_blank" rel="noopener noreferrer">
            <span class="contact-label">GitHub</span>
            <span class="contact-value" data-text="github">github.com/rentoxkjz11</span>
          </a>
        </div>
      </div>
    </section>

  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <p>© <span id="year">2026</span> Renato Moura · Belém, Pará</p>
      <a href="#inicio" class="to-top">Voltar ao topo ↑</a>
    </div>
  </footer>

  <!-- ========== GALERIA (LIGHTBOX) ========== -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de capturas de tela" hidden>
    <button type="button" class="lb-close" id="lb-close" aria-label="Fechar galeria">&times;</button>
    <button type="button" class="lb-nav lb-prev" id="lb-prev" aria-label="Imagem anterior">&#8249;</button>
    <figure class="lb-figure">
      <img id="lb-img" src="" alt="" />
      <figcaption id="lb-caption"></figcaption>
    </figure>
    <button type="button" class="lb-nav lb-next" id="lb-next" aria-label="Próxima imagem">&#8250;</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
