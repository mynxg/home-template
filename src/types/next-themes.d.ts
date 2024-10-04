import { ReactNode } from 'react'

declare module 'next-themes' {
  export interface ThemeProviderProps {
    children: ReactNode
    attribute?: string
    defaultTheme?: string
    enableSystem?: boolean
    [key: string]: any
  }

  export const ThemeProvider: React.ComponentType<ThemeProviderProps>
}