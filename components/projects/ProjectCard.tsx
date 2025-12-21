"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import Image from "next/image"

interface ProjectProps {
    title: string
    description: string
    tags: string[]
    link?: string
    github?: string
    image?: string
}

export function ProjectCard({ project, index }: { project: ProjectProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="overflow-hidden glass border-white/5 h-full flex flex-col hover:border-white/20 transition-all duration-500 group relative bg-zinc-900/80 hover:bg-zinc-900/90">
                <div className="relative h-[18rem] w-full bg-zinc-800 overflow-hidden">
                    {project.image ? (
                        <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ) : (
                        /* Abstract placeholder pattern fallback */
                        <div className="w-full h-full bg-zinc-900 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#121212_25%,transparent_25%,transparent_75%,#121212_75%,#121212),linear-gradient(45deg,#121212_25%,transparent_25%,transparent_75%,#121212_75%,#121212)] bg-[length:20px_20px] bg-[position:0_0,10px_10px] opacity-20" />

                            <div className="z-10 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                                <span className="text-gray-400 group-hover:text-primary font-mono text-xs uppercase tracking-widest transition-colors">Preview Image</span>
                            </div>
                        </div>
                    )}

                    {/* Live/Github Overlay */}
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-primary hover:text-black transition-colors">
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>

                <CardHeader className="relative z-20 pt-6 pb-2">
                    <div className="flex justify-between items-start">
                        <CardTitle className="font-mono text-xl sm:text-2xl text-white group-hover:text-primary transition-colors uppercase tracking-tight leading-none">
                            {project.title}
                        </CardTitle>
                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors transform group-hover:-rotate-45 duration-300" />
                    </div>
                    <CardDescription className="line-clamp-2 mt-4 text-base text-gray-400 font-sans leading-relaxed">
                        {project.description}
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow z-20 pb-6 pt-2">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono text-gray-400 uppercase tracking-wider group-hover:border-white/10 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
