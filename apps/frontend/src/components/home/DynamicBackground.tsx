import React from 'react'

const DynamicBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-accent/5 blur-3xl animate-pulse delay-2000" />
    </div>
  )
}

export default DynamicBackground
