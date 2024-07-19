import React from "react";
import { FaMapMarkerAlt, FaSun, FaWind } from "react-icons/fa";

import gettingCurrentConditions from "@/lib/getCurrentConditions";

const QuickInfo = ({ weatherInfo }: { weatherInfo: any }) => {
  const weatherData = weatherInfo;
  const [confirmed, setConfirmed] = React.useState(false);

  if (!weatherData) {
    return (
      <section className="grid w-full grid-cols-2 gap-6 text-white xl:grid-cols-3 xs:grid-cols-1">
        <section className="col-span-2 flex h-44 flex-col items-center justify-evenly rounded-3xl border border-black dark:border-white md:h-48 md:flex-row xl:col-span-1 xl:h-full xl:flex-col xs:col-span-1">
          <h1 id="currentLocation" className="flex items-center gap-2 text-xl">
            - <FaMapMarkerAlt className="text-brandDark dark:text-brandLight" />{" "}
            -
          </h1>
          <h1 id="currentWeather" className="text-5xl sm:text-7xl">
            - -
          </h1>
          <h1 id="currentCondition" className="text-center text-xl">
            - -
          </h1>
        </section>

        <section className="flex h-44 flex-col items-center justify-evenly rounded-3xl border border-black dark:border-white md:h-48 xl:h-full">
          <h1 className="flex items-center gap-2 text-xl">
            - - <FaWind className="text-brandDark dark:text-brandLight" />
          </h1>
          <h1 id="windSpeed" className="text-5xl sm:text-7xl">
            - -
          </h1>
          <h1 className="text-xl">- -</h1>
        </section>

        <section className="flex h-44 flex-col items-center justify-evenly rounded-3xl border shadow-2xl md:h-48 xl:h-full">
          <h1 className="flex items-center gap-2 text-xl">
            <FaSun /> - -
          </h1>
          <h1 id="uvIndex" className="text-7xl sm:text-5xl">
            - -
          </h1>
          <h1 id="exposureLevel" className="text-xl">
            - -
          </h1>
        </section>
      </section>
    );
  }

  if (weatherData) {
    if (confirmed === false) {
      setConfirmed(true);
    }
  }

  const location = weatherData.timezone.split("/");

  return (
    <section className="grid w-full grid-cols-2 gap-6 text-black dark:text-white xl:grid-cols-3 xs:grid-cols-1">
      <section className="col-span-2 flex h-44 flex-col items-center justify-evenly rounded-3xl border border-black dark:border-white md:h-48 md:flex-row xl:col-span-1 xl:h-full xl:flex-col xs:col-span-1">
        <h1 id="currentLocation" className="flex items-center gap-2 text-xl">
          <FaMapMarkerAlt className="text-brandDark dark:text-brandLight" />
          {location[1]}
        </h1>
        <h1 id="currentWeather" className="text-5xl sm:text-7xl">
          {weatherData.current_weather.temperature + "°C"}
        </h1>
        <h1 id="currentCondition" className="text-center text-xl">
          {gettingCurrentConditions(weatherData.current_weather.weathercode)}
        </h1>
      </section>

      <section className="flex h-44 flex-col items-center justify-evenly rounded-3xl border border-black dark:border-white md:h-48 xl:h-full">
        <h1 className="flex items-center gap-2 text-xl">
          Wind <FaWind className="text-brandDark dark:text-brandLight" />
        </h1>
        <h1 id="windSpeed" className="text-5xl sm:text-7xl">
          {weatherData.current_weather.windspeed}
        </h1>
        <h1 className="text-xl">m / s</h1>
      </section>

      <section className="flex h-44 flex-col items-center justify-evenly rounded-3xl border shadow-2xl md:h-48 xl:h-full">
        <h1 className="flex items-center gap-2 text-xl">
          <FaSun className="text-brandDark dark:text-brandLight" /> U.V Index
        </h1>
        <h1 id="uvIndex" className="text-5xl sm:text-7xl">
          {weatherData.daily.uv_index_max[0]}
        </h1>
        <h1 id="exposureLevel" className="text-xl">
          {weatherData.daily.uv_index_max[0] <= 2
            ? "Low"
            : weatherData.daily.uv_index_max[0] <= 5
            ? "Moderate"
            : weatherData.daily.uv_index_max[0] <= 7
            ? "High"
            : weatherData.daily.uv_index_max[0] <= 10
            ? "Very high"
            : "Extreme"}
        </h1>
      </section>
    </section>
  );
};

export default QuickInfo;
