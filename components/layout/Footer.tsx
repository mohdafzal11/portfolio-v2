"use client"

import { Button } from "@/components/ui/Button"
import { ArrowRight } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#09090b] py-24 mt-auto">
            <div className="container mx-auto px-4 md:px-6">
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-600 font-mono uppercase tracking-widest">
                        © {new Date().getFullYear()} PORTFOLIO. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex space-x-8">
                        <SocialLink href="https://x.com/0x_Afzal" label="TWITTER" />
                        <SocialLink href="https://www.linkedin.com/in/mohd-afzal-6baa86205/" label="LINKEDIN" />
                        <SocialLink href="https://github.com/mohdafzal11" label="GITHUB" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} className="text-xs text-gray-500 hover:text-primary transition-colors font-mono uppercase tracking-widest hover:underline underline-offset-4">
            {label}
        </a>
    )
}
