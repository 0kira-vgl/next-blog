import { Search } from "@/components/search";
import { useRouter } from "next/router";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  return (
    <div className="flex h-full grow flex-col pt-24">
      <header>
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-body-tag w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-cyan-100 uppercase md:text-left">
              BLOG
            </span>

            <h1 className="md:text-heading-xl max-w-2xl text-start text-balance text-gray-100 text-shadow-lg md:text-left">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </div>
      </header>
    </div>
  );
}
