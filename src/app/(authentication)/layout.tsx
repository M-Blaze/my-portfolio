import '../globals.css'
import { Inter } from 'next/font/google'

import { Providers } from "../providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Moulik rai - Software Developer Engineer',
  description: 'Portfolio of a software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen">
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
