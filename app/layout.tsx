import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import HelpFloatingButton from "@/components/help-floating-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RebusAI - The Best All-in-One AI Business Platform for Local Commerce",
  description:
    "Replace 10+ tools with one platform. Get featured in Chamber marketplaces. Activate community-powered referrals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
        <HelpFloatingButton />
        <Toaster />
      </body>
    </html>
  )
}
