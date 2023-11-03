export default function Loading() {
  return (
    <>
      <div className="px-8 pt-24">
        <div className="mx-auto h-16 w-80 animate-pulse bg-gray-400 md:h-24 md:w-[600px]"></div>
        <div className="grid gap-8 py-8 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="h-[300px] animate-pulse rounded-xl bg-gray-400"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
