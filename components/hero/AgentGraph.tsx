"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Decorative topology of the agent platform: an entry node into an
 * orchestrator core, fanning out to domain agents, with a couple of
 * second-hop sub-agents to hint at delegation depth.
 *
 * Purely ornamental — aria-hidden, and desktop-only via the parent's
 * `hidden lg:block`. Nothing here gates readable content.
 */

const CORE = { x: 176, y: 220 };
const ENTRY = { x: 34, y: 220 };

/** Easter egg payload: click the core three times. */
const CHAOS_EMOJI = ["💀", "😭", "🗿", "🤡", "✨"];
const CHAOS_LABELS = ["ngl", "fr fr", "no cap", "lowkey", "based"];
const CHAOS_MS = 4000;

/** Fixed, not random — reproducible and safe against any SSR mismatch. */
const PARTICLES = [
  { emoji: "💀", x: -70, y: -84 },
  { emoji: "🐸", x: 84, y: -62 },
  { emoji: "✨", x: 104, y: 40 },
  { emoji: "😭", x: -44, y: 92 },
  { emoji: "🗿", x: -96, y: 20 },
  { emoji: "🤡", x: 40, y: 100 },
];

type Node = { id: string; x: number; y: number };

/** Fanned on an arc, radii nudged apart so it reads organic, not mandala-like. */
const AGENTS: Node[] = [
  { id: "speaker", x: 316, y: 58 },
  { id: "sponsor", x: 382, y: 140 },
  { id: "dealflow", x: 400, y: 226 },
  { id: "portfolio", x: 366, y: 312 },
  { id: "bookkeeper", x: 300, y: 386 },
];

/** Second hop — sub-agent skills hanging off two of the domain agents. */
const HOPS: { from: Node; to: { x: number; y: number } }[] = [
  { from: AGENTS[1], to: { x: 452, y: 92 } },
  { from: AGENTS[2], to: { x: 470, y: 258 } },
  { from: AGENTS[2], to: { x: 452, y: 190 } },
];

/**
 * Quadratic arc between two points, bowed perpendicular to the chord so the
 * edges curve instead of radiating as straight spokes.
 */
function arc(
  a: { x: number; y: number },
  b: { x: number; y: number },
  bow = 0.16,
) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  // perpendicular unit vector
  const px = -dy / len;
  const py = dx / len;
  const off = len * bow;
  return `M ${a.x} ${a.y} Q ${mx + px * off} ${my + py * off} ${b.x} ${b.y}`;
}

