"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

interface Guide {
  title: string;
  scenario: string;
  script: string;
  tips: string[];
}

const guidesZh: Guide[] = [
  {
    title: "拒绝私账转账",
    scenario: "律师要求你把费用打到他/她的个人银行账户，而不是律所的对公账户。",
    script:
      "X律师，感谢您的解释。关于费用支付，我希望通过律所的对公账户转账，并请律所出具正式发票。这样双方都有保障。能否请您提供律所的对公账户信息？",
    tips: [
      "语气保持礼貌但坚定，不需要解释为什么",
      "如果律师拒绝提供对公账户，这本身就是一个严重的红旗信号",
      "不要接受「对公账户手续麻烦」「先转个人账户后补发票」等借口",
      "如果已经转到个人账户，立即截图保存转账记录",
    ],
  },
  {
    title: "要求案件进展汇报",
    scenario: "委托律师后长时间没有收到案件进展，律师也不主动联系你。",
    script:
      "X律师，您好。我委托您代理的XX案件已经过去了X周，我想了解一下目前的进展情况。能否请您提供一份书面的案件进展说明，包括：已经做了哪些工作、接下来的计划和时间安排？谢谢。",
    tips: [
      "建议每两周主动联系一次，不要等律师找你",
      "要求书面汇报，微信文字即可，方便留存记录",
      "如果律师反复推脱或只给含糊答复，考虑更换律师",
      "保留所有沟通记录，包括已读不回的截图",
    ],
  },
  {
    title: "拒绝「打点关系」费用",
    scenario: "律师以「疏通关系」「打点法官/书记员」为名，要求你额外付费。",
    script:
      "X律师，感谢您为案件付出的努力。但关于您提到的额外费用，我的理解是法律服务费已经包含在合同约定中。请问这笔费用是否有律所的正式收据？如果是合同之外的费用，我需要考虑一下。",
    tips: [
      "「打点关系」本身就是违法行为，无论律师如何包装",
      "不要当场答应，给自己时间冷静思考",
      "这种要求 100% 是骗局或违法行为，没有例外",
      "如果律师施压，建议直接向律师协会举报",
    ],
  },
  {
    title: "要求退费",
    scenario: "律师没有履行合同义务，你想要回已支付的律师费。",
    script:
      "X律师，您好。根据我们签署的委托合同第X条，关于服务内容和退费条款的约定，我认为目前的服务未达到合同约定的标准。我希望能就退费事宜与您协商。请问您方便在X日前给我一个回复吗？",
    tips: [
      "退费前先仔细阅读合同中的退费条款",
      "先尝试协商，保持专业态度",
      "如果律师拒绝协商，可以向律师协会投诉或向法院起诉",
      "收集所有证据：合同、付款凭证、沟通记录、律师未履行义务的证据",
    ],
  },
  {
    title: "向律师协会投诉",
    scenario: "律师存在严重违规行为（私账收费、利益冲突、失联等），你需要正式投诉。",
    script:
      "尊敬的XX市律师协会：\n\n我是XX案件的当事人。我于X年X月委托XX律师事务所XX律师代理该案件。在委托过程中，该律师存在以下违规行为：\n\n1. [具体描述违规事实，如：要求将律师费转入个人账户]\n2. [附上证据描述，如：转账记录显示收款方为律师个人而非律所]\n\n我已尝试与律师/律所协商解决，但未果。现依据《律师法》相关规定，正式向贵协会投诉，请求调查处理。\n\n附件：[列出证据清单]\n\n投诉人：[姓名]\n联系方式：[电话]\n日期：[日期]",
    tips: [
      "投诉材料要事实清楚、证据充分",
      "附上所有证据的复印件，原件自己保管",
      "同时可以向当地司法局投诉，双管齐下",
      "投诉后保持跟进，定期询问处理进度",
      "如果律协不作为，可以向上级律协或司法行政部门反映",
    ],
  },
];

