import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import type { PagesListsProps } from '../types'

const PagesLists = ({ pages }: PagesListsProps) => {
  return (
    <Accordion type="single" collapsible className="mt-4">
      <AccordionItem
        value="pages"
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 px-4"
      >
        <AccordionTrigger className="hover:no-underline">
          <div className="flex items-center justify-between w-full pr-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              View All Pages
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {pages.slugs.split(',').length} pages
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pt-2 pb-4">
          <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
            {pages.slugs.split(',').map((slug: string) => {
              const trimmedSlug = slug.trim()
              try {
                const url = new URL(trimmedSlug)
                const urlPath = url.pathname || '/'
                return (
                  <div
                    key={trimmedSlug}
                    className="group flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-default"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span
                      className="text-sm text-gray-700 dark:text-gray-300 font-mono truncate flex-1"
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
                    className="group flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-default"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                    <span
                      className="text-sm text-gray-700 dark:text-gray-300 font-mono truncate flex-1"
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
