"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * A vertical accent rail that draws downward as the section scrolls past.
 * Decorative only — it sits behind the entries and never affects whether the
 * role text is readable. Desktop only; on mobile the rail would just be a
 * sliver next to already-narrow content.
 */
export function TimelineRail({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className={cn("relative", className)}>
      {/* track */}
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-[3px] hidden w-px bg-hairline md:block"
      />
      {/* drawn portion */}
      <motion.div
        aria-hidden
        className="absolute top-0 bottom-0 left-[3px] hidden w-px origin-top bg-accent/60 md:block"
        style={reduce ? { scaleY: 1 } : { scaleY }}
      />
      {children}
    </div>
  );
}

/** Marker on the rail for one entry; lights up when the entry enters view. */
export function TimelineDot() {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = useReducedMotion();
  const lit = reduce || inView;

  return (
    <span
      ref={ref}
      aria-hidden
      className={cn(
        "absolute top-10 left-0 hidden size-[7px] rounded-full transition-all duration-500 md:block",
        lit
          ? "scale-100 bg-accent shadow-[0_0_0_4px_var(--accent-dim)]"
          : "scale-75 bg-hairline-strong",
      )}
    />
  );
}
