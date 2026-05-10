import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from '@/components/ThemeProvider'
import type { Metadata } from 'next'

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
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >          
        <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}