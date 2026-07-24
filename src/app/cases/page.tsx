import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";

export const metadata = {
  title: "真实案例 — Legal Red Flags",
  description: "匿名化处理的真实法律受害经历，按欺诈模式分类。",
};

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          真实案例
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          这些事情真的发生过。每一个案例都来自当事人的亲历，经过匿名化处理后呈现。不是律师写的套话，是真实的全过程复盘。
        </p>

        <div className="grid gap-6">
          {cases.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6 no-underline text-inherit hover:border-[var(--grey)] transition-colors block"
            >
              <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3">
                案例 #{c.num} &mdash; {c.title}
              </div>
              <div className="font-serif text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-[640px] mb-5">
                {c.summary.length > 150
                  ? c.summary.substring(0, 150) + "..."
                  : c.summary}
              </div>
              <div className="flex gap-3 flex-wrap mb-4">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-[var(--green)] font-semibold">
                阅读完整案例 &rarr;
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[var(--ground-warm)] border border-[var(--rule)] p-8 text-center">
          <h2 className="font-serif text-[20px] font-bold mb-3">
            你也有类似的经历？
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-5 max-w-[480px] mx-auto">
            你的故事可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息。
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            提交你的经历 &rarr;
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
