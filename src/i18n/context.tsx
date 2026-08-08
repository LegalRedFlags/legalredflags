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

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      className="text-[13px] text-[var(--grey)] border border-[var(--rule)] px-2 py-1 bg-transparent cursor-pointer hover:border-[var(--grey)] hover:text-[var(--ink)] transition-colors appearance-none pr-6"
      aria-label="Select language"
      style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23999'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 6px center" }}
    >
      {LOCALES.map((l) => (
        <option key={l} value={l}>{LOCALE_LABELS[l]}</option>
      ))}
    </select>
  );
}
