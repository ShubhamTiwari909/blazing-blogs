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
      name: 'likes',
      type: 'number',
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [
          async ({ data, value }) => {
            if (data) {
              const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/likes-count-from-blog?id=${data.id}`,
                {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                },
              )
              const blogLikes = await response.json()
              value = blogLikes.likesCount
            }
            return value
          },
        ],
      },
    },
  ],
}
