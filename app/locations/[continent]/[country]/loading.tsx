export default function Loading() {
  return (
    <>
      <div className="px-6 pt-24 space-y-8 xl:px-8">
        <div className="h-16 w-80 animate-pulse bg-gray-400 md:h-24 md:w-[600px]"></div>
        <div className="min-h-screen py-8 bg-gray-400 border grow animate-pulse rounded-xl dark:text-white"></div>
      </div>
    </>
  );
}
