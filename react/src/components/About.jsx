import { ABOUT } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function About() {
  const [portraitRef, portraitShown] = useReveal();
  const [eyebrowRef, eyebrowShown] = useReveal();
  const [h2Ref, h2Shown] = useReveal();
  const [p1Ref, p1Shown] = useReveal();
  const [p2Ref, p2Shown] = useReveal();
  const [chipsRef, chipsShown] = useReveal();

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className={`about-portrait reveal${portraitShown ? " in" : ""}`} ref={portraitRef}>
          <div className="portrait-frame">
            <img src="/images/maneesh.jpg" alt="Maneesh Jaiswal" />
          </div>
          <div className="portrait-card">
            <span className="pulse-dot" />
            <div>
              <strong>Currently</strong>
              <p>Shaping Guest UX at Target Corp.</p>
            </div>
          </div>
        </div>
        <div className="about-copy">
          <p className={`eyebrow reveal${eyebrowShown ? " in" : ""}`} ref={eyebrowRef}>
            03 · About
          </p>
          <h2 className={`reveal${h2Shown ? " in" : ""}`} ref={h2Ref}>
            Design leader for products that scale to millions.
          </h2>
          <p className={`reveal${p1Shown ? " in" : ""}`} ref={p1Ref}>
            {ABOUT.paragraphs[0]}
          </p>
          <p className={`reveal${p2Shown ? " in" : ""}`} ref={p2Ref}>
            {ABOUT.paragraphs[1]}
          </p>
          <ul
            className={`skill-chips reveal${chipsShown ? " in" : ""}`}
            ref={chipsRef}
            aria-label="Skills"
          >
            {ABOUT.skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
