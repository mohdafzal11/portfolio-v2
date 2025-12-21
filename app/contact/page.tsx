"use client"

import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Mail, Github, Linkedin, Twitter, MapPin, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Section className="py-24 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-primary font-mono text-xs uppercase tracking-[0.5em] mb-6 block">Inquiry</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-mono text-white mb-8 leading-[0.9] tracking-tighter">
                            LET&apos;S <br /> WORK <br /> <span className="text-primary">TOGETHER</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-md font-sans">
                            Have a project in mind? We should talk. I&apos;m currently available for new projects and collaborations.
                        </p>

                        <div className="space-y-10">
                            <ContactLink
                                icon={<Mail className="w-5 h-5" />}
                                label="EMAIL"
                                value="afzalnaved0000@gmail.com"
                                href="mailto:afzalnaved0000@gmail.com"
                            />
                            <ContactLink
                                icon={<MapPin className="w-5 h-5" />}
                                label="LOCATION"
                                value="Bengaluru, India"
                            />

                            <div className="pt-10 border-t border-white/10">
                                <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Socials</h3>
                                <div className="flex gap-4">
                                    <SocialButton icon={<Github className="w-5 h-5" />} href="https://github.com/mohdafzal11" label="GitHub" />
                                    <SocialButton icon={<Linkedin className="w-5 h-5" />} href="https://www.linkedin.com/in/mohd-afzal-6baa86205/" label="LinkedIn" />
                                    <SocialButton icon={<Twitter className="w-5 h-5" />} href="https://x.com/0x_Afzal" label="Twitter" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Card className="glass border-white/5 p-2 bg-zinc-900/50 rounded-[2.5rem]">
                            <CardContent className="p-8 md:p-10">
                                <form className="space-y-6" onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.currentTarget);
                                    const name = formData.get('name');
                                    const email = formData.get('email');
                                    const subject = formData.get('subject');
                                    const message = formData.get('message');

                                    const mailtoLink = `mailto:afzalnaved0000@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                                    window.location.href = mailtoLink;
                                }}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Name</label>
                                            <Input id="name" name="name" placeholder="John Doe" required className="bg-black/40 border-white/10 h-14 rounded-2xl focus:border-primary/50 text-white placeholder:text-gray-700" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                                            <Input id="email" name="email" type="email" placeholder="john@example.com" required className="bg-black/40 border-white/10 h-14 rounded-2xl focus:border-primary/50 text-white placeholder:text-gray-700" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                                        <Input id="subject" name="subject" placeholder="Project Inquiry" required className="bg-black/40 border-white/10 h-14 rounded-2xl focus:border-primary/50 text-white placeholder:text-gray-700" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
                                        <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="min-h-[180px] bg-black/40 border-white/10 rounded-2xl focus:border-primary/50 text-white placeholder:text-gray-700 resize-y p-5" />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full h-14 text-base font-bold tracking-wide rounded-full text-black bg-primary hover:bg-primary/90">
                                        SEND MESSAGE
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

function ContactLink({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
    return (
        <div className="flex items-center gap-6 group">
            <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 text-gray-400 group-hover:text-primary group-hover:border-primary/30 transition-all">
                {icon}
            </div>
            <div>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{label}</p>
                {href ? (
                    <a href={href} className="text-xl md:text-2xl text-white font-medium hover:text-primary transition-colors flex items-center gap-2">
                        {value} <ArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 transition-all" />
                    </a>
                ) : (
                    <p className="text-xl md:text-2xl text-white font-medium">{value}</p>
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
            className="p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-full transition-all text-gray-400 hover:text-white hover:-translate-y-1"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
