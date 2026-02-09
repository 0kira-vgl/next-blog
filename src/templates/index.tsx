import { CallToAction } from "./sections/callToAction";
import { CustomerStory } from "./sections/customerStory";
import { Feature } from "./sections/feature";
import { Hero } from "./sections/hero";
import { Support } from "./sections/support";

export function Templates() {
  return (
    <article className="flex flex-col gap-10">
      <Hero />
      <Feature />
      <Support />
      <CustomerStory />
      <CallToAction />
    </article>
  );
}
