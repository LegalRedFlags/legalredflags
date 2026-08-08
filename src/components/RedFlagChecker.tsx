"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";

interface Question {
  zh: string; en: string; ja: string;
  hintZh: string; hintEn: string; hintJa: string;
  flag: string; flagEn: string; flagJa: string;
  adviceZh: string; adviceEn: string; adviceJa: string;
  invert?: boolean;
}

const questions: Question[] = [
  { zh: "你的律师是否要求你把费用打到个人银行账户，而不是律所的对公账户？", en: "Did your lawyer ask you to pay fees to a personal bank account instead of the firm's official account?", ja: "弁護士から、事務所の口座ではなく個人口座に費用を振り込むよう求められましたか？", hintZh: "正规律所收费必须通过对公账户，个人账户收费是最常见的违规行为之一。", hintEn: "Legitimate firms must bill through official accounts. Personal account billing is one of the most common violations.", hintJa: "正規の法律事務所は事務所の口座を通じて請求しなければなりません。個人口座への請求は最も一般的な違反行為の一つです。", flag: "#01 私账收费", flagEn: "#01 Private billing", flagJa: "#01 個人口座への請求", adviceZh: "要求律师提供律所对公账户。如果已经付到个人账户，保留转账记录，这是后续投诉的关键证据。", adviceEn: "Demand the firm's official account. If you already paid to a personal account, keep the transfer records — they're key evidence for complaints.", adviceJa: "事務所の公式口座を要求してください。すでに個人口座に支払った場合は、振込記録を保管してください。後の苦情申立ての重要な証拠になります。" },
  { zh: "介绍这位律师给你的人，和你的对手方有没有关系？", en: "Does the person who referred this lawyer have any connection to your opponent?", ja: "この弁護士を紹介した人は、あなたの相手方と何らかの関係がありますか？", hintZh: "比如：介绍人是对方公司的人、对方的朋友、或者和对方有生意往来。", hintEn: "For example: the referrer works for the other company, is their friend, or does business with them.", hintJa: "例えば、紹介者が相手方の会社の人間、相手方の友人、または相手方と取引関係がある場合などです。", flag: "#02 利益冲突介绍", flagEn: "#02 Conflict referral", flagJa: "#02 利益相反のある紹介", adviceZh: "独立寻找律师，不要完全依赖他人推荐。可以通过当地律师协会网站查找，或同时咨询2-3位律师做对比。", adviceEn: "Find lawyers independently. Use the local bar association website or consult 2-3 lawyers for comparison.", adviceJa: "弁護士は自分で独立して探しましょう。地元の弁護士会のウェブサイトを利用するか、2〜3人の弁護士に相談して比較してください。" },
  { zh: "你和律师之间是否有正式的书面委托合同？", en: "Do you have a formal written engagement contract with your lawyer?", ja: "弁護士との間に正式な書面による委任契約がありますか？", hintZh: "口头约定或者微信约定都不算正式合同。", hintEn: "Verbal or chat-based agreements don't count as formal contracts.", hintJa: "口頭での約束やチャットでの合意は正式な契約とはみなされません。", flag: "#03 无正式合同", flagEn: "#03 No formal contract", flagJa: "#03 正式な契約書なし", adviceZh: "立即要求签订书面委托合同。合同中必须明确服务内容、收费金额、退费条款和指派律师姓名。", adviceEn: "Immediately request a written contract. It must specify services, fees, refund terms, and the assigned lawyer's name.", adviceJa: "直ちに書面による委任契約の締結を要求してください。契約書にはサービス内容、費用、返金条項、担当弁護士の氏名を明記する必要があります。", invert: true },
  { zh: "合同中是否有明确的退费条款？", en: "Does the contract include a clear refund clause?", ja: "契約書に明確な返金条項がありますか？", hintZh: "即：在什么情况下可以退还律师费，退多少。", hintEn: "i.e., under what conditions fees can be refunded and how much.", hintJa: "つまり、どのような条件で弁護士費用を返金できるか、いくら返金されるかということです。", flag: "#04 无退费条款", flagEn: "#04 No refund clause", flagJa: "#04 返金条項なし", adviceZh: "在签约前要求加入退费条款。如果律师拒绝，这本身就是一个警告信号。", adviceEn: "Request a refund clause before signing. If the lawyer refuses, that itself is a warning sign.", adviceJa: "契約前に返金条項の追加を要求してください。弁護士が拒否する場合、それ自体が警告信号です。", invert: true },
  { zh: "实际处理你案子的律师，和合同上写的律师是同一个人吗？", en: "Is the lawyer actually handling your case the same one named in the contract?", ja: "実際にあなたの案件を担当している弁護士は、契約書に記載された弁護士と同一人物ですか？", hintZh: "有些律所合同上写的是资深律师，实际做事的是另一个人甚至是实习生。", hintEn: "Some firms name a senior lawyer on the contract but assign someone else — even an intern.", hintJa: "契約書にはベテラン弁護士の名前を書いておきながら、実際の業務は別の人や研修生が行っている事務所もあります。", flag: "#05 挂名代理", flagEn: "#05 Ghost representation", flagJa: "#05 名義貸し代理", adviceZh: "要求会面实际负责你案子的律师，确认其身份和资质。合同上的律师必须是实际参与的律师。", adviceEn: "Meet the lawyer actually handling your case. The lawyer on the contract must be the one doing the work.", adviceJa: "実際に案件を担当する弁護士と面会し、身元と資格を確認してください。契約書の弁護士が実際に業務を行う弁護士でなければなりません。", invert: true },
  { zh: "律师是否超过两周没有回复你的消息或汇报案件进展？", en: "Has your lawyer gone more than two weeks without responding or updating you?", ja: "弁護士が2週間以上、連絡の返信や案件の進捗報告をしていませんか？", hintZh: "正常的律师应该定期向客户汇报案件进展，至少在关键节点主动告知。", hintEn: "A normal lawyer should provide regular updates, at least proactively at key milestones.", hintJa: "通常の弁護士は定期的に進捗を報告し、少なくとも重要な節目では自発的に連絡するべきです。", flag: "#06 消极怠工", flagEn: "#06 Ghosting / neglect", flagJa: "#06 放置・怠慢", adviceZh: "书面（邮件）要求律师在指定日期前汇报进展。保留所有沟通记录。如果持续不回复，这可能是更大问题的信号。", adviceEn: "Request updates in writing (email) by a specific date. Keep all records. Continued silence may signal a bigger problem.", adviceJa: "書面（メール）で指定日までに進捗を報告するよう要求してください。すべてのやり取りの記録を保管してください。返信が続かない場合、より大きな問題の兆候かもしれません。" },
  { zh: "律师是否建议你撤诉、和解或放弃某项权利，但没有给你书面的理由说明？", en: "Has your lawyer advised you to drop the case or settle without providing written reasons?", ja: "弁護士から、書面による理由の説明なしに、訴訟の取下げや和解、権利の放棄を勧められましたか？", hintZh: "律师有权给出专业建议，但重大决策必须有书面分析依据。", hintEn: "Lawyers can give professional advice, but major decisions must be backed by written analysis.", hintJa: "弁護士は専門的な助言を行う権利がありますが、重大な判断には書面による分析の裏付けが必要です。", flag: "#07 反向操作", flagEn: "#07 Working against you", flagJa: "#07 不利な誘導", adviceZh: "要求律师出具书面法律意见，说明建议撤诉/和解的具体理由和法律依据。如果拒绝，需要高度警惕。", adviceEn: "Request a written legal opinion explaining the specific reasons. If refused, be highly alert.", adviceJa: "具体的な理由と法的根拠を説明する書面の法律意見書を要求してください。拒否された場合は、強い警戒が必要です。" },
  { zh: "你是否被要求以个人名义为公司的债务做担保？", en: "Have you been asked to personally guarantee a company's debt?", ja: "会社の債務について、個人として保証するよう求められましたか？", hintZh: "比如：公司之间的买卖合同，要求你个人签连带保证。", hintEn: "For example: a contract between companies that requires your personal joint guarantee.", hintJa: "例えば、会社間の売買契約で、あなた個人に連帯保証を求められる場合などです。", flag: "#11 担保陷阱", flagEn: "#11 Guarantee trap", flagJa: "#11 保証の罠", adviceZh: "个人担保意味着你用全部个人财产为公司债务负责。除非你完全了解后果并咨询独立律师，否则不要签署。", adviceEn: "A personal guarantee means you're liable with all personal assets. Don't sign unless you fully understand the consequences and have independent legal advice.", adviceJa: "個人保証は、あなたの全個人資産で会社の債務を負うことを意味します。結果を完全に理解し、独立した弁護士に相談するまでは署名しないでください。" },
  { zh: "和你签订合同（包括担保合同）的文本，是对方公司的内部人发给你确认的吗？", en: "Was the contract (including any guarantee) drafted by the other company's people?", ja: "契約書（保証契約を含む）は、相手方の会社の人が作成したものですか？", hintZh: "比如：合同是对方公司的总经理、财务或法务发来让你签字的。", hintEn: "For example: the contract was sent by their CEO, finance, or legal department for your signature.", hintJa: "例えば、契約書が相手方の社長、経理部、または法務部から署名のために送られてきた場合などです。", flag: "#12 内部人起草", flagEn: "#12 Insider-drafted", flagJa: "#12 相手方による起草", adviceZh: "任何涉及你权益的合同，都应该由你自己的律师审查。对方起草的合同天然倾向于保护对方利益。", adviceEn: "Any contract affecting your rights should be reviewed by your own lawyer. Their draft naturally protects their interests.", adviceJa: "あなたの権利に関わる契約書は、すべて自分の弁護士に確認してもらうべきです。相手方が作成した契約書は、当然ながら相手方の利益を保護する傾向があります。" },
  { zh: "你是否觉得律师的某些建议，客观上更有利于对方而非你？", en: "Do you feel some of your lawyer's advice objectively benefits the other side more than you?", ja: "弁護士の助言の一部が、客観的に見てあなたよりも相手方に有利だと感じますか？", hintZh: "比如：建议你放弃对你有利的证据、不追究某个关键问题、或在你占优势时主动让步。", hintEn: "For example: advising you to drop favorable evidence, ignore a key issue, or concede when you have the upper hand.", hintJa: "例えば、あなたに有利な証拠を放棄するよう勧める、重要な争点を追及しない、またはあなたが優位な立場にあるのに譲歩するよう勧めるなどです。", flag: "#08 利益冲突", flagEn: "#08 Conflict of interest", flagJa: "#08 利益相反", adviceZh: "寻求第二位独立律师的意见。如果两位律师的建议相反，深入了解原因。保留所有律师给出不利建议的记录。", adviceEn: "Seek a second independent opinion. If two lawyers' advice conflicts, investigate why. Keep records of all unfavorable advice.", adviceJa: "別の独立した弁護士にセカンドオピニオンを求めてください。2人の弁護士の助言が矛盾する場合、その理由を詳しく調べてください。不利な助言の記録をすべて保管してください。" },
  { zh: "在行政投诉或调解过程中，是否只有你被要求让步，对方没有任何压力？", en: "During mediation, were you the only one pressured to make concessions while the other side faced no pressure?", ja: "調停の過程で、あなただけが譲歩を求められ、相手方には何の圧力もかかっていませんでしたか？", hintZh: "调解应该是双方协商，如果调解人只逼你出价而不逼对方，可能存在立场偏差。", hintEn: "Mediation should involve both sides. If only you are pushed to compromise, the mediator may be biased.", hintJa: "調停は双方の協議であるべきです。あなただけが譲歩を迫られ、相手方が迫られていない場合、調停人に偏りがある可能性があります。", flag: "#18 偏向调解", flagEn: "#18 Biased mediation", flagJa: "#18 偏った調停", adviceZh: "明确表达你的底线，不要在压力下做决定。调解失败不代表你输了——行政途径之外还有司法途径。", adviceEn: "State your bottom line clearly. Don't decide under pressure. Failed mediation doesn't mean you've lost — judicial avenues remain.", adviceJa: "あなたの譲れない線を明確に伝え、圧力の下で判断しないでください。調停の不成立はあなたの敗北ではありません。行政手続き以外にも裁判という手段があります。" },
  { zh: "你向某个机构透露了一个证据上的弱点之后，对方的态度是否突然变强硬了？", en: "After you revealed an evidence weakness to an institution, did the other side suddenly become more aggressive?", ja: "ある機関に証拠の弱点を明かした後、相手方の態度が突然強硬になりましたか？", hintZh: "比如：你告诉调解人你没保留某份文件，之后对方立刻拒绝和解。", hintEn: "For example: you told the mediator you didn't keep a certain document, and the other side immediately refused to settle.", hintJa: "例えば、調停人にある書類を保管していないことを伝えた後、相手方がすぐに和解を拒否した場合などです。", flag: "#19 信息泄露", flagEn: "#19 Information leak", flagJa: "#19 情報漏洩", adviceZh: "今后只向你的律师透露证据弱点，不要对调解人或行政机关工作人员透露。保留关键证据到最后使用。", adviceEn: "Only reveal evidence weaknesses to your own lawyer. Never disclose them to mediators or officials. Save key evidence for last.", adviceJa: "証拠の弱点は自分の弁護士にのみ明かしてください。調停人や行政機関の職員には絶対に開示しないでください。重要な証拠は最後まで温存してください。" },
];

