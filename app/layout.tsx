import type { Metadata } from 'next'
import { AppDownloadSection, BookBanner, Footer, NavBar, Providers, ScrollToTopButton } from '@/components'
import './globals.css'


export const metadata: Metadata = {
  title: 'Rent a car',
  description: 'Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <BookBanner />
          <AppDownloadSection />
          <ScrollToTopButton />
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
