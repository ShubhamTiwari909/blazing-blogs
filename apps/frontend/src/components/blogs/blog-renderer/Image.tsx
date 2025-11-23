import Image from 'next/image'
import React from 'react'
import type { BlogImageProps } from './types'

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="relative min-h-64 md:min-h-80 lg:min-h-96 rounded-2xl overflow-hidden mb-8 shadow-lg">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}
