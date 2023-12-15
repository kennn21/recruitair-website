import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

import { Toaster } from 'sonner';

import { cn } from "@/lib/utils"
import { ThemeProvider } from '@/components/theme-provider'
import { dark } from '@clerk/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Recruitment Website',
  description: 'An AI recruitment website built with openAI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.className,
            'flex justify-center',
            'scrollbar-hide',
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
