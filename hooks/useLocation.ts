import React from "react";
import { getCities } from "@/sanity/lib/getCity(ies)";
import { getEstablishments } from "@/sanity/lib/getEstablishment(s)";

import { EstablishmentInfo } from "@/types/EstablishmentInfo";
import { Place } from "@/types/Place";

type userLocation = {
  address: { country: string; city: string };
};

export function useLocation() {
  const [isGeolocationEnabled, setIsGeolocationEnabled] = React.useState(false);
  const [isConfirmed, setIsConfirmed] = React.useState("false");
  const [locationData, setLocationData] =
    React.useState<GeolocationCoordinates | null>(null);
  const [userLocation, setUserLocation] = React.useState<userLocation | null>(
    null
  );
  const [availableCities, setAvailableCities] = React.useState<Place[]>([]);
  const [availableEstablishments, setAvailableEstablishments] = React.useState<
    EstablishmentInfo[]
  >([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const storedIsConfirmed = localStorage.getItem("confirmed");
    setIsConfirmed(storedIsConfirmed ? storedIsConfirmed : "false");

    if (isConfirmed === "true" && navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData(position.coords);
          setIsGeolocationEnabled(true);
        },
        () => {
          setLoading(false);
          setIsGeolocationEnabled(false);
        }
      );
    }
  }, [isConfirmed]);

  React.useEffect(() => {
    if (locationData) {
      fetchLocationData(locationData);
    }
  }, [locationData]);

  const fetchLocationData = async (coords: GeolocationCoordinates) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&zoom=5`
      );
      const data = await response.json();
      setUserLocation(data);

      const citiesData = await getCities(data.address.country);
      setAvailableCities(citiesData);

      const establishmentsData = await getEstablishments(
        data.address.city.split(" ")[0]
      );
      setAvailableEstablishments(establishmentsData);

      setLoading(false);
    } catch (error) {
      setAvailableCities([]);
      setLoading(false);
    }
  };

  return {
    isGeolocationEnabled,
    isConfirmed,
    locationData,
    userLocation,
    availableCities,
    availableEstablishments,
    loading,
  };
}
