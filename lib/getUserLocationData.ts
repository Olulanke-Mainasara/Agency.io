export async function getUserLocationData() {
  try {
    const ipDataResponse = await fetch("https://api.ipify.org?format=json", {
      cache: "no-store",
    });
    const ipData = await ipDataResponse.json();
    const ip = ipData.ip;

    const locationResponse = await fetch(
      `http://api.ipstack.com/${ip}?access_key=${process.env.IPSTACK_API_KEY}`,
      { cache: "no-store" }
    );
    const locationData = await locationResponse.json();
    return locationData;
  } catch (error) {
    return { country_name: "your country", region_name: "around you" };
  }
}
