import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { ProductExplore } from "@/components/ProductExplore";
import { Heritage } from "@/components/Heritage";
import { QualityStory } from "@/components/QualityStory";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ProductExplore />
      <Heritage />
      <QualityStory />
      <FinalCTA />
    </>
  );
}
