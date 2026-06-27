"use client";

import { useEffect, useState } from "react";
import type { Term } from "@/lib/types";
import { remainingForTerm } from "@/lib/time";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/reference";

// Live ticking countdown for a government term. Renders nothing meaningful on the
// server vs client mismatch by only ticking after mount.
export default function Countdown({ term }: { term: Term }) {
  const { t } = useLang();
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) {
    return <span className="govt-clock">{t(ui.termRemaining)}…</span>;
  }

  const r = remainingForTerm(term, now);

  if (r.ended) {
    return (
      <span className="govt-clock ended">
        <span aria-hidden>■</span> {t(ui.termEnded)}
      </span>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="govt-clock">
      <span aria-hidden>⏳</span>
      {t(ui.termRemaining)}:{" "}
      <b>
        {r.days}
        {t(ui.days)} {pad(r.hours)}:{pad(r.minutes)}:{pad(r.seconds)}
      </b>
    </span>
  );
}
