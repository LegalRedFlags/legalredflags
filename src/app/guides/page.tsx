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

const guidesJa: Guide[] = [
  {
    title: "個人口座への振込を拒否する",
    scenario:
      "弁護士が、事務所の法人口座ではなく、個人の銀行口座に費用を振り込むよう求めてくる。",
    script:
      "X弁護士、費用についてのご説明ありがとうございます。お支払いについては、事務所の法人口座への振込みと、正式な領収書の発行をお願いしたいと思います。双方の保護になりますので。事務所の法人口座の情報をご提供いただけますか？",
    tips: [
      "丁寧かつ毅然とした態度で。理由を説明する必要はありません",
      "弁護士が法人口座の提供を拒否する場合、それ自体が重大な危険信号です",
      "「法人口座の手続きは面倒」「先に個人口座に振込んで後で領収書を出す」等の言い訳を受け入れないでください",
      "すでに個人口座に振り込んでしまった場合は、直ちに振込記録のスクリーンショットを保存してください",
    ],
  },
  {
    title: "案件の進捗報告を求める",
    scenario:
      "弁護士に依頼した後、長期間案件の進捗報告がなく、弁護士からの連絡もない。",
    script:
      "X弁護士、お世話になっております。ご依頼しているXX案件について、X週間が経過しましたので、現在の進捗状況をお伺いしたく存じます。これまでの作業内容、今後の計画とスケジュールを含む書面での進捗報告をいただけますでしょうか。よろしくお願いいたします。",
    tips: [
      "2週間に1回は積極的に連絡しましょう。弁護士からの連絡を待たないでください",
      "書面での報告を求めましょう。メールやメッセージで構いません。記録として残せます",
      "弁護士が繰り返しはぐらかしたり曖昧な回答しかしない場合は、弁護士の変更を検討してください",
      "既読スルーのスクリーンショットを含め、すべてのやり取りの記録を保管してください",
    ],
  },
  {
    title: "「関係者への根回し」費用を拒否する",
    scenario:
      "弁護士が「裁判官や書記官との関係構築」を名目に、追加の支払いを求めてくる。",
    script:
      "X弁護士、案件へのご尽力ありがとうございます。ご提案の追加費用についてですが、法律サービス費用は契約で合意された範囲に含まれていると理解しております。この費用について事務所からの正式な領収書は発行されますか？契約外の費用であれば、検討のお時間をいただきたいと思います。",
    tips: [
      "公務員への「根回し」は、どのように言い換えても違法行為です",
      "その場で同意しないでください。冷静に考える時間を持ちましょう",
      "この種の要求は100%詐欺か違法行為です。例外はありません",
      "弁護士が圧力をかけてくる場合は、弁護士会に直接報告してください",
    ],
  },
  {
    title: "返金を求める",
    scenario:
      "弁護士が契約上の義務を果たしておらず、支払った弁護士費用の返金を求めたい。",
    script:
      "X弁護士、お世話になっております。委任契約書の第X条に定められたサービス内容と返金条項に基づき、現在提供されているサービスは契約で定められた基準を満たしていないと考えております。返金について協議させていただきたいのですが、X日までにご回答いただけますでしょうか。",
    tips: [
      "返金を求める前に、契約書の返金条項を注意深く確認してください",
      "まずは交渉を試み、専門的な態度を維持してください",
      "弁護士が交渉を拒否する場合は、弁護士会への苦情申立てや訴訟が可能です",
      "すべての証拠を収集しましょう：契約書、支払い記録、やり取りの記録、義務不履行の証拠",
    ],
  },
  {
    title: "弁護士会への苦情申立て",
    scenario:
      "弁護士に深刻な違反行為（帳簿外請求、利益相反、連絡不通など）があり、正式に苦情を申し立てる必要がある。",
    script:
      "[都市名]弁護士会 御中\n\n私は[案件の説明]の依頼者です。[日付]に[法律事務所名]の[弁護士名]に案件の代理を依頼しました。委任期間中、当該弁護士に以下の違反行為がありました：\n\n1. [具体的な事実の記述。例：弁護士費用を個人口座に振り込むよう要求された]\n2. [証拠の記述。例：振込記録では受取人が事務所ではなく弁護士個人であった]\n\n弁護士/事務所との解決を試みましたが、成功しませんでした。関連規定に基づき、正式に苦情を申し立て、調査を要請いたします。\n\n添付資料：[証拠リスト]\n\n申立人：[氏名]\n連絡先：[電話/メール]\n日付：[日付]",
    tips: [
      "苦情申立書は事実に基づき、明確で十分な証拠を添えてください",
      "証拠のコピーを提出し、原本は自分で保管してください",
      "地方の司法局にも同時に申し立てることで、二重のルートで圧力をかけることを検討してください",
      "定期的にフォローアップし、処理の進捗を確認してください",
      "弁護士会が対応しない場合は、上位の弁護士会や司法行政機関にエスカレーションしてください",
    ],
  },
];

export default function GuidesPage() {
  const { t, locale } = useI18n();
  const guides = locale === "zh" ? guidesZh : locale === "ja" ? guidesJa : guidesEn;

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t({ zh: "沟通话术与投诉指南", en: "Scripts & Complaint Guide", ja: "スクリプト＆苦情ガイド" })}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t({
            zh: "遇到问题时，不知道怎么开口？这里有现成的沟通话术和投诉模板，直接复制使用。",
            en: "Not sure what to say when things go wrong? Here are ready-to-use scripts and complaint templates — just copy and adapt.",
            ja: "問題が起きた時、何と言えばいいかわからない？すぐに使えるスクリプトと苦情テンプレートをご用意しました。コピーしてそのままお使いください。",
          })}
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
                {t({ zh: "场景", en: "Scenario", ja: "場面" })}
              </div>
              <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed">
                {guide.scenario}
              </p>
            </div>

            <div className="border border-[var(--green)] bg-[var(--green-pale)] p-6 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--green)] font-bold">
                  {t({ zh: "参考话术", en: "Sample Script", ja: "参考スクリプト" })}
                </div>
                <CopyButton
                  text={guide.script}
                  label={t({ zh: "复制", en: "Copy", ja: "コピー" })}
                  copiedLabel={t({ zh: "已复制", en: "Copied", ja: "コピー済" })}
                />
              </div>
              <p className="font-serif text-[15px] text-[var(--ink)] leading-[1.9] whitespace-pre-line">
                {guide.script}
              </p>
            </div>

            <div className="border border-[var(--rule)]">
              <div className="px-6 py-3 border-b border-[var(--rule-light)] bg-[var(--bg)]">
                <div className="text-[11px] tracking-[0.12em] uppercase text-[var(--grey-light)]">
                  {t({ zh: "注意事项", en: "Tips", ja: "注意事項" })}
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
            {t({
              zh: "免责声明：以上话术和模板仅供参考，不构成法律建议。请根据实际情况调整，必要时咨询专业律师。",
              en: "Disclaimer: These scripts and templates are for reference only and do not constitute legal advice. Please adapt to your specific situation and consult a licensed attorney when necessary.",
              ja: "免責事項：上記のスクリプトとテンプレートは参考用であり、法的助言を構成するものではありません。ご自身の状況に合わせて調整し、必要に応じて弁護士にご相談ください。",
            })}
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
