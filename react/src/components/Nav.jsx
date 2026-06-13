import { useState } from "react";
import { NAV_LINKS } from "../data";
import { magneticHandlers } from "../hooks/useInteractions";

export default function Nav({ scrolled, active, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const magnet = magneticHandlers();

  const cls = ["nav", scrolled && "scrolled", menuOpen && "menu-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={cls} id="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-logo">
          MJ<span className="dot">.</span>
        </a>
        <nav
          className="nav-links"
          aria-label="Primary"
          onClick={(e) => {
            if (e.target.tagName === "A") setMenuOpen(false);
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? "active" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="theme-toggle"
          aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          onClick={onToggleTheme}
        >
          {theme === "light" ? "☾" : "☀"}
        </button>
        <a href="#contact" className="btn btn-small magnetic" {...magnet}>
          Let's talk
        </a>
        <button
          className="nav-toggle"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
