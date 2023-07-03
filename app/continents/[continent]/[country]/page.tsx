export default function Page({
  params: { country },
}: {
  params: { country: string };
}) {
  return <div>{country}</div>;
}
