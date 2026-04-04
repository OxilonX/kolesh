"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { BASE_URL } from "@/utils/getBaseUrl";
import { toast } from "sonner";
import { useSessionContext } from "@/app/providers";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default function ThemeToggle() {
  const { session, isPending: sessionPending } = useSessionContext();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (sessionPending) return;

    if (!session) {
      setMounted(true);
      return;
    }

    const fetchTheme = async () => {
      try {
        const response = await api.get("/settings/theme");
        const mode = response.data?.mode || "light";
        setIsDark(mode === "dark");
        setTheme(mode);
      } finally {
        setMounted(true);
      }
    };
    fetchTheme();
  }, [session, sessionPending, setTheme]);

  if (!mounted) {
    return <div className="h-8 w-14 animate-pulse rounded-full bg-muted" />;
  }

  const handleThemeToggleBtnClick = async () => {
    if (!session) {
      toast.error("Please sign in to change theme", {
        position: "bottom-right",
      });
      return;
    }
    try {
      const response = await api.put("/settings/theme", { data: isDark });
      if (!response)
        return toast.warning("Failed to switch theme, Internal server error.", {
          position: "bottom-right",
        });
      setTheme(isDark ? "light" : "dark");
      setIsDark(!isDark);
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
