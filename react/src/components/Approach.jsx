import { APPROACH, APPROACH_INTRO } from "../data";
import { useReveal } from "../hooks/useReveal";
import { spotlightHandlers } from "../hooks/useInteractions";

function Step({ step }) {
  const [ref, shown] = useReveal();
  return (
    <article
      ref={ref}
      className={`approach-card spotlight reveal${shown ? " in" : ""}`}
      {...spotlightHandlers()}
    >
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
        <div className="approach-grid">
          {APPROACH.map((step) => (
            <Step key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
