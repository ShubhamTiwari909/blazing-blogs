import { PreviewLink } from './types'
import React from 'react'

const DefaultLinkPreview = ({ link }: PreviewLink) => {
  return (
    <a
      className="text-blue-600 dark:text-blue-400"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link}
    </a>
  )
}

export default DefaultLinkPreview
