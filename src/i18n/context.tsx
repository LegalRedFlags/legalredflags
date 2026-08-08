"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "zh" | "en" | "ja";

type Translations = { zh: string; en: string; ja?: string; [key: string]: string | undefined };

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (translations: Translations) => string;
}

const LOCALES: Locale[] = ["en", "zh", "ja"];
const LOCALE_LABELS: Record<Locale, string> = { en: "EN", zh: "中文", ja: "日本語" };
const LANG_TAGS: Record<Locale, string> = { en: "en", zh: "zh-CN", ja: "ja" };

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (tr) => tr.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && LOCALES.includes(saved)) setLocaleState(saved);
    setMounted(true);
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    document.documentElement.lang = LANG_TAGS[l];
  }

  const t = (tr: Translations) => tr[locale] ?? tr.en;

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
  const nextIndex = (LOCALES.indexOf(locale) + 1) % LOCALES.length;
  const nextLocale = LOCALES[nextIndex];

  return (
    <button
      onClick={() => setLocale(nextLocale)}
      className="text-[13px] text-[var(--grey)] border border-[var(--rule)] px-2.5 py-1 bg-transparent cursor-pointer hover:border-[var(--grey)] hover:text-[var(--ink)] transition-colors"
      aria-label="Switch language"
    >
      {LOCALE_LABELS[nextLocale]}
    </button>
  );
}
