"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Bi, Lang } from "./types";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (b: Bi) => string;
}

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("pl-lang") as Lang | null;
    if (saved === "en" || saved === "te") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("pl-lang", l);
    document.documentElement.lang = l;
  };

  const t = (b: Bi) => b[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
