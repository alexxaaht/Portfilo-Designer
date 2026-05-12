import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from '@/components/ThemeProvider'
import MotionProvider from '@/components/MotionProvider'
import type { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Elvin Garaev - Product Designer',
  description: 'Digital Product Designer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <MotionProvider>
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
            <Analytics />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
