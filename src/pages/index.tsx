import { CallToAction } from "@/components/callToAction";
import { CustomerStory } from "@/components/customerStory";
import { Feature } from "@/components/feature";
import { Hero } from "@/components/hero";
import { Support } from "@/components/support";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <Hero />
        <Feature />
        <Support />
        <CustomerStory />
        <CallToAction />
      </article>
    </>
  );
}
