import React from "react";

import gettingCurrentConditions from "@/lib/getCurrentConditions";

const DayForecast = ({ weatherInfo }: { weatherInfo: any }) => {
  // This function takes the weather data and renders the day forecast component
  const dayForecast = weatherInfo;

  if (!dayForecast) {
    // If the weather data is not available, return a section with a message
    return (
      <section className="background flex h-full flex-col gap-6 rounded-3xl border border-black px-7 py-7 text-black dark:border-white dark:text-white xl:w-[30%]">
        <h1 className="text-center text-3xl">
          Your 7-day{" "}
          <span className="text-brandDark dark:text-brandLight">forecast</span>
        </h1>

        <section
          id="dayForecasts2"
          className="flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden"
        >
          <h1 className="text-2xl">No weather info available</h1>
        </section>
      </section>
    );
  }

  // Get the current date
  const accurateDate = new Date();

  // Extract the dates, weather codes, min and max temperatures from the weather data
  const dates = dayForecast.daily.time;
  const weatherCodes = dayForecast.daily.weathercode;
  const minTemp = dayForecast.daily.temperature_2m_min;
  const maxTemp = dayForecast.daily.temperature_2m_max;

  // Render the day forecast component
  return (
    <section className="background flex h-full flex-col rounded-3xl border border-black p-5 text-black dark:border-white dark:text-white sm:p-7 xl:w-[30%]">
      <h1 className="text-center text-3xl">
        Your 7-day{" "}
        <span className="text-brandDark dark:text-brandLight">forecast</span>
      </h1>

      <section
        id="dayForecasts2"
        className="flex h-full w-full flex-col overflow-hidden"
      >
        {/* // Render a header with the columns for the day forecast */}
        <div className="flex h-20 w-full items-center justify-between xl:h-[20%]">
          <h1>Date</h1>
          <h1>condition</h1>
          <h1 className="text-center xs:w-min">temp°C (min-max)</h1>
        </div>

        {/* // Map the dates and render a row for each day */}
        {dates.map((date: any, index: number) => {
          // Split the date string to get the day and month
          const splitDate = date.split("-");

          return (
            // Render a row for each day with the date, condition and min-max temp
            <div
              key={date}
              className="flex h-20 w-full items-center justify-between border-t xl:h-[20%]"
            >
              <h1>
                {/* // If today, display "Today", otherwise display the date */}
                {splitDate[2] == accurateDate.getDate()
                  ? "Today"
                  : splitDate[2] + " / " + splitDate[1]}
              </h1>
              <h1>
                {
                  // Get the condition for the day using the weather codes
                  gettingCurrentConditions(weatherCodes[index])
                }
              </h1>
              <h1>
                {
                  // Display the min and max temperatures for the day
                  minTemp[index] + " - " + maxTemp[index]
                }
              </h1>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default DayForecast;
