import React from 'react'
import TitleSection from '../element/TitleSection'
import FeatureCard from '../element/ChooseCard';

  const cards = [
    {
      iconName: "Sparkles",
      iconBgColor: "bg-teal-100",
      title: "Creative & Innovative",
      url: "/icon-1.png",
      subtitle: "We focus on creativity with strategy to deliver unique, high-impact designs. From branding to user flows, our work breaks through the noise and gets noticed."
    },
    {
      iconName: "Target",
      iconBgColor: "bg-blue-100",
      title: "Strategic Approach",
      url: "/icon-2.png",
      subtitle: "Every project starts with understanding your goals and target audience to create solutions that drive real results."
    },
    {
      iconName: "Users",
      iconBgColor: "bg-green-100",
      title: "User-Centered Design",
      url: "/icon-3.png",
      subtitle: "We put your users at the heart of every decision, creating experiences that are both beautiful and functional."
    }
  ];

function ChooseSection() {
  return (
    <div className='flex flex-col pb-6 lg:pb-20 xl:flex-row items-center px-4 lg:px-10 lg:gap-12 '>
        <TitleSection
        title='Why Choose Us'
        subtitle='Top industry leaders rely on us - heres why!'
        textColor='text-black'
        width='w-[145px]'
        />
        <div className="grid grid-cols-1 gap-4">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              iconName={card.iconName}
              iconBgColor={card.iconBgColor}
              title={card.title}
              subtitle={card.subtitle}
              index={index}
              url={card.url}
              delay={0.15} // 150ms delay between each card
            />
          ))}
        </div>
    </div>
  )
}

export default ChooseSection
