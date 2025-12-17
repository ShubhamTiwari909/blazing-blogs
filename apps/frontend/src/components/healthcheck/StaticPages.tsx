import { StaticPage, StaticPagesProps } from './types'
import { StatusBadge } from './StatusBadge'
import React from 'react'

const StaticPages = ({ staticPages }: StaticPagesProps) => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">Static Pages</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {staticPages.map((page: StaticPage) => (
          <div
            key={page.url}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-md transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {page.name}
              </h3>
              <StatusBadge status={page.status} />
            </div>
            <div className="space-y-2">
              <div>
                <p className="mb-1 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  URL
                </p>
                <p className="font-mono text-sm break-all text-gray-700 dark:text-gray-300">
                  {page.url}
                </p>
              </div>
              <div>
                <p className="mb-1 text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                  Message
                </p>
                <p
                  className={`text-sm ${
                    page.status === 'OK'
                      ? 'text-green-700 dark:text-green-400'
                      : 'text-red-700 dark:text-red-400'
                  }`}
                >
                  {page.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StaticPages
