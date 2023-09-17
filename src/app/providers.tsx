'use client'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}
