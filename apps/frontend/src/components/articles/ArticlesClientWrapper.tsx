"use client"

import { useDarkModeStore } from "@/lib/store/useDarkMode"
import { cn } from "@/lib/utils"

const ArticlesClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useDarkModeStore((state) => state.darkMode)

    const headingStyles = darkMode ? '[&_h1]:from-gray-100 [&_h1]:via-blue-100 [&_h1]:to-gray-200' : '[&_h1]:from-gray-900 [&_h1]:via-blue-800 [&_h1]:to-gray-800'
    const descriptionStyles = darkMode ? '[&_p.description]:text-gray-200' : '[&_p.description]:text-gray-600'

    return (
        <section id="articles" className={cn(darkMode ? 'bg-gray-900' : 'bg-gray-50', headingStyles, descriptionStyles, 'dark:bg-gray-800 py-10 md:py-20')}>
            {children}
        </section>
    )
}

export default ArticlesClientWrapper
