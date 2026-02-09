import { ArrowRight, Store } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative mt-20 bg-linear-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="absolute inset-0 hidden bg-[url('/assets/bg-callToAction.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="absolute top-0 left-1/2 w-fit -translate-1/2 -translate-x-1/2 rounded-full bg-cyan-300 p-4">
        <Store className="text-cyan-100" />
      </div>

      <div className="relative container">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-heading-xl font-sans text-balance text-gray-100">
            Crie uma loja online e inicie <br /> suas vendas ainda hoje
          </h2>

          <Button variant="primary" asChild className="mt-6">
            <Link href="/">
              Criar loja grátis
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
