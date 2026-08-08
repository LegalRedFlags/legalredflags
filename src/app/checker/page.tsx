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
          {t({ zh: "风险自测", en: "Risk Self-Check", ja: "リスク自己診断" })}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-4">
          {t({
            zh: "回答 12 个问题，系统会自动匹配你可能面临的风险。每个问题都来自真实案例中反复出现的欺诈模式。",
            en: "Answer 12 questions and we'll match the risks you may be facing. Each question comes from fraud patterns that recur in real cases.",
            ja: "12の質問に答えると、あなたが直面している可能性のあるリスクを自動的にマッチングします。各質問は実際の事例で繰り返し見られる詐欺パターンに基づいています。",
          })}
        </p>
        <p className="text-[13px] text-[var(--grey-light)] mb-10">
          {t({
            zh: "全程匿名，不收集任何个人信息。你的回答不会被保存。",
            en: "Fully anonymous — no personal data collected. Your answers are not saved.",
            ja: "完全匿名で、個人情報は一切収集しません。回答は保存されません。",
          })}
        </p>
        <RedFlagChecker />
        <div className="mt-10 bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[13px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">{t({ zh: "说明：", en: "Note: ", ja: "注意：" })}</strong>
          {t({
            zh: "本测试仅供参考，不构成法律建议。测试结果基于你提供的信息与已知欺诈模式的匹配程度。即使测试未命中任何危险信号，也不代表你的情况完全安全。如有疑虑，请咨询专业律师。",
            en: "This test is for reference only and does not constitute legal advice. Results are based on how your answers match known fraud patterns. Even if no red flags are triggered, it doesn't mean your situation is entirely safe. Consult a professional lawyer if in doubt.",
            ja: "このテストは参考用であり、法的助言を構成するものではありません。結果はあなたの回答と既知の詐欺パターンとの一致度に基づいています。危険信号が検出されなくても、状況が完全に安全であるとは限りません。疑問がある場合は、専門の弁護士にご相談ください。",
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
