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
      <head>
        <link rel="icon" href="icon.png" sizes="any" />
      </head>
      <body className={`${roboto.className} w-screen h-fit bg-[#141414] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
