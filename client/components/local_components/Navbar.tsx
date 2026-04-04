"use client";
//next imports
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
//shadcn imports
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  IconLayoutDashboard,
  IconMessages,
  IconTargetArrow,
  IconSettings,
  IconFlag,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
//local comps imports
import SelectLanguage from "./SelectLanguage";
import ThemeToggle from "./ThemeToggle";
import Loader from "./Loader";
//utils imports
import axios from "axios";
import countryList from "@/utils/getCountries";
import { BASE_URL } from "@/utils/getBaseUrl";
//contexts imports
import { useSessionContext } from "@/app/providers";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { userType } from "@/types/globalTypes";
export default function Navbar() {
  const { session, isPending } = useSessionContext();
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Algeria",
    code: "DZ",
  });
  const user: userType | undefined = session?.user;
  const pathname = usePathname();
  const navItems = [
    { name: "Dashboard", href: "/", icon: IconLayoutDashboard, value: "home" },
    { name: "Goals", href: "/goals", icon: IconTargetArrow, value: "goals" },
    { name: "Chat", href: "/chat", icon: IconMessages, value: "chat" },
    {
      name: "Settings",
      href: "/settings",
      icon: IconSettings,
      value: "settings",
    },
  ];
  useEffect(() => {
    if (isPending) return;
    const countryCode = user?.country;
    if (countryCode)
      setSelectedCountry((prev) => ({ ...prev, code: countryCode }));
  }, [session]);
  const updateCountry = async (newCode: string) => {
    if (!session?.user?.id) {
      return toast.error("Login first please.", { position: "bottom-left" });
    }

    const countryObj = countryList.find((c) => c.code === newCode);
    if (!countryObj) return;

    try {
      const response = await axios.put(
        `${BASE_URL}/users/country`,
        {
          country: newCode,
        },
        {
          withCredentials: true,
        },
      );
      if (!response)
        return toast.error("Country update failed", {
          position: "bottom-left",
        });
      setSelectedCountry(countryObj);

      return toast.success("Country updated successfully", {
        position: "bottom-left",
      });
    } catch (error) {
      console.error(error);
      toast.error("Update country failed.", { position: "bottom-right" });
    }
  };
  if (isPending) return <Loader />;
  return (
    <nav className="flex flex-col gap-4 p-4 h-full w-full bg-transparent">
      <div className="flex items-center justify-between gap-2 ">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} aria-label="Flag">
              <IconFlag />
            </Button>
          </DialogTrigger>
          <DialogContent title="countries" className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit Country</DialogTitle>
              <DialogDescription>Update your country here.</DialogDescription>
            </DialogHeader>
            <Select value={selectedCountry.code} onValueChange={updateCountry}>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="Select a Country">
                  {selectedCountry.code}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Countries</SelectLabel>
                  {countryList.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </DialogContent>
        </Dialog>
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
