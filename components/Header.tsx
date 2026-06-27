"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { ui } from "@/lib/reference";

export default function Header() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <span className="brand__mark" aria-hidden>
            ⏱
          </span>
          <span>
            <span className="brand__name">{t(ui.appName)}</span>
            <br />
            <span className="brand__sub">{t(ui.tagline)}</span>
          </span>
        </Link>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
          <button
            className={lang === "te" ? "active" : ""}
            onClick={() => setLang("te")}
            aria-pressed={lang === "te"}
          >
            తెలుగు
          </button>
        </div>
      </div>
    </header>
  );
}
