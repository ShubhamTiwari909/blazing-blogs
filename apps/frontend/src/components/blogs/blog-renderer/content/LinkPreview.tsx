'use client'
import Image from 'next/image'
import type { LinkPreviewCardProps } from '../types'

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
      className="group flex flex-col sm:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 overflow-hidden transition-all duration-500 ease-out max-w-full hover:scale-[1.02] hover:-translate-y-1"
    >
      {meta.image && (
        <div className="sm:w-1/3 relative h-48 sm:h-auto overflow-hidden">
          <Image
            src={meta.image}
            alt={meta.title || 'Preview image'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      <div className="p-6 flex flex-col justify-between sm:w-2/3 relative">
        <div className="space-y-3">
          <h2 className="font-bold text-xl text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {meta.title}
          </h2>
          {meta.description && (
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4 leading-relaxed">
              {meta.description}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {meta.site}
            </p>
          </div>
          <div className="flex items-center text-blue-600 dark:text-blue-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Visit</span>
            <svg
              className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </a>
  )
}
