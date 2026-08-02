"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel } from "@/components/ui/Primitives";
import { archiveProjects } from "@/lib/data";

export function Archive() {
  /**
   * Which row's preview is showing, tracked in state rather than left to CSS
   * `:hover`. With three permanently-mounted images the CSS approach can show
   * more than one at once whenever hover sticks on multiple rows — touchscreen
   * laptops, screenshot tools dragging the cursor, a stylus. Single-slot state
   * makes that impossible: at most one preview exists in the DOM at a time.
   */
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="pb-20 md:pb-28">
      <Shell>
        <Reveal>
          <div className="flex items-end justify-between border-b border-hairline pb-5">
            <MonoLabel>Archive</MonoLabel>
            <MonoLabel>{archiveProjects.length} earlier projects</MonoLabel>
          </div>
        </Reveal>

        {/* pt leaves room for a hovered preview to overhang the first row
            without covering the section header above it. */}
        <ul className="pt-5" onMouseLeave={() => setActive(null)}>
          {archiveProjects.map((project, i) => (
            <Reveal as="li" key={project.title} delay={i * 50}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group relative grid grid-cols-[auto_1fr_auto] items-baseline gap-x-5 gap-y-1 border-b border-hairline py-5 transition-colors hover:bg-surface/60 md:grid-cols-[4rem_12rem_1fr_auto] md:gap-x-8"
              >
                {/* Accent bar grows from zero height at the row's left edge. */}
                <span
                  aria-hidden
                  className="absolute top-1/2 left-0 h-0 w-[2px] -translate-y-1/2 bg-accent transition-all duration-300 ease-out group-hover:h-[70%]"
                />

                <span className="contents transition-transform duration-300 group-hover:translate-x-1.5">
                  <MonoLabel className="transition-colors group-hover:text-accent">
                    {project.year}
                  </MonoLabel>

                  <span className="type-h3 col-start-2 transition-colors group-hover:text-accent">
                    {project.title}
                  </span>

                  <span className="col-span-2 col-start-2 text-sm text-fg-muted md:col-span-1 md:col-start-3">
                    {project.summary}
                  </span>
                </span>

                <ArrowUpRight
                  className="col-start-3 size-4 self-center text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent md:col-start-4"
                  aria-hidden
                />

                {/* Only the active row mounts a preview. On the MOYE row this
                    doubles as the gag — it IS a meme coin. Desktop only. */}
                {project.preview && active === i ? (
                  <Image
                    src={project.preview}
                    alt=""
                    aria-hidden
                    width={148}
                    height={80}
                    priority={false}
                    className="preview-pop pointer-events-none absolute top-1/2 right-14 z-20 hidden w-[148px] -translate-y-1/2 rounded-lg border border-hairline-strong shadow-card lg:block"
                  />
                ) : null}
              </a>
            </Reveal>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
