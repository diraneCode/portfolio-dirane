import { Toaster } from "sonner"
import Chatbot from "./components/chatbot"
import Navbar from "./components/Navbar"
import "./globals.css"
import { Nunito } from "next/font/google"
import { Metadata } from "next";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider"

const orbitron = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  //   title: `Dirane • Portfolio`,
  //   author: "Dirane",
  //   description: "Software Engineer - UI/UX Designer",
  //   icons: {
  //     icon: '/dirane-logo.ico'
  //   },
  // },
  other: {
    "script:type": "application/ld+json",
    "script:innerHTML": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dirane",
      title: "Dirane • Portfolio",
      jobTitle: "Software Engineer - UI/UX Designer",
      url: "https://www.dirane.cme",
      sameAs: [
        "https://github.com/diranecode",
        "https://linkedin.com/in/dirane-mekem-63b588273",
      ],
    }),
  },
};

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
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Chatbot />
          <Toaster richColors position="top-center" closeButton={true} swipeDirections={["top"]} />
        </ReactQueryProvider>
      </body>
    </html>
  )
}