'use client'
import React, { useState } from 'react'
import { LuSearch } from 'react-icons/lu'
import { useRouter } from 'next/navigation'

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
        <div className='mb-10'>
            <div className='flex flex-col lg:flex-row gap-5 items-center w-full mb-2'>
                <div className='flex items-center relative overflow-hidden w-full'>
                    <div className='px-5 py-3 absolute left-0 top-0 z-10'>
                        <LuSearch className='h-4 w-4' />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full relative z-0 rounded-lg rounded-br-lg border-2 border-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-12 md:pl-16 pr-4 py-2"
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
                <button onClick={() => router.push(`/blogs/search?search=${search.trim()}`)}
                    disabled={!search || !!error}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Search</button>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
        </div>
    )
}

export default SearchInput
