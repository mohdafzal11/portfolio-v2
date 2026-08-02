"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Shell } from "@/components/ui/Shell";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled && "border-b border-hairline bg-bg/80 backdrop-blur-md",
      )}
    >
      <Shell className="flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-mono text-[0.75rem] tracking-[0.08em] text-fg transition-colors hover:text-accent"
        >
          {personalInfo.name}
        </a>

        <nav className="flex items-center gap-6 md:gap-8">
          <ul className="hidden items-center gap-6 sm:flex md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[0.6875rem] tracking-[0.14em] text-fg-muted uppercase transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-hairline-strong px-4 py-2 font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Résumé
          </a>
        </nav>
      </Shell>

      {/* Scroll progress — decorative, transform-only. */}
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent/70"
        style={reduce ? { scaleX: 0 } : { scaleX }}
      />
    </header>
  );
}
