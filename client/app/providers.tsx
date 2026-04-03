"use client";

import { createContext, useContext, ReactNode } from "react";

import { ThemeProvider } from "@/contexts/ThemeProvider";

import { authClient } from "@/lib/auth-client";

const { useSession } = authClient;

const SessionContext = createContext<{
  session: ReturnType<typeof useSession>["data"];
  isPending: boolean;
}>({
  session: null,
  isPending: true,
});

export const useSessionContext = () => useContext(SessionContext);

function SessionProvider({ children }: { children: ReactNode }) {
  const { data: session, isPending } = useSession();

  return (
    <SessionContext.Provider value={{ session, isPending }}>
      {children}
    </SessionContext.Provider>
  );
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </SessionProvider>
  );
}
