"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the numeric part of a metric string while leaving any prefix or
 * suffix alone: "3,500+" -> counts 0..3500 and keeps the "+", "~5 min" keeps
 * the "~" and " min".
 *
 * Contract that matters: the FINAL value is what renders on the server, so the
 * static HTML says "218", not "0". It only drops to zero once JS has mounted
 * and the element is actually about to be seen, and a failsafe restores the
 * real number if the observer never fires. A decorative count must never be
 * the reason a visitor reads the wrong figure.
 */

const PARSE = /^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/;

export function CountUp({ value }: { value: string }) {
  const parsed = value.match(PARSE);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();

  // Unparseable (no digits at all) — render as-is, nothing to animate.
  const [prefix, rawNum, suffix] = parsed
    ? [parsed[1], parsed[2], parsed[3]]
    : ["", "", ""];
  const target = parsed ? Number(rawNum.replace(/,/g, "")) : 0;
  const grouped = rawNum.includes(",");
  const decimals = rawNum.includes(".") ? rawNum.split(".")[1].length : 0;

  const format = (n: number) => {
    const rounded = decimals ? n.toFixed(decimals) : String(Math.round(n));
    if (!grouped) return rounded;
    return Number(rounded).toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  // Starts at the true value; only zeroed after mount (see effect below).
  const [display, setDisplay] = useState(rawNum);
  const started = useRef(false);

  useEffect(() => {
    if (!parsed || reduce) return;
    setDisplay(format(0));
    // Failsafe: if the observer never fires, restore the real figure.
    const failsafe = window.setTimeout(() => {
      if (!started.current) setDisplay(rawNum);
    }, 2500);
    return () => window.clearTimeout(failsafe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!parsed || reduce || !inView || started.current) return;
    started.current = true;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(format(v)),
      onComplete: () => setDisplay(rawNum),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!parsed) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}
      <span className="tabular-nums">{display}</span>
      {suffix}
    </span>
  );
}
