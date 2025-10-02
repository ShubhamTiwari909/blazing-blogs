"use client"

import { toast, useFormFields } from "@payloadcms/ui"

export default function Revalidation() {
    const fields = useFormFields(([fields]) => fields)
    const handleRevalidate = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        
        try {
            await fetch('/api/revalidate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slug: fields.slug.value }),
            })
            toast.success('Revalidated successfully')
        } catch (_error) {
            toast.error('Failed to revalidate')
        }
    }

    return (
        <div style={{ marginTop: '8px' }}>
            <button 
                type="button"
                onClick={handleRevalidate}
                style={{ 
                    padding: '8px 16px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Revalidate Cache
            </button>
        </div>
    )
}