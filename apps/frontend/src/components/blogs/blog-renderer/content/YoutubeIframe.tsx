import type { YoutubeIframeProps } from '@/components/blogs/blog-renderer/types'
import React from 'react'

const getYoutubeEmbedUrl = (url: string): string => {
  if (!url) return ''

  if (url.includes('/embed/')) {
    return url
  }

  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
  )
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`
  }

  return url
}

const YoutubeIframe = ({ ytIframe }: YoutubeIframeProps) => {
  const embedUrl = getYoutubeEmbedUrl(ytIframe)

  if (!embedUrl) {
    return null
  }

  return (
    <div className="w-full">
      <iframe
        src={embedUrl}
        title="Youtube Iframe"
        height={600}
        className="w-full rounded-2xl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default YoutubeIframe
