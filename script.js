const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
          entry.target.style.transitionDelay = `${(i % 3) * 80}ms`;
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
}

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

// ── Footer year ──
document.getElementById("year").textContent = new Date().getFullYear();
