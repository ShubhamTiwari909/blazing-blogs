'use client'
import { useDarkModeStore } from '@/lib/store/useDarkMode'
import { Switch } from '@/components/atoms/Switch'
import { cn } from '@/lib/utils'

const DarkModeToggle = ({ className }: { className?: string }) => {
  const toggleDarkMode = useDarkModeStore((state) => state.toggleDarkMode)
  const darkMode = useDarkModeStore((state) => state.darkMode)
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Switch
        id="dark-mode"
        className={`scale-140 cursor-pointer ${darkMode ? 'bg-slate-700!' : 'bg-slate-100!'} [&_span[data-state=checked]]:bg-[url("/moon.svg")] [&_span[data-state=unchecked]]:bg-[url("/sun.svg")]`}
        checked={darkMode}
        onCheckedChange={toggleDarkMode}
      />
    </div>
  )
}

export default DarkModeToggle
