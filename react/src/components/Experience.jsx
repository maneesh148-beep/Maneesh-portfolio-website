import { useState } from "react";
import { EXPERIENCE } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const [headRef, headShown] = useReveal();
  const [open, setOpen] = useState(0); // first item open by default

  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className={`section-head reveal${headShown ? " in" : ""}`} ref={headRef}>
          <p className="eyebrow">05 · Experience</p>
          <h2>13+ years with leading tech companies</h2>
        </div>
        <div className="xp-list">
          {EXPERIENCE.map((e, i) => {
            const isOpen = open === i;
            return (
              <div className={`xp-item${isOpen ? " is-open" : ""}`} key={e.company}>
                <button
                  className="xp-head"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="xp-co">{e.company}</span>
                  <span className="xp-toggle" aria-hidden="true" />
                </button>
                <div className="xp-panel">
                  <div className="xp-panel-inner">
                    <p className="xp-role">{e.role}</p>
                    <p className="xp-desc">{e.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
