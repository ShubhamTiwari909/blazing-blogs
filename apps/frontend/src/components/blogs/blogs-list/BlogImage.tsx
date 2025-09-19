import { contructImageUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src={contructImageUrl(src)}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}

export default BlogImage
