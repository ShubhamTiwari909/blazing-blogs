"use client"

import { toast, useDocumentInfo } from "@payloadcms/ui"

export default function Revalidation() {
    const documentInfo = useDocumentInfo()
    const handleRevalidate = async (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
        
        try {
            const response = await fetch('/api/revalidate', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ slug: documentInfo.data?.slug, blogId: documentInfo.id }),
            })
            
            const data = await response.json()
            
            if (data.revalidated) {
                // Clear aiSummary cookie if revalidation was successful
                toast.success('Revalidated successfully')
            }
            
        } catch (_error) {
            toast.error('Failed to revalidate')
            console.log(_error)
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