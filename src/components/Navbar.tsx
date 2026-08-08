"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n, LanguageSwitcher } from "@/i18n/context";

export default function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    ["/flags", t({ zh: "危险信号", en: "Red Flags", ja: "危険信号" })],
    ["/cases", t({ zh: "真实案例", en: "Cases", ja: "事例" })],
    ["/checker", t({ zh: "风险自测", en: "Self-Check", ja: "リスク自己診断" })],
    ["/checklist", t({ zh: "检查清单", en: "Checklist", ja: "チェックリスト" })],
    ["/guides", t({ zh: "话术指南", en: "Scripts", ja: "スクリプト＆ガイド" })],
    ["/about", t({ zh: "关于我们", en: "About", ja: "概要" })],
  ];

  return (
    <nav className="max-w-[960px] mx-auto px-7 pt-7">
      <div className="flex justify-between items-center">
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
            {links.map(([href, label]) => (
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
          <button
            onClick={() => setOpen(!open)}
            className="hidden max-sm:flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
          >
            <span
              className={`block w-[18px] h-[2px] bg-[var(--ink)] transition-all duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block w-[18px] h-[2px] bg-[var(--ink)] transition-all duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-[18px] h-[2px] bg-[var(--ink)] transition-all duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="hidden max-sm:block mt-5 pb-2 border-t border-[var(--rule)]">
          <ul className="list-none pt-4 space-y-1">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] text-[var(--ink-soft)] no-underline hover:text-[var(--ink)] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
