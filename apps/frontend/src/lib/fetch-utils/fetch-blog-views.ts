import type { BlogIdProps, CheckIfAlreadyViewedProps } from './types'

export const updateBlogViews = async ({ id }: BlogIdProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/update/views?id=${id}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    },
  )
  const data = await response.json()
  return data
}

export const checkIfAlreadyViewed = ({ id, cookies }: CheckIfAlreadyViewedProps) => {
  return !!cookies[`viewed-${id}`]
}

export const getBlogView = async ({ id }: BlogIdProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/get/views?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}
