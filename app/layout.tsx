import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/ActiveSectionContext'

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
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:p-36`}
      >
        <div className="bg-[#e2f3fb] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10" />
        <div className="bg-[#eed7fb] absolute top-[-1rem] left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:[-28rem] xl-[-15rem] 2xl:left-[-5rem] -z-10" />
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
