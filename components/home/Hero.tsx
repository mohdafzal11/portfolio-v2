"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10 opacity-30 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-20" />

            <div className="container px-4 md:px-6 mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm">
                        Available for freelance work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6"
                >
                    Building Digital <br /> Experiences
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
                >
                    I craft minimalist, high-performance websites and applications with a focus on user experience and clean code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/projects">
                        <Button size="lg" className="rounded-full text-base h-12 px-8">
                            View Work <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8 bg-transparent hover:bg-white/5 border-white/10">
                            Contact Me
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
