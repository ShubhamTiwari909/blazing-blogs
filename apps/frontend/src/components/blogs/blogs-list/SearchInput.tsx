'use client'
import { useRouter } from 'next/navigation'
import { LuSearch } from 'react-icons/lu'
import React, { useState } from 'react'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    if (e.target.value.length > 100) {
      setError('Search query must be less than 100 characters')
    } else {
      setError('')
    }
  }
  return (
    <div className="mb-10">
      <div className="mb-2 flex w-full flex-col items-center gap-5 lg:flex-row">
        <div className="relative flex w-full items-center overflow-hidden">
          <div className="absolute top-0 left-0 z-10 px-5 py-3">
            <LuSearch className="h-4 w-4" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="relative z-0 w-full rounded-lg rounded-br-lg border-2 border-gray-400 py-2 pr-4 pl-12 shadow-sm focus:border-blue-500 focus:ring-blue-500 md:pl-16"
            value={search}
            onChange={handleSearch}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && search.trim().length > 0) {
                if (search.trim().length > 100) {
                  setError('Search query must be less than 100 characters')
                } else {
                  setError('')
                  router.push(`/blogs/search?search=${search.trim()}`)
                }
              }
            }}
          />
        </div>
        <button
          onClick={() => router.push(`/blogs/search?search=${search.trim()}`)}
          disabled={!search || !!error}
          className="cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Search
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default SearchInput
