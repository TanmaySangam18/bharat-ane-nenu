import type { Term } from "./types";

export interface Remaining {
  ended: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  // fraction of the term already elapsed, 0..1
  elapsedFraction: number;
}

export function remainingForTerm(term: Term, now: number = Date.now()): Remaining {
  const start = new Date(term.startDate).getTime();
  const end = new Date(term.endDate).getTime();
  const total = Math.max(end - start, 1);
  const left = end - now;
  const elapsedFraction = Math.min(Math.max((now - start) / total, 0), 1);

  if (left <= 0) {
    return { ended: true, days: 0, hours: 0, minutes: 0, seconds: 0, elapsedFraction: 1 };
  }

  const seconds = Math.floor(left / 1000);
  return {
    ended: false,
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    elapsedFraction,
  };
}

// Compact human label, e.g. "2y 11m" — used in section headers.
export function compactRemaining(term: Term, now: number = Date.now()): string {
  const end = new Date(term.endDate).getTime();
  let left = end - now;
  if (left <= 0) return "0";
  const day = 86400000;
  const years = Math.floor(left / (365 * day));
  left -= years * 365 * day;
  const months = Math.floor(left / (30 * day));
  if (years > 0) return `${years}y ${months}m`;
  const days = Math.floor(left / day);
  if (months > 0) return `${months}m ${days}d`;
  return `${days}d`;
}
