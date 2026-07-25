"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function SubmitPage() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("提交你的经历", "Share Your Story")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t(
            "你的亲身经历可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息，绝不泄露任何可识别身份的细节。",
            "Your firsthand experience can help others avoid the same traps. We strictly anonymize all personal information and never reveal any identifiable details."
          )}
        </p>

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
          {[
            {
              num: "1",
              color: "var(--green-pale)",
              textColor: "var(--green)",
              title: t("你来讲述", "You Tell Us"),
              desc: t(
                "通过邮件或加密表单，告诉我们你的经历。不需要完美的叙述——关键的时间线、涉及的欺诈行为、你吸取的教训，这些就够了。",
                "Tell us your story via email. No need for a perfect narrative — the key timeline, the fraud involved, and your lessons learned are enough."
              ),
            },
            {
              num: "2",
              color: "var(--green-pale)",
              textColor: "var(--green)",
              title: t("我们匿名化", "We Anonymize"),
              desc: t(
                "我们会替换所有个人信息、公司名称、具体金额和地点。发布前会请你确认，确保你对最终版本满意。",
                "We replace all personal info, company names, specific amounts, and locations. We'll ask you to confirm before publishing."
              ),
            },
            {
              num: "3",
              color: "var(--green-pale)",
              textColor: "var(--green)",
              title: t("帮助他人", "Help Others"),
              desc: t(
                "你的经历会被整理成结构化的案例，提取出危险信号和经验教训，帮助后来者识别同类风险。",
                "Your experience becomes a structured case study with extracted red flags and lessons, helping others spot similar risks."
              ),
            },
            {
              num: "!",
              color: "var(--red-pale)",
              textColor: "var(--red)",
              title: t("我们的承诺", "Our Promise"),
              desc: t(
                "绝不公开任何可识别身份的信息。不会在未经你确认的情况下发布任何内容。你可以随时要求撤回。",
                "We never reveal identifiable information. Nothing is published without your confirmation. You can request removal at any time."
              ),
            },
          ].map((item) => (
            <div key={item.num} className="bg-[var(--surface)] border border-[var(--rule)] p-7">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4"
                style={{ background: item.color, color: item.textColor }}
              >
                {item.num}
              </div>
              <h3 className="font-serif text-[17px] font-bold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[var(--grey)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-3">
            {t("通过邮件提交", "Submit via Email")}
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7 max-w-[480px] mx-auto">
            {t(
              "发送你的经历到以下邮箱。你可以使用匿名邮箱，我们不要求你透露真实身份。",
              "Send your story to the email below. You may use an anonymous email — we don't require your real identity."
            )}
          </p>
          <a
            href="mailto:submit@legalredflags.org?subject=提交我的经历"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            submit@legalredflags.org
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--rule)]">
          <Link
            href="/cases"
            className="text-sm text-[var(--green)] no-underline hover:underline"
          >
            &larr; {t("查看已发布的案例", "View published cases")}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
