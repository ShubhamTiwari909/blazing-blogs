import { getCachedBlogData } from '@/lib/fetch-utils/fetch-blogs'
import { pageData } from '@/lib/fetch-utils/fetch-utils'
import { contructImageUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Props } from '@/lib/types'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { connection } from 'next/server'

export async function getMetadata({ params }: Props) {
  const resolvedParams = await params
  const { isEnabled: draft } = await draftMode()

  let page

  if (draft) {
    await connection()
    page = await pageData(resolvedParams, { draft: true })
  } else {
    page = await getCachedBlogData(resolvedParams)
  }

  if (!page.docs) {
    return notFound()
  }
  const seo = page.docs.seo
  const title = `${seo.title} | Blazing Blogs`
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
    robots: {
      index: true,
      follow: true,
    },
  }

  return metadata
}
