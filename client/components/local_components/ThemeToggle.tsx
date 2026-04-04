"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { toast } from "sonner";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-8 w-14" />;
  const isDark = theme === "dark";
  const handleThemeToggleBtnClick = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/api/settings/theme`, {
        data: isDark,
      });
      if (!response)
        return toast.warning("Failed to switch theme, Internal server error.", {
          position: "bottom-right",
        });
      setTheme(isDark ? "light" : "dark");
    } catch {
      toast.error("Failed to switch theme.", { position: "bottom-right" });
    }
  };
  return (
    <button
      onClick={handleThemeToggleBtnClick}
      className={cn(
        "cursor-pointer relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ",
        isDark ? "bg-primary/20" : "bg-muted",
      )}
      aria-label="Toggle Theme"
    >
      <span
        className={cn(
          "flex h-6 w-6 items-center justify-center rounded-full bg-background shadow-md transition-transform duration-300 ease-in-out",
          isDark ? "translate-x-7" : "translate-x-1",
        )}
      >
        {isDark ? (
          <Moon className="size-3.5 text-primary animate-in zoom-in duration-300" />
        ) : (
          <Sun className="size-3.5 text-amber-500 animate-in zoom-in duration-300" />
        )}
      </span>
    </button>
  );
}
