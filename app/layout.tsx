import type { Metadata } from 'next'
import { Outfit, Space_Grotesk } from 'next/font/google'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Evolbiz | 360° Digital Marketing & Web App Development Company',
  description: 'Evolbiz was founded in 2021 with an objective to provide top quality, affordable, one of a kind, 360° digital marketing and software business solutions globally. Offices in UAE and India.',
  keywords: 'digital marketing, 360 digital marketing, web app development, full stack developers, database design, system integrations, cloud consulting, e-commerce, UAE, India',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  )
}


