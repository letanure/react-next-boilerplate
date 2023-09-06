import StyledComponentsRegistry from '@libs/registry'
import GlobalStyles from '@styles/global'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Boilerplate',
    template: '%s | Boilerplate',
  },
  description: 'Next.js + Styled Components + TypeScript Boilerplate',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <GlobalStyles />
        <body>{children}</body>
      </StyledComponentsRegistry>
    </html>
  )
}
