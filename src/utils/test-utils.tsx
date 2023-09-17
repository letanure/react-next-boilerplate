import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/react'
import React, { type ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
