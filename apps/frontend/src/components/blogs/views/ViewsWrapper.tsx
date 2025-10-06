'use client'
import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Views from './Views'

const ViewsWrapper = ({ id }: { id: string }) => {
  return (
    <CookiesProvider>
      <Views id={id} />
    </CookiesProvider>
  )
}

export default ViewsWrapper
