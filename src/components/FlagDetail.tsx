"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";
import type { Flag } from "@/data/flags";

export default function FlagDetail({
  flag,
  prev,
  next,
}: {
  flag: Flag;
  prev: Flag | null;
  next: Flag | null;
}) {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";

  return (
    <>
      <Navbar />
      <article className="max-w-[960px] mx-auto px-7 pt-16 pb-20">
        <div className="text-[13px] text-[var(--grey-light)] mb-8">
          <Link href="/flags" className="text-[var(--green)] no-underline hover:underline">
            {t("全部危险信号", "All Red Flags")}
          </Link>
          <span className="mx-2">/</span>
          <span>#{flag.num}</span>
        </div>

        <div className="flex items-start gap-5 mb-8">
          <div className="font-serif text-[32px] font-bold text-[var(--red)] tabular-nums leading-none pt-1">
            #{flag.num}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-[11px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2.5">
                {isZh ? flag.stage : flag.stageEn}
              </span>
              <span
                className={`text-[11px] py-0.5 px-2.5 rounded-sm border ${
                  flag.risk === "high"
                    ? "border-[var(--red)] text-[var(--red)] bg-[var(--red-pale)]"
                    : "border-[var(--rule)] text-[var(--grey-light)]"
                }`}
              >
                {flag.risk === "high" ? t("高风险", "High Risk") : t("中风险", "Medium Risk")}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(22px,4vw,30px)] font-bold leading-snug">
              {isZh ? flag.signal : flag.signalEn}
            </h1>
            <div className="text-[13px] text-[var(--grey-light)] mt-2">
              {isZh ? flag.category : flag.categoryEn}
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">
            {t("为什么危险", "Why It's Dangerous")}
          </h2>
          <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] max-w-[680px]">
            {isZh ? flag.description : flag.descriptionEn}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">
            {t("真实案例", "Real Case")}
          </h2>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7 max-sm:p-5">
            <div className="grid grid-cols-[3px_1fr] gap-5">
              <div className="bg-[var(--red)] rounded-sm" />
              <p className="font-serif text-[15px] text-[var(--ink-soft)] leading-[1.8]">
                {isZh ? flag.realCase : flag.realCaseEn}
              </p>
            </div>
            <div className="text-[12px] text-[var(--grey-light)] mt-4 pl-5">
              {t(
                "* 以上案例已匿名化处理，细节经过调整以保护当事人隐私。",
                "* This case has been anonymized. Details have been adjusted to protect privacy."
              )}
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">
            {t("应对建议", "What To Do")}
          </h2>
          <div className="border border-[var(--rule)]">
            {(isZh ? flag.advice : flag.adviceEn).map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--green-pale)] text-[var(--green)] text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t border-[var(--rule)]">
          {prev ? (
            <Link href={`/flags/${prev.slug}`} className="text-sm text-[var(--green)] no-underline hover:underline">
              &larr; #{prev.num} {isZh ? prev.category : prev.categoryEn}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/flags/${next.slug}`} className="text-sm text-[var(--green)] no-underline hover:underline">
              #{next.num} {isZh ? next.category : next.categoryEn} &rarr;
            </Link>
          ) : (
            <div />
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
