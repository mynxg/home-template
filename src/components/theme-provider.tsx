'use client'

import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'

export function CustomThemeProvider({ children, ...props }: ThemeProviderProps) {
  return React.createElement(
    NextThemesProvider as React.ComponentType<ThemeProviderProps>,
    { ...props, children }
  )
}