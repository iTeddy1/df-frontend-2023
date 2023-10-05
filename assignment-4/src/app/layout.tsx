import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/Theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book store',
  description: 'Generated by create next app',
  authors: [{ name: 'Dwarves Foundation', url: 'https://dwarves.foundation/' }],
  icons: '/src/app/df-logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}{' '}
        </ThemeProvider>
      </body>
    </html>
  )
}
