'use client'
import { useField, useForm, useFormFields } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'
import type { PagespeedProps } from './types'
import React, { useState } from 'react'
import './styles.scss'

async function fetchPagespeed(slug: string) {
  const apiEndpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?key=${process.env.NEXT_PUBLIC_PAGESPEED_API_KEY}`
  const targetUrl = `https://blazing-blogs-frontend.vercel.app/${slug}`

  const url = new URL(apiEndpoint)
  url.searchParams.set('url', targetUrl)

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const json = await response.json()
    return json
  } catch (error) {
    console.error('Fetching PageSpeed Insights failed:', error)
  }
}

const Pagespeed: TextFieldClientComponent = ({ path }: PagespeedProps) => {
  const [loading, setLoading] = useState(false)
  const analyticsFields = useFormFields(([fields]) => fields)
  const formFields = useForm()
  const { setValue } = useField({ path })

  const fieldValues = {
    domSize: useField<number>({ path: 'analytics.domSize' })?.value,
    lcp: useField<string>({ path: 'analytics.lcp' })?.value,
    fcp: useField<string>({ path: 'analytics.fcp' })?.value,
    cls: useField<string>({ path: 'analytics.cls' })?.value,
    interactive: useField<string>({ path: 'analytics.interactive' })?.value,
    totalBlockingTime: useField<string>({ path: 'analytics.totalBlockingTime' })?.value,
    speedIndex: useField<string>({ path: 'analytics.speedIndex' })?.value,
    serverResponseTime: useField<string>({ path: 'analytics.serverResponseTime' })?.value,
    performanceScore: useField<number>({ path: 'analytics.pagespeed' })?.value,
  }

  const getPerformanceClass = (score: number) => {
    if (score >= 90) return 'excellent'
    if (score >= 70) return 'good'
    return 'poor'
  }

  const handleAnalyzePageSpeed = () => {
    setLoading(true)
    fetchPagespeed(analyticsFields['slug'].value as string)
      .then((data) => {
        if (data) {
          setValue('UI Render')
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.domSize',
            value: data?.lighthouseResult?.audits?.['dom-size-insight']?.numericValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.lcp',
            value: data?.lighthouseResult?.audits?.['largest-contentful-paint']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.fcp',
            value: data?.lighthouseResult?.audits?.['first-contentful-paint']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.cls',
            value: data?.lighthouseResult?.audits?.['cumulative-layout-shift']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.interactive',
            value: data?.lighthouseResult?.audits?.['interactive']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.totalBlockingTime',
            value: data?.lighthouseResult?.audits?.['total-blocking-time']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.speedIndex',
            value: data?.lighthouseResult?.audits?.['speed-index']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.serverResponseTime',
            value: data?.lighthouseResult?.audits?.['server-response-time']?.displayValue,
          })
          formFields.dispatchFields({
            type: 'UPDATE',
            path: 'analytics.pagespeed',
            value: data?.lighthouseResult?.categories?.performance?.score,
          })
        }
      })
      .catch((error) => {
        console.error('Fetching PageSpeed Insights failed:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  

  return (
    <div className="pagespeed-container">
      <button className="fetch-button" onClick={handleAnalyzePageSpeed} disabled={loading}>
        {loading ? 'Analyzing...' : '🚀 Analyze Page Speed'}
      </button>
      <div className="metrics-container">
        <div className="metric-item">
          <span className="metric-label">📊 DOM Size</span>
          <span className="metric-value">{fieldValues?.domSize}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">⚡ First Contentful Paint</span>
          <span className="metric-value">{fieldValues?.fcp}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">🎯 Largest Contentful Paint</span>
          <span className="metric-value">{fieldValues?.lcp}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">📐 Cumulative Layout Shift</span>
          <span className="metric-value">{fieldValues?.cls}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">🔄 Time to Interactive</span>
          <span className="metric-value">{fieldValues?.interactive}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">⏱️ Total Blocking Time</span>
          <span className="metric-value">{fieldValues?.totalBlockingTime}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">🏃 Speed Index</span>
          <span className="metric-value">{fieldValues?.speedIndex}</span>
        </div>
        <div className="metric-item">
          <span className="metric-label">🖥️ Server Response Time</span>
          <span className="metric-value">{fieldValues?.serverResponseTime}</span>
        </div>
        <div
          className={`metric-item performance-score ${getPerformanceClass(fieldValues?.performanceScore * 100)}`}
        >
          <span className="metric-label">🏆 Performance Score</span>
          <span className="metric-value">
            {typeof fieldValues?.performanceScore === 'number'
              ? fieldValues?.performanceScore * 100
              : 0}
            %
          </span>
        </div>
      </div>
      {loading && (
        <div className="loading-state">
          <div className="spinner"></div>
          <span>Analyzing page performance...</span>
        </div>
      )}
    </div>
  )
}

export default Pagespeed
