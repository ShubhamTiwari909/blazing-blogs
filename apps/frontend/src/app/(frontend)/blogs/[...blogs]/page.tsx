import { draftMode } from 'next/headers'
import React from 'react'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { fetchBlogView, pageData } from '@/lib/fetch-utils'
import { Props } from '@/lib/types'
import { contructImageUrl } from '@/lib/utils'
import { Metadata } from 'next'

export async function generateMetadata({ params }: Props) {
  const page = await pageData(params)
  const seo = page.docs.seo
  const title = seo.title
  const description = seo.description
  const url = `https://blazing-blogs-frontend.vercel.app/${page.docs.slug}`

  const sharedMetadata = {
    title,
    description,
    images:
      typeof seo.image === 'object'
        ? contructImageUrl(seo.image._key as string)
        : 'https://570pc5yjce.ufs.sh/f/QUFIlUYDwcG5n17hl4jqNAQCs5rbeKtmhHl4F1Uwdg9zSLkx',
  }

  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'x-default': url,
      },
    },
    openGraph: {
      ...sharedMetadata,
      url,
    },
    twitter: sharedMetadata,
  }

  return metadata
}

const page = async ({ params }: Props) => {
  const { isEnabled: draft } = await draftMode()
  const page = await pageData(params)
  const blogViews = await fetchBlogView(page.docs.id)
  const blogData = page.docs.content

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogRenderer
        blogData={blogData}
        draft={draft}
        blogViews={blogViews}
        blogId={page.docs.id}
        createdAt={page.docs.createdAt}
      />
    </div>
  )
}

export default page
