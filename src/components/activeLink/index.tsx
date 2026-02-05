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
    router.asPath === rest.as ||
    router.asPath.startsWith(String(rest.as));

  return (
    <Link
      href="/"
      className={cn(
        "hover:text-primary text-sm font-medium transition-colors",
        isCurrentPath ? "text-blue-500" : "text-muted-foreground",
      )}
    >
      {children}
    </Link>
  );
}
