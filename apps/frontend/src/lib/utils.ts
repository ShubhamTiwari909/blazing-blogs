import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import type { ConvertLexicalToPlaintextProps } from './types'
import type { Media } from '@/payload-types'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const contructImageUrl = (imageKey: string) => {
  const baseUrl = 'https://570pc5yjce.ufs.sh/f/'
  return `${baseUrl}${imageKey}`
}

const getPropValue = <T>(prop: T | undefined | number | null) => {
  if (!prop || typeof prop === 'number') return undefined
  return prop
}

export const getMedia = getPropValue<Media>

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200 // average case
  const wordsPerSecond = wordsPerMinute / 60
  const words = text.trim().split(/\s+/).length // split by whitespace
  const seconds = Math.ceil(words / wordsPerSecond)
  if (seconds <= 60) {
    return `${seconds} sec read`
  }
  const convertToMinutes = Math.ceil(seconds / 60)
  const minutes = Math.round(convertToMinutes)

  if (minutes <= 60) {
    return `${minutes} min read`
  }
  const hours = Math.ceil(minutes / 60)
  return `${hours} hours read`
}

export const convertToPlaintext = ({ dataBlocks }: ConvertLexicalToPlaintextProps) => {
  const blocks = dataBlocks
  const text = blocks
    .map((block) => {
      if (block.blockType === 'content' && block.content) {
        return convertLexicalToPlaintext({ data: block.content })
      } else if (block.blockType === 'codeBlock' && block.codeBlock) {
        return block.codeBlock
      }
    })
    .join(' ')
  return text
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}