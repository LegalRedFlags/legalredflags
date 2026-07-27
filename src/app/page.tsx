"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedFlagChecker from "@/components/RedFlagChecker";
import { useI18n } from "@/i18n/context";

const previewFlags = [
  { num: "01", zh: "律师要求你把费用打到个人银行账户，而非律所对公账户", en: "Your lawyer asks you to pay fees to a personal bank account instead of the firm's official account", catZh: "私账收费欺诈", catEn: "Private billing fraud", stageZh: "找律师阶段", stageEn: "Hiring stage" },
  { num: "02", zh: "律师是你的对手方或关联方介绍给你的", en: "Your lawyer was referred by your opponent or someone connected to them", catZh: "利益冲突介绍", catEn: "Conflict of interest referral", stageZh: "找律师阶段", stageEn: "Hiring stage" },
  { num: "06", zh: "律师长期不回消息，不汇报案件进展", en: "Your lawyer stops responding and gives no case updates", catZh: "消极怠工", catEn: "Ghosting / neglect", stageZh: "代理过程中", stageEn: "During representation" },
  { num: "07", zh: "律师建议你撤诉或放弃权利，但不给书面理由", en: "Your lawyer advises you to drop the case without providing written reasons", catZh: "反向操作", catEn: "Working against you", stageZh: "代理过程中", stageEn: "During representation" },
  { num: "11", zh: "有人要你以个人名义为公司债务做担保", en: "Someone asks you to personally guarantee a corporate debt", catZh: "担保陷阱", catEn: "Guarantee trap", stageZh: "合同与交易", stageEn: "Contracts & deals" },
  { num: "14", zh: "公司突然申请破产，但你知道它还有资产", en: "A company suddenly files for bankruptcy despite having assets", catZh: "虚假破产", catEn: "Sham bankruptcy", stageZh: "执行与破产", stageEn: "Enforcement" },
];

const checklistItemsZh = [
  "确认律师的执业证号，在当地司法局/律师协会官网查询是否有效",
  "确认收款账户是律所对公账户，不是律师个人账户",
  "确认合同中有明确的退费条款，了解在什么条件下可以退费",
  "确认合同上写的律师和实际为你做事的律师是同一个人",
  "确认介绍律师的人和你的对手方没有利益关系",
  "要求律师提供正式发票，检查发票内容是否完整、金额是否正确",
];

const checklistItemsEn = [
  "Verify the lawyer's license number on the local bar association website",
  "Confirm fees are paid to the firm's official account, not the lawyer's personal account",
  "Confirm the contract includes a clear refund clause",
  "Confirm the lawyer on the contract is the one actually handling your case",
  "Verify the person who referred the lawyer has no ties to your opponent",
  "Request an official invoice and check that the details and amount are correct",
];

