import type { Session } from 'next-auth'

export type DarkModeState = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export type AuthSessionState = {
  sessionClient: Session | null
  setSessionClient: (sessionClient: Session | null) => void
  status: Status
  setStatus: (status: Status) => void
}

export type Status = 'loading' | 'authenticated' | 'unauthenticated'
