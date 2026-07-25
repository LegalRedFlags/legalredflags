import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "提交你的经历 — Legal Red Flags",
  description: "分享你的法律维权经历，帮助更多人识别风险。所有信息严格匿名化处理。",
};

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          提交你的经历
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          你的亲身经历可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息，绝不泄露任何可识别身份的细节。
        </p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7">
            <div className="w-10 h-10 rounded-full bg-[var(--green-pale)] text-[var(--green)] flex items-center justify-center text-lg mb-4">
              1
            </div>
            <h3 className="font-serif text-[17px] font-bold mb-2">你来讲述</h3>
            <p className="text-[14px] text-[var(--grey)] leading-relaxed">
              通过邮件或加密表单，告诉我们你的经历。不需要完美的叙述——关键的时间线、涉及的欺诈行为、你吸取的教训，这些就够了。
            </p>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7">
            <div className="w-10 h-10 rounded-full bg-[var(--green-pale)] text-[var(--green)] flex items-center justify-center text-lg mb-4">
              2
            </div>
            <h3 className="font-serif text-[17px] font-bold mb-2">
              我们匿名化
            </h3>
            <p className="text-[14px] text-[var(--grey)] leading-relaxed">
              我们会替换所有个人信息、公司名称、具体金额和地点。发布前会请你确认，确保你对最终版本满意。
            </p>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7">
            <div className="w-10 h-10 rounded-full bg-[var(--green-pale)] text-[var(--green)] flex items-center justify-center text-lg mb-4">
              3
            </div>
            <h3 className="font-serif text-[17px] font-bold mb-2">
              帮助他人
            </h3>
            <p className="text-[14px] text-[var(--grey)] leading-relaxed">
              你的经历会被整理成结构化的案例，提取出危险信号和经验教训，帮助后来者识别同类风险。
            </p>
          </div>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-7">
            <div className="w-10 h-10 rounded-full bg-[var(--red-pale)] text-[var(--red)] flex items-center justify-center text-lg mb-4">
              !
            </div>
            <h3 className="font-serif text-[17px] font-bold mb-2">
              我们的承诺
            </h3>
            <p className="text-[14px] text-[var(--grey)] leading-relaxed">
              绝不公开任何可识别身份的信息。不会在未经你确认的情况下发布任何内容。你可以随时要求撤回。
            </p>
          </div>
        </div>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-3">
            通过邮件提交
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7 max-w-[480px] mx-auto">
            发送你的经历到以下邮箱。你可以使用匿名邮箱，我们不要求你透露真实身份。
          </p>
          <a
            href="mailto:submit@legalredflags.org?subject=提交我的经历"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            submit@legalredflags.org
          </a>
          <p className="text-[13px] text-[var(--grey-light)] mt-4">
            或发送到{" "}
            <a
              href="mailto:submit@legalredflags.org"
              className="text-[var(--green)] no-underline"
            >
              submit@legalredflags.org
            </a>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--rule)]">
          <Link
            href="/cases"
            className="text-sm text-[var(--green)] no-underline hover:underline"
          >
            &larr; 查看已发布的案例
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
