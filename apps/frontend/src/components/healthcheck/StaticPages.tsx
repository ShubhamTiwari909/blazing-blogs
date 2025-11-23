import React from 'react'
import { StaticPage, StaticPagesProps } from './types'
import { StatusBadge } from './StatusBadge'

const StaticPages = ({ staticPages }: StaticPagesProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Static Pages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staticPages.map((page: StaticPage) => (
          <div
            key={page.url}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {page.name}
              </h3>
              <StatusBadge status={page.status} />
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  URL
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-mono break-all">
                  {page.url}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
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
