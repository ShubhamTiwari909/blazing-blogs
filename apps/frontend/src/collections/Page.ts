import { CollectionConfig } from 'payload'
import { slugFilter } from './utils/slugFilter'
import { generatePreviewPath } from './utils/generatePreviewPath'
import { Content } from './blocks/content'
import { SeoTab } from './blocks/seo'

export const Page: CollectionConfig = {
  slug: 'pages',
  folders: true,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'pageTitle',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: slugFilter(data?.slug),
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: slugFilter(data?.slug),
        collection: 'pages',
        req,
      }),
  },
  fields: [
    {
      name: 'pageTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [Content, SeoTab],
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const path = `/blog/${doc.slug}`;

        // Call Next.js revalidate API
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path,
            secret: process.env.REVALIDATE_SECRET,
          }),
        });
      },
    ],
    afterDelete: [
      async ({ doc }) => {
        const path = `/blog/${doc.slug}`;

        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path,
            secret: process.env.REVALIDATE_SECRET,
          }),
        });

        // Also revalidate blog listing page
        await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: "/blog",
            secret: process.env.REVALIDATE_SECRET,
          }),
        });
      },
    ],
  },
  trash: true,
}
