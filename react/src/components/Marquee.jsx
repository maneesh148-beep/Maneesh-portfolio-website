import { MARQUEE_ITEMS } from "../data";

export default function Marquee() {
  // Two copies of the list so the -50% translate loops seamlessly.
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i} style={{ display: "contents" }}>
            <span>{item}</span>
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
