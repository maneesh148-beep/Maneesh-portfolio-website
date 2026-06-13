// Fixed ambient layers behind everything.
export default function Background() {
  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
