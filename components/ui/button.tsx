import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-night disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.97]",
  {
    variants: {
      variant: {
        default: "bg-brand text-white shadow-glow hover:bg-brand-600 hover:text-white hover:-translate-y-0.5",
        white: "bg-paper text-night hover:bg-night hover:text-paper hover:-translate-y-0.5",
        night: "bg-night text-paper hover:bg-brand hover:text-white hover:-translate-y-0.5",
        outline: "border border-white/25 bg-transparent text-paper hover:border-brand hover:text-brand",
        "outline-dark": "border border-ink/25 bg-transparent text-ink hover:border-brand hover:text-brand",
        ghost: "text-paper/80 hover:bg-white/10 hover:text-paper",
        link: "text-brand underline-offset-4 hover:underline",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        // compat
        inverse: "bg-paper text-night hover:bg-night hover:text-paper",
        secondary: "bg-white/10 text-paper hover:bg-white/20",
      },
      size: {
        default: "h-11 px-6 text-sm",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-7 py-3.5 text-[0.95rem]",
        icon: "h-10 w-10",
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

/** Pastille ronde avec flèche, à placer dans un bouton (style "See my works"). */
export function ArrowDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-7 shrink-0 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover/btn:rotate-45",
        className
      )}
      aria-hidden
    >
      <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </span>
  )
}

export { Button, buttonVariants }
