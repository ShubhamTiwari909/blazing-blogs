'use client'
import { useForm } from '@payloadcms/ui'
import React, { useState } from 'react'

const fetchDevToArticles = async () => {
  try {
    const response = await fetch('/api/dev-to-articles?page=1&per_page=12', {
      method: 'GET',
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        errorData.error || `Failed to fetch blogs: ${response.status} ${response.statusText}`,
      )
    }

    const data = await response.json()

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
