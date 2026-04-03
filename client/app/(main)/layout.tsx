import React from "react";
import Navbar from "@/components/local_components/Navbar";
import Socials from "@/components/local_components/Socials";
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
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
  );
};

export default layout;
