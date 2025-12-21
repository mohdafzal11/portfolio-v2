import { Section } from "@/components/ui/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Code, Database, Layout, Smartphone } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="pt-20">
            <Section>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                            About Me
                        </h1>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                I am a passionate software engineer with a keen eye for design and a drive for creating seamless digital experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality.
                            </p>
                            <p>
                                My approach to development is minimalist and user-centric. I believe that the best code is clean, maintainable, and efficient, and the best design is invisible, intuitive, and delightful.
                            </p>
                            <p>
                                When I&apos;m not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Abstract visual representation or photo placeholer */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center">
                            <span className="text-gray-500">Profile Image Placeholder</span>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-white/5 border-y border-white/5">
                <h2 className="text-3xl font-bold text-center mb-12 text-white">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard
                        icon={<Layout className="w-8 h-8 text-blue-400" />}
                        title="Frontend"
                        skills={["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]}
                    />
                    <SkillCard
                        icon={<Database className="w-8 h-8 text-purple-400" />}
                        title="Backend"
                        skills={["Node.js", "PostgreSQL", "Prisma", "GraphQL", "Serverless"]}
                    />
                    <SkillCard
                        icon={<Smartphone className="w-8 h-8 text-green-400" />}
                        title="Mobile"
                        skills={["React Native", "Expo", "iOS", "Android"]}
                    />
                    <SkillCard
                        icon={<Code className="w-8 h-8 text-orange-400" />}
                        title="Tools & DevOps"
                        skills={["Git", "Docker", "AWS", "Vercel", "CI/CD"]}
                    />
                </div>
            </Section>
        </div>
    );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
    return (
        <Card className="glass border-white/5">
            <CardHeader>
                <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit">{icon}</div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {skills.map((skill) => (
                        <li key={skill} className="text-gray-400 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-2" />
                            {skill}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
