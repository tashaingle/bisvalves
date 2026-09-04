import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCatalogue } from "@/components/ProductCatalogue";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse BiS Valves stainless steel solenoid, directional, stop, metering, check, shuttle, relief, sensing, manifold and bespoke high-pressure flow control products.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        kicker="Catalogue"
        title="The range."
        lede="Filter by type, industry, pressure and material. Every model is a UK-engineered stainless steel control element, or the start of a bespoke design."
      />
      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <ProductCatalogue />
        </div>
      </section>
    </>
  );
}
