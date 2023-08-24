const fakeData = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Loading() {
  return (
    <>
      <div className="px-8 pt-24">
        <div className="w-[600px] h-32 mx-auto bg-gray-400 animate-pulse"></div>
        <div className="grid gap-8 py-8 md:grid-cols-2 xl:grid-cols-4">
          {fakeData.map((index) => (
            <div
              key={index}
              className="relative min-h-[350px] rounded-xl animate-pulse bg-gray-400"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
