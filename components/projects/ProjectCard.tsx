"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "lucide-react" // Wait, Badge is usually a separate component, I can use a span or create a Badge component. I'll create a simple badge style here or use simple spans.
// Correcting: Lucide doesn't export Badge component, it exports Badge *icon*.
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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
        >
            <Card className="overflow-hidden glass border-white/10 h-full flex flex-col hover:border-white/20 transition-all duration-300 group">
                <div className="relative h-48 w-full bg-gray-900/50 overflow-hidden">
                    {/* Placeholder or Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    {/* If image exists, better to use next/image but for now simple div with bg or gradient */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardHeader>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="gap-2 pt-0 mt-auto">
                    {project.github && (
                        <Button variant="ghost" size="sm" asChild className="h-8 gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" /> Code
                            </a>
                        </Button>
                    )}
                    {project.link && (
                        <Button variant="ghost" size="sm" asChild className="h-8 gap-2 ml-auto">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Live Demo <ExternalLink className="w-4 h-4" />
                            </a>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
