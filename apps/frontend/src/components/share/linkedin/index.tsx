'use client'

import { usePathname } from 'next/navigation'
import { SiLinkedin } from 'react-icons/si'
import { SITE_URL } from '@/lib/constants'
import posthog from 'posthog-js'

export default function ShareToLinkedIn() {
  const pathname = usePathname()
  const siteUrl = SITE_URL
  const shareUrl = `${siteUrl}${pathname}`
  const linkedinUrl = `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(shareUrl)}`

  const handleClick = () => {
    posthog.capture('blog_shared_linkedin', {
      url: shareUrl,
      pathname,
    })
  }

  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex items-center gap-2 rounded bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 px-4 py-2 text-white hover:bg-blue-700"
    >
      Share on <SiLinkedin size={20} />
    </a>
  )
}
