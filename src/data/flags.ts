export interface Flag {
  slug: string;
  num: string;
  signal: string;
  category: string;
  stage: string;
  stageKey: string;
  risk: "high" | "medium";
  description: string;
  realCase: string;
  advice: string[];
  signalEn: string;
  categoryEn: string;
  stageEn: string;
  descriptionEn: string;
  realCaseEn: string;
  adviceEn: string[];
}

export const stages: Record<string, string> = {
  hiring: "找律师阶段",
  representation: "代理过程中",
  contracts: "合同与交易",
  enforcement: "执行与破产",
  recourse: "投诉与维权",
};

export const stagesEn: Record<string, string> = {
  hiring: "Hiring Stage",
  representation: "During Representation",
  contracts: "Contracts & Deals",
  enforcement: "Enforcement & Bankruptcy",
  recourse: "Complaints & Recourse",
};

export const flags: Flag[] = [
  {
    slug: "01",
    num: "01",
    signal: "律师要求你把费用打到个人银行账户，而非律所对公账户",
    category: "私账收费欺诈",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "high",
    description:
      "正规律所收费必须通过对公账户，并开具正式发票。律师以个人账户收费，是最常见、最隐蔽的违规行为之一。一旦出了问题，你很难证明这笔钱是律师费，而非私人转账。",
    realCase:
      "当事人经人介绍委托了一位律师，对方要求将近12万元打到个人银行账户，没有签正式合同，也没有开发票。后来律师会主动断联消失，当事人投诉时发现没有任何正式委托记录可以证明法律服务关系。",
    advice: [
      "要求律师提供律所的对公账户，拒绝转账到个人账户",
      "付款后要求开具正式发票，核对金额和内容",
      "如果已经付到个人账户，立即保留转账记录截图",
      "向当地律师协会查询该律师的执业状态",
      "分辨其获得执照时间，是实习律师、助理律师还是资深律师",
    ],
    signalEn:
      "The lawyer asks you to wire fees to a personal bank account instead of the firm's corporate account",
    categoryEn: "Off-book Payment Fraud",
    stageEn: "Hiring Stage",
    descriptionEn:
      "Legitimate law firms must collect fees through a corporate account and issue an official invoice. Billing through a personal account is one of the most common and hardest-to-detect forms of misconduct. If something goes wrong, it becomes very difficult to prove the money was a legal fee rather than a private transfer.",
    realCaseEn:
      "A client was referred to a lawyer and asked to wire nearly RMB 120,000 to a personal bank account, with no formal contract signed and no invoice issued. The lawyer later disappeared. When the client tried to file a complaint, there was no formal engagement record proving a legal services relationship ever existed.",
    adviceEn: [
      "Require the lawyer to provide the firm's corporate account; refuse to transfer to a personal account",
      "After paying, demand an official invoice and verify the amount and description match",
      "If you have already paid into a personal account, immediately save screenshots of the transfer records",
      "Check the lawyer's licensing status with the local bar association",
      "Check when their license was issued — distinguish between trainee, associate, and senior lawyers",
    ],
  },
  {
    slug: "02",
    num: "02",
    signal: "律师是你的对手方或关联方介绍给你的",
    category: "利益冲突介绍",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "high",
    description:
      "如果推荐律师的人与你的对手方有利益关系，这位律师很可能不会真正站在你的立场。介绍人可能收取了回扣，或者这位律师本身就是对方安排的棋子。",
    realCase:
      "当事人在与公司产生纠纷后，经公司一位股东介绍请了律师。这位律师表面代理当事人，实际暗中与对方保持联系，多次建议当事人放弃有利证据，立场中立甚至背后勾结对立方。后来律师亲口承认被对方收买。",
    advice: [
      "独立寻找律师，不要完全依赖他人推荐",
      "通过当地律师协会官网或法律服务平台自行选择",
      "同时咨询 2-3 位律师，对比他们的专业判断",
      "调查介绍人与对手方是否有利益关系",
    ],
    signalEn:
      "The lawyer was referred to you by your opposing party or someone connected to them",
    categoryEn: "Conflict-of-Interest Referral",
    stageEn: "Hiring Stage",
    descriptionEn:
      "If the person who referred the lawyer has a financial relationship with your opposing party, that lawyer is unlikely to genuinely represent your interests. The referrer may be receiving a kickback, or the lawyer may simply be a pawn placed by the other side.",
    realCaseEn:
      "After a dispute arose with a company, a client hired a lawyer referred by one of the company's shareholders. On the surface the lawyer represented the client, but secretly stayed in contact with the opposing side and repeatedly advised the client to abandon favorable evidence — maintaining a neutral stance or even colluding with the opposition behind the scenes. The lawyer later admitted to having been paid off by the other side.",
    adviceEn: [
      "Find your own lawyer independently rather than relying solely on someone else's referral",
      "Select a lawyer yourself through the local bar association's official site or a legal services platform",
      "Consult 2-3 lawyers at once and compare their professional judgment",
      "Investigate whether the referrer has any financial relationship with the opposing party",
    ],
  },
  {
    slug: "03",
    num: "03",
    signal: "律师不与你签正式的书面委托合同",
    category: "无正式合同",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "high",
    description:
      "书面委托合同是律师与当事人法律服务关系的基础凭证。没有合同，出了问题你无法证明服务内容、收费金额、双方权责。口头约定和微信聊天记录在投诉和诉讼中效力有限。",
    realCase:
      "当事人委托律师处理一份协议，双方只有微信口头约定，没有签书面合同。律师收取费用后消极怠工，当事人投诉时，律协以「没有正式委托关系证明」为由不予受理。",
    advice: [
      "在付费之前必须签订书面委托合同，且一定不能一次性付款",
      "合同必须明确：服务范围、收费金额、退费条件、指派律师",
      "保留合同原件，拍照备份",
      "如果律师拒绝签合同，立即更换律师",
    ],
    signalEn: "The lawyer won't sign a formal written engagement contract with you",
    categoryEn: "No Formal Contract",
    stageEn: "Hiring Stage",
    descriptionEn:
      "A written engagement contract is the foundational proof of a legal services relationship between lawyer and client. Without one, if something goes wrong you cannot prove the scope of services, the fees charged, or each side's rights and obligations. Verbal agreements and chat messages carry limited weight in complaints or litigation.",
    realCaseEn:
      "A client hired a lawyer to handle a contract agreement based only on a verbal agreement over chat, with no written contract signed. After collecting the fee, the lawyer did little work. When the client filed a complaint, the bar association declined to take it up, citing the absence of proof of a formal engagement.",
    adviceEn: [
      "A written engagement contract must be signed before any payment is made — never pay everything upfront in one lump sum",
      "The contract must clearly state: scope of services, fee amount, refund conditions, and the assigned lawyer",
      "Keep the original contract and photograph it as a backup",
      "If the lawyer refuses to sign a contract, switch lawyers immediately",
    ],
  },
  {
    slug: "04",
    num: "04",
    signal: "委托合同中没有退费条款",
    category: "无退费条款",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "medium",
    description:
      "退费条款规定了在什么情况下可以退还律师费。没有这个条款，如果律师中途不做事或你对服务不满意，你很难追回已付费用。这是律师利用信息不对称设置的常见陷阱。",
    realCase:
      "当事人签了一份没有退费条款的委托合同，支付了20万元律师费。律师在官司出现后，消极怠工，不专业；当事人感觉不对要求退费被拒，因为合同中没有约定退费条件。",
    advice: [
      "在签约前要求合同中加入退费条款",
      "明确约定：未提供服务、服务质量不合格等情况下的退费比例",
      "如果律师拒绝加入退费条款，这本身就是一个警告信号",
      "了解当地律师协会关于律师费退还的相关规定",
    ],
    signalEn: "The engagement contract contains no refund clause",
    categoryEn: "No Refund Clause",
    stageEn: "Hiring Stage",
    descriptionEn:
      "A refund clause specifies the conditions under which legal fees can be refunded. Without one, it becomes very hard to recover fees already paid if the lawyer stops working on your case or you're unsatisfied with the service. This is a common trap lawyers exploit through information asymmetry.",
    realCaseEn:
      "A client signed an engagement contract with no refund clause and paid RMB 200,000 in legal fees. After litigation began, the lawyer was negligent and unprofessional. When the client sensed something was wrong and demanded a refund, it was denied because the contract contained no refund conditions.",
    adviceEn: [
      "Insist that a refund clause be added to the contract before signing",
      "Clearly specify refund percentages for cases such as no service rendered or substandard service quality",
      "If the lawyer refuses to include a refund clause, that alone is a warning sign",
      "Learn the local bar association's rules regarding refunds of legal fees",
    ],
  },
  {
    slug: "05",
    num: "05",
    signal: "合同上的律师和实际做事的律师不是同一个人",
    category: "挂名代理",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "medium",
    description:
      "有些律所用资深律师的名字签合同拉客户，实际工作交给经验不足的年轻律师或实习生处理。你支付的是资深律师的价格，得到的是初级服务。",
    realCase:
      "当事人冲着一位资深律师的名气签了委托合同。签约后发现所有文件准备、开庭出席都是一个刚入行的年轻律师在做，合同上的律师从未过问案件。",
    advice: [
      "签约前要求面见实际负责你案件的律师",
      "在合同中明确写明负责律师的姓名",
      "如果发现实际处理人与合同不符，有权要求更换或退费",
      "定期要求负责律师本人汇报进展",
    ],
    signalEn:
      "The lawyer named on the contract is not the one actually working on your case",
    categoryEn: "Ghost Representation",
    stageEn: "Hiring Stage",
    descriptionEn:
      "Some firms use a senior lawyer's name on the contract to attract clients, then hand the actual work to a less experienced junior lawyer or intern. You pay a senior lawyer's rate but receive junior-level service.",
    realCaseEn:
      "A client signed an engagement contract drawn in by a senior lawyer's reputation. After signing, it turned out that all document preparation and court appearances were handled by a junior lawyer who had just entered practice — the lawyer named on the contract never touched the case.",
    adviceEn: [
      "Before signing, insist on meeting the lawyer who will actually handle your case",
      "Have the contract clearly state the name of the responsible lawyer",
      "If the actual handler doesn't match the contract, you have the right to demand a change or a refund",
      "Regularly require the responsible lawyer, in person, to report on progress",
    ],
  },
  {
    slug: "06",
    num: "06",
    signal: "律师长期不回消息，不汇报案件进展",
    category: "消极怠工",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师收费后消失是一种严重的失职行为。正常的律师应该定期主动向客户汇报案件进展，至少在关键节点（立案、开庭、判决）前后告知情况。长期不回复可能意味着律师根本没有在处理你的案件。",
    realCase:
      "当事人支付了20万元律师费后，当事人后来发现律师在代理期间连续不回微信、不接电话；消极怠工，不专业。更换律师告知原律师根本没有对接法院，当事人的代理律师栏竟然是空白。",
    advice: [
      "发送书面邮件要求律师在指定日期前汇报进展",
      "保留所有联系律师的记录（微信、电话、邮件）",
      "超过两周不回复，考虑向律协投诉",
      "在委托合同中约定律师汇报进展的频率和方式",
      "一定要在合同约定退款事宜",
    ],
    signalEn:
      "The lawyer stops responding for long periods and doesn't report on case progress",
    categoryEn: "Neglect of Duty",
    stageEn: "During Representation",
    descriptionEn:
      "A lawyer disappearing after collecting fees is a serious dereliction of duty. A lawyer should proactively update the client on case progress on a regular basis, at minimum around key milestones (filing, hearings, judgment). Long silences may mean the lawyer isn't working on your case at all.",
    realCaseEn:
      "After paying RMB 200,000 in legal fees, the client discovered the lawyer had gone silent for extended periods — not responding to messages or answering calls, and being negligent and unprofessional. After switching lawyers, the client was told the original lawyer had never even liaised with the court — the client's attorney-of-record field was completely blank.",
    adviceEn: [
      "Send a written email requiring the lawyer to report progress by a specified date",
      "Keep records of all attempts to contact the lawyer (chat messages, calls, emails)",
      "If there's no response for more than two weeks, consider filing a complaint with the bar association",
      "Specify the frequency and method of progress reporting in the engagement contract",
      "Make sure to include refund terms in the contract",
    ],
  },
  {
    slug: "07",
    num: "07",
    signal: "律师建议你撤诉或放弃权利，但不给书面理由",
    category: "反向操作",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师有权给出专业建议，但任何重大决策建议（撤诉、和解、放弃上诉）都必须有书面的法律分析依据。如果律师只是口头劝你放弃，不愿出具书面意见，这可能意味着这个建议不是为了你的利益。",
    realCase:
      "律师在二审阶段突然建议当事人放弃上诉，理由是「赢的可能性不大」，但拒绝提供书面法律意见。当事人换了律师后二审改判胜诉。后来得知原律师与对方有私下联系。",
    advice: [
      "要求律师出具书面法律意见，说明建议放弃的理由和法律依据",
      "如果律师拒绝出具书面意见，这本身就是一个重大警告",
      "寻求第二位独立律师的意见进行对比",
      "不要在压力下做出放弃权利的决定",
    ],
    signalEn:
      "The lawyer advises you to withdraw your suit or waive your rights but gives no written reasoning",
    categoryEn: "Working Against You",
    stageEn: "During Representation",
    descriptionEn:
      "A lawyer is entitled to give professional advice, but any major recommendation — withdrawing a suit, settling, abandoning an appeal — should rest on a written legal analysis. If the lawyer only verbally urges you to give up and refuses to put an opinion in writing, the advice may not be serving your interests.",
    realCaseEn:
      "During a second-instance appeal, a lawyer suddenly advised the client to abandon the appeal, citing \"low chances of winning,\" but refused to provide a written legal opinion. After switching lawyers, the client won the appeal on reversal. It later emerged that the original lawyer had been in private contact with the opposing side.",
    adviceEn: [
      "Require the lawyer to produce a written legal opinion explaining the reasoning and legal basis for recommending you give up",
      "If the lawyer refuses to provide a written opinion, that alone is a major warning sign",
      "Seek a second, independent lawyer's opinion for comparison",
      "Do not make a decision to waive your rights under pressure",
    ],
  },
  {
    slug: "08",
    num: "08",
    signal: "律师的建议客观上更有利于对方而非你",
    category: "利益冲突",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "如果你的律师反复建议你放弃对你有利的证据、不追究关键问题、或在你占优势时主动让步，这可能不是专业判断，而是利益冲突的表现。律师可能已经被对方收买，或者与对方存在某种利益关系。",
    realCase:
      "律师多次建议当事人不要追查对方公司的隐匿资产，理由是「太复杂」。当事人自行查到证据后，律师仍然建议放弃。后来该律师承认与对方公司法人有私人关系。",
    advice: [
      "记录律师给出的每一条不利建议",
      "寻求第二位独立律师的意见",
      "如果两位律师的建议完全相反，深入了解原因",
      "调查律师与对方当事人是否存在关联",
    ],
    signalEn:
      "The lawyer's advice objectively benefits the other side more than you",
    categoryEn: "Conflict of Interest",
    stageEn: "During Representation",
    descriptionEn:
      "If your lawyer repeatedly advises you to abandon evidence that favors you, drop pursuit of key issues, or make concessions when you hold the advantage, this may not be professional judgment but a sign of conflicted interest. The lawyer may have been paid off by the other side, or may have some undisclosed relationship with them.",
    realCaseEn:
      "A lawyer repeatedly advised the client not to pursue the opposing company's concealed assets, calling it \"too complicated.\" After the client found the evidence independently, the lawyer still advised dropping it. The lawyer later admitted to having a personal relationship with the opposing company's legal representative.",
    adviceEn: [
      "Keep a record of every piece of unfavorable advice the lawyer gives",
      "Seek a second, independent lawyer's opinion",
      "If two lawyers' recommendations are completely opposite, dig into why",
      "Investigate whether your lawyer has any connection to the opposing party",
    ],
  },
  {
    slug: "09",
    num: "09",
    signal: "律师要求额外的「打点费」「关系费」",
    category: "索取贿赂",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "任何以「疏通关系」「打点法官」为名目的收费都是违法的。正规律师不会也不应该向当事人索取此类费用。这种行为本身就构成违法，而且你的钱大概率不会用于所谓的「打点」。",
    realCase:
      "律师以「需要请法官吃饭」「打点书记员」为由，向当事人索取了数万元的额外费用。事后没有任何效果，当事人要求退还时律师矢口否认收过这笔钱。",
    advice: [
      "拒绝任何合同约定之外的费用",
      "以「打点」「关系」为名的收费 100% 是骗局",
      "保留律师索取额外费用的证据（微信记录、录音等）",
      "向律协和司法局举报",
    ],
    signalEn:
      "The lawyer asks for an extra \"facilitation fee\" or \"connections fee\"",
    categoryEn: "Solicitation of Bribes",
    stageEn: "During Representation",
    descriptionEn:
      "Any fee framed as \"greasing the wheels\" or \"paying off the judge\" is illegal. A legitimate lawyer will not and should not ask a client for money of this kind. The act itself is unlawful, and your money will most likely never actually go toward any such \"facilitation.\"",
    realCaseEn:
      "Citing a need to \"treat the judge to dinner\" and \"pay off the court clerk,\" a lawyer solicited tens of thousands of RMB in extra fees from a client. Nothing came of it, and when the client demanded the money back, the lawyer flatly denied ever having received it.",
    adviceEn: [
      "Refuse any fee not specified in the contract",
      "Any fee framed as \"facilitation\" or \"connections\" is 100% a scam",
      "Keep evidence of the lawyer soliciting extra fees (chat records, recordings, etc.)",
      "Report it to the bar association and the judicial administration bureau",
    ],
  },
  {
    slug: "10",
    num: "10",
    signal: "律师寄来的发票是空白的或金额不符",
    category: "发票欺诈",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "medium",
    description:
      "正规的律师费发票应该有明确的金额、服务内容和日期。空白发票、金额不符的发票或根本不开发票，说明这笔费用没有进入律所的正规财务体系，属于违规操作。",
    realCase:
      "当事人多次催要发票后，律师寄来了一张空白发票——没有填写金额和服务内容。当事人投诉时，律所以「发票是律师个人行为」为由推卸责任。",
    advice: [
      "付款后立即要求开具正式发票",
      "核对发票上的金额、内容、日期是否与合同一致",
      "空白发票或金额不符的发票要拒收，要求重开",
      "保留所有发票原件和付款凭证",
    ],
    signalEn:
      "The invoice the lawyer sends is blank or the amount doesn't match",
    categoryEn: "Invoice Fraud",
    stageEn: "During Representation",
    descriptionEn:
      "A legitimate legal fee invoice should clearly state the amount, the services rendered, and the date. A blank invoice, a mismatched amount, or no invoice at all indicates the fee never entered the firm's formal accounting system — a form of misconduct.",
    realCaseEn:
      "After repeatedly asking for an invoice, a client received one that was blank — no amount or description of services filled in. When the client complained, the firm shifted blame, claiming the invoice was the lawyer's personal act rather than the firm's.",
    adviceEn: [
      "Demand an official invoice immediately after payment",
      "Check that the amount, description, and date on the invoice match the contract",
      "Refuse blank invoices or ones with mismatched amounts and demand a corrected one",
      "Keep all original invoices and proof of payment",
    ],
  },
  {
    slug: "11",
    num: "11",
    signal: "有人要你以个人名义为公司债务做担保",
    category: "担保陷阱",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "high",
    description:
      "个人担保意味着你用全部个人财产（房产、存款、工资）为公司的债务承担连带责任。如果公司还不了钱，债权人可以直接向你追偿。很多人在不了解后果的情况下签下了担保合同，最终承担了巨额债务。",
    realCase:
      "当事人被要求为一笔公司间的交易提供个人连带担保。对方公司后来资不抵债，债权人直接起诉当事人个人，冻结了其银行账户和房产。当事人至今仍在偿还这笔并非自己使用的债务。",
    advice: [
      "除非你完全了解后果，否则绝不签个人担保",
      "签署前必须咨询独立律师，确认风险范围",
      "了解「连带责任」和「一般保证」的区别",
      "如果已签担保，留意担保期限和追偿权",
    ],
    signalEn:
      "Someone asks you to personally guarantee a company's debt",
    categoryEn: "Personal Guarantee Trap",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "A personal guarantee means you pledge your entire personal estate — real estate, savings, wages — as joint-and-several liability for a company's debt. If the company can't pay, creditors can pursue you directly. Many people sign guarantee agreements without understanding the consequences and end up shouldering enormous debts.",
    realCaseEn:
      "A client was asked to provide a personal joint-and-several guarantee for a transaction between companies. The counterparty company later became insolvent, and creditors sued the client personally, freezing their bank accounts and real estate. The client is still repaying a debt they never personally benefited from.",
    adviceEn: [
      "Never sign a personal guarantee unless you fully understand the consequences",
      "Consult an independent lawyer before signing to confirm the scope of risk",
      "Understand the difference between \"joint-and-several liability\" and a \"general guarantee\"",
      "If you've already signed a guarantee, pay attention to its term and any rights of recourse",
    ],
  },
  {
    slug: "12",
    num: "12",
    signal: "合同文本由对方起草并催你签字",
    category: "内部人起草",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "medium",
    description:
      "对方起草的合同天然倾向于保护对方利益。如果对方催你尽快签字，不给你足够的审阅时间，更要高度警惕。合同中的每一个条款都可能影响你的权益。",
    realCase:
      "对方公司的总经理发来合同文本，催促当事人当天签字。当事人没有仔细审阅就签了，后来才发现合同中包含了对自己极为不利的仲裁条款和违约金条款。",
    advice: [
      "任何合同都应由你自己的律师先审阅",
      "不要被对方的催促所迫，合理的签约应该给你充足的审阅时间",
      "特别注意违约金条款、争议解决条款和担保条款",
      "对方起草的合同你有权要求修改",
    ],
    signalEn:
      "The contract was drafted by the other side, and they are pressuring you to sign quickly",
    categoryEn: "One-Sided Drafting",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "A contract drafted by the other party naturally tends to protect their interests. If they push you to sign quickly without giving you enough time to review, be especially wary. Every clause in a contract can affect your rights.",
    realCaseEn:
      "A general manager at the counterparty company sent over a contract and pressured the client to sign it that same day. The client signed without careful review, only to later discover clauses on arbitration and liquidated damages that were extremely unfavorable.",
    adviceEn: [
      "Any contract should be reviewed by your own lawyer first",
      "Don't let the other side's urgency pressure you — a reasonable signing process gives you adequate time to review",
      "Pay particular attention to liquidated-damages clauses, dispute-resolution clauses, and guarantee clauses",
      "You have the right to request changes to a contract drafted by the other party",
    ],
  },
  {
    slug: "13",
    num: "13",
    signal: "合同中出现你不理解的专业术语或复杂条款",
    category: "条款陷阱",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "medium",
    description:
      "法律文件中的专业术语可能暗藏对你不利的条件。不理解就签字，等于盲目放弃了自己的权利。任何你不理解的条款都有权要求解释。",
    realCase:
      "合同中有一条「放弃先诉抗辩权」的条款，当事人不了解这意味着什么就签了。后来才知道这意味着债权人可以不先找公司，直接找他个人追债。",
    advice: [
      "合同中每一条你不理解的内容都有权要求解释",
      "不要因为不好意思而假装理解",
      "请独立律师逐条审查合同内容",
      "特别关注：担保方式、违约条件、争议管辖、放弃权利等条款",
    ],
    signalEn:
      "The contract contains professional terminology or complex clauses you don't understand",
    categoryEn: "Clause Trap",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "Legal jargon can conceal terms that work against you. Signing without understanding is effectively surrendering your rights blindly. You have the right to demand an explanation of any clause you don't understand.",
    realCaseEn:
      "A contract contained a clause waiving the \"defense of prior demand,\" which the client signed without understanding. It later turned out this meant creditors could pursue the client personally without first going after the company.",
    adviceEn: [
      "You have the right to demand an explanation for anything in a contract you don't understand",
      "Don't pretend to understand out of embarrassment",
      "Have an independent lawyer review the contract clause by clause",
      "Pay special attention to guarantee terms, default conditions, dispute jurisdiction, and rights-waiver clauses",
    ],
  },
  {
    slug: "14",
    num: "14",
    signal: "公司突然申请破产，但你知道它还有资产",
    category: "虚假破产",
    stage: "执行与破产",
    stageKey: "enforcement",
    risk: "high",
    description:
      "虚假破产是一种通过伪造资不抵债的假象来逃避债务的违法行为。公司可能将资产转移到关联公司或个人名下，然后申请破产来赖掉债务。",
    realCase:
      "对方公司在败诉后突然申请破产，声称没有资产可供执行。当事人自行调查发现该公司在破产前两个月将大量资产以极低价格转让给了法人的亲属开设的新公司。",
    advice: [
      "发现对方有转移资产迹象时，立即申请财产保全",
      "调查对方公司近期的股权变更和资产变动",
      "向法院举报虚假破产行为",
      "关注对方法人是否在破产期间开设新公司",
    ],
    signalEn:
      "The company suddenly files for bankruptcy, but you know it still has assets",
    categoryEn: "Sham Bankruptcy",
    stageEn: "Enforcement & Bankruptcy",
    descriptionEn:
      "Sham bankruptcy is an unlawful scheme to evade debt by fabricating the appearance of insolvency. A company may transfer its assets to affiliated companies or individuals and then file for bankruptcy to write off its debts.",
    realCaseEn:
      "After losing the case, the opposing company suddenly filed for bankruptcy, claiming it had no assets left to enforce against. The client's own investigation found that, two months before filing, the company had transferred large amounts of assets at deeply discounted prices to a new company set up by the legal representative's relatives.",
    adviceEn: [
      "The moment you spot signs of asset transfer, apply for a property preservation order immediately",
      "Investigate the opposing company's recent equity changes and asset movements",
      "Report suspected sham bankruptcy to the court",
      "Watch whether the opposing legal representative sets up a new company during the bankruptcy process",
    ],
  },
  {
    slug: "15",
    num: "15",
    signal: "判决生效后对方转移或隐匿财产",
    category: "逃避执行",
    stage: "执行与破产",
    stageKey: "enforcement",
    risk: "high",
    description:
      "判决胜诉不等于拿到钱。如果被执行人在判决后将财产转移到他人名下或隐匿资产，你的判决书可能变成一张废纸。这种行为涉嫌「拒不执行判决、裁定罪」。",
    realCase:
      "当事人胜诉后申请执行，发现对方已将名下房产过户给亲属，银行账户余额为零。法院虽然发了限制高消费令，但对方使用他人账户消费，实际生活未受影响。",
    advice: [
      "胜诉后尽快申请强制执行，不要给对方转移资产的时间",
      "诉讼阶段就可以申请财产保全",
      "向法院提供对方可执行财产的线索",
      "对方有能力而拒不执行的，可以申请追究刑事责任",
    ],
    signalEn:
      "After the judgment takes effect, the other party transfers or hides assets",
    categoryEn: "Evading Enforcement",
    stageEn: "Enforcement & Bankruptcy",
    descriptionEn:
      "Winning a judgment doesn't mean getting paid. If the judgment debtor transfers property into someone else's name or hides assets after the ruling, your judgment can become worthless paper. This conduct may constitute the crime of refusing to enforce a judgment or ruling.",
    realCaseEn:
      "After winning and applying for enforcement, a client discovered the other party had already transferred their real estate to relatives and drained their bank account to zero. The court issued a consumption-restriction order, but the debtor kept spending through other people's accounts, with no real impact on their lifestyle.",
    adviceEn: [
      "Apply for enforcement as soon as you win, without giving the other side time to move assets",
      "You can apply for property preservation as early as the litigation stage",
      "Provide the court with leads on the other party's enforceable assets",
      "If the other side has the means but refuses to comply, you can pursue criminal liability",
    ],
  },
  {
    slug: "16",
    num: "16",
    signal: "破产管理人的行为明显偏向债务人",
    category: "管理人失职",
    stage: "执行与破产",
    stageKey: "enforcement",
    risk: "medium",
    description:
      "破产管理人应该独立、公正地处理破产事务。如果管理人不积极追查债务人的隐匿资产，不调查可疑的关联交易，甚至帮助债务人逃避清偿，这可能存在利益输送。",
    realCase:
      "破产管理人对债务人在破产前六个月内的大额资产转移视而不见，也没有追查法人个人名下的可疑财产。债权人多次要求调查均被以「没有证据」为由拒绝。",
    advice: [
      "密切关注管理人的工作报告，提出质疑",
      "自行收集债务人转移资产的证据提交给法院",
      "联合其他债权人共同监督管理人的行为",
      "如果管理人严重失职，可以申请更换",
    ],
    signalEn:
      "The bankruptcy administrator's conduct clearly favors the debtor",
    categoryEn: "Administrator Misconduct",
    stageEn: "Enforcement & Bankruptcy",
    descriptionEn:
      "A bankruptcy administrator is supposed to handle proceedings independently and impartially. If the administrator fails to actively trace the debtor's hidden assets, doesn't investigate suspicious related-party transactions, or even helps the debtor evade repayment, this may point to an improper transfer of benefits.",
    realCaseEn:
      "A bankruptcy administrator turned a blind eye to large asset transfers the debtor made in the six months before filing and did not investigate suspicious assets held personally by the legal representative. Creditors repeatedly requested an investigation but were refused each time, citing \"lack of evidence.\"",
    adviceEn: [
      "Closely monitor the administrator's work reports and raise objections",
      "Independently gather evidence of the debtor's asset transfers and submit it to the court",
      "Join with other creditors to jointly monitor the administrator's conduct",
      "If the administrator's misconduct is serious, you can apply to have them replaced",
    ],
  },
  {
    slug: "17",
    num: "17",
    signal: "投诉后行政机关久拖不决或不了了之",
    category: "行政不作为",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "medium",
    description:
      "向律协或司法局投诉后，如果长期没有结果，或者调查过程敷衍了事，可能是行政机关的不作为，也可能是被投诉的律师有「关系」。不要因此放弃，还有其他救济途径。",
    realCase:
      "当事人向律协投诉律师私账收费和消极怠工，投诉后等了八个月才得到一个含糊的答复：「调查未发现违规行为」，没有任何具体的调查过程说明。",
    advice: [
      "投诉时附上完整的证据材料，包括转账记录、合同、通信记录",
      "记录投诉的受理时间，超过法定期限可以追问",
      "如果律协不作为，可以向上级司法行政部门投诉",
      "行政途径之外还有民事诉讼途径",
    ],
    signalEn:
      "After filing a complaint, the regulatory agency stalls indefinitely or lets it quietly drop",
    categoryEn: "Administrative Inaction",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "If a complaint filed with the bar association or judicial bureau produces no result for a long time, or the investigation is handled perfunctorily, it may reflect agency inaction — or it may mean the accused lawyer has \"connections.\" Don't give up; other avenues for recourse remain available.",
    realCaseEn:
      "A client filed a complaint with the bar association over off-book billing and neglect of duty. After waiting eight months, they received only a vague reply — \"investigation found no violations\" — with no explanation of what the investigation actually covered.",
    adviceEn: [
      "Attach complete supporting evidence to your complaint, including transfer records, the contract, and communication logs",
      "Record when your complaint was accepted; you can follow up once the statutory deadline is exceeded",
      "If the bar association fails to act, you can escalate to the higher judicial administrative authority",
      "Beyond administrative channels, civil litigation remains an option",
    ],
  },
  {
    slug: "18",
    num: "18",
    signal: "调解过程中只有你被要求让步",
    category: "偏向调解",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "medium",
    description:
      "调解应该是双方协商的过程。如果调解人只逼你出价、让步，而对方没有任何压力，这个调解可能不公正。调解失败不等于你输了——你还有诉讼这条路。",
    realCase:
      "在律协主持的调解中，调解人反复要求当事人降低赔偿要求，却对律师的违规行为轻描淡写。当事人被施压在不利条件下和解，但最终选择拒绝并继续通过法律途径维权。",
    advice: [
      "明确你的底线，不要在压力下做出让步",
      "调解失败不代表你输了，这只是一种解决方式",
      "调解过程中的陈述不会影响后续诉讼",
      "如果调解人明显偏袒对方，可以拒绝调解",
    ],
    signalEn: "In mediation, only you are being pressured to make concessions",
    categoryEn: "Biased Mediation",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "Mediation should be a process of negotiation between both sides. If the mediator only pushes you to lower your demands and make concessions while the other side faces no pressure at all, the mediation may not be fair. A failed mediation doesn't mean you've lost — litigation remains an option.",
    realCaseEn:
      "In mediation presided over by the bar association, the mediator repeatedly pressured the client to lower their compensation demands while downplaying the lawyer's misconduct. The client was pressured toward an unfavorable settlement but ultimately refused and continued pursuing the matter through legal channels.",
    adviceEn: [
      "Know your bottom line clearly and don't make concessions under pressure",
      "A failed mediation doesn't mean you've lost — it's simply one method of resolution",
      "Statements made during mediation generally do not affect subsequent litigation",
      "If the mediator is clearly biased toward the other side, you can decline mediation",
    ],
  },
  {
    slug: "19",
    num: "19",
    signal: "你透露证据弱点后对方态度突然变化",
    category: "信息泄露",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "high",
    description:
      "如果你向调解人、行政机关工作人员或其他人透露了你的证据弱点，而对方随后的态度明显变化（突然变强硬或改变策略），这很可能意味着你的信息被泄露了。",
    realCase:
      "当事人在调解中告诉调解人自己没有保留某份关键文件，第二天对方律师就以此为由拒绝和解，并在后续庭审中专门针对这一弱点展开攻击。",
    advice: [
      "只向你的律师透露证据弱点，不要对任何第三方讲",
      "不要在调解或投诉过程中暴露你的全部底牌",
      "保留关键证据到最合适的时机使用",
      "如果怀疑信息泄露，立即评估影响并调整策略",
    ],
    signalEn:
      "After you disclose a weakness in your evidence, the other side's attitude suddenly shifts",
    categoryEn: "Information Leak",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "If you disclose a weakness in your evidence to a mediator, an administrative official, or anyone else, and the other side's posture noticeably changes afterward — suddenly hardening or shifting strategy — this strongly suggests your information was leaked.",
    realCaseEn:
      "During mediation, a client told the mediator that a key document had not been retained. The very next day, the opposing lawyer cited exactly that to refuse settlement, and later attacked this specific weakness during the hearing.",
    adviceEn: [
      "Only disclose evidentiary weaknesses to your own lawyer, never to any third party",
      "Don't reveal your full hand during mediation or complaint proceedings",
      "Hold key evidence back until the most advantageous moment to use it",
      "If you suspect a leak, immediately assess the impact and adjust your strategy",
    ],
  },
  {
    slug: "20",
    num: "20",
    signal: "对方用程序技巧拖延时间来消耗你",
    category: "程序拖延",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "medium",
    description:
      "有些对手方会故意利用管辖权异议、反诉、申请鉴定等程序手段来拖延案件进程，目的是消耗你的时间、精力和金钱，迫使你放弃或接受不利的和解条件。",
    realCase:
      "对方先后提出管辖权异议、申请回避、申请重新鉴定，每一次都让案件延后数月。当事人在三年的拖延中花费了大量精力和律师费，最终因为经济压力被迫接受了远低于预期的和解金额。",
    advice: [
      "了解诉讼中常见的拖延手段，做好心理和经济上的准备",
      "要求律师评估对方提出的程序申请是否合理",
      "不要因为时间长就轻易放弃或让步",
      "在经济上做好打持久战的准备",
    ],
    signalEn:
      "The other side uses procedural tactics to drag out the case and wear you down",
    categoryEn: "Procedural Delay",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "Some opposing parties deliberately exploit procedural tools — jurisdictional objections, counterclaims, requests for re-appraisal — to stall proceedings. The goal is to drain your time, energy, and money, pressuring you to give up or accept an unfavorable settlement.",
    realCaseEn:
      "The other side raised a jurisdictional objection, then requested recusal, then requested re-appraisal — each one delaying the case by months. Over three years of delay, the client spent enormous time, energy, and legal fees, and financial pressure eventually forced them to accept a settlement far below what they had expected.",
    adviceEn: [
      "Learn the common delay tactics used in litigation and prepare yourself mentally and financially",
      "Ask your lawyer to assess whether the other side's procedural motions are legitimate",
      "Don't give up or make concessions simply because the process is dragging on",
      "Prepare financially for a long fight",
    ],
  },
  {
    slug: "21",
    num: "21",
    signal: "律师声称有「特殊关系」能保证胜诉",
    category: "虚假承诺",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "high",
    description:
      "没有任何律师能够保证案件结果。声称与法官、检察官有「特殊关系」或「包赢」的律师，不是在骗你的钱，就是在暗示自己会行贿——这两种情况都极其危险。",
    realCase:
      "律师声称自己和主审法官是同学，「保证胜诉」。当事人因此支付了高额律师费。最终败诉后，律师以「关系没用上」为由拒绝退费，当事人发现律师根本不认识法官。",
    advice: [
      "任何保证胜诉的承诺都不可信",
      "法律规定律师不得对案件结果作出承诺",
      "声称有关系的律师更不值得信任",
      "选择律师应看专业能力，而非所谓的人脉",
    ],
    signalEn:
      "The lawyer claims to have 'special connections' and guarantees you'll win",
    categoryEn: "False Promises",
    stageEn: "Hiring Stage",
    descriptionEn:
      "No lawyer can guarantee the outcome of a case. A lawyer who claims to have 'special relationships' with judges or prosecutors, or who promises a sure win, is either scamming you or implying they'll bribe someone — both are extremely dangerous.",
    realCaseEn:
      "A lawyer claimed to be a former classmate of the presiding judge and 'guaranteed a win.' The client paid a high fee. After losing, the lawyer refused a refund, saying 'the connection didn't pan out.' The client later discovered the lawyer didn't know the judge at all.",
    adviceEn: [
      "Any promise of guaranteed victory is not to be trusted",
      "Lawyers are legally prohibited from promising case outcomes",
      "A lawyer who claims to have connections is even less trustworthy",
      "Choose a lawyer based on professional competence, not supposed connections",
    ],
  },
  {
    slug: "22",
    num: "22",
    signal: "律师曾经代理过你的对手方或其关联方的案件",
    category: "隐性利益冲突",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "high",
    description:
      "即使律师目前没有在代理对方，过去的代理关系也可能让律师掌握对方的内部信息或保持某种默契。这种隐性利益冲突比直接介绍关系更难发现，但同样危险。",
    realCase:
      "当事人委托了一位律师打官司，后来发现这位律师去年曾代理过对方公司的另一起案件。律师在庭审中表现异常消极，关键证据也没有提交。调查后发现律师与对方公司保持着长期合作关系。",
    advice: [
      "委托前询问律师是否曾代理过对方或其关联方",
      "通过裁判文书网搜索律师过往代理的案件",
      "如果发现利益冲突，立即更换律师",
      "在合同中加入利益冲突的声明条款",
    ],
    signalEn:
      "The lawyer has previously represented your opposing party or their affiliates",
    categoryEn: "Hidden Conflict of Interest",
    stageEn: "Hiring Stage",
    descriptionEn:
      "Even if a lawyer isn't currently representing the other side, a past engagement may mean they hold insider information or maintain an implicit understanding with the opposition. This hidden conflict is harder to detect than a direct referral but equally dangerous.",
    realCaseEn:
      "A client hired a lawyer, only to discover later that the same lawyer had represented the opposing company in a different case the previous year. The lawyer was noticeably passive in court and failed to submit key evidence. Investigation revealed the lawyer had an ongoing business relationship with the opposing company.",
    adviceEn: [
      "Before hiring, ask the lawyer whether they have ever represented the opposing party or its affiliates",
      "Search the lawyer's past cases on public court record databases",
      "If you discover a conflict of interest, switch lawyers immediately",
      "Include a conflict-of-interest disclosure clause in the engagement contract",
    ],
  },
  {
    slug: "23",
    num: "23",
    signal: "律师在网上的评价全是好评、零差评",
    category: "虚假口碑",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "medium",
    description:
      "真正有经验的律师不可能做到零差评。如果一位律师在各平台上只有清一色的好评，而且评价内容空洞、风格雷同，很可能是花钱刷出来的。虚假口碑本身就说明这位律师的职业诚信有问题。",
    realCase:
      "当事人在法律咨询平台上看到一位律师有上百条五星好评，评价内容几乎都是「专业、负责、推荐」。委托后发现律师根本不专业，连基本的法律程序都搞错了。",
    advice: [
      "不要只看好评数量，关注评价内容是否具体、真实",
      "警惕清一色的好评和雷同的评价用语",
      "优先参考裁判文书网上的实际案件记录",
      "通过多个渠道交叉验证律师的口碑",
    ],
    signalEn:
      "The lawyer's online reviews are all positive with zero negative feedback",
    categoryEn: "Fake Reputation",
    stageEn: "Hiring Stage",
    descriptionEn:
      "No experienced lawyer has zero negative reviews. If a lawyer has only glowing reviews across platforms, and the content is vague and formulaic, they are likely paid-for fakes. Fake reviews are themselves a sign of questionable professional integrity.",
    realCaseEn:
      "A client found a lawyer with hundreds of five-star reviews on a legal platform, almost all saying 'professional, responsible, recommended.' After hiring, the client discovered the lawyer was anything but professional — they even got basic legal procedures wrong.",
    adviceEn: [
      "Don't just look at the number of positive reviews — check whether the content is specific and authentic",
      "Be wary of uniformly positive reviews with identical phrasing",
      "Prioritize actual case records from public court databases",
      "Cross-verify the lawyer's reputation through multiple channels",
    ],
  },
  {
    slug: "24",
    num: "24",
    signal: "一次性全额付款，不接受分阶段付费",
    category: "一次性收费陷阱",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "high",
    description:
      "分阶段付费是保护当事人最重要的手段之一。一次性全额付款后，律师的服务动力会大幅下降，甚至可能收钱后消极怠工、背叛当事人。分阶段付费让你在每个阶段都有谈判筹码。",
    realCase:
      "当事人一次性支付了全部律师费后，律师的态度明显转变——回复越来越慢，开庭准备越来越敷衍，甚至在关键阶段建议当事人放弃。当事人想更换律师，但费用已全部付出，进退两难。",
    advice: [
      "坚持分阶段付费：签约付一部分，立案付一部分，开庭付一部分，结案付尾款",
      "合同中明确约定每个阶段的付款金额和条件",
      "永远不要一次性支付全部律师费",
      "如果律师坚持全额预付，换一个律师",
      "分阶段付费是你保持控制力的最好方式",
    ],
    signalEn:
      "The lawyer demands full payment upfront and refuses staged billing",
    categoryEn: "Lump-Sum Payment Trap",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "Staged payments are one of the most important safeguards for a client. After paying everything upfront, a lawyer's motivation to deliver drops sharply — they may become negligent or even work against you. Staged payments keep you with leverage at every phase.",
    realCaseEn:
      "After paying the full legal fee upfront, a client watched the lawyer's attitude visibly shift — responses grew slower, hearing preparation sloppier, and at a critical stage the lawyer even suggested giving up. The client wanted to switch lawyers but had already paid in full, leaving them stuck.",
    adviceEn: [
      "Insist on staged payments: a portion at signing, a portion at filing, a portion at hearing, and the balance at case close",
      "Clearly specify the amount and conditions for each stage in the contract",
      "Never pay the full legal fee in one lump sum",
      "If the lawyer insists on full prepayment, find a different lawyer",
      "Staged payment is the best way to maintain your leverage",
    ],
  },
  {
    slug: "25",
    num: "25",
    signal: "律师频繁追加费用，每次都有新理由",
    category: "挤牙膏式收费",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "签合同时说好的费用之外，律师不断以各种理由追加收费——「需要请专家」「要做额外调查」「案件比预想复杂」。每次金额不大，但累积起来远超预期。这是典型的挤牙膏式收费陷阱。",
    realCase:
      "当事人签约时约定律师费5万元。之后律师先后以「调查取证费」「专家咨询费」「加急处理费」等名目追加了4次费用，总计又多付了3万多元。但案件质量并没有因为多付钱而提高。",
    advice: [
      "签约时明确约定所有费用，包括可能产生的额外费用",
      "拒绝合同之外的任何费用，除非有书面说明和合理依据",
      "每次追加费用时，要求律师出具书面的费用明细和理由",
      "如果频繁追加费用，考虑是否需要更换律师",
    ],
    signalEn:
      "The lawyer keeps adding fees with a new justification each time",
    categoryEn: "Drip-Feed Billing",
    stageEn: "During Representation",
    descriptionEn:
      "Beyond the fees agreed in the contract, the lawyer keeps adding charges under various pretexts — 'need an expert,' 'extra investigation required,' 'case more complex than expected.' Each amount is small, but they add up to far more than planned. This is classic drip-feed billing.",
    realCaseEn:
      "A client agreed to a RMB 50,000 legal fee at signing. The lawyer then added four separate charges for 'investigation fees,' 'expert consultation,' and 'expedited processing,' totaling over RMB 30,000 more. The quality of the case work didn't improve despite the extra payments.",
    adviceEn: [
      "At signing, clearly agree on all fees, including any potential additional costs",
      "Refuse any charges outside the contract unless there is written justification",
      "For each additional fee, demand a written breakdown and explanation from the lawyer",
      "If fees are being added frequently, consider whether you need to switch lawyers",
    ],
  },
  {
    slug: "26",
    num: "26",
    signal: "风险代理合同中律师把「胜诉」标准定得极低",
    category: "风险代理陷阱",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "high",
    description:
      "风险代理是指律师先不收费或少收费，胜诉后按比例抽成。但有些律师会在合同中把「胜诉」定义得极为宽泛——只要对方还了一分钱就算胜诉，律师就能拿走高额提成。你赢了官司却亏了钱。",
    realCase:
      "当事人签了风险代理合同，约定「胜诉后」支付追回金额的30%。但合同中将「胜诉」定义为「法院作出有利判决或对方支付任何款项」。最终法院判决支持了部分诉求，对方只还了很少一部分钱，但律师仍然按全额判决金额的30%收费。",
    advice: [
      "仔细审查风险代理合同中对「胜诉」的定义",
      "明确约定律师提成的计算基数是实际到手金额，而非判决金额",
      "对比风险代理和固定收费哪种更划算",
      "警惕律师费比例过高的风险代理合同",
    ],
    signalEn:
      "In a contingency fee contract, the lawyer sets an extremely low bar for 'winning'",
    categoryEn: "Contingency Fee Trap",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "A contingency fee arrangement means the lawyer charges little or nothing upfront and takes a percentage after winning. But some lawyers define 'winning' so broadly — any payment from the other side counts — that even a token recovery triggers a hefty fee. You win the case but lose money.",
    realCaseEn:
      "A client signed a contingency fee agreement to pay 30% of recovered amounts 'upon winning.' But the contract defined 'winning' as 'any favorable judgment or any payment from the opposing party.' The court ruled partially in the client's favor, the opponent paid only a fraction, but the lawyer still charged 30% based on the full judgment amount.",
    adviceEn: [
      "Carefully review how 'winning' is defined in the contingency fee contract",
      "Clearly specify that the lawyer's fee is calculated on the amount actually received, not the judgment amount",
      "Compare whether contingency or fixed-fee billing is more cost-effective for your case",
      "Be wary of contingency contracts with excessively high percentage fees",
    ],
  },
  {
    slug: "27",
    num: "27",
    signal: "合同中违约金条款只约束你，不约束律师",
    category: "单方面条款",
    stage: "合同与交易",
    stageKey: "contracts",
    risk: "medium",
    description:
      "公平的合同应该对双方有同等的约束力。如果合同中规定你违约要赔偿，但律师违约没有任何后果，这说明合同本身就是不公平的。这种单方面条款往往是律师利用信息不对称故意设置的。",
    realCase:
      "当事人签的委托合同中约定：当事人中途解约需赔偿律师费50%作为违约金，但律师终止服务不需要任何补偿。当事人因律师不作为想解约时，被迫面对高额违约金。",
    advice: [
      "签约前仔细检查违约金和解约条款",
      "要求合同中的违约责任对双方平等",
      "如果律师拒绝修改不公平条款，这本身就是一个警告",
      "拒绝签署明显不对等的合同",
    ],
    signalEn:
      "The contract's penalty clauses apply only to you, not to the lawyer",
    categoryEn: "One-Sided Terms",
    stageEn: "Contracts & Deals",
    descriptionEn:
      "A fair contract binds both parties equally. If the contract penalizes you for breach but imposes no consequences on the lawyer for breach, the contract itself is unfair. Such one-sided terms are often deliberately inserted by lawyers who exploit information asymmetry.",
    realCaseEn:
      "A client's engagement contract stipulated that early termination by the client required paying 50% of the legal fee as a penalty, while the lawyer could terminate services without any compensation. When the client wanted out due to the lawyer's inaction, they were trapped by the hefty penalty.",
    adviceEn: [
      "Before signing, carefully review penalty and termination clauses",
      "Demand that breach-of-contract responsibilities apply equally to both sides",
      "If the lawyer refuses to amend unfair clauses, that itself is a warning sign",
      "Refuse to sign any obviously one-sided contract",
    ],
  },
  {
    slug: "28",
    num: "28",
    signal: "律师让你签署空白文件或授权书",
    category: "空白文件陷阱",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "签署空白文件极其危险——一旦签字，内容可以被任意填写。你可能在不知情的情况下签下了不利的和解协议、撤诉申请，甚至是借条。任何空白文件都不应签署，无论律师给出什么理由。",
    realCase:
      "律师以「法院要求格式特殊」为由让当事人签了一份空白授权书。后来当事人发现律师用这份授权书代替自己签了一份极为不利的和解协议，放弃了大部分诉讼请求。",
    advice: [
      "绝对不签任何空白文件，无论理由是什么",
      "所有文件必须填写完整后再签字",
      "签字前仔细阅读每一页，确认没有空白页",
      "如果律师坚持要求签空白文件，立即更换律师并向律协举报",
    ],
    signalEn:
      "The lawyer asks you to sign blank documents or powers of attorney",
    categoryEn: "Blank Document Trap",
    stageEn: "During Representation",
    descriptionEn:
      "Signing a blank document is extremely dangerous — once signed, anything can be written in. You could unknowingly sign an unfavorable settlement, a withdrawal of your case, or even a promissory note. No blank document should ever be signed, regardless of the lawyer's excuse.",
    realCaseEn:
      "A lawyer convinced a client to sign a blank power of attorney, claiming 'the court requires a special format.' The client later discovered the lawyer had used it to sign a highly unfavorable settlement on their behalf, waiving most of the claims.",
    adviceEn: [
      "Never sign any blank document, regardless of the reason given",
      "All documents must be completely filled in before you sign",
      "Read every page carefully before signing — make sure there are no blank pages",
      "If the lawyer insists on blank documents, switch lawyers immediately and report to the bar association",
    ],
  },
  {
    slug: "29",
    num: "29",
    signal: "律师未经你同意擅自做出重大决定",
    category: "越权代理",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师的代理权限有边界。和解、撤诉、放弃部分诉求等重大决定必须经当事人同意。如果律师未经你授权就擅自做出这些决定，属于越权代理，你有权追究律师责任。",
    realCase:
      "律师在当事人不知情的情况下与对方达成了和解协议，放弃了当事人的违约金请求。当事人在收到法院通知后才知道自己的案子已经和解结案了。",
    advice: [
      "在合同中明确约定哪些事项必须经你书面同意",
      "要求律师在做出任何重大决定前通知你",
      "如果律师越权代理，保留证据并向律协投诉",
      "定期与法院确认案件状态，不要完全依赖律师",
    ],
    signalEn:
      "The lawyer makes major decisions without your consent",
    categoryEn: "Unauthorized Actions",
    stageEn: "During Representation",
    descriptionEn:
      "A lawyer's authority has boundaries. Major decisions like settling, withdrawing a case, or waiving claims require the client's consent. If a lawyer makes these decisions without authorization, it's unauthorized practice, and you can hold them accountable.",
    realCaseEn:
      "Without the client's knowledge, a lawyer reached a settlement with the opposing side and waived the client's claim for liquidated damages. The client only found out after receiving a court notice that their case had been settled and closed.",
    adviceEn: [
      "Specify in the contract which matters require your written consent",
      "Require the lawyer to notify you before making any major decisions",
      "If the lawyer acts beyond their authority, preserve evidence and file a complaint with the bar association",
      "Periodically check the case status with the court directly — don't rely solely on the lawyer",
    ],
  },
  {
    slug: "30",
    num: "30",
    signal: "律师将你的案件信息泄露给第三方",
    category: "违反保密义务",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师有法定的保密义务，不得向任何第三方泄露当事人的案件信息和个人隐私。如果你发现对方知道了你只告诉律师的信息，或者律师在公开场合讨论你的案件细节，这是严重的违规行为。",
    realCase:
      "当事人发现对方在庭审中准确引用了自己只在微信上告诉律师的策略细节。事后调查发现律师与对方律师在同一个律所的不同部门工作，信息被内部泄露。",
    advice: [
      "注意观察对方是否掌握了你只告诉律师的信息",
      "敏感信息尽量通过加密方式传递",
      "如果确认律师泄密，立即更换律师并保留证据",
      "向律协投诉律师违反保密义务的行为",
    ],
    signalEn:
      "The lawyer leaks your case information to third parties",
    categoryEn: "Breach of Confidentiality",
    stageEn: "During Representation",
    descriptionEn:
      "Lawyers have a legal duty of confidentiality — they must not disclose a client's case information or personal details to any third party. If you discover the other side knows something you only told your lawyer, or that your lawyer discussed your case details publicly, this is a serious breach.",
    realCaseEn:
      "A client discovered that the opposing side accurately cited strategy details during a hearing that the client had shared only with their lawyer via private messages. Investigation revealed both lawyers worked in different departments of the same firm, and the information had been leaked internally.",
    adviceEn: [
      "Watch for signs that the other side knows information you shared only with your lawyer",
      "Communicate sensitive information through encrypted channels where possible",
      "If you confirm a confidentiality breach, switch lawyers immediately and preserve evidence",
      "Report the breach of confidentiality to the bar association",
    ],
  },
  {
    slug: "31",
    num: "31",
    signal: "律师在法庭上表现明显不专业",
    category: "严重失职",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师迟到、材料没准备好、对案情不熟悉、在法庭上表现得手忙脚乱——这些都说明律师没有认真对待你的案件。你付出了高额律师费，有权获得专业的服务。",
    realCase:
      "律师在开庭时迟到了30分钟，提交的证据材料缺少关键附件，面对法官的提问多次答非所问。法官当庭要求律师补交材料，导致案件延期。当事人事后才知道律师同时在处理十几个案件，根本没有时间准备。",
    advice: [
      "开庭前与律师确认准备情况，要求看拟提交的材料",
      "如果律师在法庭上表现明显不专业，庭后立即沟通",
      "考虑更换律师——法庭表现直接影响案件结果",
      "保留法庭记录作为律师失职的证据",
    ],
    signalEn:
      "The lawyer is clearly unprofessional in court",
    categoryEn: "Gross Negligence",
    stageEn: "During Representation",
    descriptionEn:
      "Showing up late, submitting incomplete materials, being unfamiliar with the case, fumbling through the hearing — all signs the lawyer isn't taking your case seriously. You paid a significant fee and are entitled to professional service.",
    realCaseEn:
      "A lawyer arrived 30 minutes late to the hearing, submitted evidence missing key attachments, and repeatedly gave irrelevant answers to the judge's questions. The judge ordered supplementary filings on the spot, causing the case to be postponed. The client later learned the lawyer was juggling over a dozen cases simultaneously and had no time to prepare.",
    adviceEn: [
      "Before the hearing, confirm the lawyer's preparation and ask to review the materials they plan to submit",
      "If the lawyer is clearly unprofessional in court, address it immediately after the hearing",
      "Consider switching lawyers — courtroom performance directly affects the outcome",
      "Keep court records as evidence of the lawyer's negligence",
    ],
  },
  {
    slug: "32",
    num: "32",
    signal: "律师告诉你「没办法了」但不出具书面意见",
    category: "甩案",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "medium",
    description:
      "「没办法了」「这个案子就这样了」——如果律师用口头方式告诉你放弃，却拒绝出具书面法律意见，很可能是想甩掉这个案子。正当的专业判断不怕写在纸上。",
    realCase:
      "律师口头告诉当事人「这个案子赢不了，别折腾了」，但拒绝出具书面意见。当事人换了律师后，新律师认为案件仍有胜诉可能，最终改判成功。",
    advice: [
      "任何重大结论都必须要求律师出具书面法律意见",
      "不要轻信口头的「没办法了」",
      "寻求第二位律师的独立意见",
      "如果律师拒绝出具书面意见，这本身就说明问题",
    ],
    signalEn:
      "The lawyer says 'there's nothing more we can do' but won't put it in writing",
    categoryEn: "Case Dumping",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "If a lawyer verbally tells you to give up — 'there's nothing more we can do,' 'this is as far as it goes' — but refuses to put their opinion in writing, they may be trying to dump your case. Legitimate professional judgment isn't afraid of being documented.",
    realCaseEn:
      "A lawyer verbally told a client 'this case can't be won, stop wasting your time' but refused to provide a written opinion. After switching lawyers, the new lawyer believed the case was still winnable and ultimately succeeded on appeal.",
    adviceEn: [
      "Demand a written legal opinion for any major conclusion from the lawyer",
      "Don't take a verbal 'nothing more we can do' at face value",
      "Seek an independent second opinion from another lawyer",
      "A refusal to put an opinion in writing is itself telling",
    ],
  },
  {
    slug: "33",
    num: "33",
    signal: "律师建议你接受明显不合理的和解方案",
    category: "可疑和解",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "high",
    description:
      "如果律师极力劝你接受一个远低于合理预期的和解方案，而且催得很急，这可能不是专业判断——律师可能已经和对方达成了某种默契，或者想尽快结案收钱走人。",
    realCase:
      "当事人的诉求金额为100万元，证据充分。律师却反复建议接受对方提出的20万元和解方案，理由是「能拿到手最重要」。当事人拒绝后更换了律师，最终判决获得了80万元。",
    advice: [
      "不要在压力下仓促接受和解",
      "要求律师出具书面意见，说明建议接受和解的法律依据",
      "对比和解金额与你的实际诉求和证据强度",
      "寻求第二位律师的独立评估",
    ],
    signalEn:
      "The lawyer urges you to accept a clearly unreasonable settlement",
    categoryEn: "Suspicious Settlement",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "If a lawyer pushes you hard to accept a settlement far below reasonable expectations, and does so urgently, this may not be professional advice — the lawyer may have reached an understanding with the other side, or may just want to close the case quickly and collect their fee.",
    realCaseEn:
      "A client's claim was for RMB 1,000,000 with strong evidence. The lawyer kept urging them to accept the opponent's RMB 200,000 settlement offer, arguing 'getting something in hand is what matters.' The client refused, switched lawyers, and ultimately won a judgment for RMB 800,000.",
    adviceEn: [
      "Don't accept a settlement hastily under pressure",
      "Ask the lawyer to provide a written opinion explaining the legal basis for recommending the settlement",
      "Compare the settlement amount against your actual claim and the strength of your evidence",
      "Get an independent assessment from a second lawyer",
    ],
  },
  {
    slug: "34",
    num: "34",
    signal: "投诉律师后原律师突然主动联系你要「和解」",
    category: "撤诉换退款",
    stage: "投诉与维权",
    stageKey: "recourse",
    risk: "medium",
    description:
      "你向律协投诉后，被投诉的律师突然变得友好，主动联系你提出退一部分费用来「和解」。这通常是为了让你撤回投诉——一旦撤诉，律协就不会继续调查，律师也逃过了处分。",
    realCase:
      "当事人向律协投诉后，律师突然主动联系并提出退还30%律师费，条件是当事人撤回投诉。当事人接受后撤回了投诉，律师最终只退了承诺金额的一半，当事人再次投诉时被告知不能重复受理。",
    advice: [
      "不要因为小额退款就撤回投诉",
      "如果要和解，先拿到全额退款再考虑撤诉",
      "和解协议必须书面明确，包括退款金额、时间和方式",
      "考虑投诉的目的不仅是退款，也是防止律师伤害其他人",
    ],
    signalEn:
      "After you file a complaint, the lawyer suddenly reaches out offering to 'settle'",
    categoryEn: "Withdraw-for-Refund Ploy",
    stageEn: "Complaints & Recourse",
    descriptionEn:
      "After you file a bar complaint, the accused lawyer suddenly becomes friendly and offers to refund part of the fee in exchange for dropping the complaint. This is usually designed to get you to withdraw — once withdrawn, the bar stops investigating and the lawyer escapes disciplinary action.",
    realCaseEn:
      "After the client filed a bar complaint, the lawyer suddenly offered to refund 30% of the fee in exchange for withdrawing the complaint. The client agreed, but the lawyer only paid half the promised amount. When the client tried to complain again, they were told the case could not be reopened.",
    adviceEn: [
      "Don't withdraw a complaint for a small refund",
      "If you do settle, secure the full refund before considering withdrawal",
      "Any settlement must be in writing, specifying the refund amount, timeline, and method",
      "Remember that the complaint's purpose isn't just a refund — it also protects others from the same lawyer",
    ],
  },
  {
    slug: "35",
    num: "35",
    signal: "线上法律平台推荐的律师收费远低于市场价",
    category: "低价陷阱",
    stage: "找律师阶段",
    stageKey: "hiring",
    risk: "medium",
    description:
      "线上法律平台推荐的「特价律师」往往是引流手段。极低的报价吸引你签约后，律师会以各种名目追加费用，或者服务质量极差。便宜的律师最终可能是最贵的选择。",
    realCase:
      "当事人在某法律咨询平台上找到一位报价只有市场价三分之一的律师。签约后律师以「案件复杂需要团队协助」为由多次追加费用，总费用最终超过了市场价。而且服务质量很差，连基本的法律文书都有错误。",
    advice: [
      "了解当地同类案件的律师费市场价格区间",
      "远低于市场价的报价要追问原因",
      "优先选择律所推荐而非平台推荐的律师",
      "价格只是选择律师的因素之一，专业能力和口碑更重要",
    ],
    signalEn:
      "A lawyer recommended by an online platform charges far below market rate",
    categoryEn: "Low-Price Trap",
    stageEn: "Hiring Stage",
    descriptionEn:
      "A 'bargain lawyer' recommended by an online legal platform is often a lead-generation tactic. An extremely low quote lures you into signing, after which the lawyer adds fees under various pretexts, or delivers terrible service. The cheapest lawyer may end up being the most expensive choice.",
    realCaseEn:
      "A client found a lawyer on a legal platform quoting one-third of the market rate. After signing, the lawyer repeatedly added charges citing 'case complexity requiring team support,' and the total cost ultimately exceeded the market rate. The service quality was poor — even basic legal filings contained errors.",
    adviceEn: [
      "Research the local market rate for legal fees in similar cases",
      "If a quote is far below market price, ask why",
      "Prefer lawyers recommended by law firms rather than platforms",
      "Price is just one factor — professional competence and reputation matter more",
    ],
  },
  {
    slug: "36",
    num: "36",
    signal: "律师在法庭外暗示你的案子「已经安排好了」",
    category: "暗箱操作暗示",
    stage: "代理过程中",
    stageKey: "representation",
    risk: "high",
    description:
      "律师暗示案件结果已经「搞定了」或「不用担心」，但不说明具体做了什么。这种暗示可能是在骗你安心付钱，也可能是真的在行贿——无论哪种情况，你都在巨大的风险中。",
    realCase:
      "律师在开庭前告诉当事人「放心，都安排好了」。当事人追问细节时律师含糊其辞。最终败诉后律师矢口否认说过这些话。当事人怀疑律师从未做过任何「安排」，只是为了让自己安心付钱。",
    advice: [
      "任何暗示「安排好了」的律师都不可信",
      "要求律师具体说明做了哪些工作",
      "律师暗示行贿本身就是违法行为，你也可能被牵连",
      "保留律师暗示「搞定」的证据（录音、微信记录）",
    ],
    signalEn:
      "Outside the courtroom, the lawyer hints that your case is 'all arranged'",
    categoryEn: "Backroom Deal Hints",
    stageEn: "During Representation",
    descriptionEn:
      "The lawyer hints that the result is 'taken care of' or 'nothing to worry about,' but won't say what they actually did. This hint could be a ploy to keep you paying, or it could mean actual bribery — either way, you're in serious danger.",
    realCaseEn:
      "Before a hearing, a lawyer told the client 'relax, it's all arranged.' When the client pressed for details, the lawyer was evasive. After losing the case, the lawyer flatly denied ever saying it. The client suspected the lawyer had never 'arranged' anything and was simply keeping them calm to keep the money flowing.",
    adviceEn: [
      "Never trust a lawyer who hints things are 'arranged'",
      "Demand the lawyer explain specifically what work they've done",
      "A lawyer hinting at bribery is itself illegal — you could be implicated too",
      "Preserve evidence of the lawyer's 'arranged' hints (recordings, chat logs)",
    ],
  },
];

export function getFlagBySlug(slug: string): Flag | undefined {
  return flags.find((f) => f.slug === slug);
}
