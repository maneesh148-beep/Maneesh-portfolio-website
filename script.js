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

// ── Hero floating particles ──
const heroCanvas = document.getElementById("heroParticles");
if (heroCanvas && !reduceMotion) {
  const pctx = heroCanvas.getContext("2d");
  let w, h, parts = [], running = false, raf;
  let mx = 0.5, my = 0.5;
  const COUNT = 34;
  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = heroCanvas.clientWidth;
    h = heroCanvas.clientHeight;
    heroCanvas.width = w * dpr;
    heroCanvas.height = h * dpr;
    pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const seed = () => {
    parts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2.2,
      vy: 0.15 + Math.random() * 0.35,
      vx: (Math.random() - 0.5) * 0.12,
      a: 0.12 + Math.random() * 0.35,
      tw: Math.random() * Math.PI * 2,
    }));
  };
  const tick = () => {
    pctx.clearRect(0, 0, w, h);
    const px = (mx - 0.5) * 16;
    const py = (my - 0.5) * 12;
    for (const p of parts) {
      p.y -= p.vy;
      p.x += p.vx;
      p.tw += 0.02;
      if (p.y < -6) { p.y = h + 6; p.x = Math.random() * w; }
      if (p.x < -6) p.x = w + 6;
      else if (p.x > w + 6) p.x = -6;
      const alpha = p.a * (0.6 + 0.4 * Math.sin(p.tw));
      pctx.beginPath();
      pctx.arc(p.x + px * p.r * 0.3, p.y + py * p.r * 0.3, p.r, 0, Math.PI * 2);
      pctx.fillStyle = `rgba(230, 126, 34, ${alpha})`;
      pctx.fill();
    }
    raf = requestAnimationFrame(tick);
  };
  resize();
  seed();
  window.addEventListener("resize", () => { resize(); seed(); }, { passive: true });
  if (finePointer) {
    window.addEventListener("pointermove", (e) => {
      mx = e.clientX / window.innerWidth;
      my = e.clientY / window.innerHeight;
    }, { passive: true });
  }
  // Animate only while the hero is on screen
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !running) { running = true; tick(); }
    else if (!entry.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
  }).observe(heroCanvas);
}

// ── Footer year ──
document.getElementById("year").textContent = new Date().getFullYear();
