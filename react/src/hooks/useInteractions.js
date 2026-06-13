import { useEffect } from "react";
import { finePointer, reduceMotion } from "./usePrefs";

// Pointer-driven flourishes shared across the page. Each returns handler
// objects you spread onto an element, so behavior stays declarative.

// Cursor-following glow: sets --mx/--my on the element.
export function spotlightHandlers() {
  if (!finePointer || reduceMotion) return {};
  return {
    onPointerMove: (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
      e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
    },
  };
}

// Subtle 3D tilt that also keeps the -6px hover lift.
export function tiltHandlers() {
  if (!finePointer || reduceMotion) return {};
  return {
    onPointerMove: (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      e.currentTarget.style.transform = `translateY(-6px) perspective(900px) rotateX(${py * -3}deg) rotateY(${px * 3}deg)`;
    },
    onPointerLeave: (e) => {
      e.currentTarget.style.transform = "";
    },
  };
}

// Magnetic pull toward the cursor.
export function magneticHandlers() {
  if (!finePointer || reduceMotion) return {};
  return {
    onPointerMove: (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      e.currentTarget.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
    },
    onPointerLeave: (e) => {
      e.currentTarget.style.transform = "";
    },
  };
}

// Parallax for the floating hero stickers: sets --px/--py per depth.
export function useStickerParallax(layerRef) {
  useEffect(() => {
    if (!finePointer || reduceMotion) return;
    const layer = layerRef.current;
    if (!layer) return;
    const items = layer.querySelectorAll(".sticker");
    const onMove = (e) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      items.forEach((el) => {
        const d = Number(el.dataset.depth) || 10;
        el.style.setProperty("--px", `${dx * d}px`);
        el.style.setProperty("--py", `${dy * d}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [layerRef]);
}
