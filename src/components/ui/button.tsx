import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default:
        "bg-primary rounded-[.8rem] p-[.8rem] text-[1.4rem] leading-[2.1rem] font-medium text-white transition-all duration-300 hover:opacity-80 cursor-pointer",
      dark: "bg-black rounded-[.8rem] p-[.8rem] text-[1.4rem] leading-[2.1rem] font-medium text-white transition-all duration-300 hover:opacity-80 cursor-pointer",
      transparent:
        "bg-transparent border border-[#00000029] rounded-[.8rem] p-[.8rem] text-[1.4rem] leading-[2.1rem] font-medium text-black transition-all duration-300 hover:opacity-80 cursor-pointer",
      link: "text-primary text-[1.4rem] leading-[2.1rem] font-medium cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Button };
