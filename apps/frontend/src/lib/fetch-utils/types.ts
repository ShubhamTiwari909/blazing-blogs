export type BlogIdProps = {
  id: string
}

export type SlugProps = {
  slug: string
}

export type CheckIfAlreadyViewedProps = {
  id: string
  cookies: Record<string, string>
}

export type Params = {
    blogs: string
}

export type QueryPagesSlugProps = {
  page: number
  limit: number
}