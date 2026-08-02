"use client";

import { useEffect } from "react";

/**
 * Single IntersectionObserver for every [data-reveal] on the page.
 *
 * Safety net: if IntersectionObserver is unavailable, or anything has not
 * been revealed within 1.5s, everything is forced visible. The reveal is
 * decoration — it must never be the reason content cannot be read.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (nodes.length === 0) return;

    const revealAll = () => nodes.forEach((n) => n.classList.add("is-visible"));

    if (!("IntersectionObserver" in window)) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.01 },
    );

    nodes.forEach((n) => observer.observe(n));

    const failsafe = window.setTimeout(revealAll, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return null;
}
