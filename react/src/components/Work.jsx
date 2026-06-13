import { PROJECTS } from "../data";
import { useReveal } from "../hooks/useReveal";
import { spotlightHandlers, tiltHandlers } from "../hooks/useInteractions";

function ProjectCard({ project }) {
  const [ref, shown] = useReveal();
  const external = project.href.startsWith("http");
  const cls = [
    "work-card",
    project.featured && "work-featured",
    "spotlight tilt reveal",
    shown && "in",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      ref={ref}
      href={project.href}
      className={cls}
      {...(external ? { target: "_blank", rel: "noopener" } : {})}
      {...spotlightHandlers()}
      {...tiltHandlers()}
    >
      <div className={`work-thumb ${project.thumb}`}>
        {project.flag && <span className="work-flag">{project.flag}</span>}
        <img
          className={`thumb-img${project.free ? " thumb-img--free" : ""}`}
          src={project.img}
          alt={project.alt}
        />
      </div>
      <div className="work-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.desc}</p>
        </div>
        <span className="work-arrow" aria-hidden="true">→</span>
      </div>
      <ul className="work-tags">
        {project.tags.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </a>
  );
}

export default function Work() {
  const [headRef, headShown] = useReveal();
  return (
    <section className="section" id="work">
      <div className="container">
        <div className={`section-head reveal${headShown ? " in" : ""}`} ref={headRef}>
          <p className="eyebrow">01 · Recent Project Case Studies</p>
          <h2>Most impactful projects I worked on recently</h2>
        </div>
        <div className="work-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
