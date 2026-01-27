import type { BlogImageProps } from './types'
import Image from 'next/image'

export const BlogImage = ({ src, alt }: BlogImageProps) => {
  return (
    <div className="relative mb-8 min-h-64 overflow-hidden rounded-2xl shadow-lg md:min-h-80 lg:min-h-96">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  )
}
