"use client"
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import { LogIn } from 'lucide-react'
import { Button } from '../ui/button'

const Comments = ({ blogId }: { blogId: string }) => {
  const { data: session } = useSession()

  if(!session?.user?.name){
    return <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-center">
      <Button variant='outline' size="lg" onClick={() => signIn('google')} className='cursor-pointer text-gray-600 text-2xl flex items-center justify-center gap-2'>Please login to comment <LogIn className='mt-1' /></Button>
    </div>
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {blogId}
    </div>
  )
}

export default Comments
