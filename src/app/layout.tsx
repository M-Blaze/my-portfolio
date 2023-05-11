import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Moulik rai - Software Developer Engineer',
  description: 'Portfolio of a software develoepr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
