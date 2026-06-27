// Core data model for Praja Lekka — the AP public accountability ledger.
// The trust rule lives in this file's shape: a Promise CANNOT exist without a
// `source`. No source document -> it does not enter the app.

export type Lang = "en" | "te";

// A bilingual string. Both languages are authored by hand, never machine-translated.
export interface Bi {
  en: string;
  te: string;
}

export type Status = "not_started" | "in_progress" | "completed" | "unknown";

// Category buckets. Keep small and stable.
export type CategoryId =
  | "welfare"
  | "jobs"
  | "agriculture"
  | "infrastructure"
  | "education"
  | "health"
  | "women"
  | "energy";

export interface Category {
  id: CategoryId;
  label: Bi;
}

// An electoral term = one government with a fixed clock.
export interface Term {
  id: string;
  party: Bi; // e.g. { en: "YSRCP", te: "వైఎస్ఆర్‌సిపి" }
  government: Bi; // short label shown on cards
  startDate: string; // ISO — government formation date (drives countdown)
  endDate: string; // ISO — next election cycle boundary
  isCurrent: boolean;
}

// Where a fact comes from. This is the verification gate, encoded.
export interface Source {
  label: Bi; // e.g. "TDP–Jana Sena–BJP manifesto 2024, p.14"
  url: string; // public link to the document
  page?: number;
}

// City-wise implementation of a statewide promise. Manifestos are state-level,
// so "city-wise" lives here: how a single promise actually played out per city.
export interface CityStatus {
  city: CityId;
  status: Status;
  note?: Bi;
  source?: Source;
}

export interface Promise {
  id: string;
  termId: string;
  category: CategoryId;
  title: Bi;
  fullText: Bi; // the promise as written in the source, kept close to verbatim
  status: Status; // statewide status
  source: Source; // REQUIRED — the document that proves it was PROMISED (manifesto)
  // Official proof of the current STATUS — Government Order, PIB release, scheme
  // portal, budget line. Separate from `source`: source = "was it promised?",
  // evidence = "was it done?". A status with no evidence stays "reported, not confirmed".
  evidence?: Source[];
  statusVerified?: boolean; // true only when evidence backs the status
  completionPct?: number; // only when evidence exists
  cityStatus?: CityStatus[]; // optional per-city breakdown
}

export type CityId =
  | "visakhapatnam"
  | "vijayawada"
  | "guntur"
  | "nellore"
  | "kurnool"
  | "rajahmundry"
  | "tirupati"
  | "kakinada"
  | "anantapur"
  | "kadapa";

export interface City {
  id: CityId;
  name: Bi;
}
