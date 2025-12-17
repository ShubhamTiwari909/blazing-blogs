import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { PagesListsProps } from '@/components/healthcheck/types'
import React from 'react'

const PagesLists = ({ pages }: PagesListsProps) => {
  return (
    <Accordion type="single" collapsible className="mt-4">
      <AccordionItem
        value="pages"
        className="rounded-lg border border-gray-200 bg-white px-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
      >
        <AccordionTrigger className="hover:no-underline">
          <div className="flex w-full items-center justify-between pr-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              View All Pages
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {pages.slugs.split(',').length} pages
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-2 pb-4">
          <div className="max-h-64 space-y-2 overflow-y-auto pr-2">
            {pages.slugs.split(',').map((slug: string) => {
              const trimmedSlug = slug.trim()
              try {
                const url = new URL(trimmedSlug)
                const urlPath = url.pathname || '/'
                return (
                  <div
                    key={trimmedSlug}
                    className="group flex cursor-default items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span
                      className="flex-1 truncate font-mono text-sm text-gray-700 dark:text-gray-300"
                      title={trimmedSlug}
                    >
                      {urlPath}
                    </span>
                  </div>
                )
              } catch {
                return (
                  <div
                    key={trimmedSlug}
                    className="group flex cursor-default items-center gap-3 rounded-md p-2 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  >
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span
                      className="flex-1 truncate font-mono text-sm text-gray-700 dark:text-gray-300"
                      title={trimmedSlug}
                    >
                      {trimmedSlug}
                    </span>
                  </div>
                )
              }
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default PagesLists
