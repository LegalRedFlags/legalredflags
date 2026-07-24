import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases, getCaseBySlug } from "@/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) return {};
  return {
    title: `案例 #${c.num} ${c.title} — Legal Red Flags`,
    description: c.summary.substring(0, 160),
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCaseBySlug(slug);
  if (!c) notFound();

  return (
    <>
      <Navbar />
      <article className="max-w-[960px] mx-auto px-7 pt-16 pb-20">
        {/* Breadcrumb */}
        <div className="text-[13px] text-[var(--grey-light)] mb-8">
          <Link
            href="/cases"
            className="text-[var(--green)] no-underline hover:underline"
          >
            真实案例
          </Link>
          <span className="mx-2">/</span>
          <span>案例 #{c.num}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
            案例 #{c.num}
          </div>
          <h1 className="font-serif text-[clamp(24px,4vw,34px)] font-bold leading-snug mb-4">
            {c.title}
          </h1>
          <div className="flex gap-3 flex-wrap">
            {c.tags.map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">案件概述</h2>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7 max-sm:p-5">
            <div className="grid grid-cols-[3px_1fr] gap-5">
              <div className="bg-[var(--red)] rounded-sm" />
              <p className="font-serif text-[16px] text-[var(--ink-soft)] leading-[1.8]">
                {c.summary}
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-5">事件经过</h2>
          <div className="relative pl-8 border-l-2 border-[var(--rule)]">
            {c.timeline.map((t, i) => (
              <div key={i} className="mb-6 last:mb-0 relative">
                <div className="absolute -left-[33px] top-1 w-3 h-3 rounded-full bg-[var(--ground)] border-2 border-[var(--red)]" />
                <div className="text-[13px] font-bold text-[var(--red)] mb-1">
                  {t.date}
                </div>
                <p className="text-[14.5px] text-[var(--ink-soft)] leading-relaxed">
                  {t.event}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">
            涉及的危险信号
          </h2>
          <div className="border border-[var(--rule)]">
            {c.redFlags.map((rf, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--red)] shrink-0 mt-1.5" />
                {rf}
              </div>
            ))}
          </div>
        </section>

        {/* Lessons */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">经验教训</h2>
          <div className="border border-[var(--rule)]">
            {c.lessons.map((lesson, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug"
              >
                <div className="w-5 h-5 rounded-full bg-[var(--green-pale)] text-[var(--green)] text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                {lesson}
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-6 text-[13px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">声明：</strong>
          以上案例已经过严格的匿名化处理，所有个人信息、公司名称、具体金额和地点均已调整或替换，以保护当事人隐私。案例的核心事实和欺诈模式是真实的。
        </div>

        {/* Back */}
        <div className="mt-8 pt-8 border-t border-[var(--rule)]">
          <Link
            href="/cases"
            className="text-sm text-[var(--green)] no-underline hover:underline"
          >
            &larr; 返回全部案例
          </Link>
        </div>
      </article>
      <Footer />
    </>
  );
}
