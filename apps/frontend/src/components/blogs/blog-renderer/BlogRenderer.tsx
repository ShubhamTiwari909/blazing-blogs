import BlogHeaderStrip from './blog-header/BlogHeaderStrip'
import BlogHeader from './blog-header/BlogHeader'
import type { BlogRendererProps } from './types'
import BackgroundTheme from './BackgroundTheme'
import Content from './content/Content'

const BlogRenderer = async ({ blog }: BlogRendererProps) => {
  const { content } = blog
  const docs = content.blocks
  return (
    <>
      {/* Back Button - Sticky Header */}
      <BlogHeaderStrip />

      <div className="relative z-10">
        {/* Blog Header */}
        <BlogHeader blog={blog} />

        {/* Blog Content */}
        <Content docs={docs} />
      </div>
      <BackgroundTheme />
    </>
  )
}

export default BlogRenderer
