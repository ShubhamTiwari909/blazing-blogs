import type { BlogHeaderProps } from '@/components/blogs/blog-renderer/types'
import { BlogImage } from '@/components/blogs/blog-renderer/Image'
import { Typography } from '@/components/atoms/typography'
import ShareToLinkedIn from '@/components/share/linkedin'
import BlogHeaderWrapper from './BlogHeaderWrapper'
import { contructImageUrl } from '@/lib/utils'
import Metadata from './Metadata'

const BlogHeader = ({ blog }: BlogHeaderProps) => {
  const { id, createdAt, featureFlags, content } = blog
  const { title, shortDescription, author, tags, aiSummary, blocks, image } = content
  return (
    <BlogHeaderWrapper>
      {image && typeof image === 'object' && (
        <BlogImage src={contructImageUrl(image._key as string)} alt={title} />
      )}

      <Typography as="h1" variant="h1" size="4xl" weight="bold" color="inherit" className="mb-5">
        {title}
      </Typography>

      <Typography as="p" size="base" color="inherit" className="mb-8">
        {shortDescription}
      </Typography>

      <Metadata
        id={id}
        author={author}
        createdAt={createdAt}
        tags={tags}
        aiSummary={aiSummary}
        blocks={blocks}
        featureFlags={featureFlags}
      />
      <div className="mt-2 flex justify-end">
        <ShareToLinkedIn />
      </div>
    </BlogHeaderWrapper>
  )
}

export default BlogHeader
