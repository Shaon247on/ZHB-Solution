"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";

interface FooterIconProps {
  children: ReactNode; // SVG or icon component
  size?: number;       // Button size in px
  bgColor?: string;    // Tailwind class for background
  hoverBgColor?: string; // Tailwind hover class
  href?: string
}

export default function FooterIcon({
  children,
  size = 48,
  bgColor = "bg-[#ffffff]",
  hoverBgColor = "hover:bg-[#dbe6f5]",
  href=""
}: FooterIconProps) {
  return (
    <Link href={href}>
    <button
      className={clsx(
        "flex items-center justify-center rounded-lg transition-colors",
        bgColor,
        hoverBgColor
      )}
      style={{ width: size, height: size }}
    >
      {children}
    </button>
    </Link>
  );
}
