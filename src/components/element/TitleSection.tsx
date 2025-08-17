"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface TitleSectionProps {
  tag?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  textColor?: string;
  width?: string;
  textPosition?: string;
}

export default function TitleSection({
  tag,
  title,
  subtitle,
  buttonText,
  buttonHref,
  textColor = "text-white",
  width="max-w-150px",
  textPosition = "text-center",
}: TitleSectionProps) {
  return (
    <section className={`py-6 lg:py-12 bg-none ${textPosition}`}>
      {/* Tag */}
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="inline-block border border-primary text-sm px-3 py-1 rounded-full text-primary "
        >
          {tag}
        </motion.span>
      )}

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`my-4 text-xs text-center lg:text-base ${textColor} border mx-auto border-sky-700 rounded-full font-medium ${width ? width : 'w-40'}`}
      >
        {title}
      </motion.p>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-lg lg:text-4xl font-orbitron font-bold ${title === "SERVICE" ? "max-w-[620px]":"max-w-[545px]"} lg:leading-12 mx-auto ${textColor} ${textPosition}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Optional Button */}
      {buttonText && buttonHref && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Button size={"lg"} asChild className="rounded-full">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        </motion.div>
      )}
    </section>
  );
}
