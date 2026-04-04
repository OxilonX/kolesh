"use client";
//shadcn imports
import { Card, CardContent } from "@/components/ui/card";
//next imports
import Image from "next/image";
//contexts imports
import { useSessionContext } from "@/app/providers";
//types imports
import { userType } from "@/types/globalTypes";
//utils imports
import axios from "axios";
import WeatherCard from "./DashboardWeatherCard";
//local comps imports
import Loader from "../Loader";
import { useEffect, useState, useCallback } from "react";
import { toast } from "sonner";
import { weatherStateType } from "@/types/dashboardTypes";

const DashboardSecondaryInfos = () => {
  const { session, isPending } = useSessionContext();
  const user = session?.user as userType | undefined;
  const countryCode = user?.country;
  const [weatherInfo, setWeatherInfo] = useState<weatherStateType>({
    temp: "",
    condition: "",
    icon: "",
  });
  const getTodayWeather = useCallback(async (code: string) => {
    if (!code) return;
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        { params: { key: API_KEY, q: code } },
      );
      const data = response.data.current;
      if (!data)
        return toast.error(
          "Couldn't update weather due to an Internal server error.",
          {
            position: "bottom-right",
          },
        );
      return {
        temp: data.temp_c,
        condition: data.condition.text,
        icon: `https:${data.condition.icon}`,
      };
    } catch {
      toast.error("Couldn't update weather due to an Internal server error.", {
        position: "bottom-right",
      });
    }
  }, []);
  useEffect((): any => {
    if (!countryCode)
      return toast.message(
        "Select a country from the flag in the navbar and refresh to update weather.",
        { position: "bottom-right" },
      );
    const fetchWeather = async () => {
      const weather = await getTodayWeather(countryCode);
      if (weather) setWeatherInfo(weather as weatherStateType);
    };
    fetchWeather();
  }, [countryCode, getTodayWeather]);

  if (isPending) return <Loader />;

  return (
    <Card className="w-full bg-card-secondary border-none shadow-none overflow-hidden">
      <CardContent className="p-4 pr-6 h-full ">
        <div className="flex justify-between items-center h-full  gap-4">
          <div className="relative size-35 shrink-0   ">
            <div className="absolute inset-0 bg-black/10 dark:bg-yellow-400/15 rounded-full blur-2xl " />
            {weatherInfo.icon ? (
              <Image
                src={weatherInfo.icon}
                alt="Weather"
                fill
                sizes="80px"
                priority
                className="object-contain relative z-10 drop-shadow-xl animate-in fade-in zoom-in duration-1000"
              />
            ) : (
              <Image
                src={"/images/weather_default.webp"}
                alt="Weather"
                fill
                sizes="100px"
                priority
                className="object-contain relative z-10 drop-shadow-xl animate-in fade-in zoom-in duration-1000"
              />
            )}
          </div>
          <WeatherCard
            countryCode={countryCode as string}
            weatherData={weatherInfo}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardSecondaryInfos;
