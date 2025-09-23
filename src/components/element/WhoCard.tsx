import React from "react";

export interface CardProps {
  /** SVG or any React node to render in the icon area */
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const WhoCard: React.FC<CardProps> = ({
  icon,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div
      className={`flex border-2 py-4 px-4 flex-col items-start gap-4 rounded-lg ${className}`}
      
    >
      <div
        className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg bg-[#F8F9F4] shadow-[0_8px_30px] shadow-[#172F5F4D]"
        aria-hidden
      >
        {/* Icon uses currentColor from parent wrapper */}
        <div className="flex items-center justify-center">{icon}</div>
      </div>

      <div className="flex flex-col gap-1 w-[280px] lg:max-w-[150px]">
        <h3 className="text-lg font-semibold text-[#172F5F] leading-none mb-1">{title}</h3>
        {subtitle && <p className="text-xs text-justify text-[#172F5F] font-medium w-full">{subtitle}</p>}
      </div>
    </div>
  );
};

export default WhoCard;