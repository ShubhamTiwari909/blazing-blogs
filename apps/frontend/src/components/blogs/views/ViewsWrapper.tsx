'use client'
import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Views from './Views'
import type { ViewsProps } from './types'

const ViewsWrapper = ({ id }: ViewsProps) => {
  return (
    <CookiesProvider>
      <Views id={id} />
    </CookiesProvider>
  )
}

export default ViewsWrapper
