import { EXPERTISE, EXPERTISE_INTRO } from "../data";
import { useReveal } from "../hooks/useReveal";
import { spotlightHandlers } from "../hooks/useInteractions";

function Card({ item }) {
  const [ref, shown] = useReveal();
  return (
    <article
      ref={ref}
      className={`service-card spotlight reveal${shown ? " in" : ""}`}
      {...spotlightHandlers()}
    >
      <span className="service-num">{item.num}</span>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <ul className="service-list">
        {item.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    </article>
  );
}

export default function Expertise() {
  const [headRef, headShown] = useReveal();
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className={`section-head reveal${headShown ? " in" : ""}`} ref={headRef}>
          <p className="eyebrow">03 · Skills</p>
          <h2>What I Bring to Product Teams</h2>
          <p className="section-sub">{EXPERTISE_INTRO}</p>
        </div>
        <div className="services-grid">
          {EXPERTISE.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
