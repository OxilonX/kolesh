import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
//local comps imports
import Navbar from "@/components/local_components/Navbar";
import Socials from "@/components/local_components/Socials";

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
    <html lang="en" className={`${josefin.variable} h-full antialiased dark`}>
      <body className="h-screen w-full overflow-hidden bg-background">
        <div className="grid grid-cols-[250px_1fr] gap-6 p-6 h-full w-full box-border">
          <aside className="grid grid-cols-1 grid-rows-[1fr_auto] gap-6 h-full overflow-hidden">
            <nav className=" border rounded-2xl bg-card/50 ">
              <Navbar />
            </nav>

            <div className="border rounded-2xl bg-card/50 p-4">
              <Socials />
            </div>
          </aside>

          <main className="h-full overflow-hidden border rounded-2xl bg-card/30 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
