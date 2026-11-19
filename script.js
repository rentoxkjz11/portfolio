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
  "glfit-site": "https://2b00adde-7aa2-42e9-946d-b92c492e490f-00-1lk0udao9gfu6.spock.replit.dev/",  // GL Fit Academia: site publicado
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
      // Link ainda não preenchido: botão desativado, sem levar a lugar nenhum.
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

/* ---------- Início ---------- */
document.documentElement.classList.add("js");
document.addEventListener("DOMContentLoaded", () => {
  applyLinks();
  setupMenu();
  setupScrollEffects();
  setupReveal();
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});
