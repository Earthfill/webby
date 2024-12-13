import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'
import NavLinks from "@/components/NavLinks";
import Footer from "@/components/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
// src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Tomorrow Health",
  description: "We're building technology that improves the way home-based care is ordered, delivered, and paid for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavLinks />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
