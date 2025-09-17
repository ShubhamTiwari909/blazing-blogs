import React from 'react'

interface CodeRendererProps {
  code: string
}

export default function CodeRenderer({ code }: CodeRendererProps) {
  return (
    <div className="mx-auto lg:max-w-300 px-5">
      <pre className="bg-slate-900 text-slate-100 p-6 rounded-xl overflow-x-auto shadow-lg border border-slate-700 font-mono text-sm leading-relaxed whitespace-pre-wrap">
        <code>{code}</code>
      </pre>
    </div>
  )
}