import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/Theme/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book store',
  description: 'Generated by create next app',
  authors: [{ name: 'Dwarves Foundation', url: 'https://dwarves.foundation/' }],
  icons: '/public/df-logo.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full dark:h-full bg-slate-50 dark:bg-slate-900`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}{' '}
        </ThemeProvider>
      </body>
    </html>
  )
}
