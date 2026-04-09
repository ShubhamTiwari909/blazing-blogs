'use client'
import { useFormFields } from '@payloadcms/ui'
import { useState } from 'react'
import Image from 'next/image'

const ImagePreview = () => {
  const [showPreview, setShowPreview] = useState(false)
  const cloudUrl = useFormFields(([fields]) => fields.cloudUrl).value as string

  const type = useFormFields(([fields]) => fields.type).value as string

  if(!type.includes('image')) return null

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault()
          setShowPreview(!showPreview)
        }}
      >
        {showPreview ? 'Hide Preview' : 'Show Preview'}
      </button>
      {showPreview ? (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            gap: '10px',
          }}
        >
          <Image src={cloudUrl} alt="Image" width={1000} height={1000} style={{ width: '100%', height: 'auto', borderRadius: '10px', border: '1px solid #4facfe', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)' }} />
          <button
            onClick={(e) => {
              e.preventDefault()
              setShowPreview(false)
            }}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                padding: '10px',
                borderRadius: '50%',
                width: '30px',
            }}
          >
            X
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ImagePreview
