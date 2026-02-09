export type DevToArticles = {
  id: string
  title: string
  description: string
  published_at: string
  url: string
  cover_image: string | null
  reading_time_minutes: number
  page_views_count: number
  tag_list: string[]
  user: {
    name: string
    profile_image_90: string | null
  }
}
