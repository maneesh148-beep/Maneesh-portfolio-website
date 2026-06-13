// Shared environment preferences, read once.
export const reduceMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const finePointer =
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine)").matches;
