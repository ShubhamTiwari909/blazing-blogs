const filterRootPages = ['root', 'terms']

export const slugFilter = (slug: unknown): string => {
  if (typeof slug !== 'string') return ''

  const matchedFilter = filterRootPages.find((filter) => slug.startsWith(`${filter}/`))
  return matchedFilter ? slug.slice(matchedFilter.length + 1) : slug
}