const guidesEn: Guide[] = [
  {
    title: "Refusing Personal Account Payment",
    scenario:
      "The lawyer asks you to wire fees to their personal bank account instead of the firm's corporate account.",
    script:
      'Thank you for explaining the fees. For the payment, I\'d like to transfer to the firm\'s official corporate account and receive a formal invoice. This protects both of us. Could you please provide the firm\'s corporate account details?',
    tips: [
      "Stay polite but firm — you don't need to justify why",
      "If the lawyer refuses to provide a corporate account, that itself is a serious red flag",
      'Don\'t accept excuses like "corporate transfers are complicated" or "pay me first, invoice later"',
      "If you've already paid to a personal account, immediately screenshot the transfer records",
    ],
  },
  {
    title: "Requesting Case Updates",
    scenario:
      "After hiring the lawyer, you haven't received any updates for a long time, and the lawyer doesn't proactively reach out.",
    script:
      "Hi, it's been [X] weeks since I engaged you for my case. I'd like an update on the current status. Could you please provide a written summary including: what work has been done so far, and the plan and timeline going forward? Thank you.",
    tips: [
      "Proactively reach out every two weeks — don't wait for the lawyer",
      "Request written updates (email or text is fine) so you have a record",
      "If the lawyer repeatedly dodges or gives vague answers, consider switching lawyers",
      "Keep all communication records, including screenshots of read-but-unanswered messages",
    ],
  },
  {
    title: 'Refusing "Relationship" Fees',
    scenario:
      'The lawyer asks for extra payment to "cultivate relationships" or "grease palms" with judges or court staff.',
    script:
      "Thank you for your efforts on the case. Regarding the additional fee you mentioned, my understanding is that legal service fees are covered by our contract. Does this fee come with an official receipt from the firm? If it's outside the contract, I'll need time to consider.",
    tips: [
      '"Cultivating relationships" with officials is illegal, regardless of how it\'s framed',
      "Don't agree on the spot — give yourself time to think",
      "This type of request is 100% a scam or illegal — no exceptions",
      "If the lawyer pressures you, report directly to the bar association",
    ],
  },
  {
    title: "Requesting a Refund",
    scenario:
      "The lawyer hasn't fulfilled their contractual obligations, and you want your fees back.",
    script:
      "Hi, based on Section [X] of our engagement contract regarding service scope and refund terms, I believe the service provided has not met the contractual standards. I'd like to discuss a refund. Could you please respond by [date]?",
    tips: [
      "Review the refund clause in your contract before making the request",
      "Try negotiation first — maintain a professional tone",
      "If the lawyer refuses to negotiate, you can file a complaint with the bar association or sue",
      "Gather all evidence: contract, payment records, communication logs, proof of unfulfilled obligations",
    ],
  },
  {
    title: "Filing a Bar Association Complaint",
    scenario:
      "The lawyer has committed serious misconduct (off-book billing, conflict of interest, disappearing, etc.) and you need to file a formal complaint.",
    script:
      "Dear [City] Bar Association,\n\nI am the client in case [case description]. I engaged [Lawyer Name] of [Law Firm] on [date]. During the engagement, the lawyer committed the following misconduct:\n\n1. [Describe specific facts, e.g., demanded fees be paid to a personal account]\n2. [Describe evidence, e.g., transfer records show the recipient was the lawyer personally, not the firm]\n\nI have attempted to resolve this with the lawyer/firm without success. I hereby file a formal complaint under the applicable regulations and request an investigation.\n\nAttachments: [List of evidence]\n\nComplainant: [Name]\nContact: [Phone/Email]\nDate: [Date]",
    tips: [
      "Keep the complaint factual, clear, and well-evidenced",
      "Submit copies of evidence — keep the originals yourself",
      "Consider also filing with the local judicial bureau for dual-track pressure",
      "Follow up regularly to check on progress",
      "If the bar association is unresponsive, escalate to the higher-level bar or judicial administrative authority",
    ],
  },
];

export default function GuidesPage() {
  const { t, locale } = useI18n();
  const guides = locale === "zh" ? guidesZh : guidesEn;

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("沟通话术与投诉指南", "Scripts & Complaint Guide")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t(
            "遇到问题时，不知道怎么开口？这里有现成的沟通话术和投诉模板，直接复制使用。",
            "Not sure what to say when things go wrong? Here are ready-to-use scripts and complaint templates — just copy and adapt."
          )}
        </p>

        {guides.map((guide, i) => (
          <div key={i} className="mb-14">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-serif text-[14px] font-bold text-[var(--green)] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-serif text-[22px] font-bold">{guide.title}</h2>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--rule)] p-6 mb-4">
              <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)] mb-2">
                {t("场景", "Scenario")}
              </div>
              <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed">
                {guide.scenario}
              </p>
            </div>

            <div className="border border-[var(--green)] bg-[var(--green-pale)] p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--green)] font-bold">
                  {t("参考话术", "Sample Script")}
                </div>
                <CopyButton
                  text={guide.script}
                  label={t("复制", "Copy")}
                  copiedLabel={t("已复制", "Copied")}
                />
              </div>
              <p className="font-serif text-[15px] text-[var(--ink)] leading-[1.9] whitespace-pre-line">
                {guide.script}
              </p>
            </div>

            <div className="border border-[var(--rule)]">
              <div className="px-6 py-3 border-b border-[var(--rule-light)] bg-[var(--bg)]">
                <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)]">
                  {t("注意事项", "Tips")}
                </div>
              </div>
              {guide.tips.map((tip, j) => (
                <div
                  key={j}
                  className="flex items-start gap-3 px-6 py-3.5 bg-[var(--surface)] border-b border-[var(--rule-light)] last:border-b-0 text-[14px] text-[var(--ink-soft)] leading-snug"
                >
                  <span className="text-[var(--grey-light)] shrink-0">•</span>
                  {tip}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-[var(--surface)] border border-[var(--rule)] p-7 mt-8">
          <p className="text-[13px] text-[var(--grey-light)] leading-relaxed">
            {t(
              "免责声明：以上话术和模板仅供参考，不构成法律建议。请根据实际情况调整，必要时咨询专业律师。",
              "Disclaimer: These scripts and templates are for reference only and do not constitute legal advice. Please adapt to your specific situation and consult a licensed attorney when necessary."
            )}
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

function CopyButton({
  text,
  label,
  copiedLabel,
}: {
  text: string;
  label: string;
  copiedLabel: string;
}) {
  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    await navigator.clipboard.writeText(text);
    btn.textContent = copiedLabel;
    setTimeout(() => {
      btn.textContent = label;
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-[12px] text-[var(--green)] border border-[var(--green)] px-2.5 py-1 bg-transparent cursor-pointer hover:bg-[var(--green)] hover:text-white transition-colors"
    >
      {label}
    </button>
  );
}
