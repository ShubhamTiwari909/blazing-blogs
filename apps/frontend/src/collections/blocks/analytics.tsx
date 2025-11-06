import { Tab } from 'payload'

export const Analytics: Tab = {
  name: 'analytics',
  fields: [
    {
      name: 'views',
      type: 'number',
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [
          async ({ data, value }) => {
            if (data) {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/views?id=${data.id}`,
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              )
              const blogViews = await response.json()
              value = blogViews.blogsCount
            }
            return value
          },
        ],
      },
    },
    {
      name: 'reactions',
      type: 'number',
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [
          async ({ data, value }) => {
            if (data) {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/reactions-count-from-blog?id=${data.id}`,
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              )
              const blogReactions = await response.json()
              value = blogReactions.reactionsCount
            }
            return value
          },
        ],
      },
    },
    {
      type: 'collapsible',
      label: 'Page Speed',
      fields: [
        {
          name: 'lcp',
          type: 'text',
          label: 'Largest Contentful Paint (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'fcp',
          type: 'text',
          label: 'First Contentful Paint (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'cls',
          type: 'text',
          label: 'Cumulative Layout Shift (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'interactive',
          type: 'text',
          label: 'Time to Interactive (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'totalBlockingTime',
          type: 'text',
          label: 'Total Blocking Time (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'speedIndex',
          type: 'text',
          label: 'Speed Index (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'serverResponseTime',
          type: 'text',
          label: 'Server Response Time (Read Only)',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'pagespeed',
          type: 'number',
          label: 'Pagespeed performance score (Read Only)',
          admin: {
            readOnly: true,
            components: {
              afterInput: ['@/components/payload/dashboard/pagespeed'],
            },
          },
        },
      ],
    },
  ],
}
