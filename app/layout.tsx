import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ['400', '500'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: "Ad",
  description: "Ad app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased min-h-screen max-w-6xl mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
