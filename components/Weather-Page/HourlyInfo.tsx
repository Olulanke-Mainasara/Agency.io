import React from "react";
import { FaArrowDown } from "react-icons/fa";

const HourlyInfo = ({ weatherInfo }: { weatherInfo: any }) => {
  const hourlyData = weatherInfo;

  if (!hourlyData) {
    return (
      <section className="flex h-fit w-full flex-col justify-between space-y-6 xl:gap-6 xl:space-y-0">
        <h1 className="text-3xl">
          Air{" "}
          <span className="text-brandDark dark:text-brandLight">
            Conditions
          </span>
        </h1>

        <section className="grid h-fit grid-cols-2 gap-6 md:grid-cols-3 xl:h-[80%] xl:grid-cols-4 2xl:grid-cols-5 xs:grid-cols-1">
          <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
            <h1 className="text-lg">Real Feel</h1>
            <h1 id="realFeel" className="allEM:text-2xl allT:text-xl text-3xl">
              - -
            </h1>
          </div>
          <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
            <h1 className="text-lg">Visibility</h1>
            <h1
              id="visibility"
              className="allEM:text-2xl allT:text-xl text-3xl"
            >
              - -
            </h1>
          </div>
          <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
            <h1 className="text-lg">Humidity</h1>
            <h1 id="humidity" className="allEM:text-2xl allT:text-xl text-3xl">
              - -
            </h1>
          </div>
          <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
            <h1 className="text-lg">Pressure</h1>
            <h1 id="pressure" className="allEM:text-2xl allT:text-xl text-3xl">
              - -
            </h1>
          </div>
          <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
            <h1 className="text-lg">Wind Direction</h1>
            <h1
              id="windDirection"
              className="allEM:text-2xl allT:text-xl text-3xl"
            >
              - -
            </h1>
          </div>
          <div className="allT:h-40 flex h-44 flex-col justify-center rounded-3xl border border-black p-4 dark:border-white">
            <h1 className="text-lg">Sunset</h1>
            <h1 id="sunset" className="allEM:text-2xl allT:text-xl text-3xl">
              - -
            </h1>
            <br />
            <h1 className="text-lg">Sunrise</h1>
            <h1 id="sunrise" className="allEM:text-2xl allT:text-xl text-3xl">
              - -
            </h1>
          </div>
        </section>
      </section>
    );
  }

  const accurateDate = new Date();

  const timeStamps = hourlyData.hourly.time;
  const realFeel = hourlyData.hourly.apparent_temperature;
  const visibility = hourlyData.hourly.visibility;
  const humidity = hourlyData.hourly.relativehumidity_2m;
  const pressure = hourlyData.hourly.pressure_msl;
  const windDirection = hourlyData.hourly.winddirection_80m;

  const sunrise = hourlyData.daily.sunrise;
  const sunset = hourlyData.daily.sunset;

  return (
    <section className="flex h-fit w-full flex-col justify-between space-y-6 xl:gap-6 xl:space-y-0">
      <div className="flex items-center justify-between gap-4 ">
        <h1 className="text-3xl">
          Air{" "}
          <span className="text-brandDark dark:text-brandLight">
            Conditions
          </span>
        </h1>
        <span className="flex items-center gap-2 text-base">
          scroll <FaArrowDown className="text-brandDark dark:text-brandLight" />
        </span>
      </div>

      <section className="grid h-fit grid-cols-2 gap-6 md:grid-cols-3 xl:h-[80%] xl:grid-cols-4 2xl:grid-cols-5 xs:grid-cols-1">
        {timeStamps.map((time: any, index: number) => {
          const splitDate = time.split("T");

          const furtherSplitDate = splitDate[0].split("-");
          const furtherSplitTime = splitDate[1].split(":");

          if (
            furtherSplitDate[2] == accurateDate.getDate() &&
            furtherSplitTime[0] == accurateDate.getHours()
          ) {
            return (
              <React.Fragment key={time}>
                <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
                  <h1 className="text-lg">Real Feel</h1>
                  <h1 id="realFeel" className="text-2xl sm:text-3xl xs:text-xl">
                    {realFeel[index] + "°C"}
                  </h1>
                </div>
                <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
                  <h1 className="text-lg">Visibility</h1>
                  <h1
                    id="visibility"
                    className="text-2xl sm:text-3xl xs:text-xl"
                  >
                    {visibility[index] / 1000 + "Km"}
                  </h1>
                </div>
                <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
                  <h1 className="text-lg">Humidity</h1>
                  <h1 id="humidity" className="text-2xl sm:text-3xl xs:text-xl">
                    {humidity[index] + "%"}
                  </h1>
                </div>
                <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
                  <h1 className="text-lg">Pressure</h1>
                  <h1 id="pressure" className="text-2xl sm:text-3xl xs:text-xl">
                    {pressure[index] + "hPa"}
                  </h1>
                </div>
                <div className="flex h-40 flex-col justify-end rounded-3xl border border-black p-4 dark:border-white md:min-h-[176px] xs:h-32">
                  <h1 className="text-lg">Wind Direction</h1>
                  <h1
                    id="windDirection"
                    className="text-2xl sm:text-3xl xs:text-xl"
                  >
                    {windDirection[index] + "°"}
                  </h1>
                </div>
              </React.Fragment>
            );
          }
        })}

        <div className="allT:h-40 flex h-44 flex-col justify-center rounded-3xl border border-black p-4 dark:border-white">
          <h1 className="text-lg">Sunset</h1>
          <h1 id="sunset" className="text-2xl sm:text-3xl xs:text-xl">
            {sunset.map((set: any) => {
              const splitDate = set.split("T");
              const furtherSplitDate = splitDate[0].split("-");

              if (
                furtherSplitDate[2] == accurateDate.getDate() &&
                furtherSplitDate[1] == accurateDate.getMonth() + 1
              ) {
                return splitDate[1];
              }
            })}
            <span className="text-2xl">PM</span>
          </h1>
          <br />
          <h1 className="text-lg">Sunrise</h1>
          <h1 className="text-2xl sm:text-3xl xs:text-xl">
            {sunrise.map((rise: any) => {
              const splitDate = rise.split("T");
              const furtherSplitDate = splitDate[0].split("-");

              if (
                furtherSplitDate[2] == accurateDate.getDate() &&
                furtherSplitDate[1] == accurateDate.getMonth() + 1
              ) {
                return splitDate[1];
              }
            })}
            <span className="text-2xl">AM</span>
          </h1>
        </div>
      </section>
    </section>
  );
};

export default HourlyInfo;
