"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Locale = "zh" | "en";

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (zh: string, en: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (_zh, en) => en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved === "en" || saved === "zh") setLocaleState(saved);
    setMounted(true);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
  }

  const t = (zh: string, en: string) => (locale === "zh" ? zh : en);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
      className="text-[13px] text-[var(--grey)] border border-[var(--rule)] px-2.5 py-1 bg-transparent cursor-pointer hover:border-[var(--grey)] hover:text-[var(--ink)] transition-colors"
      aria-label="Switch language"
    >
      {locale === "zh" ? "EN" : "中文"}
    </button>
  );
}
