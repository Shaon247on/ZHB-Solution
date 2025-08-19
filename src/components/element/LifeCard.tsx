import React from 'react'

interface LifeCardProps {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
}

function LifeCard({icon, title, subtitle}: LifeCardProps) {
  return (
    <div>
      <div className='mb-1 size-6'>{icon}</div>
      <h3 className='mb-1 text-xl font-semibold text-[#3671E2]'>{title}</h3>
      <p className='text-sm font-medium'>{subtitle}</p>
    </div>
  )
}

export default LifeCard
