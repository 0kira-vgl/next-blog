import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export function ActiveLink({ children, href, ...rest }: ActiveLinkProps) {
  // Verifica se o link corresponde à rota atual.
  // Considera:
  // 1) rota exata (href)
  // 2) rotas dinâmicas usando `as`
  // 3) subrotas (ex: /dashboard/settings mantém /dashboard ativo)

  const router = useRouter();
  const isCurrentPath =
    router.asPath === href || // asPath = caminho atual da URL
    router.asPath === rest.as;

  return (
    <Link
      href="/"
      className={cn(
        "text-action-sm transition-colors hover:text-blue-200",
        isCurrentPath ? "text-blue-200" : "text-gray-100",
      )}
    >
      {children}
    </Link>
  );
}
