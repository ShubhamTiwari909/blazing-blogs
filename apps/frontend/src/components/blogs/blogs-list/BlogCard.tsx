import Link from 'next/link'
import React from 'react'
import BlogImage from './BlogImage'
import Tags from '../blog-renderer/Tags'
import MetaData from './MetaData'
import ReadMore from './ReadMore'
import EstimateReading from './EstimateReading'
import type { BlogCardProps } from './types'

const BlogCard = ({ id, content, createdAt, slug }: BlogCardProps) => {
  return (
    <article
      key={id}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
    >
      {content.image && typeof content.image === 'object' && (
        <BlogImage src={content.image._key as string} alt={content.title} />
      )}

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          <Link href={`/${slug}`} className="hover:underline">
            {content.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {content.shortDescription}
        </p>

        {content.tags && content.tags.length > 0 && <Tags tags={content.tags} />}

        <MetaData author={content.author} createdAt={createdAt} />

        {/* Read More Button */}
        <div className="flex items-center justify-between gap-2 mt-6">
          <ReadMore slug={slug} />
          <EstimateReading data={content.blocks} />
        </div>
      </div>
    </article>
  )
}

export default BlogCard
