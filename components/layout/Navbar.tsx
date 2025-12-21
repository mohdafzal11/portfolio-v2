"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Menu, X } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="fixed top-6 left-0 w-full z-50 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-between items-start pointer-events-auto relative">

                {/* Mobile Menu Toggle (Left on mobile) */}
                <div className="md:hidden absolute left-4 top-0">
                    <Button
                        variant="glass"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-full bg-zinc-900/80 backdrop-blur-xl border border-white/10"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {/* Floating Island Navigation */}
                <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-zinc-900/90 backdrop-blur-2xl border border-white/10 shadow-2xl mx-auto ring-1 ring-white/5">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 font-mono tracking-tight",
                                    isActive
                                        ? "bg-white text-black shadow-sm font-bold"
                                        : "text-gray-400 hover:text-white hover:bg-white/10"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    })}
                </nav>

            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-16 left-4 right-4 p-4 rounded-[2rem] bg-zinc-900/95 backdrop-blur-3xl border border-white/10 shadow-2xl md:hidden pointer-events-auto">
                    <div className="space-y-2">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-6 py-4 rounded-2xl text-base font-medium transition-colors font-mono",
                                        isActive
                                            ? "bg-white text-black"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}
