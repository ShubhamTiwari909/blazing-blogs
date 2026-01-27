import { queryGlobals } from '@/lib/fetch-utils/query-all-pages'
import { DevToArticles } from './types'
import Articles from './Articles'

const ArticlesWrapper = async () => {
  const devToArticles = await queryGlobals()
  const articles = devToArticles?.blogs as DevToArticles[]
  return articles.length > 0 ? <Articles articles={articles} /> : null
}

export default ArticlesWrapper
