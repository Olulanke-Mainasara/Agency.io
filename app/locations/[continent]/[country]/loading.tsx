export default function Loading() {
  return (
    <>
      <div className="space-y-8 px-6 pt-24 xl:px-8">
        <div className="h-16 w-80 animate-pulse bg-gray-400 md:h-24 md:w-[600px]"></div>
        <div className="min-h-screen grow animate-pulse rounded-xl border bg-gray-400 py-8 dark:text-white"></div>
      </div>
    </>
  );
}
