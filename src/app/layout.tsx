import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./global.css"
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'
import toast, { ToastBar, Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PDF Interaction Application',
  description: 'Interact with PDFs using AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>
            <Toaster
                position='top-right'
                gutter={8}
              />
            {children}
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  )
}
