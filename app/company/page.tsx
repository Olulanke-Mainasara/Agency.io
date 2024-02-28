import { company } from "@/static-data/navigation";

import DefaultCard from "@/components/UI/Cards/DefaultCard";

export default function Company() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-8 px-6 pt-20 lg:pt-24 xl:px-8">
      <h1 className="text-center text-6xl dark:text-white md:text-7xl">
        Company
      </h1>

      <div className="grid grid-cols-1 gap-12 text-white md:grid-cols-2 lg:grid-cols-4">
        {company.map((companyFeature, index) => {
          return (
            <DefaultCard
              key={companyFeature.title}
              features={companyFeature}
            />
          );
        })}
      </div>
    </main>
  );
}
