import { EMAIL, SOCIALS } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const [ref, shown] = useReveal();
  return (
    <section className="section contact" id="contact">
      <div className={`container contact-grid reveal${shown ? " in" : ""}`} ref={ref}>
        <div className="contact-left">
          <p className="eyebrow">Contact</p>
          <h2>
            Let's start creating
            <br />
            together.
          </h2>
          <div className="contact-info">
            <a
              href="Maneesh-Jaiswal-Resume.pdf"
              download="Maneesh-Jaiswal-Resume.pdf"
              className="contact-email"
            >
              Download Resume <span aria-hidden="true">↓</span>
            </a>
            <span className="contact-div" aria-hidden="true" />
            <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>
            <span className="contact-div" aria-hidden="true" />
            <a href="tel:+917022833083" className="contact-email">+91 70228 33083</a>
          </div>
        </div>
        <div className="contact-cols">
          <ul aria-label="Social links">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener">
                  <span>{s.label}</span>
                  <span className="ext" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
