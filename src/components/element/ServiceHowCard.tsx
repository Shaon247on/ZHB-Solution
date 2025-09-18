import { FC } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface ServiceStepCardProps {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceStepCard: FC<ServiceStepCardProps> = ({
  step,
  title,
  description,
  features,
  icon,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-start space-y-4 h-[560px] lg:min-h-[770px]">
      <span className="font-medium text-sm text-[#3167CE] mb-7">Step 0{step}</span>

      <div className="size-11 flex items-center justify-center bg-[#172F5F] rounded-[12px] mb-4 lg:mb-6">
        {icon}
      </div>
      <h3 className="text-lg lg:text-2xl font-semibold text-[#181818] mb-4">{title}</h3>
      <p className="text-sm text-[#464646] max-w-[353px]">{description}</p>
      <ul className="space-y-6 text-sm text-black">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-4 max-w-[313px]">
            <span className="size-7 p-1 rounded-full bg-[#172F5F] flex items-center justify-center">
                <Check stroke="white" />
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceStepCard;
