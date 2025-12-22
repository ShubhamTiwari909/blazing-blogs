import type { BlogCardProps } from './types'
import { Typography } from '@/components/atoms/typography'
import Tags from '@/components/blogs/blog-renderer/Tags'
import EstimateReading from './EstimateReading'
import BlogImage from './BlogImage'
import ReadMore from './ReadMore'
import MetaData from './MetaData'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ id, content, createdAt, slug }: BlogCardProps) => {
  return (
    <article
      key={id}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:border-gray-200 hover:shadow-2xl"
    >
      {content.image && typeof content.image === 'object' && (
        <BlogImage src={content.image._key as string} alt={content.title} />
      )}

      <div className="p-6">
        <Typography
          as="h2"
          variant="h2"
          size="xl"
          weight="bold"
          color="primary"
          className="mb-3 line-clamp-2 transition-colors duration-200 group-hover:text-blue-600"
        >
          <Link href={`/${slug}`} className="hover:underline">
            {content.title}
          </Link>
        </Typography>

        <Typography as="p" size="xs" color="secondary" className="mb-5 line-clamp-3">
          {content.shortDescription}
        </Typography>

        {content.tags && content.tags.length > 0 && <Tags tags={content.tags} />}

        <MetaData author={content.author} createdAt={createdAt} />

        {/* Read More Button */}
        <div className="mt-6 flex items-center justify-between gap-2">
          <ReadMore slug={slug} />
          <EstimateReading data={content.blocks} />
        </div>
      </div>
    </article>
  )
}

export default BlogCard
