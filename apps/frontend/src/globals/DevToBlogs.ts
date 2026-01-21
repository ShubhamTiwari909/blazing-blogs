import type { GlobalConfig } from 'payload'

export const DevToBlogs: GlobalConfig = {
  slug: 'dev-to-blogs',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      type: 'collapsible',
      label: 'Blogs',
      fields: [
        {
          name: 'blogs',
          type: 'json',
          label: 'Blogs',
          required: true,
          admin: {
            readOnly: true,
          },
        },
      ],
    },
    {
      name: 'refetch',
      type: 'ui',
      label: 'Refetch',
      admin: {
        components: {
          Field: '@/globals/RefetchButton',
        },
      },
    },
  ],
}
