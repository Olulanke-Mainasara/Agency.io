export default function Loading() {
  return (
    <>
      <div className="px-8 pt-24">
        <div className="md:w-[600px] w-80 h-16 md:h-24 mx-auto bg-gray-400 animate-pulse"></div>
        <div className="py-8 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div
              key={index}
              className="h-[300px] rounded-xl animate-pulse bg-gray-400"
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
