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
        title="Product catalogue"
        lede="Filter by valve type, industry, pressure and material. If you can’t find what you need, most models can be adapted."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <ProductCatalogue />
        </div>
      </section>
    </>
  );
}
