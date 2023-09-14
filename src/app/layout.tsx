import StyledComponentsRegistry from '@/libs/registry'
import type { Metadata } from 'next'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'Boilerplate',
    template: '%s | Boilerplate',
  },
  description: 'Next.js + Styled Components + TypeScript Boilerplate',
  themeColor: '#a2aecd',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
