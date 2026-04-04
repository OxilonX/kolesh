"use client";
//shadcn imports
import { Card, CardContent } from "@/components/ui/card";
//next imports
import Image from "next/image";
//contexts imports
import { useSessionContext } from "@/app/providers";
//utils imports
import axios from "axios";
import WeatherCard from "./DashboardWeatherCard";
//local comps imports
import Loader from "../Loader";

const DashboardSecondaryInfos = () => {
  const { session, isPending } = useSessionContext();
  const countryCode = session?.user?.country;
  const getTodayWeather = async (countryCode: string) => {
    if (!countryCode) return;
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: { key: API_KEY, q: countryCode },
        },
      );

      const data = response.data.current;
      return {
        temp: data.temp_c,
        condition: data.condition.text,
        icon: `https:${data.condition.icon}`,
      };
    } catch (error) {
      console.error(error);
    }
  };
  if (isPending) return <Loader />;

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
