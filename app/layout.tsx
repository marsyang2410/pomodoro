import "./globals.css"
import { Lato } from "next/font/google"
import { Navbar } from "@/components/Navbar"
import type React from "react"

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Pomodoro Web App",
  description: "Boost your productivity with our Pomodoro timer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

