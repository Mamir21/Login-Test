import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ["300", "400", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Tracker",
  description: "A simple inventory tracker",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}