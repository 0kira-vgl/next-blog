import { PostCard } from "@/components/postCard";
import { PostGridCard } from "@/components/postGridCard";
import { Search } from "@/components/search";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useRouter } from "next/router";

export function BlogList() {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultados de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title.toLowerCase()?.includes(query.toLowerCase()),
      )
    : allPosts;

  const hasPosts = posts.length > 0;

  return (
    <div className="flex h-full grow flex-col pt-24">
      <header className="pb-14">
        <div className="container flex flex-col items-end justify-between space-y-6 md:flex-row md:items-end md:space-y-0 lg:items-end lg:space-y-0">
          <div className="flex flex-col gap-4 md:px-0">
            <span className="text-body-tag w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-cyan-100 md:text-left">
              BLOG
            </span>

            <h1 className="text-heading-lg md:text-heading-xl max-w-2xl text-start text-balance text-gray-100 md:text-left">
              {pageTitle}
            </h1>
          </div>
          <Search />
        </div>
      </header>

      {hasPosts && (
        <PostGridCard>
          {posts.map((post) => (
            <PostCard
              key={post._id}
              slug={post.slug}
              title={post.title}
              description={post.description}
              image={post.image}
              date={new Date(post.date).toLocaleDateString("pt-BR")}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </PostGridCard>
      )}

      {!hasPosts && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-gray-300/40 p-8 md:p-12">
            <Inbox className="size-12 text-cyan-100" />

            <span className="text-center text-gray-100">
              Nenhum post encontrado :(
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
