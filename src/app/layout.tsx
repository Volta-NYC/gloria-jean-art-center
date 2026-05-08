import "./globals.css"
import { Cormorant_Garamond, Nunito } from "next/font/google"
import Navbar from "@/lib/components/layout/navbar"
import Footer from "@/lib/components/layout/footer"

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
})

const bodyFont = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
})

export const metadata = {
  title: "Gloria Jean Community Art Center | Private Event Venue",
  description:
    "A warm, inviting private event venue for birthdays, baby showers, dinner parties, repasts, meetings, brunches, photo sessions, and meaningful celebrations.",
  icons: {
    icon: "/images/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} min-h-screen flex flex-col bg-[#fff4f8] font-body text-[#21131a]`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
