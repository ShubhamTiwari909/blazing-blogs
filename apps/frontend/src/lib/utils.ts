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

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // average case
  const wordsPerSecond = wordsPerMinute / 60;
  const words = text.trim().split(/\s+/).length; // split by whitespace
  const seconds = Math.ceil(words / wordsPerSecond);
  if(seconds <= 60){
    return `${seconds} sec read`;
  }
  const convertToMinutes = Math.ceil(seconds / 60);
  const minutes = Math.round(convertToMinutes);

  return `${minutes} min read`;
}