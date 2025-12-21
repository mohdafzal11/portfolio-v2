"use client"

import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Code, Database, Layout, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="pt-20">
            <Section className="py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block">Profile</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-8 leading-[1.1] tracking-tight">
                            Engineer <br />
                            <span className="text-gray-600">&</span> Developer
                        </h1>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
                            <p>
                                I am a dedicated Software Engineer focused on building scalable, high-performance web applications. I specialize in modern frontend architectures and full-stack development.
                            </p>
                            <p>
                                My engineering philosophy centers on writing clean, maintainable code and solving complex problems with efficient solutions. I thrive in collaborative environments where innovation and technical excellence are valued.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group md:ml-auto"
                    >
                        <div className="w-full md:w-[400px] aspect-[4/5] rounded-[2rem] bg-zinc-900 border border-white/5 flex items-center justify-center relative overflow-hidden shadow-2xl group">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0" />

                            <Image
                                src="/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                            <div className="absolute bottom-6 left-6 z-20">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                    <span className="text-primary font-mono text-xs uppercase tracking-widest">Online</span>
                                </div>
                                <span className="text-white font-mono text-sm uppercase tracking-widest block bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">Software Engineer</span>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-6 -right-6 w-full h-full border border-white/5 rounded-[2rem] bg-white/5 backdrop-blur-sm" />
                    </motion.div>
                </div>
            </Section>

            <Section className="bg-zinc-900/40 border-y border-white/5 py-32">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4">TECHNICAL STACK</h2>
                        <div className="w-12 h-1 bg-primary mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <SkillCard
                            icon={<Layout className="w-5 h-5" />}
                            title="Frontend Architecture"
                            skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                            index={0}
                        />
                        <SkillCard
                            icon={<Database className="w-5 h-5" />}
                            title="Backend Systems"
                            skills={["Node.js", "Express.js", "Go", "Python", "Django", "MongoDB", "PostgreSQL", "Prisma", "GraphQL", "Serverless"]}
                            index={1}
                        />
                        <SkillCard
                            icon={<Smartphone className="w-5 h-5" />}
                            title="Mobile Experience"
                            skills={["React Native", "Expo", "iOS Integration", "Android"]}
                            index={2}
                        />
                        <SkillCard
                            icon={<Code className="w-5 h-5" />}
                            title="DevOps & Tools"
                            skills={["Git Environment", "Docker Containers", "AWS Cloud", "Vercel CI/CD"]}
                            index={3}
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
}

function SkillCard({ icon, title, skills, index }: { icon: React.ReactNode, title: string, skills: string[], index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
        >
            <Card className="glass border-white/5 hover:border-white/10 transition-colors h-full bg-black/40 backdrop-blur-md rounded-[2rem] p-2">
                <CardHeader className="pb-4 pt-6 px-6">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="p-2.5 bg-white/5 rounded-full border border-white/10 text-primary">{icon}</div>
                        <CardTitle className="text-lg font-mono text-white tracking-tight">{title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[11px] font-mono uppercase text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default">
                                {skill}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
