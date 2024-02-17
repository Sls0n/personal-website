import "@/styles/globals.css"

import { Onest } from "next/font/google"

import { TRPCReactProvider } from "@/trpc/react"

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata = {
  title: "Personal site | Slson",
  description: "Personal site of Slson.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen font-sans antialiased ${onest.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
