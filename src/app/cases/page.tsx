"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";
import { useI18n } from "@/i18n/context";

export default function CasesPage() {
  const { t, locale } = useI18n();
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t({ zh: "真实案例", en: "Real Cases", ja: "実際の事例" })}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t({
            zh: "这些事情真的发生过。每一个案例都来自当事人的亲历，经过匿名化处理后呈现。不是律师写的套话，是真实的全过程复盘。",
            en: "These things really happened. Every case comes from a real person's experience, presented after strict anonymization. Not legal boilerplate — real, full-process retrospectives.",
            ja: "これらは実際に起きたことです。すべての事例は当事者の実体験に基づき、厳格な匿名化処理を経て掲載しています。弁護士の定型文ではなく、リアルな全過程の振り返りです。",
          })}
        </p>

        <div className="grid gap-6">
          {cases.map((c) => {
            const title = locale === "zh" ? c.title : locale === "ja" ? (c.titleJa ?? c.titleEn) : c.titleEn;
            const summary = locale === "zh" ? c.summary : locale === "ja" ? (c.summaryJa ?? c.summaryEn) : c.summaryEn;
            const tags = locale === "zh" ? c.tags : locale === "ja" ? (c.tagsJa ?? c.tagsEn) : c.tagsEn;
            return (
              <Link
                key={c.slug}
                href={`/cases/${c.slug}`}
                className="bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6 no-underline text-inherit hover:border-[var(--grey)] transition-colors block"
              >
                <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
                  {t({ zh: "案例", en: "Case", ja: "事例" })} #{c.num} &mdash; {title}
                </div>
                <div className="font-serif text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-[640px] mb-5">
                  {summary.length > 150
                    ? summary.substring(0, 150) + "..."
                    : summary}
                </div>
                <div className="flex gap-3 flex-wrap mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-[var(--green)] font-semibold">
                  {t({ zh: "阅读完整案例", en: "Read full case", ja: "事例の全文を読む" })} &rarr;
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-[var(--ground-warm)] border border-[var(--rule)] p-8 text-center">
          <h2 className="font-serif text-[20px] font-bold mb-3">
            {t({ zh: "你也有类似的经历？", en: "Had a similar experience?", ja: "同じような経験はありませんか？" })}
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-5 max-w-[480px] mx-auto">
            {t({
              zh: "你的故事可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息。",
              en: "Your story can help others avoid the same traps. We strictly anonymize all personal information.",
              ja: "あなたの体験が、他の人が同じ罠に陥るのを防ぐ助けになります。すべての個人情報は厳格に匿名化処理します。",
            })}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              {t({ zh: "提交你的经历", en: "Submit your story", ja: "体験を投稿する" })} &rarr;
            </Link>
            <a
              href="https://github.com/LegalRedFlags/legalredflags/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--ink-soft)] text-[15px] font-medium no-underline border border-[var(--rule)] hover:border-[var(--grey)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              {t({ zh: "加入讨论区", en: "Join Discussion", ja: "ディスカッションに参加" })}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
