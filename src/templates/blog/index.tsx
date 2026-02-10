import { PostCard } from "@/components/postCard";
import { PostGridCard } from "@/components/postGridCard";
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
      <header className="pb-14">
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

      <PostGridCard>
        <PostCard
          slug="/transformando"
          title="Transformando seu negócio em uma loja virtual"
          description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site..."
          image="/assets/first-post.jpg"
          date="10/12/24"
          author={{
            avatar: "/assets/customer-01.png",
            name: "Aspen Dokidis",
          }}
        />
      </PostGridCard>
    </div>
  );
}
