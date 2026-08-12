import { useEffect, useState } from "react";
import { getCities } from "@/sanity/lib/getCity(ies)";
import { getEstablishments } from "@/sanity/lib/getEstablishment(s)";

import { EstablishmentInfo } from "@/types/EstablishmentInfo";
import { userLocation } from "@/types/Location";
import { Place } from "@/types/Place";

export function useLocation() {
  const [isGeolocationEnabled, setIsGeolocationEnabled] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState("false");
  const [locationData, setLocationData] =
    useState<GeolocationCoordinates | null>(null);
  const [userLocation, setUserLocation] = useState<userLocation>({
    address: { country: "", city: "" },
  });
  const [availableCities, setAvailableCities] = useState<Place[]>([]);
  const [availableEstablishments, setAvailableEstablishments] = useState<
    EstablishmentInfo[]
  >([]);
  const [loading, setLoading] = useState(false);

  const fetchLocationData = async (coords: GeolocationCoordinates) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}&zoom=5`,
        {
          cache: "no-store",
        }
      );
      const data = await response.json();
      const { country, city, state } = data.address;

      const updatedCity = city ? city : state;
      const citiesData = await getCities(country);
      const establishmentsData = await getEstablishments(
        updatedCity?.split(" ")[0] ?? ""
      );

      setUserLocation({ address: { country, city: updatedCity } });
      setAvailableCities(citiesData);
      setAvailableEstablishments(establishmentsData);
      setLoading(false);
    } catch (error) {
      setUserLocation({
        address: { country: "your country", city: "your area" },
      });
      setAvailableCities([]);
      setAvailableEstablishments([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (locationData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- fetches location-derived data when locationData changes
      fetchLocationData(locationData);
      return;
    }

    const storedIsConfirmed = localStorage.getItem("confirmed");
    setIsConfirmed(storedIsConfirmed ?? "false");

    if (isConfirmed === "true" && navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationData(position.coords);
        },
        () => {
          setLoading(false);
          setIsGeolocationEnabled(false);
        }
      );
    }
  }, [isConfirmed, locationData]);

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
