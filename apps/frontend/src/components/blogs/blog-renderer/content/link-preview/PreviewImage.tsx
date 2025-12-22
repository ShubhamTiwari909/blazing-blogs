import { PreviewImageProps } from './types'
import Image from 'next/image'
import React from 'react'

const PreviewImage = ({ src, alt }: PreviewImageProps) => {
  return src ? (
    <div className="relative h-48 overflow-hidden sm:h-auto sm:w-1/3">
      <Image
        src={src}
        alt={alt || 'Preview image'}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  ) : null
}

export default PreviewImage
