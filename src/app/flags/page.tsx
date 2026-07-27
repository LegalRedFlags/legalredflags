"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { flags, stages, stagesEn } from "@/data/flags";
import { useI18n } from "@/i18n/context";

export default function FlagsPage() {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";
  const stageMap = isZh ? stages : stagesEn;

  const grouped = Object.entries(stageMap).map(([key, label]) => ({
    key,
    label,
    items: flags.filter((f) => f.stageKey === key),
  }));

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("全部危险信号", "All Red Flags")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t(
            "36 条结构化的预警信号，来自有证据支撑的真实案例。按法律纠纷的五个阶段分类，帮你在正确的时间点识别风险。",
            "36 structured warning signals from evidence-backed real cases. Classified across five stages of a legal dispute to help you spot risks at the right moment."
          )}
        </p>

        {grouped.map((group) => (
          <div key={group.key} className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-serif text-[20px] font-bold">{group.label}</h2>
              <span className="text-[12px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2">
                {group.items.length} {isZh ? "条" : "flags"}
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
                      {isZh ? f.signal : f.signalEn}
                    </div>
                    <div className="text-[12.5px] text-[var(--grey-light)]">
                      {isZh ? f.category : f.categoryEn}
                    </div>
                  </div>
                  <div
                    className={`text-[11px] py-0.5 px-2.5 whitespace-nowrap self-center max-sm:hidden border rounded-sm ${
                      f.risk === "high"
                        ? "border-[var(--red)] text-[var(--red)] bg-[var(--red-pale)]"
                        : "border-[var(--rule)] text-[var(--grey-light)]"
                    }`}
                  >
                    {f.risk === "high" ? t("高风险", "High Risk") : t("中风险", "Medium Risk")}
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
