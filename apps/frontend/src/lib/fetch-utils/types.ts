export type BlogIdProps = {
  id: string
}

export type SlugProps = {
  slug: string
}

export type QueryPageBySlugProps = SlugProps & {
  draft?: boolean
}

export type CheckIfAlreadyViewedProps = {
  id: string
  cookies: Record<string, string>
}

export type Params = {
  blogs: string | string[]
}

export type QueryPagesSlugProps = {
  page: number
  limit: number
}
