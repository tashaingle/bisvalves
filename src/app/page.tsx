import { Hero } from "@/components/Hero";
import { ProductExplore } from "@/components/ProductExplore";
import { IndustryPanels } from "@/components/IndustryPanels";
import { Heritage } from "@/components/Heritage";
import { CapabilitiesPreview } from "@/components/CapabilitiesPreview";
import { QualityStory } from "@/components/QualityStory";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductExplore />
      <IndustryPanels />
      <Heritage />
      <CapabilitiesPreview />
      <QualityStory />
      <FinalCTA />
    </>
  );
}
