import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type DarkModeState = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const useDarkModeStore = create<DarkModeState>()(
  devtools(
    persist(
      (set) => ({
        darkMode: false,
        toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      }),
      {
        name: 'dark-mode-storage',
      },
    ),
  ),
)