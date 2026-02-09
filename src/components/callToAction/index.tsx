import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function CallToAction() {
  return (
    <section className="relative bg-linear-to-b from-cyan-950/20 to-gray-700 py-24">
      <div className="absolute inset-0 hidden bg-[url('/assets/bg-callToAction.svg')] bg-cover bg-center bg-no-repeat opacity-90 md:block" />

      <div className="relative container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="w-fit rounded-full bg-cyan-300 p-4">
            <Store className="text-cyan-100" />
          </div>
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
