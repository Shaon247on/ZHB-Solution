// components/Card.tsx

import React from "react";

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

const VisionCard: React.FC<CardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className="bg-white p-4 rounded-xl max-w-[670px] shadow-lg flex flex-col items-start gap-3 mx-auto">
      <div className="bg-[#1E3E7C] p-3 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="max-[638px]">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default VisionCard;
