import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const isMobile = () => {
  return typeof window !== "undefined" && (window.innerWidth < 900 || "ontouchstart" in window);
};

/**
 * Initialise Lenis only on desktop.
 * Returns the Lenis instance or undefined on mobile.
 */
export const initLenis = (options = {}) => {
  if (isMobile()) return undefined;
  
  const defaultOpts = {
    duration: 0.6,
    easing: (t) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    smoothTouch: false,
    wheelMultiplier: 0.8,
    touchMultiplier: 0.5,
  };
  
  const lenis = new Lenis({ ...defaultOpts, ...options });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
};

/**
 * Setup GSAP ScrollTrigger normalization only on desktop.
 */
export const setupScrollTrigger = () => {
  if (isMobile()) return;
  ScrollTrigger.normalizeScroll(true);
};
