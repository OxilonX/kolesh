import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
//local comps imports

import { ThemeProvider } from "@/contexts/ThemeProvider";

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefin.variable} h-full antialiased dark`}
    >
      <body className="h-screen w-full overflow-hidden bg-background">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
