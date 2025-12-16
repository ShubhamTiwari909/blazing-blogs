'use client'

import { SITE_URL } from '@/lib/constants'
import { SiLinkedin } from "react-icons/si";
import { usePathname } from 'next/navigation'

export default function ShareToLinkedIn() {
  const pathname = usePathname()
  const siteUrl = SITE_URL
  const shareUrl = `${siteUrl}${pathname}`
  const linkedinUrl = `https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(shareUrl)}`

  return (
    <a
      href={linkedinUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white rounded hover:bg-blue-700"
    >
      Share on <SiLinkedin size={20} />
    </a>
  )
}
