import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedFlagChecker from "@/components/RedFlagChecker";

const previewFlags = [
  { num: "01", signal: "律师要求你把费用打到个人银行账户，而非律所对公账户", category: "私账收费欺诈", stage: "找律师阶段" },
  { num: "02", signal: "律师是你的对手方或关联方介绍给你的", category: "利益冲突介绍", stage: "找律师阶段" },
  { num: "06", signal: "律师长期不回消息，不汇报案件进展", category: "消极怠工", stage: "代理过程中" },
  { num: "07", signal: "律师建议你撤诉或放弃权利，但不给书面理由", category: "反向操作", stage: "代理过程中" },
  { num: "11", signal: "有人要你以个人名义为公司债务做担保", category: "担保陷阱", stage: "合同与交易" },
  { num: "14", signal: "公司突然申请破产，但你知道它还有资产", category: "虚假破产", stage: "执行与破产" },
];

const checklistItems = [
  "确认律师的执业证号，在当地司法局/律师协会官网查询是否有效",
  "确认收款账户是律所对公账户，不是律师个人账户",
  "确认合同中有明确的退费条款，了解在什么条件下可以退费",
  "确认合同上写的律师和实际为你做事的律师是同一个人",
  "确认介绍律师的人和你的对手方没有利益关系",
  "要求律师提供正式发票，检查发票内容是否完整、金额是否正确",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,42px)] font-bold leading-[1.35] max-w-[680px]">
          你的律师要求把费用打到
          <span className="text-[var(--red)]">个人账户</span>？
          <br />
          这是第一个危险信号。
        </h1>
        <p className="mt-6 text-[17px] text-[var(--grey)] leading-relaxed max-w-[560px]">
          我们不告诉你该请哪个律师。我们教你在请律师之前、期间和之后，该注意什么——所有内容来自真实经历，不是套话。
        </p>
        <div className="mt-9 flex gap-4 flex-wrap">
          <Link
            href="/flags"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            查看全部危险信号 &rarr;
          </Link>
          <Link
            href="#checker"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--ink-soft)] text-[15px] font-medium no-underline border border-[var(--rule)] hover:border-[var(--grey)] transition-colors"
          >
            测一测你的风险
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-[960px] mx-auto px-7">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 border-t border-b border-[var(--rule)]">
          {[
            ["20+", "已识别的危险信号"],
            ["5", "个阶段覆盖"],
            ["100%", "来自真实案例"],
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
          核心内容
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          危险信号库
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          每一条信号都来自有证据支撑的真实案例。我们按法律纠纷的五个阶段分类，帮你在正确的时间点识别风险。
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
                  {f.signal}
                </div>
                <div className="text-[12.5px] text-[var(--grey-light)]">
                  {f.category}
                </div>
              </div>
              <div className="text-[11px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2.5 whitespace-nowrap self-center max-sm:hidden">
                {f.stage}
              </div>
            </Link>
          ))}
          <div className="bg-[var(--surface)] py-4 px-5 text-center">
            <Link
              href="/flags"
              className="text-sm text-[var(--green)] no-underline font-semibold hover:underline"
            >
              查看全部 20+ 条危险信号 &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          我们提供什么
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          三种方式帮你自我保护
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          不需要花钱请律师来告诉你这些。我们把六年维权踩过的坑，变成你可以直接使用的工具。
        </p>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
          {[
            {
              icon: "⚑",
              iconClass: "bg-[var(--red-pale)] text-[var(--red)]",
              title: "危险信号",
              desc: "20+ 条结构化的预警信号，按「找律师 → 代理中 → 签合同 → 执行 → 维权」五个阶段分类。每条信号配有真实案例和应对建议。",
            },
            {
              icon: "✓",
              iconClass: "bg-[var(--green-pale)] text-[var(--green)]",
              title: "检查清单",
              desc: "聘请律师前的 10 项自查、签法律服务合同前的逐条审查、进入诉讼后的关键节点提醒。照着做，不遗漏。",
            },
            {
              icon: "✎",
              iconClass: "bg-[var(--ground-warm)] text-[var(--grey)]",
              title: "真实案例",
              desc: "匿名化处理的真实受害经历，按欺诈模式分类。不是律师写的套话，是当事人亲历的全过程复盘。",
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
          自助工具
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          测一测：你的情况有多少危险信号？
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          回答以下问题，系统会自动匹配你可能面临的风险。全程匿名，不收集任何个人信息。
        </p>
        <RedFlagChecker />
      </section>

      {/* Case Study Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          真实案例
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          这些事情，真的发生过
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6">
          <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3.5">
            案例 #1 &mdash; 私账收费 + 消极怠工
          </div>
          <div className="font-serif text-lg leading-relaxed text-[var(--ink-soft)] max-w-[620px] mb-5">
            当事人在遭遇公司纠纷、确诊重度抑郁的困境中，经人介绍委托了两名律师。第一位律师
            <strong className="text-[var(--red)] font-bold">
              用个人账户收取了近12万元费用
            </strong>
            ，没有正式合同；第二位律师收取了19万元，
            <strong className="text-[var(--red)] font-bold">
              代理期间从未出庭，寄来的发票是空白的
            </strong>
            。当事人花了六年时间维权，至今一分钱没有追回。
          </div>
          <div className="flex gap-5 flex-wrap">
            {["私账收费", "空白发票", "消极怠工", "利益冲突介绍"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-[12.5px] text-[var(--grey)] py-1 px-3 bg-[var(--ground-warm)] rounded-sm"
                >
                  {tag}
                </span>
              )
            )}
          </div>
          <Link
            href="/cases/private-billing-and-ghosting"
            className="inline-block mt-5 text-sm text-[var(--green)] no-underline font-semibold hover:underline"
          >
            阅读完整案例 &rarr;
          </Link>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          自查工具
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          聘请律师前的检查清单
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          在签合同、付钱之前，至少确认这些事情。
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
          为什么做这件事
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          创始人的话
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-9 max-sm:p-6 grid grid-cols-[3px_1fr] gap-7">
          <div className="bg-[var(--red)] rounded-sm" />
          <div>
            <blockquote className="font-serif text-[17px] leading-[1.75] text-[var(--ink-soft)] mb-4">
              六年时间，三个城市，五个律师。其中两个纯骗，一个被对方收买并亲口承认，两个收了高额费用后消极怠工。我不是法律专业出身，走了无数弯路之后才慢慢看清这些套路。这个网站把我踩过的每一个坑变成你可以提前识别的信号。如果能让哪怕一个人少走一段弯路，这件事就值得做。
            </blockquote>
            <div className="text-[13px] text-[var(--grey-light)]">
              — 创始人 &middot; 2026
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-2.5">
            订阅更新
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7">
            新的危险信号、案例分析、各国法律指南，直接发到你的邮箱。
          </p>
          <div className="flex gap-2.5 max-w-[420px] mx-auto max-sm:flex-col">
            <input
              type="email"
              placeholder="你的邮箱地址"
              className="flex-1 py-2.5 px-4 text-sm border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[var(--green)] placeholder:text-[var(--grey-light)]"
            />
            <button className="py-2.5 px-6 bg-[var(--green)] text-white border-none text-sm font-semibold cursor-pointer whitespace-nowrap hover:opacity-90">
              订阅
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
