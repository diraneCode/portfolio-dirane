import type { Metadata, Viewport } from "next"
import { Poppins, Caveat_Brush, Geist_Mono } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { ReactQueryProvider } from "@/providers/ReactQueryProvider"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import Chatbot from "./components/chatbot"
import { site } from "@/lib/site"

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

const brush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-brush",
  display: "swap",
})

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const fullTitle = `${site.name} — ${site.role}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: fullTitle,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: fullTitle,
    description: site.description,
    firstName: "Dirane",
    lastName: "Mekem",
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: site.description,
    creator: "@dirane_joker",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: { telephone: false, address: false, email: false },
}

export const viewport: Viewport = {
  themeColor: "#121212",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Dirane",
      familyName: "Mekem",
      jobTitle: site.role,
      description: site.description,
      url: site.url,
      image: `${site.url}/dirane-square.png`,
      email: `mailto:${site.email}`,
      telephone: `+${site.phoneRaw}`,
      address: { "@type": "PostalAddress", addressLocality: "Douala", addressCountry: "CM" },
      knowsAbout: ["React", "Next.js", "React Native", "TypeScript", "Supabase", "UI/UX Design", "Figma", "Automatisation", "Intelligence artificielle", "Création de contenu tech"],
      sameAs: Object.values(site.socials),
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — Portfolio`,
      description: site.description,
      inLanguage: "fr-FR",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} — Développement web, mobile & UI/UX Design`,
      url: site.url,
      image: `${site.url}/opengraph-image`,
      telephone: `+${site.phoneRaw}`,
      email: site.email,
      areaServed: ["Cameroun", "Afrique", "À distance"],
      address: { "@type": "PostalAddress", addressLocality: "Douala", addressCountry: "CM" },
      founder: { "@id": `${site.url}/#person` },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Développement web & mobile" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "IA & Automatisation" } },
      ],
    },
    {
      "@type": "Blog",
      "@id": `${site.url}/blog#blog`,
      url: `${site.url}/blog`,
      name: `Blog de ${site.name}`,
      inLanguage: "fr-FR",
      author: { "@id": `${site.url}/#person` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sans.variable} ${brush.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-night font-sans text-paper antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <a href="#contenu" className="skip-link">
          Aller au contenu
        </a>
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <Toaster richColors position="top-center" closeButton />
        </ReactQueryProvider>
      </body>
    </html>
  )
}
