import { Feature } from "@/components/feature";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <Hero />
        <Feature />
      </article>
    </>
  );
}
