export default async function getWeatherInfo(location: GeolocationCoordinates) {
  const latitude = location.latitude;
  const longitude = location.longitude;

  const rawData = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,pressure_msl,visibility,windspeed_80m,winddirection_80m&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&windspeed_unit=ms&timezone=auto`,
    {
      cache: "no-store",
    }
  );
  const jsonData = await rawData.json();
  return jsonData;
}
