export interface CaseStudy {
  slug: string;
  num: number;
  title: string;
  titleEn: string;
  titleJa: string;
  tags: string[];
  tagsEn: string[];
  tagsJa: string[];
  summary: string;
  summaryEn: string;
  summaryJa: string;
  timeline: { date: string; event: string }[];
  timelineEn: { date: string; event: string }[];
  timelineJa: { date: string; event: string }[];
  redFlags: string[];
  redFlagsEn: string[];
  redFlagsJa: string[];
  lessons: string[];
  lessonsEn: string[];
  lessonsJa: string[];
}

export const cases: CaseStudy[] = [
  {
    slug: "private-billing-and-ghosting",
    num: 1,
    title: "私账收费 + 消极怠工",
    titleEn: "Private Account Billing + Ghosting",
    titleJa: "個人口座への請求 + 業務放棄",
    tags: ["私账收费", "空白发票", "消极怠工", "利益冲突介绍"],
    tagsEn: ["Private Account Billing", "Blank Invoices", "Ghosting", "Conflicted Referral"],
    tagsJa: ["個人口座への請求", "白紙の領収書", "業務放棄", "利益相反の紹介"],
    summary:
      "当事人在遭遇公司纠纷、家人突发重病住院、身心状况极差的困境中，不得已经人介绍第一次委托律师处理可能出现的复杂事务。第一位律师通过个人账户收取了近12万元费用，没有正式合同；第二位律师及其律所提前收取了近20万元，一年半后官司出现，却消极怠工，代理期间从未出庭，且寄来的发票竟是一张空白发票。当事人逐步接触到其他资深律师后，才意识到这两位只是资历尚浅的助理，根本没有能力处理当事人的事务，只是利用当事人的无助和信息不对称收取高额费用。当事人维权多年，至今未追回一分钱。",
    summaryEn:
      "While dealing with a corporate dispute, a family medical emergency, and severe personal stress, the client retained two lawyers on the recommendation of acquaintances. The first lawyer collected nearly RMB 120,000 into a personal bank account with no formal contract; the second collected RMB 190,000, never once appeared in court during the representation, and sent blank invoices. The client has spent years fighting to recover the money and has not recovered a single yuan to date.",
    summaryJa:
      "企業紛争、家族の緊急入院、深刻な心身の不調に見舞われる中、依頼者は知人の紹介で2人の弁護士に依頼した。1人目の弁護士は正式な契約書なしに約12万人民元を個人口座に振り込ませた。2人目の弁護士は約19万人民元を受領したが、代理期間中一度も出廷せず、送られてきた領収書は白紙だった。依頼者は費用の回収のために何年も闘い続けているが、1元も取り戻せていない。",
    timeline: [
      { date: "第1年", event: "当事人遭遇公司被夺权、家人突发重病住院，身心状况极差。在最脆弱的时候，经熟人介绍委托第一位律师处理一份法律文件。该律师只是利用兼职时间写了模板协议，前后一个月要求将近12万元律师费打入个人账户，没有签任何书面合同。随后这位律师又介绍其同事给当事人处理可能出现的经济纠纷，当事人在完全无知的状态下，又委托了第二位律师及其律所，签了正式合同，提前支付近20万元律师费。" },
      { date: "第2—3年", event: "第一位律师违规收取高额费用后逐渐失联，根本不会关注其起草的协议是否对当事人产生负面影响。第二位律师同样消极怠工，而且在合同中只是助理律师的角色。当事人逐渐意识到被骗，不得已又开始找第三位律师处理官司纠纷。" },
      { date: "第4年", event: "当事人开始自行研究，发现第一位律师当时可能根本不具备执业资格，属于私自收费；第二位律师收费后从未实际履行代理职责，也没有出庭处理事务。打开之前其寄来的信封，竟然发现寄来的发票是一张空白发票。因疫情反复、身体原因及其他官司纠纷，一直不知道该怎么向这两位无良律师维权。" },
      { date: "第5年", event: "在其他律师提醒下，当事人才知道可以向律协及司法局进行投诉。但当事人深陷其他官司，又忌惮对方的律师身份，迟迟未能付诸行动。" },
      { date: "第6年", event: "正式向律师协会提交投诉，附上转账记录、合同、空白发票等证据。投诉后经历了漫长的等待，半年后才被正式立案调查。而且拒绝对第二个律师及其律师事务所立案调查，不得已有向司法局申诉。" },
      { date: "第7年", event: "向司法行政部门申诉，才对第一个律师、第二个律师及其律师事务所都立案调查。但在被安排调解时，调解员只要求当事人让步，不要求对方表态，两天即宣布调解失败。对方律师从「愿意退费」突然变成「一分不退」。向法院起诉，三次网上立案均被驳回。向上级法院申请立案监督，材料被转回原法院，至今无回音。维权仍在继续，未追回任何费用。" },
    ],
    timelineEn: [
      { date: "Year 1", event: "While dealing with a corporate dispute and a family medical emergency, the client retained a lawyer on an acquaintance's recommendation to handle a legal document. The lawyer asked for fees to be wired to a personal bank account, and no written contract was signed." },
      { date: "End of Year 1", event: "After collecting nearly RMB 120,000, the first lawyer became increasingly unreachable and stopped reporting on the case's progress." },
      { date: "Year 2", event: "Disillusioned with the first lawyer, retained a second lawyer on another acquaintance's recommendation. A contract was signed and RMB 190,000 in fees was paid." },
      { date: "Years 2-3", event: "The second lawyer likewise began neglecting the case, repeatedly failing to appear at hearings, and sent invoices that were blank." },
      { date: "Year 3", event: "The client began researching the law independently and discovered numerous violations by both lawyers." },
      { date: "Year 4", event: "Filed a complaint with the bar association, attaching transfer records, WeChat chat logs, and other evidence." },
      { date: "Year 5", event: "Mediation through the bar association failed. The opposing lawyers were unyielding and refused to refund any fees." },
      { date: "Year 6", event: "Continued pursuing legal remedies. No fees have been recovered to date, but the client has gained substantial experience and lessons learned." },
    ],
    timelineJa: [
      { date: "1年目", event: "企業紛争と家族の緊急入院に直面する中、依頼者は知人の紹介で法律文書の作成を弁護士に依頼した。弁護士は費用を個人口座に振り込むよう求め、書面による契約は一切交わさなかった。" },
      { date: "1年目末", event: "約12万人民元を受け取った後、1人目の弁護士は次第に連絡が取れなくなり、案件の進捗報告も途絶えた。" },
      { date: "2年目", event: "1人目の弁護士に失望し、別の知人の紹介で2人目の弁護士に依頼した。契約書を交わし、弁護士費用として約19万人民元を支払った。" },
      { date: "2～3年目", event: "2人目の弁護士も同様に案件を放置し始め、裁判への出廷を繰り返し怠り、送付した領収書は白紙だった。" },
      { date: "3年目", event: "依頼者は自ら法律の調査を始め、両弁護士による数々の違反行為を発見した。" },
      { date: "4年目", event: "送金記録やチャット履歴などの証拠を添えて弁護士会に苦情を申し立てた。" },
      { date: "5年目", event: "弁護士会を通じた調停は不成立に終わった。相手方の弁護士は一切返金に応じなかった。" },
      { date: "6年目", event: "法的救済の追求を継続中。現在までに費用は一切回収できていないが、依頼者は多くの経験と教訓を得た。" },
    ],
    redFlags: [
      "#01 私账收费 — 律师要求将费用打到个人账户",
      "#03 无正式合同 — 第一位律师没有签书面委托合同",
      "#06 消极怠工 — 两位律师为实习助理律师，动机不纯，且没有能力主导事务",
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
    redFlagsJa: [
      "#01 個人口座への請求 — 弁護士が費用を個人口座に振り込むよう要求した",
      "#03 正式な契約なし — 1人目の弁護士は書面による委任契約を交わさなかった",
      "#06 業務放棄 — 両弁護士とも長期間連絡が途絶え、進捗報告を一切行わなかった",
      "#10 領収書の偽造 — 2人目の弁護士は白紙の領収書を送付した",
      "#02 利益相反の紹介 — 両弁護士とも個人的な紹介を通じて依頼した",
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
    lessonsJa: [
      "弁護士費用は絶対に個人口座に振り込まないこと――必ず法律事務所の法人口座への支払いを求めること",
      "書面による契約がなければ保護はない。口頭の約束は信用できない",
      "知人の紹介だけに頼らないこと――紹介者の動機があなたのためとは限らない",
      "弁護士が長期間音信不通になるのは最も明確な危険信号――待たずに早めに行動すること",
      "すべての送金記録、チャット履歴、通話記録を保管すること――後の権利回復のための重要な証拠となる",
      "たとえ困難な過程であっても、闘い続けること自体に価値がある――あなたの経験が他の人を助けることができる",
    ],
  },
  {
    slug: "guarantee-trap",
    num: 2,
    title: "担保陷阱 + 虚假破产",
    titleEn: "Guarantee Trap + Sham Bankruptcy",
    titleJa: "保証の罠 + 偽装破産",
    tags: ["担保陷阱", "内部人起草", "虚假破产", "逃避执行"],
    tagsEn: ["Guarantee Trap", "Drafted by Counterparty", "Sham Bankruptcy", "Evading Enforcement"],
    tagsJa: ["保証の罠", "相手方が起草", "偽装破産", "執行逃れ"],
    summary:
      "当事人被要求为一笔公司间的交易提供个人连带担保。合同由对方公司起草，催促签字，当事人未经独立律师审查就签了。对方公司后来申请破产，但在破产前已将资产大量转移。当事人作为担保人被追偿，个人财产被冻结。",
    summaryEn:
      "The client was asked to provide a personal joint and several guarantee for a transaction between companies. The contract was drafted by the counterparty and the client was pressured to sign quickly, doing so without independent legal review. The counterparty company later filed for bankruptcy, but had already transferred substantial assets beforehand. As guarantor, the client was pursued for repayment and had personal assets frozen.",
    summaryJa:
      "依頼者は企業間取引の個人連帯保証を求められた。契約書は相手方が起草し、早急な署名を迫られ、独立した弁護士の確認なしに署名してしまった。相手方企業はその後破産を申請したが、申請前にすでに多額の資産を移転していた。保証人として依頼者は返済を求められ、個人資産が凍結された。",
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
    timelineJa: [
      { date: "当初", event: "相手方企業が提携を提案し、企業間取引について依頼者個人に連帯保証を求めた。" },
      { date: "契約時", event: "契約書は相手方の社内法務が起草し、当日中の署名を迫った。依頼者は独立した弁護士の確認を得ずに署名した。" },
      { date: "契約後", event: "契約書に「先訴の抗弁権の放棄」など、自分に極めて不利な条項が含まれていることを発見した。" },
      { date: "1年目", event: "相手方企業の経営が悪化し、支払いが滞り始めた。" },
      { date: "2年目", event: "相手方企業が突然破産を申請した。依頼者の調査により、破産申請の2か月前に代表者の親族名義の新会社に多額の資産が移転されていたことが判明した。" },
      { date: "2年目末", event: "債権者が保証契約に基づき依頼者個人を提訴し、裁判所が依頼者の銀行口座と不動産を凍結した。" },
      { date: "3年目", event: "訴訟に応じながら、相手方の偽装破産と資産移転の証拠を収集した。" },
      { date: "現在", event: "案件は進行中。依頼者は巨額の債務を抱えながら、相手方の詐欺行為の立証に取り組んでいる。" },
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
    redFlagsJa: [
      "#11 保証の罠 — 個人名義で企業の債務を保証した",
      "#12 相手方が起草 — 契約書は相手方企業が作成し、署名を急かされた",
      "#13 条項の罠 — 契約書に先訴の抗弁権の放棄などの専門的条項が含まれていた",
      "#14 偽装破産 — 破産申請前に企業が多額の資産を移転した",
      "#15 執行逃れ — 資産が関係者名義に移転された",
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
    lessonsJa: [
      "個人保証の結果は極めて深刻――署名前に「連帯責任」の意味を完全に理解すること",
      "すべての契約書は自分の独立した弁護士に確認してもらうこと。特に相手方が起草したものは必須",
      "署名を急かされたら冷静になること――正当な取引であれば十分な確認時間が与えられる",
      "契約書の専門用語に注意すること。理解できなければ質問し、分かったふりをしないこと",
      "相手方に資産移転の兆候が見られたら、直ちに財産保全を申請すること",
      "破産手続き中に相手方の代表者が新会社を設立したり資産を移転したりしていないか注視すること",
    ],
  },
  {
    slug: "lawyer-bought-by-opponent",
    num: 3,
    title: "律师被对方收买",
    titleEn: "Lawyer Bought Off by the Opposing Side",
    titleJa: "相手方に買収された弁護士",
    tags: ["利益冲突", "反向操作", "利益冲突介绍", "信息泄露"],
    tagsEn: ["Conflict of Interest", "Working Against the Client", "Conflicted Referral", "Information Leak"],
    tagsJa: ["利益相反", "依頼者に不利な行動", "利益相反の紹介", "情報漏洩"],
    summary:
      "当事人在维权过程中委托了一位律师，后来发现这位律师与对手方存在私下联系。律师多次给出不利建议，包括放弃关键证据、建议撤诉、建议和解。",
    summaryEn:
      "While pursuing a legal claim, the client retained a lawyer, then later discovered the lawyer had been secretly in contact with the opposing party. The lawyer repeatedly gave advice that worked against the client's interests, including urging them to abandon key evidence and to withdraw the lawsuit. After the client investigated independently, the lawyer admitted to having been paid off by the other side.",
    summaryJa:
      "訴訟を進める過程で依頼者は弁護士を雇ったが、後にその弁護士が相手方と密かに連絡を取っていたことが発覚した。弁護士は重要な証拠の放棄や訴訟の取り下げなど、依頼者の利益に反する助言を繰り返していた。依頼者が独自に調査した結果、弁護士は相手方から金銭を受け取っていたことを認めた。",
    timeline: [
      { date: "起初", event: "经第三方介绍委托律师处理纠纷案件，签订了正式合同。" },
      { date: "代理初期", event: "律师开始表现正常，积极维权，按时汇报案件进展。" },
      { date: "关键阶段", event: "律师突然建议当事人不要追查对方的某项关键证据，理由是「太复杂，得不偿失」。" },
      { date: "此后", event: "律师多次建议和解，但和解条件明显不利于当事人。当事人拒绝后，律师态度开始冷淡。" },
      { date: "转折点", event: "当事人觉察不对，去给律师送礼物；律师承认被对方律师邀约多次，原因付费用把当事人摆平。" },
      { date: "后续", event: "当事人不得已解除委托，又更换律师。" },
      { date: "最终", event: "鉴于原律师没有造成实质性伤害，放弃追究责任。" },
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
    timelineJa: [
      { date: "当初", event: "第三者の紹介で弁護士に紛争案件の処理を依頼し、正式な契約を締結した。" },
      { date: "代理初期", event: "弁護士は通常通り業務を行い、案件の進捗を定期的に報告していた。" },
      { date: "重要な段階", event: "弁護士が突然、相手方に関する重要な証拠の追及をやめるよう助言した。理由は「複雑すぎて割に合わない」とのことだった。" },
      { date: "その後", event: "弁護士は依頼者に明らかに不利な条件での和解を繰り返し勧めた。依頼者が拒否すると、弁護士の態度は冷淡になった。" },
      { date: "転機", event: "依頼者が独自に調査し、弁護士と相手方企業の代表者との間の非公開の会食記録を発見した。" },
      { date: "対決", event: "依頼者が弁護士に直接問い詰めた。証拠を突きつけられ、弁護士は相手方から接触を受け金銭を受け取っていたことを認めた。" },
      { date: "その後の対応", event: "依頼者は委任を解除し、新しい弁護士を雇った。新弁護士はまったく異なる訴訟戦略を採り、元の弁護士が放棄を勧めた証拠を追及した。" },
      { date: "結果", event: "元の弁護士に対して弁護士会に苦情を申し立て、新弁護士のもとで案件は大きく進展した。" },
    ],
    redFlags: [
      "#02 利益冲突介绍 — 经第三方介绍，介绍人背景不清",
      "#07 反向操作 — 律师建议放弃关键证据和撤诉",
      "#08 利益冲突 — 律师的建议客观上有利于对方",
      "#19 信息泄露 — 律师可能向对方透露了当事人的诉讼策略",
      "#21 警惕律师态度变化 — 律师可能被收买；也可能不想负责到底，虎头蛇尾",
    ],
    redFlagsEn: [
      "#02 Conflicted Referral — engaged through a third party whose background was unclear",
      "#07 Working Against the Client — the lawyer advised abandoning key evidence and withdrawing the suit",
      "#08 Conflict of Interest — the lawyer's advice objectively benefited the other side",
      "#19 Information Leak — the lawyer may have disclosed the client's litigation strategy to the opposing party",
    ],
    redFlagsJa: [
      "#02 利益相反の紹介 — 背景が不明な第三者を通じて依頼した",
      "#07 依頼者に不利な行動 — 弁護士が重要な証拠の放棄と訴訟の取り下げを助言した",
      "#08 利益相反 — 弁護士の助言が客観的に相手方に有利だった",
      "#19 情報漏洩 — 弁護士が依頼者の訴訟戦略を相手方に漏らした可能性がある",
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
    lessonsJa: [
      "弁護士の助言に違和感を覚えたら、自分の直感を信じること",
      "弁護士が有利な証拠の放棄を勧めた場合、必ずセカンドオピニオンを求めること",
      "自分の弁護士と相手方の間に何らかの繋がりがないか調査すること",
      "弁護士を替えた後に案件が好転したこと自体が、元の弁護士に問題があった証拠となる",
      "弁護士が不利な助言をした記録をすべて保管すること――後の苦情申立ての証拠となる",
      "弁護士が買収されることは悪質だが珍しくない――常に警戒を怠らないことが必要",
    ],
  },
  {
    slug: "overpromise-then-abandon",
    num: 4,
    title: "夸大能力 + 全额收费后消极怠工",
    titleEn: "Overpromise, Collect in Full, Then Abandon",
    titleJa: "過大な約束、全額回収、そして放棄",
    tags: ["一次性收费", "虚假承诺", "消极怠工", "甩案"],
    tagsEn: ["Lump-Sum Payment", "False Promises", "Negligence", "Case Dumping"],
    tagsJa: ["一括払い", "虚偽の約束", "怠慢", "案件の投げ出し"],
    summary:
      "律师经熟人介绍，夸大自己的能力，承诺「包办到底」，一次性收取全部律师费。一年后开始消极怠工，对案件越来越不上心，最终迫使当事人不得不更换律师。律师是否与对方勾结，已无从得知。",
    summaryEn:
      "Introduced by an acquaintance, the lawyer exaggerated their capabilities and promised to see the matter through to the end, collecting the full fee upfront. A year later, the lawyer became negligent and increasingly passive, ultimately forcing the client to switch counsel. Whether the lawyer colluded with the opposing party will never be known.",
    summaryJa:
      "知人の紹介で依頼した弁護士は、自身の能力を誇張し「最後まで責任を持つ」と約束して、費用を全額前払いで受け取った。1年後、弁護士は怠慢になり、ますます消極的になったため、依頼者はやむなく弁護士を変更せざるを得なかった。弁護士が相手方と共謀していたかどうかは、今となっては知る術がない。",
    timeline: [
      { date: "起初", event: "经熟人介绍委托律师。律师夸大自身能力，承诺「包办到底」。当事人一次性支付了全部律师费。" },
      { date: "第1年", event: "律师表现尚可，积极处理案件事务。" },
      { date: "第2年", event: "律师开始懈怠——回复变慢、准备工作敷衍、对案件细节越来越不熟悉。注意力可能已转向新客户。" },
      { date: "此后", event: "律师消极怠工愈发严重，导致当事人不得不投入更多时间和精力自行跟进案件。" },
      { date: "最终", event: "当事人被迫更换律师，但已全额支付的费用无法追回。律师是否与对方存在勾结，已无从考证。" },
    ],
    timelineEn: [
      { date: "At the outset", event: "Retained a lawyer through an acquaintance's referral. The lawyer exaggerated their capabilities and promised to handle everything. The client paid the full fee upfront." },
      { date: "Year 1", event: "The lawyer performed reasonably well and actively handled the case." },
      { date: "Year 2", event: "The lawyer started slacking — responses grew slower, preparation became sloppy, and familiarity with case details declined. Their attention may have shifted to newer clients." },
      { date: "Afterward", event: "The lawyer's negligence worsened, forcing the client to spend more time and effort following up on the case independently." },
      { date: "Outcome", event: "The client was forced to switch lawyers, but the full fee already paid was unrecoverable. Whether the lawyer had colluded with the opposing party will never be known." },
    ],
    timelineJa: [
      { date: "当初", event: "知人の紹介で弁護士に依頼した。弁護士は自身の能力を誇張し「最後まで責任を持つ」と約束した。依頼者は弁護士費用を全額一括で支払った。" },
      { date: "1年目", event: "弁護士はまずまずの仕事ぶりで、積極的に案件を処理していた。" },
      { date: "2年目", event: "弁護士が怠慢になり始めた――返信が遅くなり、準備がずさんになり、案件の詳細に対する理解が低下した。注意が新しい依頼者に移った可能性がある。" },
      { date: "その後", event: "弁護士の怠慢が悪化し、依頼者は案件のフォローアップにより多くの時間と労力を費やさざるを得なくなった。" },
      { date: "結末", event: "依頼者は弁護士の変更を余儀なくされたが、すでに全額支払った費用は回収不可能だった。弁護士が相手方と共謀していたかどうかは、今となっては知る術がない。" },
    ],
    redFlags: [
      "#24 一次性收费陷阱 — 律师要求一次性支付全部费用，收钱后失去服务动力",
      "#21 虚假承诺 — 律师夸大能力、承诺包办到底",
      "#06 消极怠工 — 收费后逐渐懈怠，不再认真处理案件",
      "#32 甩案 — 律师实质上放弃了当事人的案件",
      "#27 单方面条款 — 合同对当事人不利，无法追回已付费用",
    ],
    redFlagsEn: [
      "#24 Lump-Sum Payment Trap — the lawyer demanded full payment upfront and lost motivation to deliver",
      "#21 False Promises — the lawyer exaggerated their abilities and promised to see it through",
      "#06 Neglect of Duty — became increasingly negligent after collecting the fee",
      "#32 Case Dumping — the lawyer effectively abandoned the client's case",
      "#27 One-Sided Terms — the contract gave the client no recourse to recover fees paid",
    ],
    redFlagsJa: [
      "#24 一括払いの罠 — 弁護士が費用の全額前払いを要求し、受領後にサービスへの意欲を失った",
      "#21 虚偽の約束 — 弁護士が能力を誇張し、最後まで責任を持つと約束した",
      "#06 職務怠慢 — 費用の受領後、次第に怠慢になった",
      "#32 案件の投げ出し — 弁護士が事実上、依頼者の案件を放棄した",
      "#27 一方的な条件 — 契約書は依頼者に費用回収の手段を与えないものだった",
    ],
    lessons: [
      "永远不要一次性支付全部律师费——分阶段付费是保护自己最有效的手段",
      "律师本质上也是销售——喜新厌旧，新客户可能比你优先",
      "不要对律师抱有绝对信任，要持续监督案件进展",
      "律师的承诺只有写进合同才有约束力",
      "一旦律师开始懈怠，立刻采取行动，不要等情况恶化",
      "律师永远是潜在的对手方——保持警惕，保留所有证据",
    ],
    lessonsEn: [
      "Never pay the full legal fee in one lump sum — staged payments are the most effective way to protect yourself",
      "At their core, lawyers are salespeople — they may prioritize newer clients over you",
      "Don't place absolute trust in a lawyer; continuously monitor case progress",
      "A lawyer's promises are only binding if written into the contract",
      "The moment a lawyer starts slacking, take action immediately — don't wait for things to get worse",
      "A lawyer is always a potential adversary — stay vigilant and preserve all evidence",
    ],
    lessonsJa: [
      "弁護士費用は絶対に全額一括で支払わないこと――段階的な支払いが自分を守る最も効果的な方法",
      "弁護士も本質的には営業職――新しい依頼者を優先し、あなたは後回しにされる可能性がある",
      "弁護士を完全に信頼せず、案件の進捗を継続的に監視すること",
      "弁護士の約束は契約書に明記されて初めて拘束力を持つ",
      "弁護士が怠慢になり始めたら、直ちに行動を起こすこと――状況の悪化を待ってはいけない",
      "弁護士は常に潜在的な敵対者である――警戒を怠らず、すべての証拠を保全すること",
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}
