import { getCachedBlogData } from '@/lib/fetch-utils/fetch-blogs'
import { contructImageUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Props } from '@/lib/types'
import { Metadata } from 'next'

export async function getMetadata({ params }: Props) {
  const resolvedParams = await params
  const page = await getCachedBlogData(resolvedParams)
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
