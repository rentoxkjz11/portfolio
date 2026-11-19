/* =========================================================
   Portfólio – Renato Moura
   ---------------------------------------------------------
   >>> EDITE AQUI: seus links reais ficam neste objeto. <<<
   Depois de trocar, todos os botões do site são atualizados
   automaticamente. Links com valor "" aparecem desativados.
   ========================================================= */

const LINKS = {
  github: "https://github.com/rentoxkjz11",
  linkedin: "https://www.linkedin.com/in/renatomoura114/",
  email: "Renatoxx278@gmail.com",
  portfolio: "https://rentoxkjz11.github.io/portfolio/",
};

const PROJECTS = {
  "glfit-repo": "",  // GL Fit Academia: link do repositório (preencher quando existir)
  "python-repo": "https://github.com/rentoxkjz11/gerenciador-tarefas-python",  // Python: repositório
  "java-repo": "https://github.com/rentoxkjz11/sistema-biblioteca-java",       // Java: repositório
};

/* ---------- Aplica os links na página ---------- */
const PLACEHOLDER = /SEU-|EXEMPLO|exemplo\.com/i;

function isReal(value) {
  return typeof value === "string" && value.trim() !== "" && !PLACEHOLDER.test(value);
}

function applyLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const value = LINKS[key];
    if (!value) return;
    el.href = key === "email" ? `mailto:${value}` : value;
  });

  document.querySelectorAll("[data-text]").forEach((el) => {
    const key = el.dataset.text;
    const value = LINKS[key];
    if (!value) return;
    el.textContent = value.replace(/^https?:\/\/(www\.)?/, "");
  });

  document.querySelectorAll("[data-project]").forEach((el) => {
    const url = PROJECTS[el.dataset.project];
    if (isReal(url)) {
      el.href = url;
      el.classList.remove("is-pending");
      el.removeAttribute("aria-disabled");
    } else {
      // Link ainda não preenchido: botão desativado (ou escondido, se for opcional).
      if (el.hasAttribute("data-hide-if-empty")) el.hidden = true;
      el.removeAttribute("href");
      el.classList.add("is-pending");
      el.setAttribute("aria-disabled", "true");
      el.title = "Link ainda não adicionado";
    }
  });
}

/* ---------- Menu mobile ---------- */
function setupMenu() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  const close = () => {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });

  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- Header e link ativo ---------- */
function setupScrollEffects() {
  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = document.querySelectorAll(".nav-link");
  const sections = [...links]
    .map((l) => document.querySelector(l.getAttribute("href")))
    .filter(Boolean);

  if (!("IntersectionObserver" in window)) return;
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ---------- Animação de entrada ---------- */
function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}

/* ---------- Galeria de capturas de tela ---------- */
const GALLERIES = {
  glfit: [
    { src: "assets/img/glfit-1-inicio.jpg", alt: "Página inicial do site da GL Fit Academia, com o título 'Sua melhor versão começa aqui' e botões de ação", caption: "Página inicial" },
    { src: "assets/img/glfit-2-estrutura.jpg", alt: "Fotos da estrutura da academia e lista de modalidades: aula coletiva, bike, boxe e corrida de rua", caption: "Estrutura e modalidades" },
    { src: "assets/img/glfit-3-contato.jpg", alt: "Rodapé do site da GL Fit Academia, com endereço, WhatsApp e Instagram", caption: "Rodapé e contato" },
  ],
};

function setupGallery() {
  const box = document.getElementById("lightbox");
  const imgEl = document.getElementById("lb-img");
  const capEl = document.getElementById("lb-caption");
  const main = document.getElementById("glfit-main");
  if (!box || !imgEl) return;

  let name = "glfit";
  let index = 0;
  let lastFocus = null;

  const show = (i) => {
    const list = GALLERIES[name];
    index = (i + list.length) % list.length;
    const item = list[index];
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    capEl.textContent = `${item.caption} (${index + 1}/${list.length})`;
  };

  const open = (galleryName, i) => {
    name = galleryName;
    lastFocus = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.style.overflow = "hidden";
    document.getElementById("lb-close").focus();
  };

  const close = () => {
    box.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  };

  // Miniaturas do card: trocam a imagem principal.
  let current = 0;
  const thumbs = document.querySelectorAll(".thumb");
  const setMain = (i) => {
    const item = GALLERIES.glfit[i];
    current = i;
    if (main) {
      const img = main.querySelector("img");
      img.src = item.src;
      img.alt = item.alt;
    }
    thumbs.forEach((t) => t.classList.toggle("is-active", Number(t.dataset.index) === i));
  };
  thumbs.forEach((t) => t.addEventListener("click", () => setMain(Number(t.dataset.index))));

  // Abrir o lightbox: pela imagem principal ou pelo botão "Ver capturas".
  if (main) main.addEventListener("click", () => open("glfit", current));
  document.querySelectorAll("[data-open-gallery]").forEach((b) =>
    b.addEventListener("click", () => open(b.dataset.openGallery, current))
  );

  document.getElementById("lb-close").addEventListener("click", close);
  document.getElementById("lb-prev").addEventListener("click", () => show(index - 1));
  document.getElementById("lb-next").addEventListener("click", () => show(index + 1));
  box.addEventListener("click", (e) => { if (e.target === box) close(); });
  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
}

/* ---------- Início ---------- */
document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  setupMenu();
  setupScrollEffects();
  setupReveal();
  setupGallery();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
