"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  IconLayoutDashboard,
  IconMessages,
  IconTargetArrow,
  IconSettings,
  IconFlag,
} from "@tabler/icons-react";
//shadcn imports
import { Button } from "../ui/button";
//local comps imports
import SelectLanguage from "./SelectLanguage";
import ThemeToggle from "./ThemeToggle";
export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: IconLayoutDashboard, value: "home" },
    { name: "Chat", href: "/chat", icon: IconMessages, value: "chat" },
    { name: "Goals", href: "/goals", icon: IconTargetArrow, value: "goals" },
    {
      name: "Settings",
      href: "/settings",
      icon: IconSettings,
      value: "settings",
    },
  ];

  return (
    <nav className="flex flex-col gap-4 p-4 h-full w-full bg-transparent">
      <div className="flex items-center justify-between gap-2 ">
        <Button variant={"outline"} aria-label="Flag">
          <IconFlag />
        </Button>
        <div className="flex items-center gap-2">
          <SelectLanguage />
          <ThemeToggle />
        </div>
      </div>
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.value}
            href={item.href}
            className={cn(
              "h-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
              "dark:bg-muted/40 bg-muted-foreground/15 text-muted-foreground hover:bg-muted-foreground/30 dark:hover:bg-muted-foreground/50 ",
              isActive &&
                "bg-primary dark:bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/60 dark:hover:bg-primary/80",
            )}
          >
            <item.icon className="size-5" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
