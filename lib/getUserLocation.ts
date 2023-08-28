import { GeoLocationSensorState } from "react-use/lib/useGeolocation";

export async function getUserLocation(locationObject: GeoLocationSensorState) {
  const lon = locationObject.longitude;
  const lat = locationObject.latitude;

  // const locationn = await fetch(
  //   "http://api.ipstack.com/"
  // );

  // return locationn.stateName;

  return "";
}
