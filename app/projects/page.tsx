import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";

const projects = [
    {
        title: "AI Dashboard Analytics",
        description: "A comprehensive dashboard for visualizing AI model performance metrics in real-time.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        link: "https://example.com",
        github: "https://github.com",
    },
    {
        title: "E-Commerce Platform",
        description: "Full-featured online store with cart functionality, stripe payment integration, and admin panel.",
        tags: ["React", "Node.js", "Prisma", "Stripe"],
        link: "https://example.com",
        github: "https://github.com",
    },
    {
        title: "Portfolio Website",
        description: "Personal portfolio website built with modern web technologies and animations.",
        tags: ["Next.js", "Framer Motion", "Tailwind"],
        github: "https://github.com",
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and team workspace features.",
        tags: ["Vue.js", "Firebase", "Pinia"],
        link: "https://example.com",
    },
];

export default function ProjectsPage() {
    return (
        <Section className="py-20">
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-4">
                    Featured Projects
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A collection of projects that showcase my passion for building clean, performant web applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}
