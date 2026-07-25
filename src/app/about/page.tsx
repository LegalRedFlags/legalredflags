"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function AboutPage() {
  const { t, locale } = useI18n();

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("关于我们", "About Us")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-16">
          {t(
            "Legal Red Flags 不是一个法律服务机构。我们是一群被法律行业伤害过的人，用自己的经历帮助更多人避免同样的弯路。",
            "Legal Red Flags is not a law firm. We are people who were harmed by the legal industry, using our experience to help others avoid the same traps."
          )}
        </p>

        {/* Origin Story */}
        <div className="mb-14">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
            {t("缘起", "Origin")}
          </div>
          <h2 className="font-serif text-[22px] font-bold mb-4">
            {t("为什么做这件事", "Why We Do This")}
          </h2>
          <div className="bg-[var(--surface)] border border-[var(--rule)] p-9 max-sm:p-6 grid grid-cols-[3px_1fr] gap-7">
            <div className="bg-[var(--red)] rounded-sm" />
            <div>
              <blockquote className="font-serif text-[17px] leading-[1.8] text-[var(--ink-soft)] mb-6">
                {t(
                  "数年时间，多地维权，换过多个律师。有的纯骗，有的被对方收买并亲口承认，有的收了高额费用后消极怠工。",
                  "Years of fighting, across multiple cities, through multiple lawyers. Some were outright frauds. One was bought by the opposing side — and admitted it. Others charged premium fees and did nothing."
                )}
              </blockquote>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] mb-4">
                {t(
                  "我不是法律专业出身。数年前，我因为一起公司纠纷，衍生了多起诉讼耗时数年，不得不开始接触法律行业。那时的我，就像大多数普通人一样——相信律师是专业人士，相信花了钱就能得到专业服务，相信法律会保护正义。",
                  "I'm not a legal professional. Years ago, a business dispute spiraled into multiple lawsuits spanning years and forced me into the legal system. Like most people, I believed lawyers were professionals, that paying meant getting professional service, and that the law would protect justice."
                )}
              </p>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8] mb-4">
                {t(
                  "数年后，我花了数十万元律师费，没有追回一分钱，更没有得到任何所谓的正义，赢了官司输了时间输了钱输了人生。但我得到了另一样东西：律师这个行业很黑暗，这个行业中每一种欺诈模式的深刻理解。每一次被骗，每一次走弯路，都让我看清了一个普通人在法律体系中可能遇到的陷阱。",
                  "Years and hundreds of thousands of yuan in legal fees later, I haven't recovered a single yuan — let alone any so-called justice. I won lawsuits but lost time, money, and years of my life. But I gained something else: the legal industry has a dark side, and I now have a deep understanding of every fraud pattern within it. Each scam, each wrong turn revealed the traps an ordinary person can fall into."
                )}
              </p>
              <p className="text-[15px] text-[var(--ink-soft)] leading-[1.8]">
                {t(
                  "这个网站的每一条危险信号、每一个案例、每一条建议，都来自真实的经历——不是教科书上的理论，不是律师写的套话，而是一个普通人用钱和时间换来的教训。如果这些教训能让哪怕一个人少走一段弯路，这件事就值得做。",
                  "Every red flag, every case, every piece of advice on this site comes from real experience — not textbook theory, not lawyer boilerplate, but lessons an ordinary person paid for with money and time. If these lessons save even one person from a single wrong turn, it's worth it."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-14">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
            {t("使命", "Mission")}
          </div>
          <h2 className="font-serif text-[22px] font-bold mb-4">
            {t("我们做什么", "What We Do")}
          </h2>
          <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            {[
              {
                title: t("我们做的", "What we do"),
                color: "var(--green)",
                items: locale === "zh"
                  ? [
                      "提供基于真实案例的风险识别教育",
                      "帮助你在请律师之前了解该注意什么",
                      "提供匿名化的真实案例复盘",
                      "提供结构化的自查工具和检查清单",
                    ]
                  : [
                      "Risk identification education based on real cases",
                      "Help you know what to watch for before hiring a lawyer",
                      "Anonymized real case walkthroughs",
                      "Structured self-check tools and checklists",
                    ],
              },
              {
                title: t("我们不做的", "What we don't do"),
                color: "var(--red)",
                items: locale === "zh"
                  ? [
                      "不推荐或介绍任何律师",
                      "不提供具体的法律建议",
                      "不替代专业律师的服务",
                      "不收集或出售任何用户数据",
                    ]
                  : [
                      "We don't recommend or refer any lawyers",
                      "We don't provide specific legal advice",
                      "We don't replace professional legal services",
                      "We don't collect or sell any user data",
                    ],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="bg-[var(--surface)] border border-[var(--rule)] p-7"
              >
                <h3
                  className="font-serif text-[17px] font-bold mb-4"
                  style={{ color: col.color }}
                >
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[14.5px] text-[var(--ink-soft)] leading-snug"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: col.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mb-14">
          <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
            {t("原则", "Principles")}
          </div>
          <h2 className="font-serif text-[22px] font-bold mb-4">
            {t("我们的承诺", "Our Commitments")}
          </h2>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
            {[
              {
                num: "01",
                title: t("真实", "Authentic"),
                desc: t(
                  "所有内容来自真实经历，不编造、不夸大。每一条危险信号都有真实案例支撑。",
                  "All content comes from real experience — nothing fabricated or exaggerated. Every red flag is backed by a real case."
                ),
              },
              {
                num: "02",
                title: t("独立", "Independent"),
                desc: t(
                  "我们不接受任何律所或法律机构的赞助。不推荐、不介绍、不为任何律师背书。",
                  "We accept no sponsorship from law firms or legal institutions. We don't recommend, refer, or endorse any lawyer."
                ),
              },
              {
                num: "03",
                title: t("免费", "Free"),
                desc: t(
                  "核心内容永远免费。这是一个公益项目，不以营利为目的。",
                  "Core content is free forever. This is a public interest project, not for profit."
                ),
              },
            ].map((p) => (
              <div
                key={p.num}
                className="bg-[var(--surface)] border border-[var(--rule)] p-7"
              >
                <div className="font-serif text-[24px] font-bold text-[var(--rule)] mb-3">
                  {p.num}
                </div>
                <h3 className="font-serif text-[17px] font-bold mb-2">
                  {p.title}
                </h3>
                <p className="text-[14px] text-[var(--grey)] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-3">
            {t("加入我们", "Join Us")}
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7 max-w-[480px] mx-auto">
            {t(
              "如果你有类似的经历，你的故事可以帮助更多人。如果你是法律专业人士，你的专业知识可以让这个平台更加准确。",
              "If you've had a similar experience, your story can help others. If you're a legal professional, your expertise can make this platform more accurate."
            )}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
            >
              {t("提交你的经历", "Share Your Story")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--ink-soft)] text-[15px] font-medium no-underline border border-[var(--rule)] hover:border-[var(--grey)] transition-colors"
            >
              {t("联系我们", "Contact Us")}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
