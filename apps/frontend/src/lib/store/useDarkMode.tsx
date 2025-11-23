import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import type { DarkModeState } from './types'

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
