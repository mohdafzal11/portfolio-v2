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
        year: "Jun 2024 - Present",
        title: "Software Engineer",
        company: "DroomDroom",
        description: "Building a suite of user-friendly crypto analytics and intelligence platforms that make Web3 data accessible and actionable. Shipped real-time token price trackers, predictions engine, fundraising analytics platform, ETF trackers, and multi-chain mining ROI calculators. Focused on turning complex on-chain and market data into clean, trustworthy dashboards.",
        skills: ["Web3", "React", "Next.js", "Data Analytics", "Crypto"],
    },
    {
        year: "Jul 2024 - Jun 2025",
        title: "Software Engineer",
        company: "TIGEST",
        description: "Developed social media management software leveraging AI Agents to boost organic content engagement across LinkedIn, Twitter, Threads, Bluesky, Reddit, and Telegram. Solved employee advocacy challenges using AI for B2B SaaS, B2C brands, and Web3 companies.",
        skills: ["AI Agents", "Social Media", "Next.js", "Enterprise Dashboard"],
    },
    {
        year: "Jan 2024 - Jun 2024",
        title: "Junior Software Engineer",
        company: "RevSpire",
        description: "Implemented and optimized REST APIs, improving response times by up to 30%. Developed robust backend components integrated with Salesforce. Worked with an agile team to architect scalable web solutions and integrated AI-driven modules to automate workflows.",
        skills: ["REST APIs", "Salesforce", "Backend", "AI Integration", "Agile"],
    },
]

export function Timeline() {
    return (
        <div className="relative ml-0 md:ml-12 space-y-0">
            {/* Continuous Line */}
            <div className="absolute left-[19px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 to-transparent md:left-[-21px]" />

            {timelineData.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 md:pl-12 pb-20 last:pb-0 group"
                >
                    {/* Node/Dot */}
                    <span className="absolute left-[15px] top-2 h-2.5 w-2.5 bg-black border border-primary rounded-full z-10 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 md:left-[-25px]" />

                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                        <div>
                            <h3 className="text-2xl font-bold font-mono text-white mb-1">{item.title}</h3>
                            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-2">{item.company}</p>
                        </div>
                        <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5 w-fit">{item.year}</span>
                    </div>


                    <p className="text-gray-400 mb-6 max-w-2xl leading-relaxed text-base">{item.description}</p>

                    {item.skills && (
                        <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill) => (
                                <span key={skill} className="text-[10px] px-2 py-1 rounded-sm bg-zinc-900 border border-white/10 text-gray-400 font-mono uppercase tracking-wider group-hover:border-primary/20 transition-colors">
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
