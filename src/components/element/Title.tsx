import React from 'react'

export default function Title({ title, subtitle }: {title: string, subtitle?: string}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h2 className="text-xl font-semibold">{subtitle}</h2>}
    </div>
  )
}
