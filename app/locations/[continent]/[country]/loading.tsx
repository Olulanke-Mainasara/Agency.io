export default function Loading() {
  return (
    <>
      <div className="px-6 pt-24 space-y-8 xl:px-8">
        <div className="md:w-[600px] w-80 h-16 md:h-24 bg-gray-400 animate-pulse"></div>
        <div className="min-h-screen py-8 bg-gray-400 border dark:text-white grow animate-pulse rounded-xl"></div>
      </div>
    </>
  );
}
