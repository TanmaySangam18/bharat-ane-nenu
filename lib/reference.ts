import type { Category, City, Term } from "./types";

// ---- UI chrome strings (every label paired by hand) ----
export const ui = {
  appName: { en: "Bharat Ane Nenu", te: "భారత్ అనే నేను" },
  tagline: {
    en: "Andhra Pradesh · public accountability ledger",
    te: "ఆంధ్రప్రదేశ్ · ప్రజా జవాబుదారీ లెక్క",
  },
  principle: {
    en: "Every promise has a clock. Every outcome is done or not done.",
    te: "ప్రతి హామీకి ఒక గడియారం. ప్రతి ఫలితం పూర్తైంది లేదా కాలేదు.",
  },
  currentGovt: { en: "Current government", te: "ప్రస్తుత ప్రభుత్వం" },
  previousGovt: { en: "Previous government", te: "గత ప్రభుత్వం" },
  termRemaining: { en: "Term remaining", te: "మిగిలిన కాలం" },
  termEnded: { en: "Term ended", te: "కాలం ముగిసింది" },
  allCities: { en: "All of Andhra Pradesh", te: "ఆంధ్రప్రదేశ్ మొత్తం" },
  filterCity: { en: "Filter by city", te: "నగరం వారీగా" },
  filterCategory: { en: "Category", te: "విభాగం" },
  viewDetails: { en: "View details", te: "వివరాలు చూడండి" },
  source: { en: "Promised in (source)", te: "హామీ ఆధారం" },
  evidence: { en: "Status evidence", te: "స్థితి ఆధారం" },
  verified: { en: "Verified", te: "ధృవీకరించబడింది" },
  reported: { en: "Reported · not yet confirmed", te: "నివేదిత · ధృవీకరణ లేదు" },
  verifiedTip: {
    en: "Status backed by an official order or credible report.",
    te: "అధికారిక ఉత్తర్వు లేదా విశ్వసనీయ నివేదిక ఆధారంగా.",
  },
  reportedTip: {
    en: "Status is best-effort from reports, not yet pinned to an official document.",
    te: "నివేదికల ఆధారంగా; ఇంకా అధికారిక పత్రంతో ధృవీకరించలేదు.",
  },
  originalText: { en: "Original promise text", te: "అసలు హామీ పాఠం" },
  cityBreakdown: { en: "City-wise status", te: "నగరాల వారీ స్థితి" },
  back: { en: "Back to all promises", te: "అన్ని హామీలకు తిరిగి" },
  promisesTracked: { en: "Promises tracked", te: "ట్రాక్ చేసిన హామీలు" },
  completed: { en: "Completed", te: "పూర్తైంది" },
  inProgress: { en: "In progress", te: "జరుగుతోంది" },
  notStarted: { en: "Not started", te: "ప్రారంభం కాలేదు" },
  unknown: { en: "Unverified", te: "ధృవీకరించలేదు" },
  noSourceNote: {
    en: "Only promises with a verifiable official source appear here.",
    te: "ధృవీకరించదగిన అధికారిక ఆధారం ఉన్న హామీలు మాత్రమే ఇక్కడ కనిపిస్తాయి.",
  },
  noResults: { en: "No promises match this filter.", te: "ఈ ఫిల్టర్‌కు హామీలు లేవు." },
  days: { en: "d", te: "రో" },
  openSource: { en: "Open source document", te: "ఆధార పత్రం తెరవండి" },
};

export const statusLabel = {
  not_started: ui.notStarted,
  in_progress: ui.inProgress,
  completed: ui.completed,
  unknown: ui.unknown,
};

export const categories: Category[] = [
  { id: "welfare", label: { en: "Welfare", te: "సంక్షేమం" } },
  { id: "jobs", label: { en: "Jobs", te: "ఉద్యోగాలు" } },
  { id: "agriculture", label: { en: "Agriculture", te: "వ్యవసాయం" } },
  { id: "infrastructure", label: { en: "Infrastructure", te: "మౌలిక సదుపాయాలు" } },
  { id: "education", label: { en: "Education", te: "విద్య" } },
  { id: "health", label: { en: "Health", te: "ఆరోగ్యం" } },
  { id: "women", label: { en: "Women", te: "మహిళలు" } },
  { id: "energy", label: { en: "Energy", te: "విద్యుత్" } },
];

export const cities: City[] = [
  { id: "visakhapatnam", name: { en: "Visakhapatnam", te: "విశాఖపట్నం" } },
  { id: "vijayawada", name: { en: "Vijayawada", te: "విజయవాడ" } },
  { id: "guntur", name: { en: "Guntur", te: "గుంటూరు" } },
  { id: "nellore", name: { en: "Nellore", te: "నెల్లూరు" } },
  { id: "kurnool", name: { en: "Kurnool", te: "కర్నూలు" } },
  { id: "rajahmundry", name: { en: "Rajahmundry", te: "రాజమండ్రి" } },
  { id: "tirupati", name: { en: "Tirupati", te: "తిరుపతి" } },
  { id: "kakinada", name: { en: "Kakinada", te: "కాకినాడ" } },
  { id: "anantapur", name: { en: "Anantapur", te: "అనంతపురం" } },
  { id: "kadapa", name: { en: "Kadapa", te: "కడప" } },
];

// The two governments tracked. Dates drive the countdown.
export const terms: Term[] = [
  {
    id: "tdp-2024",
    party: { en: "TDP–Jana Sena–BJP", te: "టీడీపీ–జనసేన–బీజేపీ" },
    government: { en: "NDA government (2024–29)", te: "ఎన్‌డిఏ ప్రభుత్వం (2024–29)" },
    startDate: "2024-06-12",
    endDate: "2029-06-11",
    isCurrent: true,
  },
  {
    id: "ysrcp-2019",
    party: { en: "YSRCP", te: "వైఎస్‌ఆర్‌సిపి" },
    government: { en: "YSRCP government (2019–24)", te: "వైఎస్‌ఆర్‌సిపి ప్రభుత్వం (2019–24)" },
    startDate: "2019-05-30",
    endDate: "2024-06-11",
    isCurrent: false,
  },
];
