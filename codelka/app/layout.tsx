import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codelka',
  description: 'Visit Codelka.com and view all information about us and our games.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
