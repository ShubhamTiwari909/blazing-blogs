import { contructImageUrl } from '@/lib/utils'
import { Media } from '@/payload-types'

const PDFViewer = ({ pdf }: { pdf: Media }) => {
  if (!pdf?._key) {
    return null
  }
  const pdfUrl = contructImageUrl(pdf._key)
  return (
    <div>
      <iframe src={pdfUrl} width="100%" height="600px" title={pdf.alt} />
    </div>
  )
}

export default PDFViewer
