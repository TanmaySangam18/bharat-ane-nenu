"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { useLang } from "@/lib/lang";
import { promises } from "@/lib/promises";
import { categories, cities, statusLabel, terms, ui } from "@/lib/reference";
import Countdown from "@/components/Countdown";

export default function PromiseDetail() {
  const { t } = useLang();
  const params = useParams<{ id: string }>();
  const promise = promises.find((p) => p.id === params.id);

  if (!promise) return notFound();

  const term = terms.find((tm) => tm.id === promise.termId)!;
  const cat = categories.find((c) => c.id === promise.category);

  return (
    <main className="wrap">
      <Link href="/" className="back-link">
        ← {t(ui.back)}
      </Link>

      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", marginBottom: 10 }}>
        <span className="cat-tag">{cat ? t(cat.label) : promise.category}</span>
        <span className={`badge badge--${promise.status}`}>
          {t(statusLabel[promise.status])}
        </span>
        {promise.statusVerified ? (
          <span className="vchip vchip--yes" title={t(ui.verifiedTip)}>
            <span aria-hidden>✓</span> {t(ui.verified)}
          </span>
        ) : (
          <span className="vchip vchip--no" title={t(ui.reportedTip)}>
            <span aria-hidden>○</span> {t(ui.reported)}
          </span>
        )}
        <span className="brand__sub" style={{ marginLeft: "auto" }}>
          {t(term.government)}
        </span>
      </div>

      <h1 style={{ fontSize: 24, lineHeight: 1.25, margin: "0 0 6px", letterSpacing: "-0.01em" }}>
        {t(promise.title)}
      </h1>

      <div style={{ margin: "10px 0 20px" }}>
        {term.isCurrent ? (
          <Countdown term={term} />
        ) : (
          <span className="govt-clock ended">
            <span aria-hidden>■</span> {t(ui.termEnded)}
          </span>
        )}
      </div>

      <div className="detail-block">
        <h3>{t(ui.originalText)}</h3>
        <p className="verbatim">{t(promise.fullText)}</p>
      </div>

      {promise.cityStatus && promise.cityStatus.length > 0 && (
        <div className="detail-block">
          <h3>{t(ui.cityBreakdown)}</h3>
          {promise.cityStatus.map((cs) => {
            const cityObj = cities.find((c) => c.id === cs.city);
            return (
              <div className="city-row" key={cs.city}>
                <div>
                  <strong>{cityObj ? t(cityObj.name) : cs.city}</strong>
                  {cs.note && <p className="note" style={{ margin: "2px 0 0" }}>{t(cs.note)}</p>}
                </div>
                <span className={`badge badge--${cs.status}`}>
                  {t(statusLabel[cs.status])}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {promise.evidence && promise.evidence.length > 0 && (
        <div className="detail-block">
          <h3>{t(ui.evidence)}</h3>
          {promise.evidence.map((ev, i) => (
            <a
              key={i}
              className="evidence-item"
              href={ev.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span aria-hidden>🔗</span> {t(ev.label)}
              {ev.page ? `, p.${ev.page}` : ""}
            </a>
          ))}
        </div>
      )}

      <div className="detail-block">
        <h3>{t(ui.source)}</h3>
        <a
          className="detail-source"
          href={promise.source.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden>🔗</span> {t(promise.source.label)}
          {promise.source.page ? `, p.${promise.source.page}` : ""}
        </a>
        <p className="note" style={{ marginTop: 10 }}>
          {t(ui.noSourceNote)}
        </p>
      </div>
    </main>
  );
}
