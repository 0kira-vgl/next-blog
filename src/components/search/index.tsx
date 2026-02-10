import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const Search = () => {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";

  const handleSearch = useCallback(
    (event: React.SyntheticEvent) => {
      event.preventDefault();
      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, undefined, {
      shallow: true,
      scroll: false,
    });
  };

  const resetSearch = () => {
    router.push("/blog", undefined, {
      shallow: true,
      scroll: false,
    });
  };

  return (
    <form onSubmit={handleSearch} className="group relative w-full md:w-60">
      <SearchIcon
        className={cn(
          "absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-300 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? "text-blue-300" : "",
        )}
      />

      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        className="text-body-sm placeholder:text-body-sm h-10 w-full rounded-md border border-gray-400 bg-transparent pr-10 pl-9 text-gray-100 transition-all duration-200 outline-none placeholder:text-gray-300 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 md:w-60"
      />

      <CircleX
        onClick={resetSearch}
        className={cn(
          query
            ? "absolute top-1/2 right-3 size-4 -translate-y-1/2 text-gray-300"
            : "hidden",
        )}
      />
    </form>
  );
};
