"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

const checklistsZh = [
  {
    title: "聘请律师前", eyebrow: "第一阶段",
    desc: "在决定委托律师之前，完成以下检查。这是防范风险最有效的窗口期。",
    items: [
      { text: "在当地司法局或律师协会官网查询律师的执业证号和状态", why: "确认律师有合法执业资格，没有被处分或注销。" },
      { text: "确认律师不是由对手方或关联方介绍的", why: "介绍人与对方有利益关系时，律师可能不会真正站在你的立场。" },
      { text: "同时咨询 2-3 位律师，对比他们的专业判断", why: "不同律师的意见差异可以帮你发现不合理的建议。" },
      { text: "调查律师过往的代理案例和口碑", why: "通过裁判文书网或其他渠道了解律师的真实能力。" },
      { text: "确认律师是否有处理类似案件的专业经验", why: "法律领域很细分，专业对口的律师更有效。" },
    ],
  },
  {
    title: "签合同前", eyebrow: "第二阶段",
    desc: "在签署委托合同和付费之前，逐一确认以下事项。签字之后再发现问题就被动了。",
    items: [
      { text: "确认必须签正式的书面委托合同", why: "口头约定和微信约定在投诉和诉讼中效力有限。" },
      { text: "确认收款账户是律所对公账户，不是律师个人账户", why: "个人账户收费是最常见的违规行为，也是后续维权的最大障碍。" },
      { text: "确认合同中有明确的退费条款", why: "没有退费条款，服务不满意时你无法追回已付费用。" },
      { text: "确认合同上的律师就是实际负责你案件的律师", why: "防止「资深律师签约、实习生干活」的挂名代理。" },
      { text: "确认合同中明确了服务范围和律师义务", why: "模糊的服务描述给律师留下了不作为的空间。" },
      { text: "要求律师提供正式发票并核对内容", why: "发票是证明正规收费的关键凭证。" },
      { text: "仔细阅读合同中的每一个条款，不理解的就问", why: "法律术语可能暗藏对你不利的条件。" },
    ],
  },
  {
    title: "代理过程中", eyebrow: "第三阶段",
    desc: "委托律师之后，持续关注以下事项。不要付完钱就放手不管。",
    items: [
      { text: "定期要求律师汇报案件进展（至少每两周一次）", why: "长期不汇报可能意味着律师没有在处理你的案件。" },
      { text: "记录律师给出的每一条重要建议", why: "如果律师的建议后来被证明有问题，这些记录是投诉的依据。" },
      { text: "律师建议撤诉或放弃时，要求书面法律意见", why: "正当的专业建议不怕写在纸上。" },
      { text: "关注律师的建议是否客观上更有利于对方", why: "这可能是利益冲突的信号。" },
      { text: "拒绝律师以「打点关系」为名的任何额外收费", why: "这种收费 100% 是违法的，也几乎 100% 是骗局。" },
      { text: "保留与律师的所有沟通记录", why: "微信、邮件、电话录音都是后续可能需要的证据。" },
    ],
  },
  {
    title: "签署合同或担保时", eyebrow: "特别注意",
    desc: "涉及签署商业合同或担保文件时，以下事项关乎你的全部财产安全。",
    items: [
      { text: "绝不在未经独立律师审查的情况下签署任何合同", why: "对方起草的合同天然保护对方利益。" },
      { text: "理解「连带担保责任」的含义再决定是否签署", why: "个人担保意味着你用全部个人财产为债务负责。" },
      { text: "不要被对方催促签字的压力所迫", why: "合理的商业行为会给你足够的审阅时间。催促本身就是一个警告。" },
      { text: "注意合同中的管辖条款和争议解决方式", why: "不利的管辖条款可能让你在对方的地盘打官司。" },
      { text: "保留合同原件和所有附件的副本", why: "一旦发生纠纷，合同是最核心的证据。" },
    ],
  },
];

