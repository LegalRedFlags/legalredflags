"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RedFlagChecker from "@/components/RedFlagChecker";
import { useI18n } from "@/i18n/context";

const previewFlags = [
  { num: "01", zh: "律师要求你把费用打到个人银行账户，而非律所对公账户", en: "Your lawyer asks you to pay fees to a personal bank account instead of the firm's official account", ja: "弁護士が事務所の公式口座ではなく、個人の銀行口座への支払いを求める", catZh: "私账收费欺诈", catEn: "Private billing fraud", catJa: "個人口座への請求詐欺", stageZh: "找律师阶段", stageEn: "Hiring stage", stageJa: "弁護士選び段階" },
  { num: "02", zh: "律师是你的对手方或关联方介绍给你的", en: "Your lawyer was referred by your opponent or someone connected to them", ja: "弁護士が相手方またはその関係者から紹介された", catZh: "利益冲突介绍", catEn: "Conflict of interest referral", catJa: "利益相反の紹介", stageZh: "找律师阶段", stageEn: "Hiring stage", stageJa: "弁護士選び段階" },
  { num: "06", zh: "律师长期不回消息，不汇报案件进展", en: "Your lawyer stops responding and gives no case updates", ja: "弁護士が連絡を返さず、案件の進捗報告もしない", catZh: "消极怠工", catEn: "Ghosting / neglect", catJa: "怠慢・放置", stageZh: "代理过程中", stageEn: "During representation", stageJa: "代理中" },
  { num: "07", zh: "律师建议你撤诉或放弃权利，但不给书面理由", en: "Your lawyer advises you to drop the case without providing written reasons", ja: "弁護士が書面による理由なく訴訟の取り下げを勧める", catZh: "反向操作", catEn: "Working against you", catJa: "依頼者に不利な行動", stageZh: "代理过程中", stageEn: "During representation", stageJa: "代理中" },
  { num: "11", zh: "有人要你以个人名义为公司债务做担保", en: "Someone asks you to personally guarantee a corporate debt", ja: "会社の債務の個人保証を求められる", catZh: "担保陷阱", catEn: "Guarantee trap", catJa: "保証の罠", stageZh: "合同与交易", stageEn: "Contracts & deals", stageJa: "契約・取引" },
  { num: "14", zh: "公司突然申请破产，但你知道它还有资产", en: "A company suddenly files for bankruptcy despite having assets", ja: "資産があるにもかかわらず会社が突然破産申請する", catZh: "虚假破产", catEn: "Sham bankruptcy", catJa: "偽装破産", stageZh: "执行与破产", stageEn: "Enforcement", stageJa: "執行・破産" },
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

const checklistItemsJa = [
  "弁護士の登録番号を地元の弁護士会のウェブサイトで確認する",
  "費用は弁護士の個人口座ではなく、事務所の公式口座に支払うことを確認する",
  "契約に明確な返金条項が含まれていることを確認する",
  "契約書に記載された弁護士が実際に案件を担当する弁護士であることを確認する",
  "弁護士を紹介した人が相手方と利害関係がないことを確認する",
  "正式な領収書を要求し、内容と金額が正確であることを確認する",
];

export default function Home() {
  const { t, locale } = useI18n();
  const checklistItems = locale === "zh" ? checklistItemsZh : locale === "ja" ? checklistItemsJa : checklistItemsEn;

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
          ) : locale === "ja" ? (
            <>
              弁護士が
              <span className="text-[var(--red)]">個人口座</span>
              への支払いを求めていますか？
              <br />
              それが最初の危険信号です。
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
          {t({
            zh: "我们不告诉你该请哪个律师。我们教你在请律师之前、期间和之后，该注意什么——所有内容来自真实经历，不是套话。",
            en: "We don't tell you which lawyer to hire. We teach you what to watch for — before, during, and after — all from real experience, not boilerplate.",
            ja: "どの弁護士を雇うべきかは教えません。雇う前、雇っている間、そしてその後に何に注意すべきかを教えます——すべて実体験に基づいており、定型文ではありません。",
          })}
        </p>
        <div className="mt-9 flex gap-4 flex-wrap">
          <Link
            href="/flags"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--green)] text-white text-[15px] font-semibold no-underline hover:opacity-90 transition-opacity"
          >
            {t({ zh: "查看全部危险信号", en: "View All Red Flags", ja: "すべての危険信号を見る" })} &rarr;
          </Link>
          <Link
            href="#checker"
            className="inline-flex items-center gap-2 px-7 py-3 bg-transparent text-[var(--ink-soft)] text-[15px] font-medium no-underline border border-[var(--rule)] hover:border-[var(--grey)] transition-colors"
          >
            {t({ zh: "测一测你的风险", en: "Check Your Risk", ja: "リスクをチェック" })}
          </Link>
        </div>
      </section>

      {/* Stats */}
      <div className="max-w-[960px] mx-auto px-7">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 border-t border-b border-[var(--rule)]">
          {[
            ["36", t({ zh: "已识别的危险信号", en: "Red flags identified", ja: "識別された危険信号" })],
            ["5", t({ zh: "个阶段覆盖", en: "Stages covered", ja: "段階をカバー" })],
            ["100%", t({ zh: "来自真实案例", en: "From real cases", ja: "実際の事例に基づく" })],
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
          {t({ zh: "核心内容", en: "Core Content", ja: "コアコンテンツ" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "危险信号库", en: "Red Flag Database", ja: "危険信号データベース" })}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t({
            zh: "每一条信号都来自有证据支撑的真实案例。我们按法律纠纷的五个阶段分类，帮你在正确的时间点识别风险。",
            en: "Every signal comes from a real, evidence-backed case. We classify them across five stages of a legal dispute so you can spot risks at the right moment.",
            ja: "すべての信号は証拠に裏付けられた実際の事例に基づいています。法的紛争の5つの段階に分類し、適切なタイミングでリスクを発見できるようにします。",
          })}
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
                  {locale === "zh" ? f.zh : locale === "ja" ? f.ja : f.en}
                </div>
                <div className="text-[12.5px] text-[var(--grey-light)]">
                  {locale === "zh" ? f.catZh : locale === "ja" ? f.catJa : f.catEn}
                </div>
              </div>
              <div className="text-[11px] text-[var(--grey-light)] border border-[var(--rule)] py-0.5 px-2.5 whitespace-nowrap self-center max-sm:hidden">
                {locale === "zh" ? f.stageZh : locale === "ja" ? f.stageJa : f.stageEn}
              </div>
            </Link>
          ))}
          <div className="bg-[var(--surface)] py-4 px-5 text-center">
            <Link
              href="/flags"
              className="text-sm text-[var(--green)] no-underline font-semibold hover:underline"
            >
              {t({ zh: "查看全部 36 条危险信号", en: "View all 36 red flags", ja: "36件すべての危険信号を見る" })} &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t({ zh: "我们提供什么", en: "What We Offer", ja: "提供するもの" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "三种方式帮你自我保护", en: "Three Ways to Protect Yourself", ja: "自分を守る3つの方法" })}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t({
            zh: "不需要花钱请律师来告诉你这些。我们把六年维权踩过的坑，变成你可以直接使用的工具。",
            en: "You don't need to pay a lawyer to learn this. We turned six years of hard lessons into tools you can use right now.",
            ja: "弁護士にお金を払ってこれを学ぶ必要はありません。6年間の教訓を、今すぐ使えるツールに変えました。",
          })}
        </p>

        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
          {[
            {
              icon: "⚑",
              iconClass: "bg-[var(--red-pale)] text-[var(--red)]",
              title: t({ zh: "危险信号", en: "Red Flags", ja: "危険信号" }),
              desc: t({
                zh: "36 条结构化的预警信号，按「找律师 → 代理中 → 签合同 → 执行 → 维权」五个阶段分类。每条信号配有真实案例和应对建议。",
                en: "36 structured warning signals classified across five stages: hiring → representation → contracts → enforcement → recourse. Each with real cases and actionable advice.",
                ja: "5つの段階に分類された36の構造化された警告信号：弁護士選び→代理中→契約→執行→権利救済。それぞれに実際の事例と実用的なアドバイス付き。",
              }),
            },
            {
              icon: "✓",
              iconClass: "bg-[var(--green-pale)] text-[var(--green)]",
              title: t({ zh: "检查清单", en: "Checklists", ja: "チェックリスト" }),
              desc: t({
                zh: "聘请律师前的 10 项自查、签法律服务合同前的逐条审查、进入诉讼后的关键节点提醒。照着做，不遗漏。",
                en: "Pre-hiring checklist, contract review items, and key checkpoints during litigation. Follow them step by step — miss nothing.",
                ja: "弁護士を雇う前のチェックリスト、契約書の確認項目、訴訟中の重要チェックポイント。ステップごとに従えば、見落としなし。",
              }),
            },
            {
              icon: "✎",
              iconClass: "bg-[var(--ground-warm)] text-[var(--grey)]",
              title: t({ zh: "真实案例", en: "Real Cases", ja: "実際の事例" }),
              desc: t({
                zh: "匿名化处理的真实受害经历，按欺诈模式分类。不是律师写的套话，是当事人亲历的全过程复盘。",
                en: "Anonymized real stories classified by fraud pattern. Not lawyer-written boilerplate — full walkthroughs from the people who lived it.",
                ja: "詐欺パターンごとに分類された匿名の実話。弁護士が書いた定型文ではなく、当事者が実際に経験した全過程の振り返り。",
              }),
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
          {t({ zh: "自助工具", en: "Self-Check Tool", ja: "セルフチェックツール" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "测一测：你的情况有多少危险信号？", en: "How many red flags does your situation have?", ja: "あなたの状況にはいくつの危険信号がありますか？" })}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t({
            zh: "回答以下问题，系统会自动匹配你可能面临的风险。全程匿名，不收集任何个人信息。",
            en: "Answer the questions below and we'll match the risks you may be facing. Fully anonymous — no personal data collected.",
            ja: "以下の質問に答えると、直面している可能性のあるリスクを照合します。完全匿名——個人情報は収集しません。",
          })}
        </p>
        <RedFlagChecker />
      </section>

      {/* Case Study Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t({ zh: "真实案例", en: "Real Cases", ja: "実際の事例" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "这些事情，真的发生过", en: "These things really happened", ja: "これらは実際に起きたことです" })}
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-8 max-sm:p-6">
          <div className="text-[11px] tracking-wider uppercase text-[var(--grey-light)] mb-3.5">
            {t({ zh: "案例 #1 — 私账收费 + 消极怠工", en: "Case #1 — Private billing + ghosting", ja: "事例 #1 — 個人口座請求 + 業務放棄" })}
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
            ) : locale === "ja" ? (
              <>
                会社紛争に直面し、重度のうつ病と診断された依頼者は、紹介を通じて2人の弁護士を雇いました。1人目は
                <strong className="text-[var(--red)] font-bold">
                  約12万元を個人口座で受け取り
                </strong>
                、正式な契約はありませんでした。2人目は19万元を請求しましたが、
                <strong className="text-[var(--red)] font-bold">
                  一度も出廷せず、送られてきた領収書は白紙
                </strong>
                でした。6年間の闘いの末、1元も取り戻せていません。
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
              : locale === "ja"
              ? ["個人口座請求", "白紙の領収書", "業務放棄", "利益相反の紹介"]
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
            {t({ zh: "阅读完整案例", en: "Read full case", ja: "事例の全文を読む" })} &rarr;
          </Link>
        </div>
      </section>

      {/* Checklist Preview */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2.5">
          {t({ zh: "自查工具", en: "Self-Check Tool", ja: "セルフチェックツール" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "聘请律师前的检查清单", en: "Pre-hiring checklist", ja: "弁護士を雇う前のチェックリスト" })}
        </h2>
        <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-8">
          {t({
            zh: "在签合同、付钱之前，至少确认这些事情。",
            en: "Before signing a contract or paying — verify these at minimum.",
            ja: "契約書にサインしたり支払いをする前に、最低限これらを確認してください。",
          })}
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
          {t({ zh: "为什么做这件事", en: "Why We Do This", ja: "なぜこれをするのか" })}
        </div>
        <h2 className="font-serif text-[26px] font-bold leading-tight mb-4">
          {t({ zh: "创始人的话", en: "From the Founder", ja: "創設者より" })}
        </h2>
        <div className="bg-[var(--surface)] border border-[var(--rule)] p-9 max-sm:p-6 grid grid-cols-[3px_1fr] gap-7">
          <div className="bg-[var(--red)] rounded-sm" />
          <div>
            <blockquote className="font-serif text-[17px] leading-[1.75] text-[var(--ink-soft)] mb-4">
              {t({
                zh: "六年时间，三个城市，五个律师。其中两个纯骗，一个被对方收买并亲口承认，两个收了高额费用后消极怠工。我不是法律专业出身，走了无数弯路之后才慢慢看清这些套路。这个网站把我踩过的每一个坑变成你可以提前识别的信号。如果能让哪怕一个人少走一段弯路，这件事就值得做。",
                en: "Six years, three cities, five lawyers. Two were outright frauds. One was bought by the opposing side — and admitted it. Two charged premium fees and did nothing. I'm not a legal professional. It took me countless wrong turns to see the patterns. This site turns every trap I fell into a signal you can spot in advance. If even one person avoids a single wrong turn, it's worth it.",
                ja: "6年間、3つの都市、5人の弁護士。そのうち2人は完全な詐欺師。1人は相手方に買収され、本人がそれを認めました。2人は高額な費用を請求しながら何もしませんでした。私は法律の専門家ではありません。数え切れない回り道をしてようやくパターンが見えてきました。このサイトは、私が落ちたすべての罠を、あなたが事前に見抜ける信号に変えたものです。たった一人でも回り道を一つ避けられるなら、やる価値があります。",
              })}
            </blockquote>
            <div className="text-[13px] text-[var(--grey-light)]">
              — {t({ zh: "创始人", en: "Founder", ja: "創設者" })} &middot; 2026
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-[960px] mx-auto px-7 pt-[72px]">
        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-12 max-sm:p-8 text-center">
          <h2 className="font-serif text-[22px] font-bold mb-2.5">
            {t({ zh: "订阅更新", en: "Stay Updated", ja: "最新情報を受け取る" })}
          </h2>
          <p className="text-[15px] text-[var(--grey)] mb-7">
            {t({
              zh: "新的危险信号、案例分析、各国法律指南，直接发到你的邮箱。",
              en: "New red flags, case studies, and legal guides — delivered to your inbox.",
              ja: "新しい危険信号、事例分析、各国の法律ガイドをメールでお届けします。",
            })}
          </p>
          <div className="flex gap-2.5 max-w-[420px] mx-auto max-sm:flex-col">
            <input
              type="email"
              placeholder={t({ zh: "你的邮箱地址", en: "Your email address", ja: "メールアドレス" })}
              className="flex-1 py-2.5 px-4 text-sm border border-[var(--rule)] bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[var(--green)] placeholder:text-[var(--grey-light)]"
            />
            <button className="py-2.5 px-6 bg-[var(--green)] text-white border-none text-sm font-semibold cursor-pointer whitespace-nowrap hover:opacity-90">
              {t({ zh: "订阅", en: "Subscribe", ja: "登録" })}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
