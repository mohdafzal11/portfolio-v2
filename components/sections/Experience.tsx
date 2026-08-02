import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { Chip, MonoLabel, SectionHeading } from "@/components/ui/Primitives";
import { TimelineRail, TimelineDot } from "@/components/ui/TimelineRail";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-hairline py-20 md:py-28"
    >
      <Shell>
        <Reveal>
          <SectionHeading index="02 / Experience" title="Where I've worked" />
        </Reveal>

        {/* The rail is absolutely positioned against this wrapper and draws
            down as the section scrolls past. */}
        <TimelineRail className="mt-10 md:mt-14">
          {experiences.map((job, i) => (
            <Reveal key={`${job.company}-${job.start}`} delay={i * 70}>
              <article className="relative grid gap-4 border-b border-hairline py-8 md:grid-cols-[15rem_1fr] md:gap-10 md:py-10 md:pl-10">
                <TimelineDot />

                {/* Metadata rail */}
                <div className="md:sticky md:top-28 md:self-start">
                  <MonoLabel className="block">{job.period}</MonoLabel>
                  <p className="mt-2 font-mono text-[0.75rem] text-fg-subtle">
                    {job.location}
                  </p>
                  {job.note ? (
                    <p className="mt-3 font-mono text-[0.6875rem] tracking-[0.06em] text-fg-subtle">
                      {job.note}
                    </p>
                  ) : null}
                </div>

                {/* Prose */}
                <div>
                  <h3 className="type-h3">
                    {job.title}
                    <span className="text-fg-subtle"> · </span>
                    {job.companyUrl ? (
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-sweep text-accent"
                      >
                        {job.company}
                      </a>
                    ) : (
                      <span className="text-accent">{job.company}</span>
                    )}
                  </h3>

                  <p className="mt-4 max-w-2xl text-fg-muted">
                    {job.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <Chip key={skill}>{skill}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </TimelineRail>
      </Shell>
    </section>
  );
}
