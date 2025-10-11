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
              const reactions = ['heart', 'unicorn', 'confetti', 'fireworks', 'party']
              const reactionsCombinedCount = reactions.reduce((acc, reaction) => acc + (blogReactions.reactionsCount[reaction]?.length || 0), 0)
              value = reactionsCombinedCount
            }
            return value
          },
        ],
      },
    },
    {
      name: 'pagespeed',
      type: 'number',
      label: 'Pagespeed performance score',
      admin: {
        readOnly: true,
        components: {
          afterInput: ['@/components/payload/dashboard/pagespeed'],
        },
      },
    },
  ],
}
