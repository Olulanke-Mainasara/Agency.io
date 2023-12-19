import { company } from "@/static-data/navigation";

import DefaultCard from "@/components/UI/Cards/DefaultCard";

export default function Company() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-20 lg:pt-24 xl:px-8">
      <h1 className="text-4xl text-center dark:text-white md:text-7xl">
        Company
      </h1>

      <div className="text-white grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {company.map((companyFeature) => {
          return (
            <DefaultCard key={companyFeature.title} features={companyFeature} />
          );
        })}
      </div>
    </main>
  );
}
