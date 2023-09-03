import './globals.scss'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Header'
import Footer from './components/Footer'

const poppins = Poppins({ subsets: ['latin'], display: 'swap', weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'] })

export const metadata: Metadata = {
  title: 'AIB',
  description: 'Association Of International Businessmen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
