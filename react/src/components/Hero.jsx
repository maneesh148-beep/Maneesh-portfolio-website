import { useEffect, useRef } from "react";
import { HERO } from "../data";
import { finePointer, reduceMotion } from "../hooks/usePrefs";
import { magneticHandlers, useStickerParallax } from "../hooks/useInteractions";
import { useCountUp } from "../hooks/useCountUp";

const PEN_SVG = (
  <svg width="38" height="47" viewBox="0 0 26 32">
    <rect x="9" y="1" width="8" height="4.5" rx="1.2" fill="#e67e22" stroke="white" strokeWidth="1.2" />
    <path
      fill="#e67e22"
      stroke="white"
      strokeWidth="1.3"
      fillRule="evenodd"
      d="M13 31 L5.2 17.5 C4.4 10 8 5.5 13 5.5 C18 5.5 21.6 10 20.8 17.5 Z M13 11.6 a3.1 3.1 0 1 0 0.002 0 Z"
    />
    <line x1="13" y1="17.8" x2="13" y2="27" stroke="white" strokeWidth="1.1" />
  </svg>
);

function Stat({ count, label }) {
  const [ref, value] = useCountUp(count);
  return (
    <li>
      <strong ref={ref}>{value}</strong>
      <span>{label}</span>
    </li>
  );
}

export default function Hero() {
  const stickersRef = useRef(null);
  const spotRef = useRef(null);
  const heroRef = useRef(null);
  const magnet = magneticHandlers();

  useStickerParallax(stickersRef);

  // Cursor spotlight glow across the hero.
  useEffect(() => {
    if (!finePointer || reduceMotion) return;
    const hero = heroRef.current;
    const spot = spotRef.current;
    if (!hero || !spot) return;
    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      spot.style.setProperty("--hx", `${e.clientX - r.left}px`);
      spot.style.setProperty("--hy", `${e.clientY - r.top}px`);
    };
    hero.addEventListener("pointermove", onMove);
    return () => hero.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-canvasland" ref={stickersRef} aria-hidden="true">
        <div className="sticker fl-circle" data-depth="18" />
        <div className="sticker fl-rect" data-depth="12" />
        <div className="sticker fl-dot" data-depth="24" />
        <span className="sticker fl-pen" data-depth="26">{PEN_SVG}</span>
        <span className="sticker fl-emoji e1" data-depth="16">🎨</span>
        <span className="sticker fl-emoji e2" data-depth="10">✨</span>
        <span className="sticker fl-emoji e3" data-depth="21">👋</span>
      </div>
      <div className="hero-spotlight" ref={spotRef} aria-hidden="true" />

      <div className="container">
        <p className="hero-badge intro intro-1">
          <span className="pulse-dot" /> {HERO.badge}
        </p>
        <h1 className="hero-title">
          <span className="line-mask">
            <span className="line intro intro-2">{HERO.titleLines[0]}</span>
          </span>
          <span className="line-mask">
            <span className="line intro intro-3">{HERO.titleLines[1]}</span>
          </span>
          <span className="line-mask">
            <span className="line intro intro-4">
              <em>{HERO.titleAccent}</em>
              <span className="title-period">.</span>
            </span>
          </span>
        </h1>
        <p className="hero-sub intro intro-5">{HERO.sub}</p>
        <div className="hero-cta intro intro-6">
          <a href="#work" className="btn btn-primary magnetic" {...magnet}>
            View case studies <span className="btn-icon" aria-hidden="true">↓</span>
          </a>
          <a
            href="/Maneesh-Jaiswal-Resume.pdf"
            download="Maneesh-Jaiswal-Resume.pdf"
            className="btn btn-ghost magnetic"
            {...magneticHandlers()}
          >
            Download Resume <span className="btn-icon" aria-hidden="true">↓</span>
          </a>
        </div>
        <ul className="hero-stats intro intro-7" aria-label="Highlights">
          {HERO.stats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </ul>
      </div>

      <a href="#work" className="scroll-hint intro intro-7" aria-label="Scroll to work">
        <span className="scroll-hint-line" /> Scroll
      </a>
    </section>
  );
}
