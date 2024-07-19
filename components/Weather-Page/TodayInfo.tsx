import React from "react";
import { FaArrowRight } from "react-icons/fa";

import gettingCurrentConditions from "@/lib/getCurrentConditions";

gettingCurrentConditions;
const TodayInfo = ({ weatherInfo }: { weatherInfo: any }) => {
  const todayForecast = weatherInfo;

  if (!todayForecast) {
    return (
      <section className="flex h-fit w-full flex-col space-y-6 overflow-hidden xl:h-auto xl:gap-6 xl:space-y-0">
        <h1 className="text-3xl">
          Today&apos;s{" "}
          <span className="text-brandDark dark:text-brandLight">Forecast</span>
        </h1>

        <section className="hideScroll background h-full w-full overflow-scroll rounded-3xl border border-black dark:border-white">
          <section className="flex h-48 w-full items-center justify-center text-2xl xl:h-full xs:text-xl">
            <h1>No weather info available</h1>
          </section>
        </section>
      </section>
    );
  }

  const accurateDate = new Date();

  const timeStamps = todayForecast.hourly.time;
  const hourWeather = todayForecast.hourly.temperature_2m;
  const weatherCode = todayForecast.hourly.weathercode;

  return (
    <section className="flex h-fit w-full flex-col space-y-6 overflow-hidden rounded-b-3xl xl:h-auto xl:gap-6 xl:space-y-0">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl">
          Today&apos;s{" "}
          <span className="text-brandDark dark:text-brandLight">Forecast</span>
        </h1>
        <span className="flex items-center gap-2 text-base">
          slide <FaArrowRight className="text-brandDark dark:text-brandLight" />
        </span>
      </div>

      <section className="hideScroll background h-full w-full overflow-scroll rounded-3xl border border-black dark:border-white">
        <section className="flex h-48 w-fit gap-4 px-4 xl:h-full">
          {timeStamps.map((time: any, index: number) => {
            const splitDate = timeStamps[index].split("T");
            const furtherSplitDate = splitDate[0].split("-");
            const furtherSplitTime = splitDate[1].split(":");

            if (
              (furtherSplitDate[2] < accurateDate.getDate() &&
                furtherSplitDate[1] == accurateDate.getMonth() + 1) ||
              furtherSplitDate[2] > accurateDate.getDate() + 1
            ) {
              return;
            } else if (
              (furtherSplitDate[2] == accurateDate.getDate() &&
                furtherSplitTime[0] < accurateDate.getHours()) ||
              furtherSplitDate[2] > accurateDate.getDate() + 1
            ) {
              return;
            }

            return (
              <div
                key={time}
                className="flex h-full w-32 flex-col items-center justify-around text-black dark:text-white"
              >
                <h1 className="text-base">
                  {(furtherSplitTime[0] == accurateDate.getHours() &&
                  furtherSplitDate[2] == accurateDate.getDate()
                    ? "Now"
                    : splitDate[1]) +
                    (furtherSplitTime[0] > 11 &&
                    furtherSplitTime[0] != accurateDate.getHours()
                      ? "PM"
                      : furtherSplitTime[0] <= 11 &&
                        furtherSplitTime[0] != accurateDate.getHours()
                      ? "AM"
                      : "")}
                </h1>
                <h1 className="text-center text-lg">
                  {gettingCurrentConditions(weatherCode[index])}
                </h1>
                <h1 className="text-xl ">{hourWeather[index] + "°C"}</h1>
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default TodayInfo;
