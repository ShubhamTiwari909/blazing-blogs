'use client'
import React, { useState } from 'react'
import { useField, useForm, useFormFields } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'
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

type PageSpeedResult = {
  id: string
  lighthouseResult: {
    audits: Record<string, { numericValue?: number; displayValue?: string }>
    categories: {
      performance: { score: number }
    }
  }
} | null

type PagespeedProps = {
  path: string
}

const Pagespeed: TextFieldClientComponent = ({ path }: PagespeedProps) => {
  const [pagespeed, setPagespeed] = useState<PageSpeedResult>(null)
  const [loading, setLoading] = useState(false)
  const analyticsFields = useFormFields(([fields]) => fields)
  const formFields = useForm()
  const { setValue } = useField({ path })

  const getPerformanceClass = (score: number) => {
    if (score >= 90) return 'excellent'
    if (score >= 70) return 'good'
    return 'poor'
  }

  const handleAnalyzePageSpeed = () => {
    setLoading(true)
    setPagespeed(null)
    fetchPagespeed(analyticsFields['slug'].value as string)
      .then((data) => {
        if (data) {
          setPagespeed(data)
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
          setValue(data?.lighthouseResult?.categories?.performance?.score * 100)
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
      {pagespeed ? (
        <div className="metrics-container">
          <div className="metric-item">
            <span className="metric-label">🌐 Page URL</span>
            <span className="metric-value">{pagespeed.id}</span>
          </div>
          <div className="metric-item">
            <span className="metric-label">📊 DOM Size</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['dom-size']?.numericValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">⚡ First Contentful Paint</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['first-contentful-paint']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">🎯 Largest Contentful Paint</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['largest-contentful-paint']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">📐 Cumulative Layout Shift</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['cumulative-layout-shift']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">🔄 Time to Interactive</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['interactive']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">⏱️ Total Blocking Time</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['total-blocking-time']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">🏃 Speed Index</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['speed-index']?.displayValue}
            </span>
          </div>
          <div className="metric-item">
            <span className="metric-label">🖥️ Server Response Time</span>
            <span className="metric-value">
              {pagespeed.lighthouseResult.audits['server-response-time']?.displayValue}
            </span>
          </div>
          <div
            className={`metric-item performance-score ${getPerformanceClass(pagespeed.lighthouseResult.categories.performance?.score * 100)}`}
          >
            <span className="metric-label">🏆 Performance Score</span>
            <span className="metric-value">
              {Math.round(pagespeed.lighthouseResult.categories.performance?.score * 100)}%
            </span>
          </div>
        </div>
      ) : (
        !loading && (
          <div className="no-data">
            Click &quot;Analyze Page Speed&quot; to get performance metrics
          </div>
        )
      )}
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
