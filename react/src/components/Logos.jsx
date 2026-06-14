import { LOGOS } from "../data";

export default function Logos() {
  // Two copies so the -50% translate loops seamlessly.
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section className="logos-section" aria-label="Companies I've worked with">
      <div className="logos-marquee" aria-hidden="true">
        <div className="logos-track">
          {loop.map((name, i) => (
            <span className="logo-item" key={`${name}-${i}`}>
              <img className="logo-img" src={`images/${name}.svg`} alt={name} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
