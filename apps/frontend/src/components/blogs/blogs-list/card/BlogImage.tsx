import type { BlogImageProps } from '@/components/blogs/blog-renderer/types'
import { contructImageUrl } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <Image
        src={contructImageUrl(src)}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}

export default BlogImage
