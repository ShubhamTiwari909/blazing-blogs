import Database from './database/Database'
import StaticPages from './StaticPages'
import Header from './Header'
import React from 'react'

export const HealthCheck = async () => {
  const response = await fetch(`${process.env.SITE_URL}/api/healthcheck`, {
    cache: 'no-store',
  })
  const data = await response.json()
  const { database, static: staticPages } = data
  console.log(data)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-12 sm:px-6 lg:px-8 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl">
        <Header />
        <Database database={database} />
        <StaticPages staticPages={staticPages} />
      </div>
    </div>
  )
}
