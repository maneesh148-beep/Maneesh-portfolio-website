import { useState } from "react";
import { EMAIL, SOCIALS } from "../data";
import { useReveal } from "../hooks/useReveal";
import { magneticHandlers } from "../hooks/useInteractions";

export default function Contact() {
  const [ref, shown] = useReveal();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className={`container contact-inner reveal${shown ? " in" : ""}`} ref={ref}>
        <p className="eyebrow">05 · Contact</p>
        <h2>
          Let's build something
          <br />
          great together.
        </h2>
        <p className="contact-sub">
          Have a project in mind, or just want to talk design? My inbox is always open.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary btn-big magnetic" {...magneticHandlers()}>
            {EMAIL}
          </a>
          <button
            className={`btn btn-ghost btn-big magnetic${copied ? " copied" : ""}`}
            id="copyEmail"
            onClick={copy}
            {...magneticHandlers()}
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
        </div>
        <ul className="socials" aria-label="Social links">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a href={s.href} rel="noopener" target="_blank">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
