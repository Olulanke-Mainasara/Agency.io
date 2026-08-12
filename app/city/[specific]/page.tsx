import CityPage from "@/app/places/[continent]/[country]/[city]/page";

export const dynamic = "force-dynamic";

export default async function SpecificCityPage(
  props: {
    params: Promise<{ specific: string }>;
  }
) {
  const params = await props.params;

  const {
    specific
  } = params;

  return <CityPage params={Promise.resolve({ city: specific })} />;
}
