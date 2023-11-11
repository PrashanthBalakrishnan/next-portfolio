import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'
import ThemeContextProvider from '@/context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Prahanth's Portfolio`,
  description: `Prashanth is a fullstack developer with 3 years of experience in web development. He is passionate about building websites and web applications.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-10  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Analytics />

            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
