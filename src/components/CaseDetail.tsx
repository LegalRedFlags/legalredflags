"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";
import type { CaseStudy } from "@/data/cases";

export default function CaseDetail({ c }: { c: CaseStudy }) {
  const { t, locale } = useI18n();

  const title = locale === "zh" ? c.title : locale === "ja" ? (c.titleJa ?? c.titleEn) : c.titleEn;
  const tags = locale === "zh" ? c.tags : locale === "ja" ? (c.tagsJa ?? c.tagsEn) : c.tagsEn;
  const summary = locale === "zh" ? c.summary : locale === "ja" ? (c.summaryJa ?? c.summaryEn) : c.summaryEn;
  const timeline = locale === "zh" ? c.timeline : locale === "ja" ? (c.timelineJa ?? c.timelineEn) : c.timelineEn;
  const redFlags = locale === "zh" ? c.redFlags : locale === "ja" ? (c.redFlagsJa ?? c.redFlagsEn) : c.redFlagsEn;
  const lessons = locale === "zh" ? c.lessons : locale === "ja" ? (c.lessonsJa ?? c.lessonsEn) : c.lessonsEn;

  return (
    <>
      <Navbar />
      <article className="max-w-[960px] mx-auto px-7 pt-16 pb-20">
        <div className="text-[13px] text-[var(--grey-light)] mb-8">
          <Link href="/cases" className="text-[var(--green)] no-underline hover:underline">
            {t({ zh: "真实案例", en: "Real Cases", ja: "実際の事例" })}
          </Link>
          <span className="mx-2">/</span>
          <span>{t({ zh: "案例", en: "Case", ja: "事例" })} #{c.num}</span>
        </div>

        <div className="mb-10">
          <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
            {t({ zh: "案例", en: "Case", ja: "事例" })} #{c.num}
          </div>
          <h1 className="font-serif text-[clamp(24px,4vw,34px)] font-bold leading-snug mb-4">
            {title}
          </h1>
          <div className="flex gap-3 flex-wrap">
            {tags.map((tag) => (
              <span key={tag} className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">{t({ zh: "案件概述", en: "Case Summary", ja: "事件の概要" })}</h2>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7 max-sm:p-5">
            <div className="grid grid-cols-[3px_1fr] gap-5">
              <div className="bg-[var(--red)] rounded-sm" />
              <p className="font-serif text-[16px] text-[var(--ink-soft)] leading-[1.8]">{summary}</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-5">{t({ zh: "事件经过", en: "Timeline", ja: "経緯" })}</h2>
          <div className="relative pl-8 border-l-2 border-[var(--rule)]">
            {timeline.map((item, i) => (
              <div key={i} className="mb-6 last:mb-0 relative">
                <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--ground)] border-2 border-[var(--red)]" />
                <div className="text-[13px] font-bold text-[var(--red)] mb-1">{item.date}</div>
                <p className="text-[14.5px] text-[var(--ink-soft)] leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">{t({ zh: "涉及的危险信号", en: "Red Flags Involved", ja: "該当する危険信号" })}</h2>
          <div className="border border-[var(--rule)]">
            {redFlags.map((rf, i) => (
              <div key={i} className="flex items-start gap-3 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug">
                <div className="w-2 h-2 rounded-full bg-[var(--red)] shrink-0 mt-1.5" />
                {rf}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">{t({ zh: "经验教训", en: "Lessons Learned", ja: "教訓" })}</h2>
          <div className="border border-[var(--rule)]">
            {lessons.map((lesson, i) => (
              <div key={i} className="flex items-start gap-3.5 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug">
                <div className="w-5 h-5 rounded-full bg-[var(--green-pale)] text-[var(--green)] text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                {lesson}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-6 text-[13px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">{t({ zh: "声明：", en: "Disclaimer: ", ja: "免責事項：" })}</strong>
          {t({
            zh: "以上案例已经过严格的匿名化处理，所有个人信息、公司名称、具体金额和地点均已调整或替换，以保护当事人隐私。案例的核心事实和欺诈模式是真实的。",
            en: "This case has been strictly anonymized. All personal information, company names, specific amounts, and locations have been adjusted or replaced to protect privacy. The core facts and fraud patterns are real.",
            ja: "本事例は厳格な匿名化処理を施しています。すべての個人情報、会社名、具体的な金額、場所は、当事者のプライバシー保護のために変更または置き換えられています。事件の核心的事実と詐欺の手口は実際のものです。",
          })}
        </div>

        <div className="mt-10 bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6 text-center">
          <h3 className="font-serif text-[18px] font-bold mb-2">
            {t({ zh: "关于这个案例，你怎么看？", en: "What do you think about this case?", ja: "この事例についてどう思いますか？" })}
          </h3>
          <p className="text-[14px] text-[var(--grey)] mb-5 max-w-[440px] mx-auto">
            {t({
              zh: "有类似经历？有不同看法？欢迎在讨论区分享你的想法。",
              en: "Had a similar experience? A different perspective? Share your thoughts in the discussion.",
              ja: "似たような経験はありますか？違う見方はありますか？ディスカッションであなたの考えを共有してください。",
            })}
          </p>
          <a
            href={`https://github.com/LegalRedFlags/legalredflags/discussions/new?category=general&title=${encodeURIComponent(`${locale === "zh" ? "案例" : locale === "ja" ? "事例" : "Case"} #${c.num}${locale === "zh" ? "：" : ": "}${title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--ink)] text-[var(--ground)] text-[14px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            {t({ zh: "参与讨论", en: "Join Discussion", ja: "ディスカッションに参加" })}
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--rule)]">
          <Link href="/cases" className="text-sm text-[var(--green)] no-underline hover:underline">
            &larr; {t({ zh: "返回全部案例", en: "Back to all cases", ja: "すべての事例に戻る" })}
          </Link>
        </div>
      </article>
      <Footer />
    </>
  );
}
