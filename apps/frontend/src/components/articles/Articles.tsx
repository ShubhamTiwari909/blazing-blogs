"use client"
import React, { useEffect, useState } from 'react'
import { DevToArticles } from './types';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';


const Articles = ({ articles }: { articles: DevToArticles[] }) => {
    const [paginatedArticles, setPaginatedArticles] = useState<DevToArticles[]>(articles)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const handleLoadMore = () => {
            setLoading(true)
            fetch(`/api/dev-to-articles?page=${page}&per_page=12`)
                .then(response => response.json())
                .then(data => setPaginatedArticles(prev => [...prev, ...data]))
                .catch(error => console.error('Error fetching articles:', error))
                .finally(() => setLoading(false))
        }
        if (page > 1) {
            handleLoadMore()
        }
    }, [page])
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedArticles.map((blog: DevToArticles) => {
                    return (
                        <div className="blog" key={blog.id}>
                            <article className="group bg-white h-full dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
                                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                                    <Image
                                        src={blog.cover_image || "/blog_thumbnail_image.jpg"}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy"
                                        decoding="async"
                                        width={1920}
                                        height={1278}
                                    />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center mb-4">
                                        {blog.user.profile_image_90 && (
                                            <Image
                                                src={blog.user.profile_image_90}
                                                alt={blog.user.name}
                                                className="w-10 h-10 rounded-full mr-3 object-cover"
                                                loading="lazy"
                                                decoding="async"
                                                width={100}
                                                height={100}
                                            />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                                {blog.user.name}
                                            </p>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    {formatDate(blog.published_at)}
                                                </span>
                                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                                    • {blog.reading_time_minutes} min read
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {blog.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-1">
                                        {blog.description}
                                    </p>

                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg mt-auto"
                                    >
                                        <span>Read Article</span>
                                        <svg
                                            className="w-4 h-4 ml-2"
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
                    );
                })}
            </div>
            <div className="flex justify-center mt-10">
                <button
                    onClick={() => {
                        setPage(prev => prev + 1)
                    }}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                    {loading ? 'Loading...' : 'Read More Blogs'}
                </button>
            </div>
        </>
    )
}

export default Articles