export default function Home() {
  const { t, locale } = useI18n();
  const checklistItems = locale === "zh" ? checklistItemsZh : checklistItemsEn;

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,42px)] font-bold leading-[1.35] max-w-[680px]">
          {locale === "zh" ? (
            <>
              你的律师要求把费用打到
              <span className="text-[var(--red)]">个人账户</span>？
              <br />
              这是第一个危险信号。
            </>
          ) : (
            <>
              Your lawyer asks you to pay into a{" "}
              <span className="text-[var(--red)]">personal account</span>?
              <br />
              That's the first red flag.
            </>
          )}
        </h1>
        <p className="mt-6 text-[17px] text-[var(--grey)] leading-relaxed max-w-[560px]">
          {t(
            "我们不告诉你该请哪个律师。我们教你在请律师之前、期间和之后，该注意什么——所有内容来自真实经历，不是套话。",
            "We don't tell you which lawyer to hire. We teach you what to watch for — before, during, and after — all from real experience, not boilerplate."
          )}
        </p>
        <div className="mt-9 flex gap-4 flex-wrap">
          <Link
            href="/flags"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {t("查看全部危险信号", "View All Red Flags")} &rarr;
          </Link>
          <Link
            href="#checker"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--ink-soft)] text-[15px] font-medium no-underline border border-[var(--rule)] hover:border-[var(--grey)] transition-colors"
          >
            {t("测一测你的风险", "Check Your Risk")}
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-[960px] mx-auto px-7">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 border-t border-b border-[var(--rule)]">
          {[
            ["36", t("已识别的危险信号", "Red flags identified")],
            ["5", t("个阶段覆盖", "Stages covered")],
            ["100%", t("来自真实案例", "From real cases")],
          ].map(([num, label], i) => (
            <div
              key={i}
              className={`py-6 text-center ${i < 2 ? "border-r max-sm:border-r-0 max-sm:border-b border-[var(--rule-light)]" : ""}`}
            >
              <div className="font-serif text-[28px] font-bold text-[var(--ink)] tabular-nums">
                {num}
              </div>
              <div className="text-[13px] text-[var(--grey)] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Red Flags Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("核心内容", "Core Content")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("危险信号库", "Red Flag Database")}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t(
            "每一条信号都来自有证据支撑的真实案例。我们按法律纠纷的五个阶段分类，帮你在正确的时间点识别风险。",
            "Every signal comes from a real, evidence-backed case. We classify them across five stages of a legal dispute so you can spot risks at the right moment."
          )}
        </p>

        <div className="grid gap-px bg-[var(--rule-light)] border border-[var(--rule)]">
          {previewFlags.map((f) => (
            <Link
              key={f.num}
              href={`/flags/${f.num}`}
              className="grid grid-cols-[52px_1fr_auto] max-sm:grid-cols-[40px_1fr] items-start bg-[var(--surface)] p-[18px_20px] gap-4 no-underline text-inherit hover:bg-[var(--red-pale)] transition-colors"
            >
              <div className="font-serif text-sm font-bold text-[var(--red)] pt-0.5 tabular-nums">
                #{f.num}
              </div>
              <div>
                <div className="text-[15px] font-semibold text-[var(--ink)] leading-snug mb-1">
                  {locale === "zh" ? f.zh : f.en}
                </div>
                <div className="text-[12.5px] text-[var(--grey-light)]">
                  {locale === "zh" ? f.catZh : f.catEn}
                </div>
              </div>
              <div className="text-[11px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2.5 whitespace-nowrap self-center max-sm:hidden">
                {locale === "zh" ? f.stageZh : f.stageEn}
              </div>
            </Link>
          ))}
          <div className="bg-[var(--surface)] py-4 px-5 text-center">
            <Link
              href="/flags"
              className="text-sm text-[var(--green)] no-underline font-semibold hover:underline"
            >
              {t("查看全部 36 条危险信号", "View all 36 red flags")} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("我们提供什么", "What We Offer")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("三种方式帮你自我保护", "Three Ways to Protect Yourself")}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t(
            "不需要花钱请律师来告诉你这些。我们把六年维权踩过的坑，变成你可以直接使用的工具。",
            "You don't need to pay a lawyer to learn this. We turned six years of hard lessons into tools you can use right now."
          )}
        </p>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
          {[
            {
              icon: "⚑",
              iconClass: "bg-[var(--red-pale)] text-[var(--red)]",
              title: t("危险信号", "Red Flags"),
              desc: t(
                "36 条结构化的预警信号，按「找律师 → 代理中 → 签合同 → 执行 → 维权」五个阶段分类。每条信号配有真实案例和应对建议。",
                "36 structured warning signals classified across five stages: hiring → representation → contracts → enforcement → recourse. Each with real cases and actionable advice."
              ),
            },
            {
              icon: "✓",
              iconClass: "bg-[var(--green-pale)] text-[var(--green)]",
              title: t("检查清单", "Checklists"),
              desc: t(
                "聘请律师前的 10 项自查、签法律服务合同前的逐条审查、进入诉讼后的关键节点提醒。照着做，不遗漏。",
                "Pre-hiring checklist, contract review items, and key checkpoints during litigation. Follow them step by step — miss nothing."
              ),
            },
            {
              icon: "✎",
              iconClass: "bg-[var(--ground-warm)] text-[var(--grey)]",
              title: t("真实案例", "Real Cases"),
              desc: t(
                "匿名化处理的真实受害经历，按欺诈模式分类。不是律师写的套话，是当事人亲历的全过程复盘。",
                "Anonymized real stories classified by fraud pattern. Not lawyer-written boilerplate — full walkthroughs from the people who lived it."
              ),
            },
          ].map((p) => (
            <div
              key={p.title}
              className="bg-[var(--surface)] border border-[var(--rule)] p-7"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-lg mb-4 ${p.iconClass}`}
              >
                {p.icon}
              </div>
              <h3 className="font-serif text-[17px] font-bold mb-2.5">
                {p.title}
              </h3>
              <p className="text-sm text-[var(--grey)] leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flag Checker */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]" id="checker">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("自助工具", "Self-Check Tool")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("测一测：你的情况有多少危险信号？", "How many red flags does your situation have?")}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t(
            "回答以下问题，系统会自动匹配你可能面临的风险。全程匿名，不收集任何个人信息。",
            "Answer the questions below and we'll match the risks you may be facing. Fully anonymous — no personal data collected."
          )}
        </p>
        <RedFlagChecker />
      </section>

      {/* Case Study Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("真实案例", "Real Cases")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("这些事情，真的发生过", "These things really happened")}
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6">
          <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3.5">
            {t("案例 #1 — 私账收费 + 消极怠工", "Case #1 — Private billing + ghosting")}
          </div>
          <div className="font-serif text-lg leading-relaxed text-[var(--ink-soft)] max-w-[620px] mb-5">
            {locale === "zh" ? (
              <>
                当事人在遭遇公司纠纷、确诊重度抑郁的困境中，经人介绍委托了两名律师。第一位律师
                <strong className="text-[var(--red)] font-bold">
                  用个人账户收取了近12万元费用
                </strong>
                ，没有正式合同；第二位律师收取了19万元，
                <strong className="text-[var(--red)] font-bold">
                  代理期间从未出庭，寄来的发票是空白的
                </strong>
                。当事人花了六年时间维权，至今一分钱没有追回。
              </>
            ) : (
              <>
                Facing a business dispute and diagnosed with severe depression, the client hired two lawyers through referrals. The first{" "}
                <strong className="text-[var(--red)] font-bold">
                  collected nearly ¥120,000 into a personal account
                </strong>{" "}
                with no formal contract. The second charged ¥190,000 but{" "}
                <strong className="text-[var(--red)] font-bold">
                  never appeared in court and sent blank invoices
                </strong>
                . Six years of fighting later — not a single yuan recovered.
              </>
            )}
          </div>
          <div className="flex gap-5 flex-wrap">
            {(locale === "zh"
              ? ["私账收费", "空白发票", "消极怠工", "利益冲突介绍"]
              : ["Private billing", "Blank invoices", "Ghosting", "Conflict referral"]
            ).map((tag) => (
              <span
                key={tag}
                className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/cases/private-billing-and-ghosting"
            className="inline-block mt-5 text-sm text-[var(--green)] no-underline font-semibold hover:underline"
          >
            {t("阅读完整案例", "Read full case")} &rarr;
          </Link>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("自查工具", "Self-Check Tool")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("聘请律师前的检查清单", "Pre-hiring checklist")}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t(
            "在签合同、付钱之前，至少确认这些事情。",
            "Before signing a contract or paying — verify these at minimum."
          )}
        </p>
        <div className="border border-[var(--rule)]">
          {checklistItems.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3.5 px-6 py-4 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14.5px] text-[var(--ink-soft)] leading-snug"
            >
              <div className="w-[18px] h-[18px] border-2 border-[var(--rule)] rounded-[3px] shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t("为什么做这件事", "Why We Do This")}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t("创始人的话", "From the Founder")}
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-9 max-sm:p-6 grid grid-cols-[3px_1fr] gap-7">
          <div className="bg-[var(--red)] rounded-sm" />
          <div>
            <blockquote className="font-serif text-[17px] leading-[1.75] text-[var(--ink-soft)] mb-4">
              {t(
                "六年时间，三个城市，五个律师。其中两个纯骗，一个被对方收买并亲口承认，两个收了高额费用后消极怠工。我不是法律专业出身，走了无数弯路之后才慢慢看清这些套路。这个网站把我踩过的每一个坑变成你可以提前识别的信号。如果能让哪怕一个人少走一段弯路，这件事就值得做。",
                "Six years, three cities, five lawyers. Two were outright frauds. One was bought by the opposing side — and admitted it. Two charged premium fees and did nothing. I'm not a legal professional. It took me countless wrong turns to see the patterns. This site turns every trap I fell into a signal you can spot in advance. If even one person avoids a single wrong turn, it's worth it."
              )}
            </blockquote>
            <div className="text-[13px] text-[var(--grey-light)]">
              — {t("创始人", "Founder")} &middot; 2026
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-2.5">
            {t("订阅更新", "Stay Updated")}
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7">
            {t(
              "新的危险信号、案例分析、各国法律指南，直接发到你的邮箱。",
              "New red flags, case studies, and legal guides — delivered to your inbox."
            )}
          </p>
          <div className="flex gap-2.5 max-w-[420px] mx-auto max-sm:flex-col">
            <input
              type="email"
              placeholder={t("你的邮箱地址", "Your email address")}
              className="flex-1 py-2.5 px-4 text-sm border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[var(--green)] placeholder:text-[var(--grey-light)]"
            />
            <button className="py-2.5 px-6 bg-[var(--green)] text-white border-none text-sm font-semibold cursor-pointer whitespace-nowrap hover:opacity-90">
              {t("订阅", "Subscribe")}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
