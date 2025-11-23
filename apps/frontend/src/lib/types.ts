import { Page } from '@/payload-types'

export type Props = {
  params: Promise<{
    blogs: string
  }>
}
export type ConvertLexicalToPlaintextProps = { dataBlocks: Page['content']['blocks'] }
