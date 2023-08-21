import LoadingLocationImageCard from "@/components/UI/Cards/LoadingLocationImageCard";

const fakeData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
];

export default function Loading() {
  return (
    <>
      <div className="px-8 pt-24">
        <h1 className="text-4xl text-center md:text-7xl xl:text-8xl dark:text-white">
          Loading
        </h1>
        <div className="py-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {fakeData.map((country) => (
            <LoadingLocationImageCard key={country.id} />
          ))}
        </div>
      </div>
    </>
  );
}
