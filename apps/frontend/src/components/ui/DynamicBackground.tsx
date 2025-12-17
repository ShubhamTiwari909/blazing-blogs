import React from 'react'

const DynamicBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="bg-primary/5 absolute top-[-10%] left-[-10%] h-[40%] w-[40%] animate-pulse rounded-full blur-3xl" />
      <div className="bg-secondary/10 absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] animate-pulse rounded-full blur-3xl delay-1000" />
      <div className="bg-accent/5 absolute top-[20%] right-[10%] h-[20%] w-[20%] animate-pulse rounded-full blur-3xl delay-2000" />
    </div>
  )
}

export default DynamicBackground
