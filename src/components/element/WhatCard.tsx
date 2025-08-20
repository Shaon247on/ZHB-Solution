
interface WhatCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

function WhatCard({icon, title, subtitle}: WhatCardProps) {
 

  return (
    <div className='bg-[#F8F9F4] px-2 py-6 flex flex-col items-center'>
        <div className='size-11 rounded-full flex items-center justify-center bg-[#3167CE] mb-2'>{icon}</div>
        <h3 className='text-[#172F5F] font-medium text-center mb-2'>{title}</h3>
        <p className='text-sm max-w-[238px] font-medium text-[#464646] text-center'>{subtitle}</p>
    </div>
  )
}

export default WhatCard
