"use client";

import { useMemo, useState } from "react";
import { useLang } from "@/lib/lang";
import { promises } from "@/lib/promises";
import { categories, cities, terms, ui } from "@/lib/reference";
import type { CategoryId, CityId } from "@/lib/types";
import { compactRemaining } from "@/lib/time";
import Countdown from "@/components/Countdown";
import PromiseCard from "@/components/PromiseCard";

export default function Home() {
  const { t } = useLang();
  const [city, setCity] = useState<CityId | "all">("all");
  const [cat, setCat] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    return promises.filter((p) => {
      if (cat !== "all" && p.category !== cat) return false;
      if (city !== "all") {
        const statewide = !p.cityStatus || p.cityStatus.length === 0;
        const hasCity = p.cityStatus?.some((cs) => cs.city === city);
        if (!statewide && !hasCity) return false;
      }
      return true;
    });
  }, [city, cat]);

  const stats = useMemo(() => {
    const tracked = promises.length;
    const completed = promises.filter((p) => p.status === "completed").length;
    const inProgress = promises.filter((p) => p.status === "in_progress").length;
    const verified = promises.filter((p) => p.statusVerified).length;
    return { tracked, completed, inProgress, verified };
  }, []);

  const current = terms.find((tm) => tm.isCurrent)!;

  return (
    <main className="wrap">
      <section className="hero">
        <p className="hero__principle">{t(ui.principle)}</p>
        <p className="hero__sub">{t(ui.tagline)}</p>
      </section>

      <section className="stats">
        <div className="stat">
          <p className="stat__label">{t(ui.promisesTracked)}</p>
          <p className="stat__value">{stats.tracked}</p>
        </div>
        <div className="stat">
          <p className="stat__label">{t(ui.completed)}</p>
          <p className="stat__value" style={{ color: "var(--green)" }}>
            {stats.completed}
          </p>
        </div>
        <div className="stat">
          <p className="stat__label">{t(ui.inProgress)}</p>
          <p className="stat__value" style={{ color: "var(--amber)" }}>
            {stats.inProgress}
          </p>
        </div>
        <div className="stat">
          <p className="stat__label">{t(ui.verified)}</p>
          <p className="stat__value" style={{ color: "var(--green)" }}>
            {stats.verified}/{stats.tracked}
          </p>
        </div>
        <div className="stat">
          <p className="stat__label">{t(ui.termRemaining)}</p>
          <p className="stat__value">{compactRemaining(current)}</p>
        </div>
      </section>

      <section className="controls">
        <div className="field">
          <label htmlFor="city">{t(ui.filterCity)}</label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value as CityId | "all")}
          >
            <option value="all">{t(ui.allCities)}</option>
            {cities.map((c) => (
              <option key={c.id} value={c.id}>
                {t(c.name)}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cat">{t(ui.filterCategory)}</label>
          <select
            id="cat"
            value={cat}
            onChange={(e) => setCat(e.target.value as CategoryId | "all")}
          >
            <option value="all">—</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {t(c.label)}
              </option>
            ))}
          </select>
        </div>
      </section>

      {terms.map((term) => {
        const list = filtered.filter((p) => p.termId === term.id);
        return (
          <section key={term.id} className="govt-section">
            <div className="govt-head">
              <h2 className="govt-title">
                {term.isCurrent ? t(ui.currentGovt) : t(ui.previousGovt)}
                <small>{t(term.government)}</small>
              </h2>
              <Countdown term={term} />
            </div>
            {list.length === 0 ? (
              <p className="empty">{t(ui.noResults)}</p>
            ) : (
              <div className="cards">
                {list.map((p) => (
                  <PromiseCard key={p.id} promise={p} />
                ))}
              </div>
            )}
          </section>
        );
      })}

      <p className="foot">
        {t(ui.noSourceNote)}
        <br />
        {t(ui.principle)}
      </p>
    </main>
  );
}
