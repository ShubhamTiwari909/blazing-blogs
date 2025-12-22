import { getYoutubeEmbedUrl } from './fetch-iframe'
import type { YoutubeIframeProps } from '../types'
import React from 'react'

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
