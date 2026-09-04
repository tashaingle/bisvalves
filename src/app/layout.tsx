import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    title: "BiS Valves — Precision under pressure.",
    description: site.description,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink font-sans text-paper">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
