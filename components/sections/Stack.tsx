import { Shell } from "@/components/ui/Shell";
import { Reveal } from "@/components/ui/Reveal";
import { MonoLabel, SectionHeading } from "@/components/ui/Primitives";
import { ChipStagger } from "@/components/ui/ChipStagger";
import { skills } from "@/lib/data";

export function Stack() {
  return (
    <section className="py-20 md:py-28">
      <Shell>
        <Reveal>
          <SectionHeading index="03 / Stack" title="What I work with" />
        </Reveal>

        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-2 md:gap-10">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 70} className="h-full">
              <div className="h-full rounded-2xl border border-hairline bg-surface p-6 md:p-8">
                <MonoLabel className="block">{group.category}</MonoLabel>
                <div className="mt-5">
                  <ChipStagger items={group.items} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}
