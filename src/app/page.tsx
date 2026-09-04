import { Hero } from "@/components/Hero";
import { ProductExplore } from "@/components/ProductExplore";
import { IndustryCarousel } from "@/components/IndustryCarousel";
import { Heritage } from "@/components/Heritage";
import { CapabilitiesPreview } from "@/components/CapabilitiesPreview";
import { QualityStory } from "@/components/QualityStory";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductExplore />
      <IndustryCarousel />
      <Heritage />
      <CapabilitiesPreview />
      <QualityStory />
      <FinalCTA />
    </>
  );
}
