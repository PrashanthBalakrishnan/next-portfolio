import Header from '@/components/Header'
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-28 sm:pt-36">
      <Header />
      {children}
    </div>
  )
}
