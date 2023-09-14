import StyledComponentsRegistry from '@/libs/registry'
import type { Metadata } from 'next'

import { Providers } from './providers'

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
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
