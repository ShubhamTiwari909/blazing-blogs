import { getCachedGlobalData } from '@/lib/fetch-utils/fetch-blogs';
import type { DevToArticles } from '@/components/articles/types';
import Articles from '@/components/articles/Articles';

const DevToArticles = async () => {
    const devToArticles = await getCachedGlobalData()
    const articles = devToArticles?.blogs as DevToArticles[]
    return  articles.length > 0 ? (
       <Articles articles={articles} />
      ) : null
}

export default DevToArticles;