import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedFlagChecker from "@/components/RedFlagChecker";

export const metadata = {
  title: "风险自测 — Legal Red Flags",
  description: "12 道问题，快速匹配你可能面临的法律风险信号。全程匿名，不收集任何个人信息。",
};

export default function CheckerPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          风险自测
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-4">
          回答 12 个问题，系统会自动匹配你可能面临的风险。每个问题都来自真实案例中反复出现的欺诈模式。
        </p>
        <p className="text-[13px] text-[var(--grey-light)] mb-10">
          全程匿名，不收集任何个人信息。你的回答不会被保存。
        </p>
        <RedFlagChecker />
        <div className="mt-10 bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[13px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">说明：</strong>
          本测试仅供参考，不构成法律建议。测试结果基于你提供的信息与已知欺诈模式的匹配程度。即使测试未命中任何危险信号，也不代表你的情况完全安全。如有疑虑，请咨询专业律师。
        </div>
      </section>
      <Footer />
    </>
  );
}
