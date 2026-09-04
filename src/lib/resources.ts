export type Resource = {
  title: string;
  type: "Datasheet" | "Brochure" | "Manual" | "Certification" | "Drawing";
  category: string;
  href: string;
  year?: string;
};

const lit = "https://www.bisvalves.co.uk/assets/Uploads/Literature";
const cert = "https://www.bisvalves.co.uk";

export const resources: Resource[] = [
  {
    title: "Main Catalogue",
    type: "Brochure",
    category: "All products",
    href: `${lit}/BiS-MAIN-CATALOGUE-2017-REDUCED-SIZE.pdf`,
    year: "2017",
  },
  {
    title: "Quick Reference Guide",
    type: "Brochure",
    category: "All products",
    href: `${lit}/BiS-QUICK-REFERENCE-GUIDE-2017-REDUCED-SIZE.pdf`,
    year: "2017",
  },
  {
    title: "Flow Control Mini Catalogue",
    type: "Brochure",
    category: "Stop & metering",
    href: "https://www.bisvalves.co.uk/assets/Uploads/Literature/FLOW-CONTROL-MINI-CATALOGUE%20-12-2014.pdf",
  },
  {
    title: "Check & Shuttle Mini Catalogue",
    type: "Brochure",
    category: "Check & shuttle",
    href: `${lit}/CHECK-SHUTTLE-MINI-CATALOGUE-1014.pdf`,
  },
  {
    title: "Solenoid Quick Reference Guide",
    type: "Datasheet",
    category: "Solenoid valves",
    href: `${lit}/Solenoid-Quick-Reference-Guide.pdf`,
  },
  {
    title: "Solenoid Valves Leaflet",
    type: "Brochure",
    category: "Solenoid valves",
    href: `${lit}/SOLENOID-VALVES-A4-LEAFLET.pdf`,
  },
  {
    title: "Relief Valves Leaflet",
    type: "Brochure",
    category: "Relief valves",
    href: `${lit}/BiS-RELIEF-VALVES-LEAFLET.pdf`,
  },
  {
    title: "Manifold Valves Leaflet",
    type: "Brochure",
    category: "Manifolds",
    href: `${lit}/MANIFOLD-VALVES-A4-LEAFLET.pdf`,
  },
  {
    title: "Directional Valves Leaflet",
    type: "Brochure",
    category: "Directional control",
    href: `${lit}/DIRECTIONAL-VALVES-A4-LEAFLET.pdf`,
  },
  {
    title: "Check Valves Leaflet",
    type: "Brochure",
    category: "Check & shuttle",
    href: `${lit}/CHECK-VALVES-A4-LEAFLET.pdf`,
  },
  {
    title: "Flow Control Valves Leaflet",
    type: "Brochure",
    category: "Stop & metering",
    href: `${lit}/FLOW-CONTROL-VALVES-LEAFLET.pdf`,
  },
  {
    title: "ISO 9001:2015 Certificate",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/Uploads/BiS-Valves-Limited-ISO-9001-Cert-expires-13-10-2027.pdf`,
  },
  {
    title: "ATEX Quality Assurance Notification",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/ATEX-QAN-4117-2-11-23.pdf`,
  },
  {
    title: "PED Certificate of Quality System Approval (H)",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/CE-0062-PED-H-BIS-001-26-GBR.pdf`,
  },
  {
    title: "PED Certificate of Quality System Approval (H1)",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/CE-0062-PED-H1-BIS-001-26-GBR.pdf`,
  },
  {
    title: "CSA SIL 3: Directional Control Valve",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/Uploads/FINAL-FSP-24009-00.pdf`,
  },
  {
    title: "CSA SIL 3: ST Solenoid Valve",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/Uploads/FSP-24010-01.pdf`,
  },
  {
    title: "INMETRO Certificate NCC 22.0135 X",
    type: "Certification",
    category: "Quality",
    href: `${cert}/assets/Uploads/INMETROL-Certificate-NCC-22-0135-X-Rev-0-signed.pdf`,
  },
  {
    title: "Terms and Conditions",
    type: "Manual",
    category: "Commercial",
    href: "https://www.bisvalves.co.uk/uploads/pdf/TERMS-15-10-14.pdf",
  },
];

export const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality management",
    body: "Bureau Veritas approved quality system covering design, manufacture, assembly and test of pressure and flow control products.",
  },
  {
    code: "ATEX 2014/34/EU",
    title: "Explosive atmospheres",
    body: "Equipment and solenoid thrusters for potentially explosive atmospheres, including Ex d and Ex emb hazardous-area coils.",
  },
  {
    code: "PED 2014/68/EU",
    title: "Pressure equipment",
    body: "Relief valves CE marked as Category IV safety accessories. Quality system approvals H and H1 from Bureau Veritas.",
  },
  {
    code: "SIL 3 capable",
    title: "Functional safety",
    body: "CSA certified SIL 3 capability on directional control valves and ST solenoid valves for safety-related systems.",
  },
];
