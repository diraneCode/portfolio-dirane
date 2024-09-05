import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ 
  subsets: ['vietnamese'],
  weight: '100'

 });

export const metadata: Metadata = {
  title: "DiraneCode",
  description: "Portfolio Developpeur web",
  icons: 'icon.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${roboto.className} min-w-screen h-fit bg-[#141414] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
