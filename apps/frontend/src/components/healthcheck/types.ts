export type StaticPage = {
  url: string
  name: string
  status: string
  message: string
}

export type StaticPagesProps = {
  staticPages: StaticPage[]
}
export type PagesListsProps = {
  pages: DatabaseItem & {
    slugs: string
  }
}
export type DatabaseItem = {
  status: string
  error?: string
  total?: number
}
export type CardProps = {
  title: string
  item: DatabaseItem
  icon: string
}
export type DatabaseProps = {
  database: {
    pages: DatabaseItem & {
      slugs: string
    }
    media: DatabaseItem
    users: DatabaseItem
  }
}
