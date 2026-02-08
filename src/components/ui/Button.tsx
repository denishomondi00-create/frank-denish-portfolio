import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700",
        secondary: "bg-slate-900 text-white hover:bg-slate-800",
        outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700",
        ghost: "hover:bg-slate-100 text-slate-600",
        gradient: "bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg hover:shadow-xl",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 px-4 rounded-xl text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };