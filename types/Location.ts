import { EstablishmentInfo } from "./EstablishmentInfo";
import { Place } from "./Place";

export type userLocation = {
  address: { country: string; city: string };
};

export type Location = {
  isGeolocationEnabled: boolean;
  isConfirmed: string;
  locationData: GeolocationCoordinates | null;
  userLocation: userLocation;
  availableCities: Place[];
  availableEstablishments: EstablishmentInfo[];
  loading: boolean;
};

export const EmptyLocationData = {
  isGeolocationEnabled: true,
  isConfirmed: "false",
  locationData: null as GeolocationCoordinates | null,
  userLocation: { address: { country: "", city: "" } },
  availableCities: [] as Place[],
  availableEstablishments: [] as EstablishmentInfo[],
  loading: false,
};
