import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find((post) =>
    post.slug.toLowerCase().includes(slug.toLowerCase()),
  );

  return (
    <main className="mt-32">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <span className="text-action-sm text-blue-200">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px] lg:gap-12">
        <article className="overflow-hidden rounded-lg border border-gray-400 bg-gray-600">
          <figure className="relative aspect-16/10 w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image ?? ""}
              alt="thumbnail"
              fill
              className="object-cover"
            />
          </figure>
        </article>
      </div>
    </main>
  );
}
