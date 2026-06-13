import { EXPERIENCE } from "../data";
import { useReveal } from "../hooks/useReveal";

function Item({ entry }) {
  const [ref, shown] = useReveal();
  return (
    <li className={`timeline-item reveal${shown ? " in" : ""}`} ref={ref}>
      <span className="timeline-period">{entry.period}</span>
      <div>
        <h3>{entry.role}</h3>
        <p>{entry.desc}</p>
      </div>
    </li>
  );
}

export default function Experience() {
  const [headRef, headShown] = useReveal();
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <div className={`section-head reveal${headShown ? " in" : ""}`} ref={headRef}>
          <p className="eyebrow">04 · Experience</p>
          <h2>13+ years with leading tech companies</h2>
        </div>
        <ol className="timeline">
          {EXPERIENCE.map((e) => (
            <Item key={e.period} entry={e} />
          ))}
        </ol>
      </div>
    </section>
  );
}
