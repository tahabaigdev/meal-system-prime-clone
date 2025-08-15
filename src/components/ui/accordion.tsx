import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// Root Accordion
function Accordion(
  props: React.ComponentProps<typeof AccordionPrimitive.Root>
) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

// Accordion Item
function AccordionItem(
  props: React.ComponentProps<typeof AccordionPrimitive.Item> & {
    className?: string;
  }
) {
  const { className, ...rest } = props;
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...rest}
    />
  );
}

// Accordion Trigger
function AccordionTrigger(
  props: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
    className?: string;
    children: React.ReactNode;
  }
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...rest}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-[1.8rem] shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

// Accordion Content
function AccordionContent(
  props: React.ComponentProps<typeof AccordionPrimitive.Content> & {
    className?: string;
    children: React.ReactNode;
  }
) {
  const { className, children, ...rest } = props;
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...rest}
    >
      <div className={cn("pt-0 pb-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
