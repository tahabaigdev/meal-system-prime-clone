import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva("flex items-center", {
  variants: {
    variant: {
      default:
        "text-[1.2rem] select-none leading-[1.2rem] font-medium text-black",
      light:
        "text-[#0000008a] text-[1.2rem] font-medium select-none leading-[1.2rem]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  className?: string;
}

function Label({ className, variant, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Label };
