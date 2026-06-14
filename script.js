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


// ── Approach timeline: line fills as the row scrolls horizontally ──
const apGrid = document.querySelector(".approach-grid");
const apFill = document.querySelector(".approach-line-fill");
const apScroller = document.querySelector(".approach-scroller");
if (apGrid) {
  const upd = () => {
    const max = apGrid.scrollWidth - apGrid.clientWidth;
    if (apFill && !reduceMotion) {
      const p = max > 0 ? apGrid.scrollLeft / max : 0;
      apFill.style.width = `${p * 100}%`;
    }
    apGrid.classList.toggle("fade-left", apGrid.scrollLeft > 4);
    apGrid.classList.toggle("at-end", max > 0 && apGrid.scrollLeft >= max - 4);
    if (apScroller) {
      apScroller.classList.toggle("can-prev", apGrid.scrollLeft > 4);
      apScroller.classList.toggle("can-next", max > 0 && apGrid.scrollLeft < max - 4);
    }
  };
  apGrid.addEventListener("scroll", upd, { passive: true });
  window.addEventListener("resize", upd, { passive: true });
  if (apScroller) {
    const step = () => {
      const card = apGrid.querySelector(".approach-card");
      const gap = parseFloat(getComputedStyle(apGrid).columnGap) || 28;
      return card ? card.offsetWidth + gap : apGrid.clientWidth * 0.8;
    };
    apScroller.querySelector(".approach-arrow.prev")?.addEventListener("click", () => {
      apGrid.scrollBy({ left: -step(), behavior: "smooth" });
    });
    apScroller.querySelector(".approach-arrow.next")?.addEventListener("click", () => {
      apGrid.scrollBy({ left: step(), behavior: "smooth" });
    });
  }
  upd();
}

// ── Experience accordion ──
document.querySelectorAll(".xp-head").forEach((head) => {
  head.addEventListener("click", () => {
    const item = head.closest(".xp-item");
    const open = item.classList.contains("is-open");
    document.querySelectorAll(".xp-item.is-open").forEach((o) => {
      o.classList.remove("is-open");
      o.querySelector(".xp-head").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("is-open");
      head.setAttribute("aria-expanded", "true");
    }
  });
});

// ── Footer year ──
document.getElementById("year").textContent = new Date().getFullYear();
