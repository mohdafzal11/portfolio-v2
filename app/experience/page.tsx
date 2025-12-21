import { Timeline } from "@/components/experience/Timeline";
import { Section } from "@/components/ui/Section";

export default function ExperiencePage() {
    return (
        <Section className="py-20">
            <div className="mb-16 md:pl-10">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Professional Experience
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    My journey through the tech industry, building products and leading teams.
                </p>
            </div>

            <Timeline />
        </Section>
    );
}
