import React from "react";

import HourlyInfo from "./HourlyInfo";
import QuickInfo from "./QuickInfo";
import TodayInfo from "./TodayInfo";

const MainInfo = ({ weatherInfo }: { weatherInfo: any }) => {
  return (
    <section className="hideScroll block h-full w-full grow grid-rows-3 gap-10 space-y-10 overflow-y-scroll text-black dark:text-white xl:grid xl:w-3/5 xl:space-y-0 xl:pb-0">
      <QuickInfo weatherInfo={weatherInfo} />
      <TodayInfo weatherInfo={weatherInfo} />
      <HourlyInfo weatherInfo={weatherInfo} />
    </section>
  );
};

export default MainInfo;
