import { Eye } from 'lucide-react'
import React from 'react'

const Views = ({ blogViews }: { blogViews: number }) => {
  return (
    <div className="flex items-center gap-1">
      <Eye className="w-4 h-4" />
      <p>{blogViews}</p>
    </div>
  )
}

export default Views
