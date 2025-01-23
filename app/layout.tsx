import Navbar from "./components/Navbar"
import "./globals.css"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({subsets:["latin"]})

export const metadata = {
  title: `Dirane • Portfolio`,
  description: "Portfolio de développeur et designer d'applications",
  icons: {
    icon:'/dirane-logo.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${orbitron.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

