'use client'
import type { LinkPreviewCardProps } from './types'
import DefaultLinkPreview from './DefaultLinkPreview'
import PreviewImage from './PreviewImage'
import SiteContent from './SiteContent'
import SiteName from './SiteName'

export default function LinkPreviewCard({ meta, link }: LinkPreviewCardProps) {
  if (!meta || !meta.title)
    return (
      <DefaultLinkPreview link={link} />
    )

  return (
    <a
      href={meta.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex max-w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 sm:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-blue-400/10"
    >
      <PreviewImage src={meta.image} alt={meta.title || 'Preview image'} />
      <div className="relative flex flex-col justify-between p-6 sm:w-2/3">
        <SiteContent title={meta.title} description={meta.description} />
        <SiteName site={meta.site} />
      </div>
    </a>
  )
}
