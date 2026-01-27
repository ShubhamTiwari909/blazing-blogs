import { PreviewLink } from './types'

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
