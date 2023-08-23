import type { Metadata } from 'next'

import StyledComponentsRegistry from './lib/registry'
import GlobalStyles from './styles/global'

export const metadata: Metadata = {
  title: {
    default: 'Boilerplate',
    template: '%s | Boilerplate',
  },
  description: 'Next.js + Styled Components + TypeScript Boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
