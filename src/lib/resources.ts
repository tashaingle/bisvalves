import { datasheets, type Datasheet } from "./datasheets";

const norm = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

// Codes a catalogue sheet covers: "L & DL" is one sheet for two actuators,
// and "S-6B37" is the sheet for the 6B37 directional valve.
const sheetCodes = (code: string) =>
  code.split(" & ").flatMap((c) => [c, c.replace(/^S-/, "")]).map(norm);

// Finds the datasheet PDF for a product code. Codes on the site are sometimes
// more specific than the catalogue sheets (BNV10FC-TB, 3SV25/37), so fall back
// to the code before its last "-" or "/", then to a pressure variant of it in
// the same range (NR25 -> NR25-12K).
export function datasheetFor(code: string, category: string): Datasheet | undefined {
  const sheets = datasheets.filter((d) => d.kind === "datasheet" && d.code);
  // Gas variants keep their "-G" sheet: 6B37-A3-G -> S-6B37-G.
  if (/-G$/.test(code)) {
    const gas = norm(`${code.split("-")[0]}-G`);
    const hit = sheets.find((d) => sheetCodes(d.code!).includes(gas));
    if (hit) return hit;
  }
  let candidate = code;
  while (candidate) {
    const key = norm(candidate);
    const hit = sheets.find((d) => sheetCodes(d.code!).includes(key));
    if (hit) return hit;
    const cut = Math.max(candidate.lastIndexOf("-"), candidate.lastIndexOf("/"));
    if (cut <= 0) break;
    candidate = candidate.slice(0, cut);
  }
  return sheets.find((d) => d.category === category && d.code!.startsWith(`${code}-`));
}

export function rangeOverview(category: string): Datasheet | undefined {
  return datasheets.find((d) => d.kind === "overview" && d.category === category);
}

export const generalDocuments = datasheets.filter((d) => d.kind === "general");

// Certificates are not in the catalogue PDFs; they are sent on request.
export const certificates = [
  "ISO 9001:2015 certificate",
  "ATEX quality assurance notification",
  "PED certificate of quality system approval (H)",
  "PED certificate of quality system approval (H1)",
  "CSA SIL 3: directional control valve",
  "CSA SIL 3: ST solenoid valve",
  "INMETRO certificate NCC 22.0135 X",
];

export const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality management",
    body: "Bureau Veritas approved quality system covering design, manufacture, assembly and test of pressure and flow control\u00A0products.",
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
