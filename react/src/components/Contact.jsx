import { EMAIL, SOCIALS } from "../data";
import { useReveal } from "../hooks/useReveal";

const SITE_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
];

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
          <a
            href="Maneesh-Jaiswal-Resume.pdf"
            download="Maneesh-Jaiswal-Resume.pdf"
            className="btn btn-ghost contact-resume magnetic"
          >
            Download Resume <span className="btn-icon" aria-hidden="true">↓</span>
          </a>
          <div className="contact-info">
            <a href={`mailto:${EMAIL}`} className="contact-email">{EMAIL}</a>
            <span className="contact-div" aria-hidden="true" />
            <a href="tel:+917022833083" className="contact-email">+91 70228 33083</a>
          </div>
        </div>
        <div className="contact-cols">
          <ul aria-label="Site links">
            {SITE_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
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
