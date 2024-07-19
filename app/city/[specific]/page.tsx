import CityPage from "@/app/places/[continent]/[country]/[city]/page";

export const dynamic = "force-dynamic";

export default async function SpecificCityPage({
  params: { specific },
}: {
  params: { specific: string };
}) {
  return <CityPage params={{ city: specific }} />;
}
