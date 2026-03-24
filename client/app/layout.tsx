import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kolesh Dashboard",
  description: "Your personal fully customizable dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col dark">{children}</body>
    </html>
  );
}
