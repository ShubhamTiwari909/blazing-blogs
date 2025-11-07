import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

type StaticPage = {
    url: string
    name: string
    status: string
    message: string
}

type DatabaseItem = {
    status: string
    error?: string
    total?: number
}

const StatusBadge = ({ status }: { status: string }) => {
    const isOk = status === 'OK'
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isOk
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
            }`}
        >
            <span
                className={`w-2 h-2 rounded-full mr-2 ${
                    isOk ? 'bg-green-500' : 'bg-red-500'
                }`}
            />
            {status}
        </span>
    )
}

const HealthCheck = async () => {
    const response = await fetch(`${process.env.SITE_URL}/api/healthcheck`, {
        cache: 'no-store',
    })
    const data = await response.json()
    const { database, static: staticPages } = data
    const { pages, media, users } = database

    const DatabaseCard = ({
        title,
        item,
        icon,
    }: {
        title: string
        item: DatabaseItem
        icon: string
    }) => (
        <div className="bg-white h-fit dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <span className="text-2xl">{icon}</span>
                    {title}
                </h3>
                <StatusBadge status={item.status} />
            </div>
            <div className="space-y-2">
                {item.total !== undefined && (
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Total</span>
                        <span className="text-lg font-bold text-gray-900 dark:text-gray-100">
                            {item.total}
                        </span>
                    </div>
                )}
                {item.error && (
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-md">
                        <p className="text-sm text-red-800 dark:text-red-400">{item.error}</p>
                    </div>
                )}
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        System Health Check
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Monitor the status of your database and static pages
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        Database Collections
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <DatabaseCard title="Pages" item={pages} icon="📄" />
                            {pages.slugs && (
                                <Accordion type="single" collapsible className="mt-4">
                                    <AccordionItem value="pages" className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 px-4">
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
                                                                <span className="text-sm text-gray-700 dark:text-gray-300 font-mono truncate flex-1" title={trimmedSlug}>
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
                                                                <span className="text-sm text-gray-700 dark:text-gray-300 font-mono truncate flex-1" title={trimmedSlug}>
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
                            )}
                        </div>
                        <DatabaseCard title="Media" item={media} icon="🖼️" />
                        <DatabaseCard title="Users" item={users} icon="👥" />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                        Static Pages
                    </h2>
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
            </div>
        </div>
    )
}

export default HealthCheck
