import { Tab } from 'payload'

export const Analytics: Tab = {
  name: 'analytics',
  fields: [
    {
      type: 'collapsible',
      label: 'Views and Reactions',
      fields: [
        {
          name: 'viewAndReactions',
          type: 'ui',
          admin: {
            components: {
              Field: '@/components/payload/dashboard/view-and-reactions/ViewsAndReactions',
            },
          },
        },
        {
          name: 'views',
          type: 'text',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'reactions',
          type: 'text',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Page Speed',
      fields: [
        {
          name: 'pagespeedScore',
          type: 'ui',
          admin: {
            components: {
              Field: '@/components/payload/dashboard/pagespeed/pagespeed',
            },
          },
        },
        {
          name: 'pagespeed',
          type: 'number',
          label: 'Pagespeed performance score (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'domSize',
          type: 'number',
          label: 'DOM Size (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'lcp',
          type: 'text',
          label: 'Largest Contentful Paint (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'fcp',
          type: 'text',
          label: 'First Contentful Paint (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'cls',
          type: 'text',
          label: 'Cumulative Layout Shift (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'interactive',
          type: 'text',
          label: 'Time to Interactive (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'totalBlockingTime',
          type: 'text',
          label: 'Total Blocking Time (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'speedIndex',
          type: 'text',
          label: 'Speed Index (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
        {
          name: 'serverResponseTime',
          type: 'text',
          label: 'Server Response Time (Read Only)',
          admin: {
            readOnly: true,
            hidden: true,
          },
        },
      ],
    },
  ],
}
