import Chatbot from "./components/chatbot"
import Navbar from "./components/Navbar"
import "./globals.css"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata = {
  title: `Dirane • Portfolio`,
  description: "Portfolio de développeur et designer d'applications",
  icons: {
    icon: '/dirane-logo.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${orbitron.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  )
}