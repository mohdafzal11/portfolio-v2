import Image from "next/image";
import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel, SectionHeading } from "@/components/ui/Primitives";
import { Parallax } from "@/components/ui/Parallax";
import { education, personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-hairline py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHeading index="04 / About" title="A bit more" />
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1fr_20rem] md:gap-16">
          {/* Prose */}
          <Reveal>
            <div className="space-y-6 text-lg text-fg-muted">
              {personalInfo.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-hairline pt-8">
              <MonoLabel className="block">Education</MonoLabel>
              <ul className="mt-5 space-y-5">
                {education.map((item) => (
                  <li
                    key={item.school}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
                  >
                    <div>
                      <p className="text-fg">{item.school}</p>
                      <p className="text-sm text-fg-muted">{item.degree}</p>
                    </div>
                    <MonoLabel>
                      {item.period} · {item.grade}
                    </MonoLabel>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Portrait */}
          <Reveal delay={80}>
            <Parallax className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-hairline bg-surface">
              <Image
                src="/profile.jpg"
                alt={`Portrait of ${personalInfo.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 20rem"
                className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
              />
            </Parallax>
            <p className="type-label mt-4 block">{personalInfo.location}</p>
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
