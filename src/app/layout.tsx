import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Solenoid Valves · Relief Valves · Check Valves | BiS Valves",
    template: "%s | BiS Valves",
  },
  description: site.description,
  keywords: [
    "solenoid valves",
    "relief valves",
    "check valves",
    "high pressure valves",
    "subsea valves",
    "stainless steel valves",
    "UK valve manufacturer",
    "directional control valves",
    "manifolds",
  ],
  openGraph: {
    title: "BiS Valves: Precision under pressure.",
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-night">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
