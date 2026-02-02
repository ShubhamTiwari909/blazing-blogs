import { contructImageUrl } from '@/lib/utils'
import { Media } from '@/payload-types'
import React from 'react'

const PDFViewer = ({ pdf }: { pdf: Media }) => {
  const pdfUrl = contructImageUrl(pdf._key as string)
  return (
    <div>
      <iframe src={pdfUrl} width="100%" height="600px" />
    </div>
  )
}

export default PDFViewer
