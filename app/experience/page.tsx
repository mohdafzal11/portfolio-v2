"use client"

import { Timeline } from "@/components/experience/Timeline";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <Section className="py-16 md:py-24">
            <div className="mb-24 relative pl-0 md:pl-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Career Path</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold font-mono text-white mb-8 tracking-tighter"
                >
                    EXPERIENCE
                </motion.h1>
                <div className="w-20 h-1 bg-primary mb-8" />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-400 text-lg max-w-2xl leading-relaxed font-sans"
                >
                    A chronological overview of my professional journey, key milestones, and technical contributions in the industry.
                </motion.p>
            </div>

            <Timeline />
        </Section>
    );
}
