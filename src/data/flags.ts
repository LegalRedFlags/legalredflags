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
  signalJa: string;
  categoryJa: string;
  stageJa: string;
  descriptionJa: string;
  realCaseJa: string;
  adviceJa: string[];
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

export const stagesJa: Record<string, string> = {
  hiring: "弁護士選び段階",
  representation: "代理中",
  contracts: "契約・取引",
  enforcement: "執行・破産",
  recourse: "苦情・権利救済",
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
    signalJa:
      "弁護士が法律事務所の法人口座ではなく、個人の銀行口座に費用を振り込むよう求める",
    categoryJa: "私的口座での不正請求",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "正規の法律事務所は法人口座を通じて費用を受け取り、正式な領収書を発行しなければなりません。個人口座での請求は、最も一般的で発見しにくい不正行為の一つです。問題が起きた場合、その送金が弁護士費用であり私的な送金ではないことを証明するのが非常に困難になります。",
    realCaseJa:
      "依頼者は紹介を通じて弁護士に依頼し、約12万人民元を個人の銀行口座に振り込むよう求められました。正式な契約書も領収書もありませんでした。その後、弁護士は連絡を絶って失踪し、依頼者が苦情を申し立てた際、法的サービス関係を証明する正式な委任記録が一切存在しないことが判明しました。",
    adviceJa: [
      "弁護士に法律事務所の法人口座を提示するよう求め、個人口座への振込を拒否する",
      "支払い後、正式な領収書を要求し、金額と内容を確認する",
      "すでに個人口座に支払ってしまった場合は、直ちに送金記録のスクリーンショットを保存する",
      "地域の弁護士会で当該弁護士の登録状況を確認する",
      "免許取得時期を確認し、実習弁護士、アソシエイト弁護士、シニア弁護士のいずれかを見分ける",
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
    signalJa:
      "弁護士が相手方、またはその関係者から紹介された",
    categoryJa: "利益相反の紹介",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "弁護士を紹介した人物が相手方と利害関係にある場合、その弁護士があなたの利益を真に代理する可能性は低いです。紹介者がキックバックを受け取っている場合もあれば、弁護士自体が相手方に送り込まれた駒である可能性もあります。",
    realCaseJa:
      "依頼者は会社との紛争が発生した後、その会社の株主の一人から紹介された弁護士を雇いました。表面上は依頼者を代理していましたが、裏では相手方と連絡を取り続け、有利な証拠を放棄するよう繰り返し助言し、中立的な立場を取るどころか裏で相手方と結託していました。後にその弁護士は相手方から買収されていたことを認めました。",
    adviceJa: [
      "他人の紹介だけに頼らず、自分で独立して弁護士を探す",
      "地域の弁護士会の公式サイトや法律サービスプラットフォームで自分で選ぶ",
      "2～3人の弁護士に同時に相談し、専門的な判断を比較する",
      "紹介者と相手方の間に利害関係がないか調査する",
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
    signalJa:
      "弁護士が正式な書面の委任契約を結ぼうとしない",
    categoryJa: "正式な契約なし",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "書面の委任契約は、弁護士と依頼者の法的サービス関係を証明する基本的な書類です。契約がなければ、問題が発生した際にサービスの範囲、請求金額、双方の権利と義務を証明できません。口頭の合意やチャットメッセージは、苦情申立てや訴訟において効力が限定的です。",
    realCaseJa:
      "依頼者はチャットでの口頭の合意のみで弁護士に契約書の処理を依頼し、書面の契約は交わしませんでした。費用を受け取った後、弁護士はほとんど仕事をしませんでした。依頼者が苦情を申し立てた際、弁護士会は正式な委任関係の証明がないことを理由に受理を拒否しました。",
    adviceJa: [
      "支払い前に必ず書面の委任契約を締結すること。一括での全額前払いは絶対にしない",
      "契約書にはサービスの範囲、費用額、返金条件、担当弁護士を明記すること",
      "契約書の原本を保管し、写真でバックアップを取る",
      "弁護士が契約の締結を拒否する場合は、直ちに弁護士を変更する",
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
    signalJa:
      "委任契約に返金条項が含まれていない",
    categoryJa: "返金条項なし",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "返金条項は、弁護士費用が返金される条件を規定します。この条項がなければ、弁護士が業務を中断したりサービスに不満がある場合でも、支払い済みの費用を取り戻すことが非常に困難になります。これは弁護士が情報の非対称性を利用した典型的な罠です。",
    realCaseJa:
      "依頼者は返金条項のない委任契約を締結し、20万人民元の弁護士費用を支払いました。訴訟が始まった後、弁護士は怠慢で非専門的でした。依頼者が異変を感じて返金を求めましたが、契約に返金条件が記載されていなかったため拒否されました。",
    adviceJa: [
      "契約締結前に返金条項の追加を主張する",
      "サービス未提供やサービス品質不良の場合の返金割合を明確に規定する",
      "弁護士が返金条項の追加を拒否する場合、それ自体が警告サインである",
      "弁護士費用の返金に関する地域の弁護士会の規定を確認する",
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
    signalJa:
      "契約書に記載された弁護士と実際に担当する弁護士が異なる",
    categoryJa: "名義貸し代理",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "一部の事務所では、顧客を獲得するために契約書にベテラン弁護士の名前を使用し、実際の業務は経験の浅い若手弁護士やインターンに任せています。ベテラン弁護士の料金を支払いながら、初級レベルのサービスしか受けられません。",
    realCaseJa:
      "依頼者はベテラン弁護士の評判に惹かれて委任契約を締結しました。契約後、すべての書類準備や出廷は入所したばかりの若手弁護士が担当し、契約書に記載された弁護士は一度も案件に関与しませんでした。",
    adviceJa: [
      "契約前に、実際に案件を担当する弁護士との面談を求める",
      "契約書に担当弁護士の氏名を明記させる",
      "実際の担当者が契約と異なる場合、変更または返金を求める権利がある",
      "定期的に担当弁護士本人に進捗報告を求める",
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
    signalJa:
      "弁護士が長期間連絡を返さず、案件の進捗を報告しない",
    categoryJa: "職務怠慢",
    stageJa: "代理中",
    descriptionJa:
      "費用を受け取った後に連絡が取れなくなるのは、深刻な職務怠慢です。弁護士は定期的に依頼者に案件の進捗を報告すべきであり、少なくとも重要な節目（提訴、審理、判決）の前後には状況を知らせるべきです。長期間の音信不通は、弁護士が案件に全く取り組んでいない可能性を示唆しています。",
    realCaseJa:
      "20万人民元の弁護士費用を支払った後、依頼者は弁護士が長期間メッセージに返信せず、電話にも出ず、怠慢で非専門的であることを発見しました。弁護士を交代した後、元の弁護士が裁判所との連絡を一切行っておらず、依頼者の代理弁護士欄が空白であったことが判明しました。",
    adviceJa: [
      "書面でメールを送り、指定日までに進捗を報告するよう弁護士に求める",
      "弁護士への連絡の記録をすべて保存する（メッセージ、電話、メール）",
      "2週間以上返信がない場合、弁護士会への苦情申立てを検討する",
      "委任契約で進捗報告の頻度と方法を明記する",
      "契約書に必ず返金条項を含める",
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
    signalJa:
      "弁護士が訴えの取り下げや権利の放棄を勧めるが、書面の理由を示さない",
    categoryJa: "不利益な助言",
    stageJa: "代理中",
    descriptionJa:
      "弁護士は専門的な助言を行う権利がありますが、訴えの取り下げ、和解、上訴の放棄などの重大な決定の勧告には、書面の法的分析に基づくべきです。弁護士が口頭でのみ放棄を勧め、書面での意見提出を拒否する場合、その助言はあなたの利益のためではない可能性があります。",
    realCaseJa:
      "控訴審の段階で、弁護士が突然「勝つ見込みが低い」として上訴の放棄を勧めましたが、書面の法的意見書の提供を拒否しました。弁護士を交代した後、依頼者は控訴審で逆転勝訴しました。後に元の弁護士が相手方と密かに連絡を取っていたことが判明しました。",
    adviceJa: [
      "放棄を勧める理由と法的根拠を説明した書面の法的意見書を弁護士に要求する",
      "弁護士が書面の意見提出を拒否する場合、それ自体が重大な警告サインである",
      "比較のために、別の独立した弁護士の意見を求める",
      "プレッシャーの下で権利を放棄する決定をしない",
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
    signalJa:
      "弁護士の助言が客観的にあなたよりも相手方に有利である",
    categoryJa: "利益相反",
    stageJa: "代理中",
    descriptionJa:
      "あなたの弁護士が、あなたに有利な証拠の放棄、重要な問題の追及の中止、優位な状況での譲歩を繰り返し勧める場合、それは専門的判断ではなく利益相反の兆候かもしれません。弁護士は相手方に買収されているか、何らかの未開示の関係がある可能性があります。",
    realCaseJa:
      "弁護士は依頼者に、相手方企業の隠匿資産の追及を「複雑すぎる」として繰り返し止めるよう助言しました。依頼者が独自に証拠を発見した後も、弁護士は取り下げを勧めました。後にその弁護士は相手方企業の法定代理人と個人的な関係があったことを認めました。",
    adviceJa: [
      "弁護士が行う不利な助言をすべて記録する",
      "別の独立した弁護士の意見を求める",
      "2人の弁護士の助言が完全に正反対の場合、その理由を深く調査する",
      "弁護士と相手方との間に何らかの関係がないか調査する",
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
    signalJa:
      "弁護士が「裏工作費」「コネ代」などの追加費用を要求する",
    categoryJa: "賄賂の要求",
    stageJa: "代理中",
    descriptionJa:
      "「根回し」や「裁判官への付け届け」という名目の費用はすべて違法です。正規の弁護士はこのような費用を依頼者に要求することはありませんし、すべきでもありません。この行為自体が違法であり、あなたのお金がそのような「工作」に使われる可能性はほぼありません。",
    realCaseJa:
      "弁護士は「裁判官を食事に招待する必要がある」「書記官に付け届けが必要」として、依頼者から数万人民元の追加費用を要求しました。何の効果もなく、依頼者が返金を求めると、弁護士はそのお金を受け取ったことを全面的に否定しました。",
    adviceJa: [
      "契約に記載されていない費用はすべて拒否する",
      "「裏工作」「コネ」名目の費用は100%詐欺である",
      "弁護士が追加費用を要求した証拠を保存する（チャット記録、録音など）",
      "弁護士会および司法行政局に報告する",
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
    signalJa:
      "弁護士から届いた領収書が空白、または金額が合わない",
    categoryJa: "領収書の不正",
    stageJa: "代理中",
    descriptionJa:
      "正規の弁護士費用の領収書には、金額、提供サービスの内容、日付が明記されるべきです。空白の領収書、金額の不一致、または領収書が一切発行されない場合、その費用は事務所の正式な会計システムを通っておらず、不正行為に該当します。",
    realCaseJa:
      "依頼者が繰り返し領収書を請求した後、届いた領収書は空白で、金額もサービス内容も記載されていませんでした。依頼者が苦情を申し立てると、事務所は「領収書は弁護士個人の行為であり事務所の責任ではない」と責任を転嫁しました。",
    adviceJa: [
      "支払い後、直ちに正式な領収書を要求する",
      "領収書の金額、内容、日付が契約と一致しているか確認する",
      "空白の領収書や金額が合わない領収書は受け取りを拒否し、再発行を求める",
      "すべての領収書原本と支払い証明を保管する",
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
    signalJa:
      "会社の債務に対して個人名義で保証するよう求められる",
    categoryJa: "個人保証の罠",
    stageJa: "契約・取引",
    descriptionJa:
      "個人保証とは、不動産、預金、給与などの個人財産すべてを会社の債務の連帯責任として差し出すことを意味します。会社が支払えなければ、債権者はあなたに直接請求できます。多くの人が結果を理解せずに保証契約に署名し、最終的に莫大な債務を負うことになります。",
    realCaseJa:
      "依頼者は企業間取引の個人連帯保証を提供するよう求められました。相手方企業がその後債務超過に陥り、債権者が依頼者個人を訴え、銀行口座と不動産が凍結されました。依頼者は自分が恩恵を受けていない債務を今なお返済し続けています。",
    adviceJa: [
      "結果を完全に理解しない限り、個人保証には絶対に署名しない",
      "署名前に独立した弁護士に相談し、リスクの範囲を確認する",
      "「連帯責任」と「一般保証」の違いを理解する",
      "すでに保証に署名している場合は、保証期間と求償権に注意する",
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
    signalJa:
      "契約書が相手方によって作成され、早く署名するよう圧力をかけられている",
    categoryJa: "一方的な起草",
    stageJa: "契約・取引",
    descriptionJa:
      "相手方が作成した契約書は、当然ながら相手方の利益を守る傾向があります。十分な確認時間を与えず早急に署名を迫る場合は、特に警戒が必要です。契約書のすべての条項があなたの権利に影響を与える可能性があります。",
    realCaseJa:
      "相手方企業の総支配人が契約書を送り、その日のうちに署名するよう依頼者に圧力をかけました。依頼者は十分な確認をせずに署名し、後になって仲裁条項と違約金条項が極めて不利であることが判明しました。",
    adviceJa: [
      "すべての契約書は、まず自分の弁護士に確認してもらうべきである",
      "相手方の急かしに屈しない。合理的な契約プロセスでは十分な確認時間が与えられる",
      "違約金条項、紛争解決条項、保証条項に特に注意する",
      "相手方が作成した契約書に対して修正を要求する権利がある",
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
    signalJa:
      "契約書に理解できない専門用語や複雑な条項が含まれている",
    categoryJa: "条項の罠",
    stageJa: "契約・取引",
    descriptionJa:
      "法律用語には、あなたに不利な条件が隠されていることがあります。理解せずに署名することは、事実上自分の権利を無自覚に放棄することと同じです。理解できない条項については説明を求める権利があります。",
    realCaseJa:
      "契約書に「先訴の抗弁権の放棄」という条項が含まれていましたが、依頼者はその意味を理解せずに署名しました。後になって、これは債権者がまず会社に請求することなく、直接個人に対して債務を追及できることを意味すると判明しました。",
    adviceJa: [
      "契約書で理解できない内容については説明を求める権利がある",
      "恥ずかしいからといって理解したふりをしない",
      "独立した弁護士に契約書を条項ごとに確認してもらう",
      "保証条件、債務不履行条件、紛争管轄、権利放棄条項に特に注意する",
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
    signalJa:
      "会社が突然破産申請をしたが、まだ資産があることを知っている",
    categoryJa: "偽装破産",
    stageJa: "執行・破産",
    descriptionJa:
      "偽装破産は、債務不履行の外観を捏造して債務を逃れる違法行為です。会社は資産を関連会社や個人名義に移転した上で破産を申請し、債務を帳消しにしようとすることがあります。",
    realCaseJa:
      "敗訴後、相手方企業は突然破産を申請し、執行可能な資産がないと主張しました。依頼者が独自に調査したところ、破産申請の2か月前に、大量の資産が法定代理人の親族が設立した新会社に大幅に値引きされた価格で移転されていたことが判明しました。",
    adviceJa: [
      "資産移転の兆候を発見したら、直ちに財産保全命令を申請する",
      "相手方企業の最近の株式変更や資産の動きを調査する",
      "偽装破産の疑いを裁判所に報告する",
      "相手方の法定代理人が破産手続き中に新会社を設立していないか監視する",
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
    signalJa:
      "判決が確定した後、相手方が財産を移転または隠匿する",
    categoryJa: "執行逃れ",
    stageJa: "執行・破産",
    descriptionJa:
      "勝訴判決を得ることは、お金を受け取ることと同じではありません。被執行者が判決後に財産を他人名義に移転したり資産を隠匿したりすれば、あなたの判決書はただの紙切れになりかねません。この行為は「判決・決定の執行拒否罪」に該当する可能性があります。",
    realCaseJa:
      "依頼者は勝訴後に強制執行を申請しましたが、相手方はすでに不動産を親族に名義変更し、銀行口座の残高はゼロでした。裁判所は高額消費制限令を発出しましたが、相手方は他人の口座を使って消費を続け、実際の生活には影響がありませんでした。",
    adviceJa: [
      "勝訴したら速やかに強制執行を申請し、相手方に資産移転の時間を与えない",
      "訴訟段階から財産保全を申請できる",
      "相手方の執行可能な財産に関する情報を裁判所に提供する",
      "相手方に能力がありながら執行を拒否する場合、刑事責任の追及を申請できる",
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
    signalJa:
      "破産管財人の行動が明らかに債務者に有利である",
    categoryJa: "管財人の不正行為",
    stageJa: "執行・破産",
    descriptionJa:
      "破産管財人は独立かつ公正に手続きを処理すべきです。管財人が債務者の隠匿資産の追跡を積極的に行わない、疑わしい関連取引を調査しない、あるいは債務者の弁済逃れを手助けしている場合、不正な利益供与の可能性があります。",
    realCaseJa:
      "破産管財人は、債務者が申立て前6か月間に行った大規模な資産移転を見て見ぬふりをし、法定代理人個人名義の疑わしい財産の調査も行いませんでした。債権者が繰り返し調査を求めましたが、そのたびに「証拠がない」として拒否されました。",
    adviceJa: [
      "管財人の業務報告を注意深く監視し、異議を申し立てる",
      "独自に債務者の資産移転の証拠を収集し、裁判所に提出する",
      "他の債権者と連携して管財人の行動を共同で監視する",
      "管財人の不正行為が深刻な場合、交代を申請できる",
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
    signalJa:
      "苦情申立て後、行政機関が無期限に引き延ばすか、うやむやにする",
    categoryJa: "行政の不作為",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "弁護士会や司法局への苦情申立て後、長期間結果が出ない場合や、調査がおざなりに処理されている場合、行政機関の不作為かもしれません。または、告発された弁護士に「コネ」がある可能性もあります。諦めず、他の救済手段を活用してください。",
    realCaseJa:
      "依頼者は私的口座での請求と職務怠慢について弁護士会に苦情を申し立てました。8か月待った後に届いた回答は「調査の結果、違反は認められませんでした」という曖昧なもので、調査内容の具体的な説明は一切ありませんでした。",
    adviceJa: [
      "苦情申立ての際に、送金記録、契約書、通信記録を含む完全な証拠資料を添付する",
      "苦情が受理された時期を記録し、法定期限を超過したら問い合わせる",
      "弁護士会が対応しない場合、上級の司法行政機関に苦情を申し立てることができる",
      "行政的手段のほかに、民事訴訟という選択肢もある",
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
    signalJa:
      "調停で譲歩を求められるのは自分だけである",
    categoryJa: "偏った調停",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "調停は双方の交渉プロセスであるべきです。調停人があなただけに要求を下げるよう圧力をかけ、相手方には一切プレッシャーがない場合、その調停は公正でない可能性があります。調停の不成立は敗北を意味しません。訴訟という選択肢が残っています。",
    realCaseJa:
      "弁護士会が主催する調停で、調停人は依頼者に賠償請求額を下げるよう繰り返し圧力をかける一方、弁護士の不正行為は軽く扱いました。依頼者は不利な和解に追い込まれそうになりましたが、最終的に拒否し、法的手段を通じて権利救済を続けました。",
    adviceJa: [
      "自分のボトムラインを明確にし、プレッシャーの下で譲歩しない",
      "調停の不成立は敗北ではなく、単に一つの解決方法に過ぎない",
      "調停中の発言は、原則としてその後の訴訟に影響しない",
      "調停人が明らかに相手方に偏っている場合、調停を拒否できる",
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
    signalJa:
      "証拠の弱点を開示した後、相手方の態度が突然変わる",
    categoryJa: "情報漏洩",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "調停人、行政機関の職員、またはその他の第三者に証拠の弱点を開示した後、相手方の姿勢が目に見えて変化する場合（突然強硬になる、戦略を変えるなど）、あなたの情報が漏洩された可能性が高いです。",
    realCaseJa:
      "調停中に、依頼者は重要な書類を保管していなかったことを調停人に話しました。翌日、相手方弁護士はまさにそれを理由に和解を拒否し、その後の審理でこの弱点を集中的に攻撃しました。",
    adviceJa: [
      "証拠の弱点は自分の弁護士にのみ開示し、第三者には決して話さない",
      "調停や苦情申立ての過程で手の内をすべて明かさない",
      "重要な証拠は最も有利なタイミングまで温存する",
      "情報漏洩が疑われる場合、直ちに影響を評価し、戦略を調整する",
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
    signalJa:
      "相手方が手続き上の戦術を使って案件を引き延ばし、消耗させようとする",
    categoryJa: "手続き的遅延",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "一部の相手方は、管轄異議、反訴、再鑑定の申立てなどの手続き的手段を意図的に利用して審理を遅延させます。目的はあなたの時間、労力、資金を消耗させ、諦めさせるか不利な和解条件を受け入れさせることです。",
    realCaseJa:
      "相手方は管轄異議、忌避申立て、再鑑定の申立てを次々と行い、そのたびに案件が数か月遅延しました。3年間の遅延の中で、依頼者は膨大な時間、労力、弁護士費用を費やし、最終的に経済的圧力により予想をはるかに下回る和解金額を受け入れざるを得ませんでした。",
    adviceJa: [
      "訴訟でよく使われる遅延戦術を学び、精神的・経済的に備える",
      "相手方の手続き上の申立てが正当かどうか弁護士に評価してもらう",
      "時間がかかるからといって簡単に諦めたり譲歩しない",
      "長期戦に備えて経済的な準備をする",
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
    signalJa:
      "弁護士が「特別なコネ」があると主張し、勝訴を保証する",
    categoryJa: "虚偽の約束",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "どんな弁護士も案件の結果を保証することはできません。裁判官や検察官と「特別な関係」があると主張したり、「必ず勝つ」と約束する弁護士は、あなたのお金を騙し取ろうとしているか、賄賂を示唆しているかのいずれかです。どちらも極めて危険です。",
    realCaseJa:
      "弁護士は裁判長と同級生だと主張し、「勝訴を保証する」と言いました。依頼者は高額な費用を支払いました。敗訴後、弁護士は「コネが使えなかった」として返金を拒否しました。後に依頼者は、弁護士がその裁判官を全く知らなかったことを発見しました。",
    adviceJa: [
      "勝訴を保証するいかなる約束も信用してはならない",
      "弁護士が案件の結果を約束することは法律で禁止されている",
      "コネがあると主張する弁護士はさらに信用できない",
      "いわゆる人脈ではなく、専門的能力に基づいて弁護士を選ぶ",
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
    signalJa:
      "弁護士が過去にあなたの相手方またはその関連者を代理したことがある",
    categoryJa: "潜在的利益相反",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "弁護士が現在相手方を代理していなくても、過去の代理関係により相手方の内部情報を把握していたり、暗黙の了解を保っている可能性があります。この潜在的な利益相反は直接的な紹介関係よりも発見が困難ですが、同様に危険です。",
    realCaseJa:
      "依頼者は弁護士を雇いましたが、後にその弁護士が前年に相手方企業の別の案件を担当していたことが判明しました。弁護士は法廷で明らかに消極的で、重要な証拠の提出も怠りました。調査の結果、弁護士と相手方企業の間に継続的なビジネス関係があったことが判明しました。",
    adviceJa: [
      "依頼前に、弁護士が相手方またはその関連者を代理したことがあるか確認する",
      "公開の裁判記録データベースで弁護士の過去の案件を検索する",
      "利益相反が発見された場合、直ちに弁護士を変更する",
      "委任契約に利益相反の開示条項を含める",
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
    signalJa:
      "弁護士のオンラインレビューがすべて好評で、否定的なフィードバックがゼロ",
    categoryJa: "偽の評判",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "経験豊富な弁護士が否定的なレビューゼロということはあり得ません。各プラットフォームで好意的なレビューしかなく、その内容が漠然として定型的な場合、それらは有料の偽レビューの可能性が高いです。偽レビュー自体が、その弁護士の職業的誠実さに疑問を呈するものです。",
    realCaseJa:
      "依頼者は法律プラットフォームで数百件の五つ星レビューを持つ弁護士を見つけました。レビューのほぼすべてが「専門的、責任感がある、おすすめ」というものでした。依頼後、その弁護士は全く専門的でなく、基本的な法的手続きすら間違えていることが判明しました。",
    adviceJa: [
      "好評の数だけでなく、レビューの内容が具体的で真実味があるかを確認する",
      "一律に好意的で同じ表現のレビューには警戒する",
      "公開の裁判記録データベースの実際の案件記録を優先的に参考にする",
      "複数のチャネルを通じて弁護士の評判を交差検証する",
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
    signalJa:
      "弁護士が全額一括前払いを要求し、段階的な支払いを拒否する",
    categoryJa: "一括払いの罠",
    stageJa: "契約・取引",
    descriptionJa:
      "段階的支払いは依頼者にとって最も重要な保護手段の一つです。全額を前払いすると、弁護士のサービス提供への意欲は著しく低下し、怠慢になったりあなたに不利に働く可能性すらあります。段階的支払いにより、各段階で交渉力を維持できます。",
    realCaseJa:
      "依頼者が弁護士費用を全額前払いした後、弁護士の態度は目に見えて変わりました。返信は遅くなり、審理の準備はいい加減になり、重要な段階では放棄まで勧められました。依頼者は弁護士を変えたくても全額支払い済みで、進退窮まりました。",
    adviceJa: [
      "段階的支払いを主張する：契約時に一部、提訴時に一部、審理時に一部、終結時に残額",
      "契約書に各段階の支払い金額と条件を明記する",
      "弁護士費用の全額一括払いは絶対にしない",
      "弁護士が全額前払いを主張する場合、別の弁護士を探す",
      "段階的支払いは交渉力を維持する最善の方法である",
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
    signalJa:
      "弁護士が毎回新しい理由をつけて追加費用を請求し続ける",
    categoryJa: "小出し請求",
    stageJa: "代理中",
    descriptionJa:
      "契約で合意した費用以外に、弁護士が「専門家が必要」「追加調査が必要」「案件が予想より複雑」などさまざまな口実で費用を追加し続けます。一回ごとの金額は少額ですが、累計すると予定をはるかに超えます。これは典型的な小出し請求の手口です。",
    realCaseJa:
      "依頼者は契約時に5万人民元の弁護士費用で合意しました。その後、弁護士は「調査費」「専門家相談費」「急ぎ処理費」として4回にわたり費用を追加し、合計3万人民元以上を追加で支払いました。しかし、追加支払いにもかかわらず案件の質は向上しませんでした。",
    adviceJa: [
      "契約時にすべての費用を明確に合意する。追加費用の可能性も含めて",
      "書面での説明と合理的な根拠がない限り、契約外の費用を拒否する",
      "追加費用が発生するたびに、弁護士に費用明細と理由の書面提出を求める",
      "費用の追加が頻繁な場合、弁護士の変更を検討する",
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
    signalJa:
      "成功報酬契約で、弁護士が「勝訴」の基準を極めて低く設定している",
    categoryJa: "成功報酬の罠",
    stageJa: "契約・取引",
    descriptionJa:
      "成功報酬とは、弁護士が前払い費用をほとんど取らず、勝訴後に一定割合を受け取る仕組みです。しかし一部の弁護士は「勝訴」を極めて広く定義し、相手方からのわずかな支払いでも「勝訴」とみなして高額な報酬を請求します。案件に勝っても経済的には損をすることになります。",
    realCaseJa:
      "依頼者は「勝訴時」に回収額の30%を支払う成功報酬契約を締結しました。しかし契約では「勝訴」を「裁判所が有利な判決を下す、または相手方が何らかの支払いをすること」と定義していました。裁判所は請求の一部のみを認め、相手方はわずかな金額しか支払いませんでしたが、弁護士は判決全額の30%を請求しました。",
    adviceJa: [
      "成功報酬契約における「勝訴」の定義を注意深く確認する",
      "弁護士の報酬は判決金額ではなく、実際に受け取った金額に基づいて計算されることを明確にする",
      "成功報酬と固定報酬のどちらが費用対効果が高いか比較する",
      "報酬割合が過度に高い成功報酬契約に警戒する",
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
    signalJa:
      "契約の違約金条項があなたにのみ適用され、弁護士には適用されない",
    categoryJa: "一方的な条項",
    stageJa: "契約・取引",
    descriptionJa:
      "公正な契約は双方を平等に拘束するべきです。契約があなたの違約には罰則を課しながら、弁護士の違約には何の制裁もない場合、その契約自体が不公正です。このような一方的な条項は、弁護士が情報の非対称性を利用して意図的に設けることが多いです。",
    realCaseJa:
      "依頼者の委任契約では、依頼者が途中解約する場合は弁護士費用の50%を違約金として支払うと規定されていましたが、弁護士がサービスを終了する場合はいかなる補償も必要ありませんでした。弁護士の怠慢により解約を希望した依頼者は、高額な違約金に縛られました。",
    adviceJa: [
      "署名前に、違約金条項と解約条項を注意深く確認する",
      "契約違反の責任が双方に平等に適用されるよう求める",
      "弁護士が不公正な条項の修正を拒否する場合、それ自体が警告サインである",
      "明らかに一方的な契約への署名を拒否する",
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
    signalJa:
      "弁護士が白紙の書類や委任状への署名を求める",
    categoryJa: "白紙書類の罠",
    stageJa: "代理中",
    descriptionJa:
      "白紙の書類に署名することは極めて危険です。一度署名すれば、何でも書き込まれる可能性があります。知らないうちに不利な和解合意書、訴えの取り下げ、さらには借用証書に署名してしまう可能性があります。弁護士がどんな理由を述べても、白紙の書類には決して署名すべきではありません。",
    realCaseJa:
      "弁護士は「裁判所が特別な書式を要求している」として、依頼者に白紙の委任状への署名を求めました。後に依頼者は、弁護士がその委任状を使って依頼者に代わり非常に不利な和解合意書に署名し、請求の大部分を放棄していたことを発見しました。",
    adviceJa: [
      "理由を問わず、白紙の書類には絶対に署名しない",
      "すべての書類は完全に記入された後に署名する",
      "署名前に全ページを注意深く読み、白紙のページがないことを確認する",
      "弁護士が白紙の書類を求める場合、直ちに弁護士を変更し弁護士会に報告する",
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
    signalJa:
      "弁護士があなたの同意なく重大な決定を下す",
    categoryJa: "越権行為",
    stageJa: "代理中",
    descriptionJa:
      "弁護士の代理権限には境界があります。和解、訴えの取り下げ、請求の放棄などの重大な決定には依頼者の同意が必要です。弁護士が授権なくこれらの決定を下した場合、越権代理に該当し、弁護士の責任を追及できます。",
    realCaseJa:
      "依頼者の知らないうちに、弁護士は相手方と和解合意を結び、依頼者の違約金請求を放棄しました。依頼者は裁判所からの通知を受け取って初めて、自分の案件が和解により終結していたことを知りました。",
    adviceJa: [
      "契約書にどの事項について書面での同意が必要かを明記する",
      "重大な決定を下す前に事前に通知するよう弁護士に求める",
      "弁護士が越権行為を行った場合、証拠を保全し弁護士会に苦情を申し立てる",
      "定期的に裁判所で直接案件の状況を確認し、弁護士だけに頼らない",
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
    signalJa:
      "弁護士があなたの案件情報を第三者に漏洩する",
    categoryJa: "守秘義務違反",
    stageJa: "代理中",
    descriptionJa:
      "弁護士には法定の守秘義務があり、依頼者の案件情報や個人情報を第三者に開示してはなりません。相手方があなたが弁護士にだけ伝えた情報を知っていたり、弁護士が公の場であなたの案件の詳細を話していたりする場合、それは重大な違反です。",
    realCaseJa:
      "依頼者は、審理中に相手方がプライベートメッセージで弁護士にだけ共有した戦略の詳細を正確に引用していることを発見しました。調査の結果、双方の弁護士が同じ事務所の異なる部門に所属しており、情報が内部的に漏洩されていたことが判明しました。",
    adviceJa: [
      "弁護士にだけ共有した情報を相手方が知っている兆候に注意する",
      "できる限り暗号化された手段で機密情報をやり取りする",
      "守秘義務違反が確認された場合、直ちに弁護士を変更し証拠を保全する",
      "守秘義務違反を弁護士会に報告する",
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
    signalJa:
      "弁護士が法廷で明らかに非専門的である",
    categoryJa: "重大な怠慢",
    stageJa: "代理中",
    descriptionJa:
      "遅刻する、不完全な資料を提出する、案件に不精通である、法廷で慌てふためく。これらはすべて弁護士があなたの案件を真剣に扱っていない兆候です。高額な費用を支払っている以上、専門的なサービスを受ける権利があります。",
    realCaseJa:
      "弁護士は審理に30分遅刻し、提出した証拠には重要な添付書類が欠けており、裁判官の質問に対して何度も的外れな回答をしました。裁判官はその場で補充資料の提出を命じ、案件は延期されました。後に依頼者は、その弁護士が同時に十数件の案件を抱えており、準備する時間が全くなかったことを知りました。",
    adviceJa: [
      "審理前に弁護士の準備状況を確認し、提出予定の資料を確認する",
      "弁護士が法廷で明らかに非専門的だった場合、審理後すぐに話し合う",
      "弁護士の交代を検討する。法廷でのパフォーマンスは案件の結果に直接影響する",
      "弁護士の怠慢の証拠として法廷記録を保管する",
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
    signalJa:
      "弁護士が「もう打つ手がない」と言うが、書面にはしない",
    categoryJa: "案件の投げ出し",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "弁護士が口頭で「もう打つ手がない」「この案件はここまでだ」と言いながら、書面の法的意見書の提出を拒否する場合、案件を投げ出そうとしている可能性が高いです。正当な専門的判断であれば、書面にすることを恐れません。",
    realCaseJa:
      "弁護士は依頼者に「この案件は勝てない、これ以上やっても無駄だ」と口頭で伝えましたが、書面での意見書の提出を拒否しました。弁護士を交代した後、新しい弁護士は案件にまだ勝訴の可能性があると判断し、最終的に控訴審で逆転に成功しました。",
    adviceJa: [
      "弁護士からの重大な結論については、書面の法的意見書を要求する",
      "口頭での「もう打つ手がない」を鵜呑みにしない",
      "別の弁護士に独立した第二の意見を求める",
      "書面での意見提出の拒否は、それ自体が問題を示している",
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
    signalJa:
      "弁護士が明らかに不合理な和解案の受け入れを強く勧める",
    categoryJa: "疑わしい和解",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "弁護士が合理的な予想をはるかに下回る和解案の受け入れを強く勧め、しかも急いでいる場合、それは専門的な助言ではないかもしれません。弁護士は相手方と何らかの了解に達しているか、単に早く案件を終わらせて報酬を受け取りたいだけの可能性があります。",
    realCaseJa:
      "依頼者の請求額は100万人民元で、証拠も十分でした。しかし弁護士は「手元に入ることが重要」として、相手方が提示した20万人民元の和解案を繰り返し受け入れるよう勧めました。依頼者は拒否して弁護士を交代し、最終的に80万人民元の判決を勝ち取りました。",
    adviceJa: [
      "プレッシャーの下で急いで和解を受け入れない",
      "和解を勧める法的根拠を説明した書面の意見書を弁護士に求める",
      "和解金額を実際の請求額や証拠の強さと比較する",
      "別の弁護士に独立した評価を依頼する",
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
    signalJa:
      "苦情を申し立てた後、弁護士が突然連絡してきて「和解」を提案する",
    categoryJa: "取り下げと引き換えの返金",
    stageJa: "苦情・権利救済",
    descriptionJa:
      "弁護士会に苦情を申し立てた後、告発された弁護士が突然友好的になり、苦情の取り下げと引き換えに費用の一部を返金すると提案してきます。これは通常、あなたに苦情を取り下げさせるためです。取り下げれば弁護士会は調査を中止し、弁護士は処分を免れます。",
    realCaseJa:
      "依頼者が弁護士会に苦情を申し立てた後、弁護士は突然、苦情の取り下げと引き換えに弁護士費用の30%を返金すると提案しました。依頼者は同意して苦情を取り下げましたが、弁護士は約束した金額の半分しか返金しませんでした。依頼者が再度苦情を申し立てようとしたところ、同じ件での再受理はできないと告げられました。",
    adviceJa: [
      "少額の返金のために苦情を取り下げない",
      "和解する場合は、取り下げを検討する前に全額返金を確保する",
      "和解合意は返金額、期限、方法を明記した書面でなければならない",
      "苦情の目的は返金だけでなく、同じ弁護士から他の人を守ることでもある",
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
    signalJa:
      "オンラインプラットフォームが推薦する弁護士の費用が市場価格よりはるかに安い",
    categoryJa: "低価格の罠",
    stageJa: "弁護士選び段階",
    descriptionJa:
      "オンライン法律プラットフォームが推薦する「お得な弁護士」は、多くの場合、集客のための手段です。極端に安い見積もりで契約させ、その後さまざまな口実で費用を追加するか、ひどいサービスを提供します。最も安い弁護士が結果的に最も高くつく選択になることがあります。",
    realCaseJa:
      "依頼者は法律プラットフォームで市場価格の3分の1の見積もりを出す弁護士を見つけました。契約後、弁護士は「案件の複雑さによりチームのサポートが必要」として繰り返し費用を追加し、最終的な総費用は市場価格を超えました。サービスの質も悪く、基本的な法律文書にも誤りがありました。",
    adviceJa: [
      "同種の案件における地域の弁護士費用の相場を調べる",
      "市場価格よりはるかに安い見積もりには理由を確認する",
      "プラットフォーム推薦よりも法律事務所推薦の弁護士を優先する",
      "価格は弁護士選びの一要素にすぎず、専門的能力と評判の方が重要である",
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
    signalJa:
      "法廷の外で、弁護士があなたの案件は「すべて手配済み」だとほのめかす",
    categoryJa: "裏取引の示唆",
    stageJa: "代理中",
    descriptionJa:
      "弁護士が結果は「手配済み」「心配ない」とほのめかしながら、具体的に何をしたかを説明しない場合があります。この示唆はあなたを安心させて支払いを続けさせるための策略か、実際の贈賄を意味しているかのいずれかです。どちらにしても深刻な危険にさらされています。",
    realCaseJa:
      "審理前に、弁護士は依頼者に「安心してください、すべて手配済みです」と言いました。依頼者が詳細を尋ねると弁護士ははぐらかしました。敗訴後、弁護士はそのようなことを言ったことを全面的に否定しました。依頼者は、弁護士が何も「手配」しておらず、単に安心させてお金を払わせ続けていたのではないかと疑いました。",
    adviceJa: [
      "「手配済み」とほのめかす弁護士は決して信用しない",
      "具体的にどのような業務を行ったか弁護士に説明を求める",
      "弁護士が賄賂を示唆すること自体が違法であり、あなたも巻き込まれる可能性がある",
      "弁護士の「手配済み」という示唆の証拠を保存する（録音、チャット記録）",
    ],
  },
];

export function getFlagBySlug(slug: string): Flag | undefined {
  return flags.find((f) => f.slug === slug);
}
