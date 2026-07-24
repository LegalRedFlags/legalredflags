import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { flags, stages } from "@/data/flags";

export const metadata = {
  title: "全部危险信号 — Legal Red Flags",
  description: "20 条来自真实案例的法律纠纷危险信号，按五个阶段分类。",
};

export default function FlagsPage() {
  const grouped = Object.entries(stages).map(([key, label]) => ({
    key,
    label,
    items: flags.filter((f) => f.stageKey === key),
  }));

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          全部危险信号
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          20 条结构化的预警信号，来自有证据支撑的真实案例。按法律纠纷的五个阶段分类，帮你在正确的时间点识别风险。
        </p>

        {grouped.map((group) => (
          <div key={group.key} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-serif text-[20px] font-bold">
                {group.label}
              </h2>
              <span className="text-[12px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2">
                {group.items.length} 条
              </span>
            </div>
            <div className="grid gap-px bg-[var(--rule-light)] border border-[var(--rule)]">
              {group.items.map((f) => (
                <Link
                  key={f.slug}
                  href={`/flags/${f.slug}`}
                  className="grid grid-cols-[52px_1fr_auto] max-sm:grid-cols-[40px_1fr] items-start bg-[var(--surface)] p-[18px_20px] gap-4 no-underline text-inherit hover:bg-[var(--red-pale)] transition-colors"
                >
                  <div className="font-serif text-sm font-bold text-[var(--red)] pt-0.5 tabular-nums">
                    #{f.num}
                  </div>
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--ink)] leading-snug mb-1">
                      {f.signal}
                    </div>
                    <div className="text-[12.5px] text-[var(--grey-light)]">
                      {f.category}
                    </div>
                  </div>
                  <div
                    className={`text-[11px] py-0.5 px-2.5 whitespace-nowrap self-center max-sm:hidden border rounded-sm ${
                      f.risk === "high"
                        ? "border-[var(--red)] text-[var(--red)] bg-[var(--red-pale)]"
                        : "border-[var(--rule)] text-[var(--grey-light)]"
                    }`}
                  >
                    {f.risk === "high" ? "高风险" : "中风险"}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
