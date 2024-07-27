"use client";

import React from "react";

import getWeatherInfo from "@/lib/getWeatherInfo";

import DayForecast from "./DayForecast";
import ErrorOccurred from "./Feedback/ErrorOccurred";
import GeoNotActive from "./Feedback/GeoNotActive";
import GettingWeatherInfo from "./Feedback/GettingWeatherInfo";
import LocationNeeded from "./Feedback/LocationNeeded";
import MainInfo from "./MainInfo";

const Dashboard = () => {
  const [isGeolocationSupported, setIsGeolocationSupported] =
    React.useState(true);
  const [isFetchingWeather, setIsFetchingWeather] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [isUserAsked, setIsUserAsked] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState("false");
  const [locationData, setLocationData] =
    React.useState<GeolocationCoordinates | null>(null);
  const [weatherInfo, setWeatherInfo] = React.useState<any>(null);

  const handleLocationClick = () => {
    setConfirmed("true");
    localStorage.setItem("confirmed", "true");
  };

  const fetchWeatherInfo = async () => {
    if (locationData) {
      setIsFetchingWeather(true);
      try {
        const rawWeather = await getWeatherInfo(locationData);
        setWeatherInfo(rawWeather);
        setIsFetchingWeather(false);
      } catch (error) {
        setHasError(true);
        setIsFetchingWeather(false);
        setLocationData(null);
      }
    }
  };

  React.useEffect(() => {
    const confirmedValue = localStorage.getItem("confirmed");
    setConfirmed(confirmedValue ? confirmedValue : "false");

    if (!navigator.geolocation) {
      setIsGeolocationSupported(false);
    }

    setIsUserAsked(true);

    if (confirmed == "true") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData(position.coords);
        },
        () => setIsGeolocationSupported(false)
      );

      setIsUserAsked(false);
    }
  }, [confirmed]);

  React.useEffect(() => {
    fetchWeatherInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationData]);

  return (
    <>
      <main className="flex min-h-[100dvh] w-full flex-col gap-12 p-4 pt-20 xl:h-screen xl:flex-row xl:gap-8 xl:pt-20">
        <MainInfo weatherInfo={weatherInfo} />
        <DayForecast weatherInfo={weatherInfo} />
      </main>

      {!isGeolocationSupported && <GeoNotActive />}

      {isUserAsked && (
        <LocationNeeded handleLocationClick={handleLocationClick} />
      )}

      {isFetchingWeather && <GettingWeatherInfo />}

      {hasError && <ErrorOccurred />}
    </>
  );
};

export default Dashboard;
