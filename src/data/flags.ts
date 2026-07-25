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
      "当事人经人介绍委托了一位律师，对方要求将近12万元打到个人银行账户，没有签正式合同，也没有开发票。后来律师消失，当事人投诉时发现没有任何正式委托记录可以证明法律服务关系。",
    advice: [
      "要求律师提供律所的对公账户，拒绝转账到个人账户",
      "付款后要求开具正式发票，核对金额和内容",
      "如果已经付到个人账户，立即保留转账记录截图",
      "向当地律师协会查询该律师的执业状态",
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
      "当事人在与公司产生纠纷后，经公司一位高管介绍请了律师。这位律师表面代理当事人，实际暗中与对方保持联系，多次建议当事人放弃有利证据。后来律师亲口承认被对方收买。",
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
      "After a dispute arose with a company, a client hired a lawyer referred by one of the company's executives. On the surface the lawyer represented the client, but secretly stayed in contact with the opposing side and repeatedly advised the client to abandon favorable evidence. The lawyer later admitted to having been paid off by the other side.",
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
      "当事人委托律师处理一起经济纠纷，双方只有微信口头约定，没有签书面合同。律师收取费用后消极怠工，当事人投诉时，律协以「没有正式委托关系证明」为由不予受理。",
    advice: [
      "在付费之前必须签订书面委托合同",
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
      "A client hired a lawyer to handle a financial dispute based only on a verbal agreement over chat, with no written contract signed. After collecting the fee, the lawyer did little work. When the client filed a complaint, the bar association declined to take it up, citing the absence of proof of a formal engagement.",
    adviceEn: [
      "A written engagement contract must be signed before any payment is made",
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
      "当事人签了一份没有退费条款的委托合同，支付了19万元律师费。律师在整个代理期间从未出庭，当事人要求退费被拒，因为合同中没有约定退费条件。",
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
      "A client signed an engagement contract with no refund clause and paid RMB 190,000 in legal fees. The lawyer never appeared in court during the entire representation. When the client demanded a refund, it was denied because the contract contained no refund conditions.",
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
      "当事人支付了19万元律师费后，律师连续数月不回微信、不接电话。当事人后来发现律师在代理期间从未向法院提交过任何文件，开庭也未到场。",
    advice: [
      "发送书面邮件要求律师在指定日期前汇报进展",
      "保留所有联系律师的记录（微信、电话、邮件）",
      "超过两周不回复，考虑向律协投诉",
      "在委托合同中约定律师汇报进展的频率和方式",
    ],
    signalEn:
      "The lawyer stops responding for long periods and doesn't report on case progress",
    categoryEn: "Neglect of Duty",
    stageEn: "During Representation",
    descriptionEn:
      "A lawyer disappearing after collecting fees is a serious dereliction of duty. A lawyer should proactively update the client on case progress on a regular basis, at minimum around key milestones (filing, hearings, judgment). Long silences may mean the lawyer isn't working on your case at all.",
    realCaseEn:
      "After paying RMB 190,000 in legal fees, a client's lawyer stopped answering messages and calls for several consecutive months. The client later discovered the lawyer had never filed any documents with the court during the representation and had not appeared at the hearing.",
    adviceEn: [
      "Send a written email requiring the lawyer to report progress by a specified date",
      "Keep records of all attempts to contact the lawyer (chat messages, calls, emails)",
      "If there's no response for more than two weeks, consider filing a complaint with the bar association",
      "Specify the frequency and method of progress reporting in the engagement contract",
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
];

export function getFlagBySlug(slug: string): Flag | undefined {
  return flags.find((f) => f.slug === slug);
}
