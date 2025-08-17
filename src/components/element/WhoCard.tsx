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
      className={`flex border-2 py-4 px-6 flex-col items-start gap-4 rounded-lg ${className}`}
      
    >
      <div
        className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-[#F8F9F4] shadow-[0_8px_30px] shadow-[#172F5F4D]"
        aria-hidden
      >
        {/* Icon uses currentColor from parent wrapper */}
        <div className="flex items-center justify-center">{icon}</div>
      </div>

      <div className="flex flex-col gap-1 w-[280px] lg:max-w-[172px]">
        <h3 className="text-xl font-semibold text-[#172F5F] leading-none mb-1">{title}</h3>
        {subtitle && <p className="text-xs text-[#172F5F] font-medium w-full">{subtitle}</p>}
      </div>
    </div>
  );
};

export default WhoCard;