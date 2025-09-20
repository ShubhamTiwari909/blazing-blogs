import { Media } from '@/payload-types'
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
