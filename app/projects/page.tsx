"use client"

import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const projects = [
    {
        title: "MOYE - Meme Coin",
        description: "Moye is an Indian frog who first gained fame through viral memes. A community-driven crypto project with engaging UI.",
        tags: ["Next.js", "Tailwind CSS", "Web3", "Framer Motion"],
        link: "https://moyerevamped-sooty.vercel.app/",
        image: "/moye-meme.png",
    },
    {
        title: "Dongo.ai - Web3 Research",
        description: "Tailored to deliver in-depth analysis, real-time market forecasts, and seamless data integration, Dongo AI elevates strategic decision-making.",
        tags: ["React", "AI Integration", "Data Analytics", "Charts"],
        link: "https://dongo-ai.vercel.app/",
        image: "/dongo-ai.png",
    },
    {
        title: "Claimfinal - Airdrop Finder",
        description: "Bankless finds $802 on average in airdrops & more. Search your wallets and set up alerts for unclaimed tokens.",
        tags: ["Web3", "Blockchain", "React", "Notifications"],
        link: "https://claimfinal.vercel.app/",
        image: "/claim-final.png",
    },
    {
        title: "ACE.ai",
        description: "Practice job interviews and scholarships with our advanced AI. Interactive interview simulation platform.",
        tags: ["AI", "Next.js", "Speech-to-Text", "OpenAI"],
        link: "https://frontend-ace-ai.vercel.app/",
        image: "/ace-ai.png",
    },
];

export default function ProjectsPage() {
    return (
        <Section className="py-24 md:py-32">
            <div className="mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Selected Works</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-mono text-white mb-6 tracking-tighter"
                >
                    PROJECTS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-2xl mx-auto font-sans leading-relaxed"
                >
                    A curated collection of digital experiences, applications, and experiments.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}
