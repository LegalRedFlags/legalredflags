import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { flags, getFlagBySlug } from "@/data/flags";

export function generateStaticParams() {
  return flags.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flag = getFlagBySlug(slug);
  if (!flag) return {};
  return {
    title: `#${flag.num} ${flag.category} — Legal Red Flags`,
    description: flag.signal,
  };
}

export default async function FlagDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const flag = getFlagBySlug(slug);
  if (!flag) notFound();

  const currentIndex = flags.findIndex((f) => f.slug === slug);
  const prev = currentIndex > 0 ? flags[currentIndex - 1] : null;
  const next = currentIndex < flags.length - 1 ? flags[currentIndex + 1] : null;

  return (
    <>
      <Navbar />
      <article className="max-w-[960px] mx-auto px-7 pt-16 pb-20">
        {/* Breadcrumb */}
        <div className="text-[13px] text-[var(--grey-light)] mb-8">
          <Link
            href="/flags"
            className="text-[var(--green)] no-underline hover:underline"
          >
            全部危险信号
          </Link>
          <span className="mx-2">/</span>
          <span>#{flag.num}</span>
        </div>

        {/* Header */}
        <div className="flex items-start gap-5 mb-8">
          <div className="font-serif text-[32px] font-bold text-[var(--red)] tabular-nums leading-none pt-1">
            #{flag.num}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <span className="text-[11px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2.5">
                {flag.stage}
              </span>
              <span
                className={`text-[11px] py-0.5 px-2.5 rounded-sm border ${
                  flag.risk === "high"
                    ? "border-[var(--red)] text-[var(--red)] bg-[var(--red-pale)]"
                    : "border-[var(--rule)] text-[var(--grey-light)]"
                }`}
              >
                {flag.risk === "high" ? "高风险" : "中风险"}
              </span>
            </div>
            <h1 className="font-serif text-[clamp(22px,4vw,30px)] font-bold leading-snug">
              {flag.signal}
            </h1>
            <div className="text-[13px] text-[var(--grey-light)] mt-2">
              {flag.category}
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">为什么危险</h2>
          <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] max-w-[680px]">
            {flag.description}
          </p>
        </section>

        {/* Real Case */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">真实案例</h2>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7 max-sm:p-5">
            <div className="grid grid-cols-[3px_1fr] gap-5">
              <div className="bg-[var(--red)] rounded-sm" />
              <p className="font-serif text-[15px] text-[var(--ink-soft)] leading-[1.8]">
                {flag.realCase}
              </p>
            </div>
            <div className="text-[12px] text-[var(--grey-light)] mt-4 pl-5">
              * 以上案例已匿名化处理，细节经过调整以保护当事人隐私。
            </div>
          </div>
        </section>

        {/* Advice */}
        <section className="mb-10">
          <h2 className="font-serif text-[18px] font-bold mb-3">应对建议</h2>
          <div className="border border-[var(--rule)]">
            {flag.advice.map((item, i) => (
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

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-[var(--rule)]">
          {prev ? (
            <Link
              href={`/flags/${prev.slug}`}
              className="text-sm text-[var(--green)] no-underline hover:underline"
            >
              &larr; #{prev.num} {prev.category}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/flags/${next.slug}`}
              className="text-sm text-[var(--green)] no-underline hover:underline"
            >
              #{next.num} {next.category} &rarr;
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
