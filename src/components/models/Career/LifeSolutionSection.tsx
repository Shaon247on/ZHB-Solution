import Image from "next/image";
import React from "react";

function LifeSolutionSectin() {
  return (
    <div className="bg-[#0C3129] py-6 lg:py-20 lg:-mb-20">
      <h2 className="text-2xl lg:text-4xl font-bold text-center lg:leading-14 mb-2 text-white font-orbitron">
        Life in <br className="hidden lg:block" />
        ZHB Software Solution
      </h2>
      <div className="px-2 flex flex-col lg:flex-row items-center gap-6">
        <div className="space-y-6">
          <Image
            src="/career/life-1.jpg"
            alt="Life at ZHB"
            width={331}
            height={392}
            className="w-[300px] lg:w-[365px] h-[392px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-2.jpg"
            alt="Life at ZHB"
            width={331}
            height={392}
            className="w-[300px] lg:w-[365px] h-[392px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-3.jpg"
            alt="Life at ZHB"
            width={331}
            height={392}
            className="w-[300px] lg:w-[365px] h-[392px] object-cover rounded-4xl"
          />
        </div>
        <div>
          <Image
            src="/career/life-4.jpg"
            alt="Life at ZHB"
            width={365}
            height={1002}
            className="w-[300px] lg:w-[365px] h-[392px] lg:h-[1002px] object-cover rounded-4xl"
          />
        </div>
        <div className="space-y-6">
          <Image
            src="/career/life-5.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[300px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-6.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[300px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-7.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[300px] object-cover rounded-4xl"
          />
        </div>
        <div className="space-y-6">
          <Image
            src="/career/life-8.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[320px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-9.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[320px] object-cover rounded-4xl"
          />
          <Image
            src="/career/life-10.jpg"
            alt="Life at ZHB"
            width={355}
            height={1002}
            className="w-[300px] lg:w-[355px] h-[320px] object-cover rounded-4xl"
          />
        </div>
        <div>
          <Image
            src="/career/life-11.jpg"
            alt="Life at ZHB"
            width={420}
            height={1152}
            className="w-[300px] lg:w-[420px] h-[320px] lg:h-[1152px] object-cover rounded-4xl"
          />
        </div>
      </div>
    </div>
  );
}

export default LifeSolutionSectin;
