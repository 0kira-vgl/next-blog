import Link from "next/link";
import { Logo } from "../logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between gap-8 py-8 md:flex-row">
          <Logo />

          <nav className="text-muted-foreground flex flex-col items-center gap-4 text-sm md:flex-row">
            <Link href="/" className="hover:text-primary">
              Termos de uso
            </Link>
            <Link href="/" className="hover:text-primary">
              Política de Privacidade
            </Link>
            <Link href="/" className="hover:text-primary">
              Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