export function AgentGraph() {
  const reduce = useReducedMotion();
  const [chaos, setChaos] = useState(false);
  const clicks = useRef(0);

  // Auto-reset so the hero never stays in gag mode.
  useEffect(() => {
    if (!chaos) return;
    const t = window.setTimeout(() => {
      setChaos(false);
      clicks.current = 0;
    }, CHAOS_MS);
    return () => window.clearTimeout(t);
  }, [chaos]);

  const onCoreClick = () => {
    if (chaos) return; // no-op mid-chaos
    clicks.current += 1;
    if (clicks.current >= 3) setChaos(true);
  };

  const draw = (delay: number, duration = 1.1) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: {
            pathLength: {
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1] as const,
            },
            opacity: { duration: 0.3, delay },
          },
        };

  const pop = (delay: number) =>
    reduce
      ? { initial: false as const }
      : {
          initial: { scale: 0, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: {
            duration: 0.5,
            delay,
            ease: [0.34, 1.56, 0.64, 1] as const,
          },
        };

  return (
    <div aria-hidden className="relative w-full">
      <svg
        viewBox="0 0 560 440"
        fill="none"
        className="h-auto w-full overflow-visible"
        role="presentation"
      >
        {/* concentric rings for depth behind the core */}
        {[64, 108].map((r, i) => (
          <motion.circle
            key={`ring-${r}`}
            cx={CORE.x}
            cy={CORE.y}
            r={r}
            stroke="var(--hairline)"
            strokeWidth={1}
            strokeDasharray="2 6"
            {...(reduce
              ? { initial: false as const }
              : {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.9, delay: 0.2 + i * 0.12 },
                })}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}

        {/* entry -> core */}
        <motion.path
          d={arc(ENTRY, CORE, 0)}
          stroke="var(--hairline-strong)"
          strokeWidth={1}
          {...draw(0.5, 0.7)}
        />

        {/* core -> agents */}
        {AGENTS.map((a, i) => (
          <motion.path
            key={a.id}
            d={arc(CORE, a)}
            stroke="var(--hairline-strong)"
            strokeWidth={1}
            {...draw(0.7 + i * 0.09)}
          />
        ))}

        {/* agent -> sub-agent */}
        {HOPS.map((h, i) => (
          <motion.path
            key={`hop-${i}`}
            d={arc(h.from, h.to, 0.22)}
            stroke="var(--hairline)"
            strokeWidth={1}
            {...draw(1.5 + i * 0.1, 0.6)}
          />
        ))}

        {/* travelling pulses — one per edge, offset so they never sync up */}
        {!reduce &&
          AGENTS.map((a, i) => (
            <circle
              key={`pulse-${a.id}`}
              r={2.5}
              fill="var(--accent)"
              className="edge-pulse"
              style={{
                offsetPath: `path("${arc(CORE, a)}")`,
                animationDuration: `${3.4 + i * 0.42}s`,
                animationDelay: `${2.1 + i * 0.55}s`,
              }}
            />
          ))}

        {/* entry node */}
        <motion.circle
          cx={ENTRY.x}
          cy={ENTRY.y}
          r={3.5}
          fill="var(--fg-subtle)"
          {...pop(0.35)}
        />

        {/* core */}
        <motion.g {...pop(0.15)}>
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={30}
            stroke="var(--accent)"
            strokeOpacity={0.3}
            strokeWidth={1}
            className={
              reduce ? undefined : chaos ? "chaos-spin" : "core-breathe"
            }
            strokeDasharray={chaos ? "6 6" : undefined}
          />
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={16}
            fill="var(--accent)"
            fillOpacity={0.08}
          />
          <circle
            cx={CORE.x}
            cy={CORE.y}
            r={8}
            fill="var(--accent)"
            fillOpacity={0.92}
          />
        </motion.g>

        {/* chaos particles */}
        {chaos &&
          !reduce &&
          PARTICLES.map((p, i) => (
            <text
              key={`particle-${i}`}
              x={CORE.x}
              y={CORE.y}
              textAnchor="middle"
              // The <svg> root sets fill="none" for the paths; colour emoji
              // still need a non-none fill or Chrome computes layout for them
              // and paints nothing.
              fill="var(--fg)"
              className="chaos-particle"
              style={
                {
                  fontSize: 20,
                  "--fly-x": `${p.x}px`,
                  "--fly-y": `${p.y}px`,
                  animationDelay: `${i * 60}ms`,
                } as React.CSSProperties
              }
            >
              {p.emoji}
            </text>
          ))}

        {/* sub-agent nodes */}
        {HOPS.map((h, i) => (
          <motion.circle
            key={`sub-${i}`}
            cx={h.to.x}
            cy={h.to.y}
            r={2.5}
            fill="var(--fg-subtle)"
            {...pop(1.9 + i * 0.1)}
          />
        ))}

        {/* agent nodes + labels */}
        {AGENTS.map((a, i) => (
          <motion.g
            key={`node-${a.id}`}
            {...pop(1.15 + i * 0.09)}
            className={chaos && !reduce ? "chaos-wobble" : undefined}
            style={
              chaos && !reduce ? { animationDelay: `${i * 80}ms` } : undefined
            }
          >
            <circle
              cx={a.x}
              cy={a.y}
              r={12}
              stroke="var(--hairline-strong)"
              strokeWidth={1}
              className={reduce || chaos ? undefined : "node-ring"}
              style={reduce ? undefined : { animationDelay: `${i * 0.7}s` }}
              strokeOpacity={chaos ? 0 : 1}
            />
            {chaos ? (
              <text
                x={a.x}
                y={a.y + 6}
                textAnchor="middle"
                fill="var(--fg)"
                style={{ fontSize: 17 }}
              >
                {CHAOS_EMOJI[i]}
              </text>
            ) : (
              <circle cx={a.x} cy={a.y} r={3.5} fill="var(--fg-muted)" />
            )}
            <text
              x={a.x - 20}
              y={a.y - 22}
              fill={chaos ? "var(--accent)" : "var(--fg-subtle)"}
              className="font-mono"
              style={{ fontSize: 10.5, letterSpacing: "0.1em" }}
            >
              {chaos ? CHAOS_LABELS[i] : a.id}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Real button so this stays lint-clean, but kept out of the a11y tree
          and off the tab order — it's a gag, not functionality. */}
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        onClick={onCoreClick}
        className="absolute cursor-pointer rounded-full focus:outline-none"
        style={{
          // % of the 560x440 viewBox, so it tracks the SVG as it scales
          left: `${((CORE.x - 22) / 560) * 100}%`,
          top: `${((CORE.y - 22) / 440) * 100}%`,
          width: `${(44 / 560) * 100}%`,
          aspectRatio: "1",
        }}
      />

      {/* caption ties the ornament to the actual work */}
      <p className="type-label mt-2 text-right">
        agent orchestration · 15 in production
      </p>
    </div>
  );
}
