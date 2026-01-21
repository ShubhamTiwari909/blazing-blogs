import type { Media, Page } from '@/payload-types'
import { contructImageUrl } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'

export const fetchPagesData = async (pagesCount: number): Promise<Page[]> => {
  const pagesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/pages?limit=${pagesCount}`,
  )
  const pagesData = await pagesResponse.json()
  const pagesDataArray = pagesData.docs.map((page: Page) => {
    const seoImage = page.seo.image as Media
    return {
      createdAt: page.createdAt,
      updatedAt: page.updatedAt,
      slug: `${process.env.NEXT_PUBLIC_SITE_URL}/${page.slug}`,
      heading: page.content.title,
      seoTitle: page.seo.title,
      seoDescription: page.seo.description,
      seoImage: contructImageUrl(seoImage._key || ''),
      status: page._status,
    }
  })
  return pagesDataArray
}

export const useCsvDataExport = () => {
  const [pagesCount, setPagesCount] = useState(100)
  const [isSyncing, setIsSyncing] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        !e.target.closest('.csv-modal') &&
        !e.target.closest('.csv-modal-trigger')
      ) {
        setIsModalOpen(false)
      }
    }
    document.addEventListener('click', clickOutside)
    return () => {
      document.removeEventListener('click', clickOutside)
    }
  }, [])

  const submitToSheet = useCallback(async () => {
    try {
      setIsSyncing(true)
      if (!pagesCount || pagesCount < 1) {
        return
      }
      const pagesDataArray = await fetchPagesData(pagesCount)
      const response = await fetch('/api/submit-to-sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: pagesDataArray,
        }),
      })

      if (!response.ok) {
        console.error('Failed to submit to Google Sheet')
      }
      setIsSyncing(false)
    } catch (error) {
      console.error('Error submitting to Google Sheet:', error)
      setIsSyncing(false)
    }
  }, [pagesCount])

  return {
    pagesCount,
    setPagesCount,
    isSyncing,
    isModalOpen,
    setIsModalOpen,
    submitToSheet,
  }
}
