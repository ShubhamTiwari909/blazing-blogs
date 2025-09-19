import Image from 'next/image'
import React from 'react'

export const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
      <Image src={src} alt={alt} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}
