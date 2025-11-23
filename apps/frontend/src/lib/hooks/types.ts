import type { Page } from "@/payload-types"

export type BlogResponse = {
    docs: Page[]
    totalDocs: number
    hasNextPage: boolean
    nextPage?: number
}
  