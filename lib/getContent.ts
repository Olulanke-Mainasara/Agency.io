export default async function getContent(
  action: string,
  specific?: string | { name: string; longitude: number; latitude: number },
  preserve?: boolean
) {
  const rawData = await fetch("http://localhost:3000/api/getContent", {
    method: "POST",
    body: JSON.stringify({ action: action, specific: specific }),
    cache: preserve ? "force-cache" : "no-store",
  });

  const refinedData = await rawData.json();

  return refinedData;
}
