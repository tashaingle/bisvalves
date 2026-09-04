export type Industry = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  body: string;
  image: string;
  applications: string[];
  products: string[];
};

export const industries: Industry[] = [
  {
    slug: "subsea",
    name: "Subsea",
    kicker: "Ambient pressure. Zero margin for error.",
    summary:
      "Valves engineered for wellhead control, emergency shut-down and ROV systems operating in the most hostile marine environments.",
    body: "BiS has extensive experience providing products for subsea applications. Standard products may be used subsea where internal pressure can be kept above ambient, but many duties require dedicated material selections and the ability to tolerate external overpressure. Our engineering team specifies the correct construction for hyperbaric service, seawater exposure and long-term reliability.",
    image: "/images/subsea.jpg",
    applications: [
      "Wellhead control",
      "Emergency shut-down",
      "Remotely operated vehicles",
      "Subsea manifolds",
    ],
    products: ["solenoid-valves", "directional-control-valves", "manifolds", "bespoke"],
  },
  {
    slug: "topside",
    name: "Topside",
    kicker: "Offshore control. On the deck.",
    summary:
      "Specified on hydraulic power units, workover control systems and chemical injection packages across the international offshore market.",
    body: "As a supplier to the oil and gas topside market, BiS products are widely specified for hydraulic power units, workover control systems and chemical injection systems. Cartridge and manifold-mounted flow and pressure control products reduce leak paths and simplify service on compact skids.",
    image: "/images/topside.jpg",
    applications: [
      "Hydraulic power units",
      "Workover control systems",
      "Chemical injection",
      "Integrated manifolds",
    ],
    products: [
      "solenoid-valves",
      "stop-metering-valves",
      "relief-valves",
      "manifolds",
    ],
  },
  {
    slug: "downhole",
    name: "Downhole",
    kicker: "High pressure. Tight envelopes.",
    summary:
      "Compact, high-pressure control components for downhole tools where space, temperature and reliability collide.",
    body: "Downhole service demands small-bore valves that hold pressure, survive contamination and remain serviceable. BiS designs around these constraints, from cartridge checks and reliefs to fully custom control elements in exotic alloys.",
    image: "/images/downhole.jpg",
    applications: [
      "Downhole tools",
      "Well intervention",
      "High-temperature control",
      "Cartridge integration",
    ],
    products: ["check-shuttle-valves", "relief-valves", "bespoke"],
  },
  {
    slug: "oil-and-gas",
    name: "Oil & Gas",
    kicker: "The core market.",
    summary:
      "A leading supplier of small-bore stainless steel pressure and flow control valves where quality, reliability and safety are critical.",
    body: "BiS has a strong profile in the international offshore oil and gas market. Products are designed mainly for the low-flow, high-pressure control valve market, where demands for higher pressures and total reliability constantly push design boundaries. Materials range from 316 stainless to Inconel and titanium.",
    image: "/images/oil-gas.jpg",
    applications: [
      "Offshore production",
      "Petrochemical",
      "Safety systems",
      "Process control",
    ],
    products: [
      "solenoid-valves",
      "directional-control-valves",
      "relief-valves",
      "filters",
    ],
  },
  {
    slug: "industrial-gas",
    name: "Industrial Gas",
    kicker: "Liquid and gas. Same discipline.",
    summary:
      "Soft-seated and gas-rated valves for industrial gas control, with oxygen and regulator products available through BiS Wells.",
    body: "Standard BiS valves serve industrial gas control with gas-rated seats and proven leak tightness. For back pressure maintaining valves, pressure regulators and oxygen service, sister company BiS Wells supplies a complementary range.",
    image: "/images/industrial-gas.jpg",
    applications: [
      "Industrial gas control",
      "Process gas switching",
      "High-pressure gas test",
      "Oxygen service via BiS Wells",
    ],
    products: ["stop-metering-valves", "check-shuttle-valves", "relief-valves"],
  },
  {
    slug: "high-pressure-systems",
    name: "High-Pressure Systems",
    kicker: "To 20,000 psi.",
    summary:
      "Hydraulic and gas systems that live at the edge of conventional valve catalogues, proven in-house to 1,379 bar.",
    body: "In-house hydraulic testing to 1,379 bar (20,000 psi), flow and pressure-drop testing, and nitrogen gas testing underpin every high-pressure design. Relief valves, checks and directional valves are available as Category IV safety accessories under the Pressure Equipment Directive.",
    image: "/images/high-pressure.jpg",
    applications: [
      "Pressure testing",
      "Water hydraulics",
      "Fuel systems",
      "Research & development",
    ],
    products: ["relief-valves", "check-shuttle-valves", "pumps", "filters"],
  },
  {
    slug: "specialist-engineering",
    name: "Specialist Engineering",
    kicker: "When the catalogue ends.",
    summary:
      "Bespoke valves and manifolds for petrochemical, pharmaceutical, power generation, water hydraulics and fuel systems.",
    body: "Beyond oil and gas, BiS has an established presence in petrochemical, pharmaceutical, power generation, water hydraulics and fuel systems. When no standard product exists, the engineering team designs the valve around the circuit, the fluid and the envelope.",
    image: "/images/specialist.jpg",
    applications: [
      "Power generation",
      "Pharmaceutical",
      "Metal manufacturing",
      "Water hydraulics",
    ],
    products: ["bespoke", "manifolds", "directional-control-valves"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
