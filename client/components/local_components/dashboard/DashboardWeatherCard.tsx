import { weatherStateType } from "@/types/dashboardTypes";

const WeatherCard = ({
  countryCode,
  weatherData,
}: {
  countryCode: string;
  weatherData: weatherStateType;
}) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/40 leading-none mb-1">
          Today • {countryCode}
        </h2>

        <div className="flex items-start">
          <span className="text-6xl font-black tracking-tighter text-foreground leading-[0.8]">
            {weatherData.temp}
          </span>
          <span className="text-2xl font-bold text-primary ml-0.5">°</span>
        </div>

        <p className="text-[0.5rem] mr-[10%] text-center capitalize text-muted-foreground mt-2 ">
          {weatherData.condition}
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
