import { draftMode } from 'next/headers'
import { unstable_cache } from 'next/cache'
import React from 'react'
import BlogRenderer from '@/components/blogs/blog-renderer/BlogRenderer'
import { pageData } from '@/lib/fetch-utils/fetch-utils'
import { Props } from '@/lib/types'
import { contructImageUrl } from '@/lib/utils'
import { Metadata } from 'next'

// Enable dynamic rendering
export const dynamic = 'force-dynamic'

type Params = {
  blogs: string
};

// Create cached versions of data fetching functions
const getCachedPageData = unstable_cache(
  async (params: Params) => {
    return await pageData(params)
  },
  ['page-data'],
  {
    revalidate: 86400, // 24 hours
    tags: ['page-data']
  }
)

export async function generateMetadata({ params }: Props) {
  const resolvedParams = await params;
  const page = await getCachedPageData(resolvedParams)
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
  const resolvedParams = await params;
  const page = await getCachedPageData(resolvedParams)
  const blogData = page.docs.content

  return (
    <div className="min-h-screen relative">
      <BlogRenderer
        blogData={blogData}
        draft={draft}
        blogId={page.docs.id}
        createdAt={page.docs.createdAt}
      />
    </div>
  )
}

export default page
