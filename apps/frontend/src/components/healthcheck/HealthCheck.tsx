import React from 'react'
import Header from './Header'
import Database from './database/Database'
import StaticPages from './StaticPages'

export const HealthCheck = async () => {
  const response = await fetch(`${process.env.SITE_URL}/api/healthcheck`, {
    cache: 'no-store',
  })
  const data = await response.json()
  const { database, static: staticPages } = data

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Database database={database} />
        <StaticPages staticPages={staticPages} />
      </div>
    </div>
  )
}
