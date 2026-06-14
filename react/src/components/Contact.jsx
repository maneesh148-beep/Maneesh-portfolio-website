import { EMAIL, NAV_LINKS, SOCIALS } from "../data";
import { useReveal } from "../hooks/useReveal";

const SITE_LINKS = [{ href: "#top", label: "Home" }, ...NAV_LINKS];

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
          <a href={`mailto:${EMAIL}`} className="contact-email">
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>
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
