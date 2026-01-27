'use client'
import { CookiesProvider } from 'react-cookie'
import type { ViewsProps } from './types'
import Views from './Views'

const ViewsWrapper = ({ id }: ViewsProps) => {
  return (
    <CookiesProvider>
      <Views id={id} />
    </CookiesProvider>
  )
}

export default ViewsWrapper
