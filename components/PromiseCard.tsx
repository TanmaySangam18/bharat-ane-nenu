"use client";

import Link from "next/link";
import type { Promise } from "@/lib/types";
import { useLang } from "@/lib/lang";
import { categories, statusLabel, ui } from "@/lib/reference";

export default function PromiseCard({ promise }: { promise: Promise }) {
  const { t } = useLang();
  const cat = categories.find((c) => c.id === promise.category);

  return (
    <Link href={`/promise/${promise.id}`} className="card">
      <div className="card__top">
        <span className="cat-tag">{cat ? t(cat.label) : promise.category}</span>
        <span className={`badge badge--${promise.status}`}>
          {t(statusLabel[promise.status])}
        </span>
      </div>
      <div>
        <p className="card__title">{t(promise.title)}</p>
      </div>
      <div className="card__foot">
        {promise.statusVerified ? (
          <span className="vchip vchip--yes" title={t(ui.verifiedTip)}>
            <span aria-hidden>✓</span> {t(ui.verified)}
          </span>
        ) : (
          <span className="vchip vchip--no" title={t(ui.reportedTip)}>
            <span aria-hidden>○</span> {t(ui.reported)}
          </span>
        )}
        {typeof promise.completionPct === "number" && (
          <>
            <span className="bar">
              <span style={{ width: `${promise.completionPct}%` }} />
            </span>
            <span>{promise.completionPct}%</span>
          </>
        )}
        <span style={{ marginLeft: "auto", color: "var(--accent)" }}>
          {t(ui.viewDetails)} →
        </span>
      </div>
    </Link>
  );
}
