"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
    year: string
    title: string
    company: string
    description: string
    skills?: string[]
}

const timelineData: TimelineItemProps[] = [
    {
        year: "2024 - Present",
        title: "Senior Frontend Engineer",
        company: "Tech Corp",
        description: "Leading the frontend team in building a next-generation SaaS platform. focusing on performance and scalability.",
        skills: ["React", "Next.js", "GraphQL", "AWS"],
    },
    {
        year: "2021 - 2024",
        title: "Frontend Developer",
        company: "Agency Studio",
        description: "Developed award-winning websites for various clients. Implemented complex animations and interactive experiences.",
        skills: ["Vue.js", "GSAP", "Three.js"],
    },
    {
        year: "2019 - 2021",
        title: "Web Developer",
        company: "Startup Inc",
        description: "Full stack development for early-stage startup products. Managed database and API integrations.",
        skills: ["Node.js", "Express", "MongoDB", "React"],
    },
]

export function Timeline() {
    return (
        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Dot */}
                    <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-black" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <span className="text-sm text-gray-400 font-mono">{item.year}</span>
                    </div>

                    <p className="text-base text-blue-400 mb-4 font-medium">{item.company}</p>
                    <p className="text-gray-400 mb-4 max-w-2xl">{item.description}</p>

                    {item.skills && (
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                                <span key={skill} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    )
}
