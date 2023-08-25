import './globals.css'
import { Toaster } from '@/components/ui/toaster'

export const metadata = {
  metadataBase: new URL(`${process.env.HOST_URL}`),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='selection:text-white selection:bg-purple-500'>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
