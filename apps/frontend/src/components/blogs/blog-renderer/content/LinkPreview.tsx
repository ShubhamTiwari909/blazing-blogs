'use client'
import { Typography } from '@/components/atoms/typography'
import type { LinkPreviewCardProps } from '@/components/blogs/blog-renderer/types'
import Image from 'next/image'

export default function LinkPreviewCard({ meta, link }: LinkPreviewCardProps) {
  if (!meta || !meta.title)
    return (
      <a
        className="text-blue-600 dark:text-blue-400"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    )

  return (
    <a
      href={meta.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex max-w-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 sm:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:shadow-blue-400/10"
    >
      {meta.image && (
        <div className="relative h-48 overflow-hidden sm:h-auto sm:w-1/3">
          <Image
            src={meta.image}
            alt={meta.title || 'Preview image'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      <div className="relative flex flex-col justify-between p-6 sm:w-2/3">
        <div className="space-y-3">
          <Typography as="h2" variant="h2" size="lg" weight="bold" color="primary" className="transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {meta.title}
          </Typography>
          {meta.description && (
            <Typography as='p' size="xxs" color="secondary" className="line-clamp-4">
              {meta.description}
            </Typography>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
            <Typography as='p' size="xxs" color="secondary" weight="medium" className="text-xs font-medium tracking-wide text-gray-500 uppercase dark:text-gray-400">
              {meta.site}
            </Typography>
          </div>
          <div className="flex items-center text-xs font-medium text-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-blue-400">
            <Typography as='p' size="xxs" color="inherit" weight="medium">Visit</Typography>
            <svg
              className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </div>
        </div>
        {/* Subtle gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </a>
  )
}
