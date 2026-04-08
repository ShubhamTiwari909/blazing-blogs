'use client'
import { getDevToArticles } from '@/components/articles/articles-fetch'
import { useForm } from '@payloadcms/ui'
import { useState } from 'react'

const fetchDevToArticles = async () => {
  try {
    const response = await getDevToArticles({ page: 1, perPage: '36' })

    if (!response.ok) {
      const errorData = await response.details
      throw new Error(
        errorData || `Failed to fetch blogs: ${response.status} ${response.statusText}`,
      )
    }

    const data = await response.data

    if (!Array.isArray(data)) {
      throw new Error('Expected array of blogs, but received: ' + typeof data)
    }
    return data
  } catch (error) {
    console.error('Error fetching blogs:', error)
    throw error
  }
}

const RefetchButton = () => {
  const formFields = useForm()
  const [loading, setLoading] = useState(false)
  return (
    <div>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setLoading(true)
          fetchDevToArticles()
            .then((data) => {
              formFields.dispatchFields({
                type: 'UPDATE',
                path: 'dev-to-blogs.blogs',
                value: data,
              })
              setLoading(false)
            })
            .catch((error) => {
              console.error('Error fetching blogs:', error)
            })
            .finally(() => {
              setLoading(false)
            })
        }}
      >
        {loading ? 'Fetching...' : 'Fetch Blogs'}
      </button>
    </div>
  )
}

export default RefetchButton
