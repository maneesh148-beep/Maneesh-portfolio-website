const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(pointer: fine)").matches;

// ── Sticky nav state ──
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ── Mobile menu ──
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// ── Scroll progress bar ──
const progress = document.querySelector(".scroll-progress");
window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.scrollY / max) * 100}%`;
  },
  { passive: true }
);

// ── Reveal on scroll ──
const revealEls = document.querySelectorAll(".reveal");
if (reduceMotion) {
  revealEls.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${(i % 4) * 70}ms`;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

// ── Count-up stats ──
const counters = document.querySelectorAll("[data-count]");
const countIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      if (reduceMotion) {
        el.textContent = target;
      } else {
        const start = performance.now();
        const dur = 1200;
        const tick = (now) => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
      countIO.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
counters.forEach((el) => countIO.observe(el));

// ── Active nav link ──
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const activeIO = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach((a) =>
        a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach((s) => activeIO.observe(s));

// ── Spotlight: cursor-following glow on cards ──
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".spotlight").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

// ── Subtle 3D tilt on work cards ──
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        `translateY(-6px) perspective(900px) rotateX(${py * -3}deg) rotateY(${px * 3}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

// ── Magnetic buttons ──
if (finePointer && !reduceMotion) {
  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    });
    btn.addEventListener("pointerleave", () => {
      btn.style.transform = "";
    });
  });
}

// ── Copy email ──
const copyBtn = document.getElementById("copyEmail");
if (copyBtn) {
  const label = copyBtn.textContent;
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(copyBtn.dataset.email);
      copyBtn.textContent = "Copied ✓";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = label;
        copyBtn.classList.remove("copied");
      }, 2000);
    } catch {
      window.location.href = `mailto:${copyBtn.dataset.email}`;
    }
  });
}

// ── Theme toggle (dark / light) ──
const themeToggle = document.getElementById("themeToggle");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const applyThemeUI = () => {
  const light = document.documentElement.dataset.theme === "light";
  themeToggle.textContent = light ? "☾" : "☀";
  themeToggle.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
  if (themeColorMeta) themeColorMeta.content = light ? "#f7f7f8" : "#0a0a0c";
};
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  applyThemeUI();
});
applyThemeUI();

// ── Hero cursor spotlight ──
const hero = document.querySelector(".hero");
const heroSpot = document.querySelector(".hero-spotlight");
if (finePointer && !reduceMotion && hero && heroSpot) {
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    heroSpot.style.setProperty("--hx", `${e.clientX - r.left}px`);
    heroSpot.style.setProperty("--hy", `${e.clientY - r.top}px`);
  });
}

// ── Figma canvas stickers parallax ──
const stickerLayer = document.getElementById("heroStickers");
if (stickerLayer && !reduceMotion && finePointer) {
  const items = stickerLayer.querySelectorAll(".sticker");
  window.addEventListener("pointermove", (e) => {
    const dx = e.clientX / window.innerWidth - 0.5;
    const dy = e.clientY / window.innerHeight - 0.5;
    items.forEach((el) => {
      const d = Number(el.dataset.depth) || 10;
      el.style.setProperty("--px", `${dx * d}px`);
      el.style.setProperty("--py", `${dy * d}px`);
    });
  }, { passive: true });
}

// ── Click-to-draw pen canvas in hero ──
const heroDraw = document.getElementById("heroDraw");
const drawShapes = document.getElementById("drawShapes");
const heroSection = document.querySelector(".hero");
if (heroDraw && drawShapes && heroSection) {
  const NS = "http://www.w3.org/2000/svg";
  const kinds = ["rect", "frame", "circle"];
  let pts = [];
  let poly = null;
  let kindIdx = 0;
  const blankTarget = (e) =>
    e.target === heroSection || e.target.classList.contains("container");
  heroSection.addEventListener("click", (e) => {
    if (!blankTarget(e) || e.detail > 1) return;
    const r = heroSection.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    pts.push(`${x},${y}`);
    if (!poly) {
      poly = document.createElementNS(NS, "polyline");
      poly.setAttribute("class", "draw-line");
      heroDraw.insertBefore(poly, heroDraw.firstChild);
    }
    poly.setAttribute("points", pts.join(" "));
    const a = document.createElementNS(NS, "rect");
    a.setAttribute("x", x - 5);
    a.setAttribute("y", y - 5);
    a.setAttribute("width", 10);
    a.setAttribute("height", 10);
    a.setAttribute("class", "draw-anchor");
    heroDraw.appendChild(a);
    const s = document.createElement("span");
    s.className = `draw-shape ds-${kinds[kindIdx++ % kinds.length]}`;
    s.style.left = `${x + 16}px`;
    s.style.top = `${y - 34}px`;
    drawShapes.appendChild(s);
  });
  heroSection.addEventListener("dblclick", (e) => {
    if (e.target.closest("a, button, h1, p, ul")) return;
    heroDraw.innerHTML = "";
    drawShapes.innerHTML = "";
    pts = [];
    poly = null;
  });
}

// ── Footer year ──
document.getElementById("year").textContent = new Date().getFullYear();