export default function RedFlagChecker() {
  const { locale } = useI18n();
  const [current, setCurrent] = useState(0);
  const [hits, setHits] = useState<{ flag: string; advice: string; text: string }[]>([]);
  const [done, setDone] = useState(false);

  function answer(isYes: boolean) {
    if (isYes) {
      const q = questions[current];
      setHits((prev) => [...prev, {
        flag: locale === "zh" ? q.flag : locale === "ja" ? q.flagJa : q.flagEn,
        advice: locale === "zh" ? q.adviceZh : locale === "ja" ? q.adviceJa : q.adviceEn,
        text: locale === "zh" ? q.zh : locale === "ja" ? q.ja : q.en,
      }]);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setCurrent(0);
    setHits([]);
    setDone(false);
  }

  const progress = done ? 100 : (current / questions.length) * 100;
  const q = questions[current];

  const riskColor = hits.length === 0 ? "var(--green)" : hits.length <= 3 ? "#d4a04a" : "var(--red)";
  const riskLabel = hits.length === 0
    ? locale === "zh" ? "暂未发现明显危险信号" : locale === "ja" ? "明らかな危険信号は検出されませんでした" : "No obvious red flags detected"
    : hits.length <= 3
      ? locale === "zh" ? "存在风险，建议关注" : locale === "ja" ? "リスクあり――注意が必要です" : "Some risks detected — stay alert"
      : locale === "zh" ? "多项危险信号，建议立即行动" : locale === "ja" ? "複数の危険信号――直ちに対処してください" : "Multiple red flags — take action now";
  const riskClass = hits.length === 0
    ? "bg-[var(--green-pale)] text-[var(--green)]"
    : hits.length <= 3
      ? "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
      : "bg-[var(--red-pale)] text-[var(--red)]";

  const circumference = 2 * Math.PI * 42;
  const strokeOffset = circumference - circumference * (hits.length / questions.length);

  return (
    <div className="bg-[var(--surface)] border border-[var(--rule)] overflow-hidden">
      <div className="h-[3px] bg-[var(--rule-light)]">
        <div className="h-full bg-[var(--green)] transition-all duration-400" style={{ width: `${progress}%` }} />
      </div>
      <div className="p-8 max-sm:p-6">
        {!done ? (
          <div className="min-h-[120px]">
            <div className="text-xs text-[var(--grey-light)] mb-3 tracking-wide">
              {locale === "zh" ? `问题 ${current + 1} / ${questions.length}` : locale === "ja" ? `質問 ${current + 1} / ${questions.length}` : `Question ${current + 1} / ${questions.length}`}
            </div>
            <div className="font-serif text-lg leading-relaxed text-[var(--ink)] mb-2">
              {locale === "zh" ? q.zh : locale === "ja" ? q.ja : q.en}
            </div>
            <div className="text-[13px] text-[var(--grey-light)] mb-6 leading-relaxed">
              {locale === "zh" ? q.hintZh : locale === "ja" ? q.hintJa : q.hintEn}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => answer(true)}
                className="flex-1 p-3.5 border border-[var(--rule)] bg-[var(--ground)] text-[15px] font-semibold text-[var(--ink-soft)] cursor-pointer hover:border-[var(--red)] hover:bg-[var(--red-pale)] hover:text-[var(--red)] transition-all"
              >
                {q.invert ? (locale === "zh" ? "没有" : locale === "ja" ? "いいえ" : "No") : (locale === "zh" ? "是的" : locale === "ja" ? "はい" : "Yes")}
              </button>
              <button
                onClick={() => answer(false)}
                className="flex-1 p-3.5 border border-[var(--rule)] bg-[var(--ground)] text-[15px] font-semibold text-[var(--ink-soft)] cursor-pointer hover:border-[var(--grey)] hover:bg-[var(--ground-warm)] transition-all"
              >
                {q.invert ? (locale === "zh" ? "有" : locale === "ja" ? "はい" : "Yes") : (locale === "zh" ? "没有" : locale === "ja" ? "いいえ" : "No")}
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-center py-3 pb-7">
              <div className="w-[100px] h-[100px] mx-auto mb-4 relative">
                <svg viewBox="0 0 96 96" className="w-[100px] h-[100px] -rotate-90">
                  <circle cx="48" cy="48" r="42" fill="none" stroke="var(--rule-light)" strokeWidth="6" />
                  <circle cx="48" cy="48" r="42" fill="none" stroke={riskColor} strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeOffset} className="transition-all duration-1000" />
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[28px] font-bold text-[var(--ink)]">
                  {hits.length}
                </div>
              </div>
              <div className="text-sm text-[var(--grey)]">
                {locale === "zh" ? "命中危险信号数" : locale === "ja" ? "該当した危険信号の数" : "Red flags triggered"}
              </div>
              <div className={`inline-block text-[13px] font-bold px-3.5 py-1 rounded mt-2 ${riskClass}`}>
                {riskLabel}
              </div>
            </div>

            <div className="border-t border-[var(--rule-light)] pt-6 mt-2">
              {hits.length === 0 ? (
                <div className="text-center py-5 text-[var(--green)] text-[15px] font-semibold">
                  {locale === "zh"
                    ? "你的回答没有命中已知的危险信号。但请保持警惕，定期回顾检查清单。"
                    : locale === "ja"
                      ? "あなたの回答は既知の危険信号に該当しませんでした。しかし油断せず、定期的にチェックリストを確認してください。"
                      : "Your answers didn't trigger any known red flags. But stay vigilant — review the checklist regularly."}
                </div>
              ) : (
                <>
                  <h4 className="text-[13px] tracking-wider uppercase text-[var(--grey-light)] mb-3.5">
                    {locale === "zh" ? "命中的危险信号" : locale === "ja" ? "該当した危険信号" : "Triggered red flags"}
                  </h4>
                  {hits.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-[var(--rule-light)] last:border-b-0 text-sm text-[var(--ink-soft)] leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-[var(--red)] shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-[var(--ink)]">{h.flag}</strong><br />
                        {h.text}
                        <div className="text-[12.5px] text-[var(--grey)] mt-1">
                          {locale === "zh" ? "建议：" : locale === "ja" ? "アドバイス：" : "Advice: "}{h.advice}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <button
              onClick={restart}
              className="block w-full mt-6 p-3 bg-[var(--ground)] border border-[var(--rule)] text-[var(--grey)] text-sm cursor-pointer text-center hover:border-[var(--grey)] hover:text-[var(--ink)] transition-colors"
            >
              {locale === "zh" ? "重新测试" : locale === "ja" ? "もう一度テスト" : "Start Over"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
