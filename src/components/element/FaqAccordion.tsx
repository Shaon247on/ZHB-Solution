import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-4"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="">
        <AccordionTrigger className="text-base lg:text-2xl font-semibold">
          1. What services does ZHB Solutions LLC offer?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col font-medium gap-4 text-xs lg:text-sm text-balance">
          <p>
            We offer a full suite of digital solutions including web and app
            development, bookkeeping, digital marketing, Shopify store
            development, branding and creative design, as well as no-code
            automation services.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base lg:text-2xl font-semibold">
          2. Do you provide custom website or app development?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col font-medium gap-4 text-xs lg:text-sm text-balance">
          <p>
            Yes! We build fully customized websites and applications tailored to
            your business goals, whether you're starting from scratch or looking
            to revamp an existing system.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base lg:text-2xl font-semibold">
          3. Can you help me launch and manage a Shopify store?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col font-medium gap-4 text-xs lg:text-sm text-balance">
          <p>
            Absolutely. We offer complete Shopify solutions—from design and
            development to integration, optimization, and ongoing support—to
            help you grow your eCommerce business.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-base lg:text-2xl font-semibold">
          4. How long does a typical project take?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col font-medium gap-4 text-xs lg:text-sm text-balance">
          <p>
            Project timelines vary based on complexity, but most web or app
            development projects range from 2 to 8 weeks. We'll provide a clear
            timeline after your initial consultation.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-base lg:text-2xl font-semibold">
          5. What makes ZHB Solutions LLC different from others?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col font-medium gap-4 text-xs lg:text-sm text-balance">
          <p>
            We combine technical expertise with creative strategy, delivering
            tailored solutions that are scalable, cost-effective, and built to
            grow with your business.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
