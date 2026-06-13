import { HERO } from "../data";
import { magneticHandlers } from "../hooks/useInteractions";
import { useCountUp } from "../hooks/useCountUp";

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
  const magnet = magneticHandlers();

  return (
    <section className="hero">
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
            href="Maneesh-Jaiswal-Resume.pdf"
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
