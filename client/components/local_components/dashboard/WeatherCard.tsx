const WeatherCard = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-[10px] uppercase tracking-widest font-black text-muted-foreground/40 leading-none mb-1">
          Today • Adrar
        </h2>

        <div className="flex items-start">
          <span className="text-6xl font-black tracking-tighter text-foreground leading-[0.8]">
            23
          </span>
          <span className="text-2xl font-bold text-primary ml-0.5">°</span>
        </div>

        <p className="text-[0.5rem] mr-[10%] text-center   text-muted-foreground mt-2 ">
          Thunderclouds
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
