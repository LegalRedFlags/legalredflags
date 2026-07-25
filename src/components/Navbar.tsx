"use client";

import Link from "next/link";
import { useI18n, LanguageSwitcher } from "@/i18n/context";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="max-w-[960px] mx-auto px-7 pt-7 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2.5 no-underline text-[var(--ink)]">
        <div className="w-7 h-5 relative">
          <div className="absolute left-0.5 top-0 w-0.5 h-5 bg-[var(--grey)] rounded-sm" />
          <div className="absolute left-1 top-px w-4 h-[11px] bg-[var(--red)] rounded-r" />
        </div>
        <span className="font-serif text-[17px] font-bold tracking-tight">
          Legal Red Flags
        </span>
      </Link>
      <div className="flex items-center gap-7">
        <ul className="flex gap-7 list-none max-sm:hidden">
          {[
            ["/flags", t("危险信号", "Red Flags")],
            ["/cases", t("真实案例", "Cases")],
            ["/checker", t("风险自测", "Self-Check")],
            ["/checklist", t("检查清单", "Checklist")],
            ["/about", t("关于我们", "About")],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-[var(--grey)] no-underline hover:text-[var(--ink)] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
