import SelectLanguage from "../SelectLanguage";
import ThemeToggle from "../ThemeToggle";
//shadcn imports
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
//next imports
import Image from "next/image";
//icons imports
import { IconFlag } from "@tabler/icons-react";
import WeatherCard from "./WeatherCard";
const DashboardSecondaryInfos = () => {
  return (
    <Card className="w-full bg-card-secondary border-none shadow-none overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <Button variant={"outline"}>
            <IconFlag />
          </Button>
          <div className="flex items-center gap-2">
            <SelectLanguage />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex justify-between items-center  gap-4">
          <div className="relative size-40 shrink-0">
            <div className="absolute inset-0 bg-black/10 dark:bg-yellow-400/15 rounded-full blur-2xl" />
            <Image
              src="/images/weather_default.webp"
              alt="Weather"
              fill
              priority
              className="object-contain relative z-10 drop-shadow-xl animate-in fade-in zoom-in duration-1000"
            />
          </div>

          <WeatherCard />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSecondaryInfos;
