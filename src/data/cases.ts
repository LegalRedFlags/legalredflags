export interface CaseStudy {
  slug: string;
  num: number;
  title: string;
  titleEn: string;
  tags: string[];
  tagsEn: string[];
  summary: string;
  summaryEn: string;
  timeline: { date: string; event: string }[];
  timelineEn: { date: string; event: string }[];
  redFlags: string[];
  redFlagsEn: string[];
  lessons: string[];
  lessonsEn: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "private-billing-and-ghosting",
    num: 1,
    title: "私账收费 + 消极怠工",
    titleEn: "Private Account Billing + Ghosting",
    tags: ["私账收费", "空白发票", "消极怠工", "利益冲突介绍"],
    tagsEn: ["Private Account Billing", "Blank Invoices", "Ghosting", "Conflicted Referral"],
    summary:
      "当事人在遭遇公司纠纷、确诊重度抑郁的困境中，经人介绍委托了两名律师。第一位律师用个人账户收取了近12万元费用，没有正式合同；第二位律师收取了19万元，代理期间从未出庭，寄来的发票是空白的。当事人花了六年时间维权，至今一分钱没有追回。",
    summaryEn:
      "While dealing with a corporate dispute and a diagnosis of severe depression, the client retained two lawyers on the recommendation of acquaintances. The first lawyer collected nearly RMB 120,000 into a personal bank account with no formal contract; the second collected RMB 190,000, never once appeared in court during the representation, and sent blank invoices. The client has spent six years fighting to recover the money and has not recovered a single yuan to date.",
    timeline: [
      { date: "第1年", event: "经熟人介绍，委托第一位律师处理经济纠纷。律师要求将律师费打到个人银行账户，没有签书面合同。" },
      { date: "第1年末", event: "第一位律师收取近12万元后，开始频繁失联，对案件进展不做任何汇报。" },
      { date: "第2年", event: "对第一位律师失望后，经另一个熟人介绍委托第二位律师。签了合同，支付19万元律师费。" },
      { date: "第2-3年", event: "第二位律师同样开始消极怠工，多次开庭均未到场，寄来的发票是空白的。" },
      { date: "第3年", event: "当事人开始自行研究法律知识，发现两位律师的多项违规行为。" },
      { date: "第4年", event: "向律师协会提交投诉，附上转账记录、微信聊天记录等证据。" },
      { date: "第5年", event: "律协调解未果。对方律师态度强硬，拒绝退还任何费用。" },
      { date: "第6年", event: "继续通过法律途径维权。至今未追回任何费用，但积累了大量经验和教训。" },
    ],
    timelineEn: [
      { date: "Year 1", event: "On a friend's recommendation, retained the first lawyer to handle an economic dispute. The lawyer asked for fees to be wired to a personal bank account, and no written contract was signed." },
      { date: "End of Year 1", event: "After collecting nearly RMB 120,000, the first lawyer became increasingly unreachable and stopped reporting on the case's progress." },
      { date: "Year 2", event: "Disillusioned with the first lawyer, retained a second lawyer on another acquaintance's recommendation. A contract was signed and RMB 190,000 in fees was paid." },
      { date: "Years 2-3", event: "The second lawyer likewise began neglecting the case, repeatedly failing to appear at hearings, and sent invoices that were blank." },
      { date: "Year 3", event: "The client began researching the law independently and discovered numerous violations by both lawyers." },
      { date: "Year 4", event: "Filed a complaint with the bar association, attaching transfer records, WeChat chat logs, and other evidence." },
      { date: "Year 5", event: "Mediation through the bar association failed. The opposing lawyers were unyielding and refused to refund any fees." },
      { date: "Year 6", event: "Continued pursuing legal remedies. No fees have been recovered to date, but the client has gained substantial experience and lessons learned." },
    ],
    redFlags: [
      "#01 私账收费 — 律师要求将费用打到个人账户",
      "#03 无正式合同 — 第一位律师没有签书面委托合同",
      "#06 消极怠工 — 两位律师都长期失联，不汇报进展",
      "#10 发票欺诈 — 第二位律师寄来空白发票",
      "#02 利益冲突介绍 — 两位律师都是经他人介绍",
    ],
    redFlagsEn: [
      "#01 Private Account Billing — the lawyer asked for fees to be wired to a personal account",
      "#03 No Formal Contract — the first lawyer never signed a written engagement agreement",
      "#06 Ghosting — both lawyers went unreachable for long stretches and never reported progress",
      "#10 Invoice Fraud — the second lawyer sent blank invoices",
      "#02 Conflicted Referral — both lawyers were engaged through personal referrals",
    ],
    lessons: [
      "永远不要把律师费打到个人账户，坚持要求律所对公账户",
      "没有书面合同就没有保障，口头承诺不可依赖",
      "不要完全依赖熟人介绍，介绍人的动机未必是为你好",
      "律师长期不回消息就是最明确的危险信号，不要等待，尽早行动",
      "保留所有转账记录、聊天记录、通话记录，这些是后续维权的关键证据",
      "即使过程艰难，坚持维权本身就有价值——你积累的经验可以帮助更多人",
    ],
    lessonsEn: [
      "Never wire legal fees to a personal account — always insist on payment to the law firm's official corporate account",
      "Without a written contract you have no protection; verbal promises cannot be relied upon",
      "Don't rely entirely on referrals from acquaintances — the referrer's motives may not be in your interest",
      "A lawyer who goes silent for extended periods is one of the clearest warning signs — don't wait, act early",
      "Keep every transfer record, chat log, and call record — these become crucial evidence if you need to fight back",
      "Even when the process is difficult, persisting has value in itself — the experience you gain can help others",
    ],
  },
  {
    slug: "guarantee-trap",
    num: 2,
    title: "担保陷阱 + 虚假破产",
    titleEn: "Guarantee Trap + Sham Bankruptcy",
    tags: ["担保陷阱", "内部人起草", "虚假破产", "逃避执行"],
    tagsEn: ["Guarantee Trap", "Drafted by Counterparty", "Sham Bankruptcy", "Evading Enforcement"],
    summary:
      "当事人被要求为一笔公司间的交易提供个人连带担保。合同由对方公司起草，催促签字，当事人未经独立律师审查就签了。对方公司后来申请破产，但在破产前已将资产大量转移。当事人作为担保人被追偿，个人财产被冻结。",
    summaryEn:
      "The client was asked to provide a personal joint and several guarantee for a transaction between companies. The contract was drafted by the counterparty and the client was pressured to sign quickly, doing so without independent legal review. The counterparty company later filed for bankruptcy, but had already transferred substantial assets beforehand. As guarantor, the client was pursued for repayment and had personal assets frozen.",
    timeline: [
      { date: "起初", event: "对方公司提出合作，要求当事人以个人名义为公司间交易提供连带担保。" },
      { date: "签约时", event: "合同由对方公司法务起草并催促当天签字。当事人没有找独立律师审查就签了。" },
      { date: "签约后", event: "当事人发现合同中包含「放弃先诉抗辩权」等对自己极为不利的条款。" },
      { date: "第1年", event: "对方公司出现经营困难，开始拖欠款项。" },
      { date: "第2年", event: "对方公司突然申请破产。当事人调查发现公司在破产前两个月大量转移资产到法人亲属名下的新公司。" },
      { date: "第2年末", event: "债权人根据担保合同直接起诉当事人个人，法院冻结了其银行账户和房产。" },
      { date: "第3年", event: "当事人一边应诉，一边收集对方虚假破产和转移资产的证据。" },
      { date: "至今", event: "案件仍在进行中。当事人承担着巨额债务，同时努力证明对方的欺诈行为。" },
    ],
    timelineEn: [
      { date: "At the outset", event: "The counterparty company proposed a partnership and asked the client to personally provide a joint and several guarantee for an inter-company transaction." },
      { date: "At signing", event: "The contract was drafted by the counterparty's in-house legal team, who pressured the client to sign the same day. The client signed without having it reviewed by independent counsel." },
      { date: "After signing", event: "The client discovered the contract contained clauses extremely unfavorable to them, including a waiver of the right to demand exhaustion of remedies against the primary debtor first." },
      { date: "Year 1", event: "The counterparty company ran into financial difficulty and began falling behind on payments." },
      { date: "Year 2", event: "The counterparty company suddenly filed for bankruptcy. The client's investigation found that in the two months before filing, the company had transferred substantial assets to a new company held by the legal representative's relatives." },
      { date: "End of Year 2", event: "Creditors sued the client personally under the guarantee agreement, and the court froze the client's bank accounts and real estate." },
      { date: "Year 3", event: "While defending against the lawsuit, the client gathered evidence of the counterparty's sham bankruptcy and asset transfers." },
      { date: "Ongoing", event: "The case is still in progress. The client is carrying enormous debt while working to prove the counterparty's fraud." },
    ],
    redFlags: [
      "#11 担保陷阱 — 以个人名义为公司债务做担保",
      "#12 内部人起草 — 合同由对方公司起草并催促签字",
      "#13 条款陷阱 — 合同中有「放弃先诉抗辩权」等专业条款",
      "#14 虚假破产 — 公司申请破产前大量转移资产",
      "#15 逃避执行 — 资产转移到关联人名下",
    ],
    redFlagsEn: [
      "#11 Guarantee Trap — personally guaranteeing a company's debt",
      "#12 Drafted by Counterparty — the contract was drafted by the other company and signing was rushed",
      "#13 Clause Trap — the contract contained technical provisions like a waiver of the right of prior recourse",
      "#14 Sham Bankruptcy — the company transferred substantial assets before filing for bankruptcy",
      "#15 Evading Enforcement — assets were transferred into the names of related parties",
    ],
    lessons: [
      "个人担保的后果极其严重，签署前必须完全理解「连带责任」的含义",
      "任何合同都应经你自己的独立律师审查，尤其是对方起草的",
      "对方催你签字时更要冷静，合理的商业行为会给你足够的审阅时间",
      "注意合同中的专业术语，不理解就问，不要假装明白",
      "一旦发现对方有转移资产的迹象，立即申请财产保全",
      "关注对方法人在破产期间是否开设新公司或进行资产转移",
    ],
    lessonsEn: [
      "The consequences of a personal guarantee are extremely severe — fully understand what 'joint and several liability' means before signing",
      "Every contract should be reviewed by your own independent lawyer, especially one drafted by the other party",
      "Stay calm when pressured to sign quickly — legitimate business dealings allow you adequate time to review",
      "Pay attention to technical legal terms in a contract; ask if you don't understand, don't pretend to",
      "The moment you spot signs the other party is transferring assets, immediately apply for a property preservation order",
      "Watch for whether the counterparty's legal representative opens new companies or moves assets during bankruptcy proceedings",
    ],
  },
  {
    slug: "lawyer-bought-by-opponent",
    num: 3,
    title: "律师被对方收买",
    titleEn: "Lawyer Bought Off by the Opposing Side",
    tags: ["利益冲突", "反向操作", "利益冲突介绍", "信息泄露"],
    tagsEn: ["Conflict of Interest", "Working Against the Client", "Conflicted Referral", "Information Leak"],
    summary:
      "当事人在维权过程中委托了一位律师，后来发现这位律师与对手方存在私下联系。律师多次给出不利建议，包括放弃关键证据、建议撤诉。当事人自行调查后，律师承认被对方收买。",
    summaryEn:
      "While pursuing a legal claim, the client retained a lawyer, then later discovered the lawyer had been secretly in contact with the opposing party. The lawyer repeatedly gave advice that worked against the client's interests, including urging them to abandon key evidence and to withdraw the lawsuit. After the client investigated independently, the lawyer admitted to having been paid off by the other side.",
    timeline: [
      { date: "起初", event: "经第三方介绍委托律师处理纠纷案件，签订了正式合同。" },
      { date: "代理初期", event: "律师表现正常，按时汇报案件进展。" },
      { date: "关键阶段", event: "律师突然建议当事人不要追查对方的某项关键证据，理由是「太复杂，得不偿失」。" },
      { date: "此后", event: "律师多次建议和解，但和解条件明显不利于当事人。当事人拒绝后，律师态度开始冷淡。" },
      { date: "转折点", event: "当事人自行调查发现律师与对方公司法人有私下聚餐记录。" },
      { date: "对质", event: "当事人当面质问律师。在证据面前，律师承认对方曾经找过他，并支付了一笔费用。" },
      { date: "后续", event: "当事人解除委托，更换律师。新律师采用了完全不同的诉讼策略，追查了原律师建议放弃的证据。" },
      { date: "最终", event: "向律协投诉原律师，同时案件在新律师的代理下取得了重要进展。" },
    ],
    timelineEn: [
      { date: "At the outset", event: "Retained a lawyer through a third-party referral to handle the dispute and signed a formal contract." },
      { date: "Early representation", event: "The lawyer behaved normally, reporting on the case's progress on schedule." },
      { date: "Critical stage", event: "The lawyer suddenly advised the client not to pursue a key piece of evidence against the other side, claiming it was 'too complicated and not worth the effort.'" },
      { date: "Afterward", event: "The lawyer repeatedly pushed for settlement, on terms clearly unfavorable to the client. After the client refused, the lawyer's attitude turned cold." },
      { date: "Turning point", event: "Investigating on their own, the client discovered records of a private dinner between the lawyer and the legal representative of the opposing company." },
      { date: "Confrontation", event: "The client confronted the lawyer directly. Faced with the evidence, the lawyer admitted the other side had approached him and paid him a sum of money." },
      { date: "Aftermath", event: "The client terminated the engagement and hired a new lawyer, who took a completely different litigation strategy and pursued the evidence the original lawyer had advised abandoning." },
      { date: "Outcome", event: "Filed a complaint against the original lawyer with the bar association, while the case made significant progress under the new lawyer's representation." },
    ],
    redFlags: [
      "#02 利益冲突介绍 — 经第三方介绍，介绍人背景不清",
      "#07 反向操作 — 律师建议放弃关键证据和撤诉",
      "#08 利益冲突 — 律师的建议客观上有利于对方",
      "#19 信息泄露 — 律师可能向对方透露了当事人的诉讼策略",
    ],
    redFlagsEn: [
      "#02 Conflicted Referral — engaged through a third party whose background was unclear",
      "#07 Working Against the Client — the lawyer advised abandoning key evidence and withdrawing the suit",
      "#08 Conflict of Interest — the lawyer's advice objectively benefited the other side",
      "#19 Information Leak — the lawyer may have disclosed the client's litigation strategy to the opposing party",
    ],
    lessons: [
      "如果律师的建议让你感到不对劲，相信你的直觉",
      "律师建议放弃有利证据时，一定要寻求第二意见",
      "调查律师与对手方是否存在任何关联",
      "更换律师后案件出现转机，反过来证明原律师的问题",
      "保留律师给出不利建议的所有记录，这是后续投诉的证据",
      "律师被收买的情况虽然恶劣但并非罕见——保持警惕是必要的",
    ],
    lessonsEn: [
      "If a lawyer's advice feels wrong, trust your instincts",
      "Always seek a second opinion when a lawyer advises you to abandon favorable evidence",
      "Investigate whether your lawyer has any connection to the opposing party",
      "A turnaround in the case after switching lawyers can itself confirm that the original lawyer was the problem",
      "Keep records of every piece of unfavorable advice a lawyer gives you — this becomes evidence for a later complaint",
      "A lawyer being bought off is egregious but not rare — staying vigilant is necessary",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
