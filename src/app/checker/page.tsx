"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedFlagChecker from "@/components/RedFlagChecker";
import { useI18n } from "@/i18n/context";

export default function CheckerPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("风险自测", "Risk Self-Check")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-4">
          {t(
            "回答 12 个问题，系统会自动匹配你可能面临的风险。每个问题都来自真实案例中反复出现的欺诈模式。",
            "Answer 12 questions and we'll match the risks you may be facing. Each question comes from fraud patterns that recur in real cases."
          )}
        </p>
        <p className="text-[13px] text-[var(--grey-light)] mb-10">
          {t(
            "全程匿名，不收集任何个人信息。你的回答不会被保存。",
            "Fully anonymous — no personal data collected. Your answers are not saved."
          )}
        </p>
        <RedFlagChecker />
        <div className="mt-10 bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[13px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">{t("说明：", "Note: ")}</strong>
          {t(
            "本测试仅供参考，不构成法律建议。测试结果基于你提供的信息与已知欺诈模式的匹配程度。即使测试未命中任何危险信号，也不代表你的情况完全安全。如有疑虑，请咨询专业律师。",
            "This test is for reference only and does not constitute legal advice. Results are based on how your answers match known fraud patterns. Even if no red flags are triggered, it doesn't mean your situation is entirely safe. Consult a professional lawyer if in doubt."
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
