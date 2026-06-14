import { useEffect, useRef } from "react";
import { APPROACH, APPROACH_INTRO } from "../data";
import { useReveal } from "../hooks/useReveal";
import { reduceMotion } from "../hooks/usePrefs";

function Step({ step }) {
  const [ref, shown] = useReveal();
  return (
    <article ref={ref} className={`approach-card reveal${shown ? " in" : ""}`}>
      <span className="service-num">{step.num}</span>
      <div>
        <h3>{step.title}</h3>
        <p className="approach-lead">{step.lead}</p>
        <p>{step.desc}</p>
        <p className="approach-tags">{step.tags}</p>
      </div>
    </article>
  );
}

export default function Approach() {
  const [headRef, headShown] = useReveal();
  const gridRef = useRef(null);
  const fillRef = useRef(null);
  const scrollerRef = useRef(null);

  // Line fills as the row scrolls horizontally; fade edges and toggle arrows by position.
  useEffect(() => {
    const grid = gridRef.current;
    const fill = fillRef.current;
    const scroller = scrollerRef.current;
    if (!grid) return;
    const upd = () => {
      const max = grid.scrollWidth - grid.clientWidth;
      if (fill && !reduceMotion) {
        const p = max > 0 ? grid.scrollLeft / max : 0;
        fill.style.width = `${p * 100}%`;
      }
      grid.classList.toggle("fade-left", grid.scrollLeft > 4);
      grid.classList.toggle("at-end", max > 0 && grid.scrollLeft >= max - 4);
      if (scroller) {
        scroller.classList.toggle("can-prev", grid.scrollLeft > 4);
        scroller.classList.toggle("can-next", max > 0 && grid.scrollLeft < max - 4);
      }
    };
    grid.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd, { passive: true });
    upd();
    return () => {
      grid.removeEventListener("scroll", upd);
      window.removeEventListener("resize", upd);
    };
  }, []);

  const scrollStep = (dir) => {
    const grid = gridRef.current;
    if (!grid) return;
    const card = grid.querySelector(".approach-card");
    const gap = parseFloat(getComputedStyle(grid).columnGap) || 28;
    const step = card ? card.offsetWidth + gap : grid.clientWidth * 0.8;
    grid.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="section" id="approach">
      <div className="container">
        <div className={`section-head reveal${headShown ? " in" : ""}`} ref={headRef}>
          <p className="eyebrow">02 · My Approach</p>
          <h2>
            Designing products that balance user needs, business goals, and technical realities.
          </h2>
          <p className="section-sub">{APPROACH_INTRO}</p>
        </div>
        <div className="approach-line" aria-hidden="true">
          <span className="approach-line-fill" ref={fillRef} />
        </div>
        <div className="approach-scroller" ref={scrollerRef}>
          <div className="approach-grid" ref={gridRef}>
            {APPROACH.map((step) => (
              <Step key={step.num} step={step} />
            ))}
          </div>
          <button
            className="approach-arrow prev"
            type="button"
            aria-label="Scroll to previous steps"
            onClick={() => scrollStep(-1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="approach-arrow next"
            type="button"
            aria-label="Scroll to more steps"
            onClick={() => scrollStep(1)}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
