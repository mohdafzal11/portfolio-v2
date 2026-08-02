import { ArrowUpRight } from "lucide-react";
import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { Chip, MonoLabel, SectionHeading } from "@/components/ui/Primitives";
import { CountUp } from "@/components/ui/CountUp";
import { featuredProjects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLead = index === 0;

  const body = (
    <>
      {/* Typographic plate — stands in for a screenshot */}
      <div
        className={cn(
          "relative flex items-end overflow-hidden rounded-xl border border-hairline bg-bg p-6",
          isLead ? "min-h-[220px] md:min-h-[300px]" : "min-h-[180px]",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--hairline) 1px, transparent 1px), linear-gradient(to bottom, var(--hairline) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(120% 100% at 50% 0%, black 20%, transparent 75%)",
          }}
        />
        <span
          className={cn(
            "type-h2 relative text-fg transition-colors duration-300 group-hover:text-accent",
            isLead && "md:text-[3.5rem]",
          )}
        >
          {project.title}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <MonoLabel>
            {project.role} · {project.year}
          </MonoLabel>
        </div>
        {project.link ? (
          <ArrowUpRight
            className="size-4 shrink-0 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden
          />
        ) : null}
      </div>

      <p
        className={cn(
          "mt-4 text-fg-muted",
          isLead ? "max-w-2xl text-base md:text-lg" : "text-sm md:text-base",
        )}
      >
        {project.summary}
      </p>

      {project.metrics.length > 0 && (
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <dd className="font-mono text-xl text-fg md:text-2xl">
                <CountUp value={m.value} />
              </dd>
              <dt className="type-label mt-1">{m.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>

      {project.linkLabel ? (
        <p className="mt-6 font-mono text-[0.75rem] text-fg-subtle transition-colors group-hover:text-accent">
          {project.linkLabel}
        </p>
      ) : null}
    </>
  );

  const shared =
    "group flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 shadow-card transition-all duration-300 md:p-8 hover:-translate-y-1 hover:border-hairline-strong hover:bg-surface-hover hover:shadow-card-hover";

  return project.link ? (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(shared, isLead && "md:col-span-2")}
    >
      {body}
    </a>
  ) : (
    <div className={cn(shared, isLead && "md:col-span-2")}>{body}</div>
  );
}

export function Work() {
  return (
    <section id="work" className="pt-8 pb-16 md:pt-12 md:pb-20">
      <Shell>
        <Reveal>
          <SectionHeading
            index="01 / Selected Work"
            title="Systems I've built"
            aside={<MonoLabel>{featuredProjects.length} projects</MonoLabel>}
          />
        </Reveal>

        {/* Asymmetric grid: lead project spans both columns. */}
        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 70}
              className={i === 0 ? "md:col-span-2" : "h-full"}
            >
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
