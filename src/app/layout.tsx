import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "../components/providers"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/utils"

import "./globals.css"
import { ClerkLoading, ClerkProvider } from "@clerk/nextjs"
import Background from "./resources/Background"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Ping.it",
  description: "Created by Arun",
  icons: [{ rel: "icon", url: "/brand-asset-profile-picture.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="font-sans bg-inherit  text-brand-950 antialiased">
          <Background/>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
