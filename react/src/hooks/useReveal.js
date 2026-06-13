import { useEffect, useRef, useState } from "react";
import { reduceMotion } from "./usePrefs";

// Adds the `in` class once the element scrolls into view (matches the
// original IntersectionObserver reveal). Returns a ref + the boolean.
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -40px 0px", delay = 0 } = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion || shown) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (delay) el.style.transitionDelay = `${delay}ms`;
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shown, threshold, rootMargin, delay]);

  return [ref, shown];
}
