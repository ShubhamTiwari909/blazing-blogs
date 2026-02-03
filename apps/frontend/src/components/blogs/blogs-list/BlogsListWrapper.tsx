import { getCachedPageData } from "@/lib/fetch-utils/fetch-blogs"
import BlogsList from "./BlogsList"
import { Typography } from "@/components/atoms/typography"

const BlogsWrapper = async () => {
  const pages = await getCachedPageData()

  return pages && pages.docs.length > 0 ? (
    <BlogsList pages={pages} />
  ) : (
    <div className="py-12 text-center">
      <Typography as="p" size="base" color="inherit" className="text-gray-500">
        No blogs found
      </Typography>
      <Typography as="p" size="base" color="inherit" className="mt-2 text-gray-400">
        Check back later for new content!
      </Typography>
    </div>
  )
}

export default BlogsWrapper
