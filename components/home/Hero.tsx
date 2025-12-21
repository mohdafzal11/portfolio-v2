"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#27272a 1px, transparent 1px)", backgroundSize: "40px 40px" }}
            />

            <div className="container px-4 md:px-6 mx-auto text-center z-10 relative">

                {/* Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <span className="inline-flex items-center py-2 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 uppercase tracking-widest backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-primary mr-3 animate-pulse" />
                        Available for new projects
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="font-mono text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]"
                >
                    SOFTWARE <br />
                    <span className="text-zinc-600">ENGINEER</span> & <br />
                    <span className="bg-primary text-black px-2 mt-2 inline-block transform -rotate-1">CREATOR</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-sans text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed"
                >
                    Crafting industrial-grade digital experiences with a focus on motion, interaction, and scalability.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/projects">
                        <Button variant="default" size="lg" className="rounded-full text-base font-bold tracking-wide">
                            VIEW WORK <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="rounded-full text-base font-bold tracking-wide border-white/20 hover:bg-white/10">
                            CONTACT ME
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
