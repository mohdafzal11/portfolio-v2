"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"

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
        <nav className="fixed top-0 left-0 w-full z-50 glass-nav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold tracking-tight text-white">
                            Portfolio
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200",
                                            isActive
                                                ? "bg-white/10 text-white"
                                                : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="https://github.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block px-3 py-2 rounded-md text-base font-medium",
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-gray-300 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </nav>
    )
}
