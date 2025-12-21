"use client"

import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have a project in mind or just want to say hi? I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <ContactInfo
                                icon={<Mail className="w-6 h-6 text-blue-400" />}
                                label="Email Me"
                                value="hello@example.com"
                                href="mailto:hello@example.com"
                            />
                            <ContactInfo
                                icon={<MapPin className="w-6 h-6 text-purple-400" />}
                                label="Location"
                                value="San Francisco, CA"
                            />

                            <div className="pt-8">
                                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                                <div className="flex gap-4">
                                    <SocialButton icon={<Github className="w-5 h-5" />} href="https://github.com" label="GitHub" />
                                    <SocialButton icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com" label="LinkedIn" />
                                    <SocialButton icon={<Twitter className="w-5 h-5" />} href="https://twitter.com" label="Twitter" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card className="glass border-white/10 p-2">
                            <CardContent className="p-6">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                            <Input id="name" placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-blue-500/50" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                            <Input id="email" type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 focus:border-blue-500/50" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                                        <Input id="subject" placeholder="Project Inquiry" className="bg-white/5 border-white/10 focus:border-blue-500/50" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                                        <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-white/5 border-white/10 focus:border-blue-500/50" />
                                    </div>

                                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
    return (
        <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/5">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-400">{label}</p>
                {href ? (
                    <a href={href} className="text-white hover:text-blue-400 transition-colors font-medium">
                        {value}
                    </a>
                ) : (
                    <p className="text-white font-medium">{value}</p>
                )}
            </div>
        </div>
    )
}

function SocialButton({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-lg transition-all text-gray-400 hover:text-white"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
