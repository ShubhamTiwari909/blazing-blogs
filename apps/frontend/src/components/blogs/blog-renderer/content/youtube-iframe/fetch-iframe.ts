export const getYoutubeEmbedUrl = (url: string): string => {
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