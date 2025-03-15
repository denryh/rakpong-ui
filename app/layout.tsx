import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/rakpong/mobile-menu";

const montSerrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RAKPONG",
  description: "RAKSUL's Pingpong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montSerrat.variable} antialiased`}
      >
        <MobileMenu />
        {children}
      </body>
    </html>
  );
}
