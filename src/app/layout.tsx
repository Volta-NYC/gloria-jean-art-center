import "./globals.css"
import Navbar from "@/lib/components/layout/navbar"
import Footer from "@/lib/components/layout/footer"

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
      <body className="min-h-screen flex flex-col bg-[#fff4f8] text-[#21131a]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
