"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0 group", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        
        <div className="relative size-4 shrink-0 translate-y-0.5">
          {/* Closed State SVG with light gray background - visible when accordion is closed */}
          <div className="absolute inset-0 size-8 rounded-full bg-[#E8E8E8] transition-opacity duration-200 group-data-[state=open]:opacity-0 opacity-100 flex items-center justify-center">
            <svg
              className="text-muted-foreground pointer-events-none"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 10.3978L6.002 17.5L0.5 10.3978H5V0.5H7V10.3978H11.5Z"
                fill="#464646"
              />
            </svg>
          </div>

          {/* Opened State SVG with dark blue background - visible when accordion is open */}
          <div className="absolute inset-0 size-8 rounded-full bg-[#172F5F] transition-opacity duration-200 group-data-[state=open]:opacity-100 opacity-0 flex items-center justify-center">
            <svg
              className="text-muted-foreground pointer-events-none"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.47326L10.5858 7.8813L7.0006 4.31184V17.5H5.0006V4.3114L1.41422 7.8814L0 6.47338L6.0003 0.5L12 6.47326Z"
                fill="#E8E8E8"
              />
            </svg>
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };