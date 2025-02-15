import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <main>
        {children}
        <Footer/>
        </main>
        </body>
    </html>
  )
}
