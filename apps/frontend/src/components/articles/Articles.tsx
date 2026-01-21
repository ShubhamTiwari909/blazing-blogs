'use client'
import React, { useEffect, useState } from 'react'
import { formatDate } from '@/lib/utils'
import { DevToArticles } from './types'
import Image from 'next/image'

const Articles = ({ articles }: { articles: DevToArticles[] }) => {
  const [paginatedArticles, setPaginatedArticles] = useState<DevToArticles[]>(articles)
  const [loading, setLoading] = useState(false)
  const [lastPage, setLastPage] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const handleLoadMore = () => {
      setLoading(true)
      fetch(`/api/dev-to-articles?page=${page}&per_page=36`)
        .then((response) => response.json())
        .then((data) => {
          setLastPage(data.length < 36)
          setPaginatedArticles((prev) => [...prev, ...data])
        })
        .catch((error) => console.error('Error fetching articles:', error))
        .finally(() => setLoading(false))
    }
    if (page > 1) {
      handleLoadMore()
    }
  }, [page])
  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedArticles.map((blog: DevToArticles) => {
          return (
            <div className="blog" key={blog.id}>
              <article className="group flex h-full transform flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-900">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                  <Image
                    src={blog.cover_image || '/blog_thumbnail_image.jpg'}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width={1920}
                    height={1278}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center">
                    {blog.user.profile_image_90 && (
                      <Image
                        src={blog.user.profile_image_90}
                        alt={blog.user.name}
                        className="mr-3 h-10 w-10 rounded-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width={100}
                        height={100}
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {blog.user.name}
                      </p>
                      <div className="mt-1 flex items-center gap-3">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {formatDate(blog.published_at)}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          • {blog.reading_time_minutes} min read
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3 line-clamp-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                    {blog.title}
                  </h3>

                  <p className="mb-4 line-clamp-3 flex-1 text-gray-600 dark:text-gray-300">
                    {blog.description}
                  </p>

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex transform items-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                  >
                    <span>Read Article</span>
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          )
        })}
      </div>
      {
        !lastPage ? (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => {
                setPage((prev) => prev + 1)
              }}
              className="group relative cursor-pointer transform rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {loading ? 'Loading...' : 'Read More Blogs'}
            </button>
          </div>
        ) : null
      }
    </>
  )
}

export default Articles
