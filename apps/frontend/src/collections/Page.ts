import { CollectionConfig } from 'payload'
import { slugFilter } from './utils/slugFilter'
import { generatePreviewPath } from './utils/generatePreviewPath'
import { Content } from './blocks/content'
import { SeoTab } from './blocks/seo'
import { Analytics } from './blocks/analytics'

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
      name: 'revalidate',
      type: 'text',
      label: 'Revalidate',
      defaultValue: 'blogs',
      admin: {
        readOnly: true,
        components: {
          afterInput: ['@/components/payload/dashboard/revalidation'],
        },
      },
    },
    {
      type: 'tabs',
      tabs: [Content, SeoTab, Analytics],
    },
  ],
  trash: true,
  versions: {
    drafts: true,
  },
}
