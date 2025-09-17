import { getPayload } from 'payload'
import config from '@payload-config'
import React, { cache } from 'react'
import BlogsList from '@/components/blogs/BlogsList'

const page = async () => {
  const pages = await queryPages()
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogsList pages={pages} />
      </div>
    </div>
  )
}

const queryPages = cache(async () => {
  const payload = await getPayload({ config: config })

  const result = await payload.find({
    collection: 'pages',
    depth: 2,
    pagination: false,
    where: {
      slug: {
        contains: `blogs`,
      },
    },
  })

  if (result.docs?.[0]) {
    return {
      type: 'page',
      docs: result.docs,
    }
  }
})

export default page
