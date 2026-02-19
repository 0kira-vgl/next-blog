import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/avatar";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
};

export function PostCard({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="w-full max-w-2xl overflow-hidden rounded-xl border border-gray-400 bg-gray-600 transition-all duration-300 hover:border-blue-300"
    >
      <div className="overflow-hidden rounded-md p-2">
        <div className="relative">
          <div className="absolute top-0 right-0 rounded-bl-[10px] bg-gray-600 px-3 py-1 backdrop-blur-sm">
            <span className="text-body-xs text-gray-300">{date}</span>
          </div>
          <Image
            src={image}
            alt="thumbnail"
            width={288}
            height={144}
            className="h-40 w-full rounded-lg object-cover"
          />
        </div>

        <div className="mt-4 space-y-4 px-2">
          <h2
            className="text-heading-sm line-clamp-2 text-gray-100"
            title={title}
          >
            {title}
          </h2>

          <p className="text-body-sm line-clamp-3 text-gray-300">
            {description}
          </p>

          <div className="flex items-center gap-3 border-t border-gray-400 py-4">
            <Avatar.Container>
              <Avatar.Image src={author.avatar} alt={author.name} />
              <Avatar.Content>
                <Avatar.Title>{author.name}</Avatar.Title>
              </Avatar.Content>
            </Avatar.Container>
          </div>
        </div>
      </div>
    </Link>
  );
}
