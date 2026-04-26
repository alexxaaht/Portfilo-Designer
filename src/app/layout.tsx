import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'

export const metadata: Metadata = {
  title:       'Elvin Garaev — Product Designer',
  description: '5+ years building digital products for 2M+ users across Fintech, SaaS, CRM, Crypto, AI and marketplace.',
  keywords:    ['product designer', 'UX designer', 'UI designer', 'portfolio'],
  authors:     [{ name: 'Elvin Garaev' }],
  openGraph: {
    title:       'Elvin Garaev — Product Designer',
    description: '5+ years building digital products for 2M+ users.',
    type:        'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
