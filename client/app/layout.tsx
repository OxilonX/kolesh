import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
//local comps imports
import Navbar from "@/components/local_components/Navbar";
import Socials from "@/components/local_components/Socials";
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
        <ThemeProvider>
          <div className="flex flex-col h-full w-full p-6 box-border">
            <div className="grid grid-cols-[250px_1fr] gap-6 flex-1 min-h-0">
              <aside className="flex flex-col gap-6 h-full">
                <nav className="border rounded-2xl bg-card/30 flex-1 min-h-0 overflow-y-auto no-scrollbar">
                  <Navbar />
                </nav>

                <div className="border rounded-2xl bg-card/30 p-4">
                  <Socials />
                </div>
              </aside>
              <section className="h-full border rounded-2xl bg-card/30 overflow-hidden">
                {children}
              </section>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
