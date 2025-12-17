import { generatePreviewPath } from './utils/generatePreviewPath'
import { FeatureFlags } from './blocks/feature-flags'
import { slugFilter } from './utils/slugFilter'
import { Analytics } from './blocks/analytics'
import { Content } from './blocks/content'
import { CollectionConfig } from 'payload'
import { SeoTab } from './blocks/seo'

export const Page: CollectionConfig = {
  slug: 'pages',
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
      type: 'ui',
      label: 'Revalidate',
      admin: {
        components: {
          Field: '@/components/payload/dashboard/revalidation',
        },
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [Content, SeoTab, Analytics, FeatureFlags],
    },
  ],
  trash: true,
  versions: {
    drafts: {
      autosave: true,
    },
  },
}
