import { getCachedGlobalData } from '@/lib/fetch-utils/fetch-blogs'
import React from 'react'
import { DevToArticles } from './types'
import Articles from './Articles'

const ArticlesWrapper = async () => {
    const devToArticles = await getCachedGlobalData()
    const articles = devToArticles?.blogs as DevToArticles[]
    return articles.length > 0 ? (
        <Articles articles={articles} />
    ) : null
}

export default ArticlesWrapper