const checklistsEn = [
  {
    title: "Before Hiring a Lawyer", eyebrow: "Stage 1",
    desc: "Complete these checks before deciding to hire. This is the most effective window for risk prevention.",
    items: [
      { text: "Verify the lawyer's license number on the local bar association website", why: "Confirm the lawyer has a valid license and hasn't been sanctioned or disbarred." },
      { text: "Confirm the lawyer was not referred by your opponent or their associates", why: "When the referrer has ties to the other side, the lawyer may not truly represent your interests." },
      { text: "Consult 2-3 lawyers simultaneously and compare their opinions", why: "Differences in opinions can help you spot unreasonable advice." },
      { text: "Research the lawyer's past cases and reputation", why: "Use court records or other channels to understand the lawyer's real capabilities." },
      { text: "Confirm the lawyer has experience with cases similar to yours", why: "Legal practice is highly specialized — a lawyer in the right field is more effective." },
    ],
  },
  {
    title: "Before Signing the Contract", eyebrow: "Stage 2",
    desc: "Before signing and paying, verify each of the following. Once you sign, you lose leverage.",
    items: [
      { text: "Insist on a formal written engagement contract", why: "Verbal and chat-based agreements have limited enforceability." },
      { text: "Confirm fees go to the firm's official account, not a personal account", why: "Personal account billing is the most common violation and the biggest obstacle to recourse." },
      { text: "Confirm the contract includes a clear refund clause", why: "Without one, you can't recover fees if the service is unsatisfactory." },
      { text: "Confirm the lawyer on the contract is the one actually handling your case", why: "Prevent 'senior lawyer signs, intern works' arrangements." },
      { text: "Confirm the contract clearly defines scope of service and obligations", why: "Vague descriptions leave room for the lawyer to do nothing." },
      { text: "Request an official invoice and verify the details", why: "Invoices are key evidence of legitimate billing." },
      { text: "Read every clause — ask about anything you don't understand", why: "Legal jargon can hide terms that work against you." },
    ],
  },
  {
    title: "During Representation", eyebrow: "Stage 3",
    desc: "After hiring, keep monitoring. Don't just pay and walk away.",
    items: [
      { text: "Request case updates regularly (at least every two weeks)", why: "Prolonged silence may mean the lawyer isn't working on your case." },
      { text: "Document every important piece of advice the lawyer gives", why: "If the advice later proves problematic, these records support a complaint." },
      { text: "If advised to drop the case, request a written legal opinion", why: "Legitimate professional advice isn't afraid of being put in writing." },
      { text: "Watch whether the lawyer's advice objectively favors the other side", why: "This could be a sign of conflict of interest." },
      { text: "Refuse any extra charges for 'cultivating relationships' with officials", why: "Such charges are 100% illegal and almost certainly a scam." },
      { text: "Keep all communication records with the lawyer", why: "Chat logs, emails, and call recordings are evidence you may need later." },
    ],
  },
  {
    title: "When Signing Contracts or Guarantees", eyebrow: "Special Attention",
    desc: "When signing business contracts or guarantee documents, these items concern your entire financial safety.",
    items: [
      { text: "Never sign any contract without independent legal review", why: "Contracts drafted by the other side naturally protect their interests." },
      { text: "Understand 'joint and several liability' before signing any guarantee", why: "A personal guarantee means you're liable with all your personal assets." },
      { text: "Don't let pressure rush you into signing", why: "Reasonable business gives you adequate review time. Pressure itself is a warning." },
      { text: "Pay attention to jurisdiction and dispute resolution clauses", why: "Unfavorable clauses could force you to litigate on their turf." },
      { text: "Keep the original contract and copies of all attachments", why: "In a dispute, the contract is the most critical evidence." },
    ],
  },
];

export default function ChecklistPage() {
  const { t, locale } = useI18n();
  const checklists = locale === "zh" ? checklistsZh : checklistsEn;

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("检查清单", "Checklists")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-4">
          {t(
            "从找律师到签合同，每个阶段都有你必须确认的事项。照着做，不遗漏。",
            "From finding a lawyer to signing contracts — every stage has items you must verify. Follow them step by step."
          )}
        </p>
        <p className="text-[13px] text-[var(--grey-light)] mb-12">
          {t(
            "提示：你可以截图保存这个清单，在实际操作时逐项核对。",
            "Tip: Screenshot this checklist and verify items one by one in practice."
          )}
        </p>

        {checklists.map((list, li) => (
          <div key={li} className="mb-14">
            <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
              {list.eyebrow}
            </div>
            <h2 className="font-serif text-[22px] font-bold mb-2">{list.title}</h2>
            <p className="text-[15px] text-[var(--grey)] max-w-[540px] leading-relaxed mb-6">{list.desc}</p>
            <div className="border border-[var(--rule)]">
              {list.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 px-6 py-5 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0">
                  <div className="w-[20px] h-[20px] border-2 border-[var(--rule)] rounded-[3px] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--ink)] leading-snug mb-1">{item.text}</div>
                    <div className="text-[13px] text-[var(--grey-light)] leading-relaxed">{item.why}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
