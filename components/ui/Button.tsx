"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(210,255,112,0.3)] border-transparent rounded-full",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full",
                outline:
                    "border border-white/10 bg-white/5 hover:bg-white/10 text-white hover:text-primary transition-colors hover:border-primary/50 rounded-full",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full",
                ghost: "hover:bg-accent hover:text-accent-foreground rounded-full",
                link: "text-primary underline-offset-4 hover:underline",
                glass: "glass text-white hover:bg-white/10 hover:border-white/20 shadow-lg rounded-full",
            },
            size: {
                default: "h-12 px-8 py-2",
                sm: "h-10 px-6 text-xs",
                lg: "h-14 px-10 text-base",
                icon: "h-12 w-12 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
