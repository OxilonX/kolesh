//shadcn imports
import { Card, CardContent } from "@/components/ui/card";
//next imports
import Image from "next/image";
//icons imports
import WeatherCard from "./DashboardWeatherCard";
const DashboardSecondaryInfos = () => {
  return (
    <Card className="w-full bg-card-secondary border-none shadow-none overflow-hidden">
      <CardContent className="p-4">
        <div className="flex justify-between items-center  gap-4">
          <div className="relative size-40 shrink-0">
            <div className="absolute inset-0 bg-black/10 dark:bg-yellow-400/15 rounded-full blur-2xl" />
            <Image
              src="/images/weather_default.webp"
              alt="Weather"
              fill
              sizes="100px"
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
