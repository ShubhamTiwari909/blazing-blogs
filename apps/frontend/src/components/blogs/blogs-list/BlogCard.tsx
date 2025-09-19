import Link from 'next/link'
import React from 'react'
import BlogImage from './BlogImage'
import { Page } from '@/payload-types'
import Tags from '../blog-renderer/Tags'
import MetaData from './MetaData'
import ReadMore from './ReadMore'

const BlogCard = ({ page }: { page: Page }) => {
  return (
    <article
      key={page.id}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
    >
      {page.image && typeof page.image === 'object' && (
        <BlogImage src={page.image._key as string} alt={page.title} />
      )}

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          <Link href={`/blogs/${page.slug}`} className="hover:underline">
            {page.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{page.shortDescription}</p>

        {page.tags && page.tags.length > 0 && <Tags tags={page.tags} />}

        <MetaData author={page.author} createdAt={page.createdAt} />

        {/* Read More Button */}
        <ReadMore slug={page.slug} />
      </div>
    </article>
  )
}

export default BlogCard
