import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Multi-Format AI Studio',
  description: 'Generate AI images in multiple formats',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
