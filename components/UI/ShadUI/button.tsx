import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-white",
  {
    variants: {
      variant: {
        default:
          "bg-brandDark hover:bg-[#195854] transition-colors text-white rounded-md",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-900/90",
        outline:
          "text-black duration-150 border dark:bg-transparent hover:bg-black hover:text-white hover:border-black dark:text-white border-brandDark dark:border-brandLight dark:hover:bg-white dark:hover:text-black dark:hover:border-white",
        plain:
          "text-white bg-black border-none dark:text-black dark:bg-white text-xl dark:hover:bg-gray-300",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "flex items-center gap-2 group",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-6 py-3",
        lg: "px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
