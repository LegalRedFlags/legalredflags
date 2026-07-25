"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/context";

interface Question {
  zh: string; en: string;
  hintZh: string; hintEn: string;
  flag: string; flagEn: string;
  adviceZh: string; adviceEn: string;
  invert?: boolean;
}

const questions: Question[] = [
  { zh: "你的律师是否要求你把费用打到个人银行账户，而不是律所的对公账户？", en: "Did your lawyer ask you to pay fees to a personal bank account instead of the firm's official account?", hintZh: "正规律所收费必须通过对公账户，个人账户收费是最常见的违规行为之一。", hintEn: "Legitimate firms must bill through official accounts. Personal account billing is one of the most common violations.", flag: "#01 私账收费", flagEn: "#01 Private billing", adviceZh: "要求律师提供律所对公账户。如果已经付到个人账户，保留转账记录，这是后续投诉的关键证据。", adviceEn: "Demand the firm's official account. If you already paid to a personal account, keep the transfer records — they're key evidence for complaints." },
  { zh: "介绍这位律师给你的人，和你的对手方有没有关系？", en: "Does the person who referred this lawyer have any connection to your opponent?", hintZh: "比如：介绍人是对方公司的人、对方的朋友、或者和对方有生意往来。", hintEn: "For example: the referrer works for the other company, is their friend, or does business with them.", flag: "#02 利益冲突介绍", flagEn: "#02 Conflict referral", adviceZh: "独立寻找律师，不要完全依赖他人推荐。可以通过当地律师协会网站查找，或同时咨询2-3位律师做对比。", adviceEn: "Find lawyers independently. Use the local bar association website or consult 2-3 lawyers for comparison." },
  { zh: "你和律师之间是否有正式的书面委托合同？", en: "Do you have a formal written engagement contract with your lawyer?", hintZh: "口头约定或者微信约定都不算正式合同。", hintEn: "Verbal or chat-based agreements don't count as formal contracts.", flag: "#03 无正式合同", flagEn: "#03 No formal contract", adviceZh: "立即要求签订书面委托合同。合同中必须明确服务内容、收费金额、退费条款和指派律师姓名。", adviceEn: "Immediately request a written contract. It must specify services, fees, refund terms, and the assigned lawyer's name.", invert: true },
  { zh: "合同中是否有明确的退费条款？", en: "Does the contract include a clear refund clause?", hintZh: "即：在什么情况下可以退还律师费，退多少。", hintEn: "i.e., under what conditions fees can be refunded and how much.", flag: "#04 无退费条款", flagEn: "#04 No refund clause", adviceZh: "在签约前要求加入退费条款。如果律师拒绝，这本身就是一个警告信号。", adviceEn: "Request a refund clause before signing. If the lawyer refuses, that itself is a warning sign.", invert: true },
  { zh: "实际处理你案子的律师，和合同上写的律师是同一个人吗？", en: "Is the lawyer actually handling your case the same one named in the contract?", hintZh: "有些律所合同上写的是资深律师，实际做事的是另一个人甚至是实习生。", hintEn: "Some firms name a senior lawyer on the contract but assign someone else — even an intern.", flag: "#05 挂名代理", flagEn: "#05 Ghost representation", adviceZh: "要求会面实际负责你案子的律师，确认其身份和资质。合同上的律师必须是实际参与的律师。", adviceEn: "Meet the lawyer actually handling your case. The lawyer on the contract must be the one doing the work.", invert: true },
  { zh: "律师是否超过两周没有回复你的消息或汇报案件进展？", en: "Has your lawyer gone more than two weeks without responding or updating you?", hintZh: "正常的律师应该定期向客户汇报案件进展，至少在关键节点主动告知。", hintEn: "A normal lawyer should provide regular updates, at least proactively at key milestones.", flag: "#06 消极怠工", flagEn: "#06 Ghosting / neglect", adviceZh: "书面（邮件）要求律师在指定日期前汇报进展。保留所有沟通记录。如果持续不回复，这可能是更大问题的信号。", adviceEn: "Request updates in writing (email) by a specific date. Keep all records. Continued silence may signal a bigger problem." },
  { zh: "律师是否建议你撤诉、和解或放弃某项权利，但没有给你书面的理由说明？", en: "Has your lawyer advised you to drop the case or settle without providing written reasons?", hintZh: "律师有权给出专业建议，但重大决策必须有书面分析依据。", hintEn: "Lawyers can give professional advice, but major decisions must be backed by written analysis.", flag: "#07 反向操作", flagEn: "#07 Working against you", adviceZh: "要求律师出具书面法律意见，说明建议撤诉/和解的具体理由和法律依据。如果拒绝，需要高度警惕。", adviceEn: "Request a written legal opinion explaining the specific reasons. If refused, be highly alert." },
  { zh: "你是否被要求以个人名义为公司的债务做担保？", en: "Have you been asked to personally guarantee a company's debt?", hintZh: "比如：公司之间的买卖合同，要求你个人签连带保证。", hintEn: "For example: a contract between companies that requires your personal joint guarantee.", flag: "#11 担保陷阱", flagEn: "#11 Guarantee trap", adviceZh: "个人担保意味着你用全部个人财产为公司债务负责。除非你完全了解后果并咨询独立律师，否则不要签署。", adviceEn: "A personal guarantee means you're liable with all personal assets. Don't sign unless you fully understand the consequences and have independent legal advice." },
  { zh: "和你签订合同（包括担保合同）的文本，是对方公司的内部人发给你确认的吗？", en: "Was the contract (including any guarantee) drafted by the other company's people?", hintZh: "比如：合同是对方公司的总经理、财务或法务发来让你签字的。", hintEn: "For example: the contract was sent by their CEO, finance, or legal department for your signature.", flag: "#12 内部人起草", flagEn: "#12 Insider-drafted", adviceZh: "任何涉及你权益的合同，都应该由你自己的律师审查。对方起草的合同天然倾向于保护对方利益。", adviceEn: "Any contract affecting your rights should be reviewed by your own lawyer. Their draft naturally protects their interests." },
  { zh: "你是否觉得律师的某些建议，客观上更有利于对方而非你？", en: "Do you feel some of your lawyer's advice objectively benefits the other side more than you?", hintZh: "比如：建议你放弃对你有利的证据、不追究某个关键问题、或在你占优势时主动让步。", hintEn: "For example: advising you to drop favorable evidence, ignore a key issue, or concede when you have the upper hand.", flag: "#08 利益冲突", flagEn: "#08 Conflict of interest", adviceZh: "寻求第二位独立律师的意见。如果两位律师的建议相反，深入了解原因。保留所有律师给出不利建议的记录。", adviceEn: "Seek a second independent opinion. If two lawyers' advice conflicts, investigate why. Keep records of all unfavorable advice." },
  { zh: "在行政投诉或调解过程中，是否只有你被要求让步，对方没有任何压力？", en: "During mediation, were you the only one pressured to make concessions while the other side faced no pressure?", hintZh: "调解应该是双方协商，如果调解人只逼你出价而不逼对方，可能存在立场偏差。", hintEn: "Mediation should involve both sides. If only you are pushed to compromise, the mediator may be biased.", flag: "#18 偏向调解", flagEn: "#18 Biased mediation", adviceZh: "明确表达你的底线，不要在压力下做决定。调解失败不代表你输了——行政途径之外还有司法途径。", adviceEn: "State your bottom line clearly. Don't decide under pressure. Failed mediation doesn't mean you've lost — judicial avenues remain." },
  { zh: "你向某个机构透露了一个证据上的弱点之后，对方的态度是否突然变强硬了？", en: "After you revealed an evidence weakness to an institution, did the other side suddenly become more aggressive?", hintZh: "比如：你告诉调解人你没保留某份文件，之后对方立刻拒绝和解。", hintEn: "For example: you told the mediator you didn't keep a certain document, and the other side immediately refused to settle.", flag: "#19 信息泄露", flagEn: "#19 Information leak", adviceZh: "今后只向你的律师透露证据弱点，不要对调解人或行政机关工作人员透露。保留关键证据到最后使用。", adviceEn: "Only reveal evidence weaknesses to your own lawyer. Never disclose them to mediators or officials. Save key evidence for last." },
];

export default function RedFlagChecker() {
  const { locale } = useI18n();
  const [current, setCurrent] = useState(0);
  const [hits, setHits] = useState<{ flag: string; advice: string; text: string }[]>([]);
  const [done, setDone] = useState(false);
  const isZh = locale === "zh";

  function answer(isYes: boolean) {
    if (isYes) {
      const q = questions[current];
      setHits((prev) => [...prev, {
        flag: isZh ? q.flag : q.flagEn,
        advice: isZh ? q.adviceZh : q.adviceEn,
        text: isZh ? q.zh : q.en,
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
    ? isZh ? "暂未发现明显危险信号" : "No obvious red flags detected"
    : hits.length <= 3
      ? isZh ? "存在风险，建议关注" : "Some risks detected — stay alert"
      : isZh ? "多项危险信号，建议立即行动" : "Multiple red flags — take action now";
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
              {isZh ? `问题 ${current + 1} / ${questions.length}` : `Question ${current + 1} / ${questions.length}`}
            </div>
            <div className="font-serif text-lg leading-relaxed text-[var(--ink)] mb-2">
              {isZh ? q.zh : q.en}
            </div>
            <div className="text-[13px] text-[var(--grey-light)] mb-6 leading-relaxed">
              {isZh ? q.hintZh : q.hintEn}
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => answer(true)}
                className="flex-1 p-3.5 border border-[var(--rule)] bg-[var(--ground)] text-[15px] font-semibold text-[var(--ink-soft)] cursor-pointer hover:border-[var(--red)] hover:bg-[var(--red-pale)] hover:text-[var(--red)] transition-all"
              >
                {q.invert ? (isZh ? "没有" : "No") : (isZh ? "是的" : "Yes")}
              </button>
              <button
                onClick={() => answer(false)}
                className="flex-1 p-3.5 border border-[var(--rule)] bg-[var(--ground)] text-[15px] font-semibold text-[var(--ink-soft)] cursor-pointer hover:border-[var(--grey)] hover:bg-[var(--ground-warm)] transition-all"
              >
                {q.invert ? (isZh ? "有" : "Yes") : (isZh ? "没有" : "No")}
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
                {isZh ? "命中危险信号数" : "Red flags triggered"}
              </div>
              <div className={`inline-block text-[13px] font-bold px-3.5 py-1 rounded mt-2 ${riskClass}`}>
                {riskLabel}
              </div>
            </div>

            <div className="border-t border-[var(--rule-light)] pt-6 mt-2">
              {hits.length === 0 ? (
                <div className="text-center py-5 text-[var(--green)] text-[15px] font-semibold">
                  {isZh
                    ? "你的回答没有命中已知的危险信号。但请保持警惕，定期回顾检查清单。"
                    : "Your answers didn't trigger any known red flags. But stay vigilant — review the checklist regularly."}
                </div>
              ) : (
                <>
                  <h4 className="text-[13px] tracking-wider uppercase text-[var(--grey-light)] mb-3.5">
                    {isZh ? "命中的危险信号" : "Triggered red flags"}
                  </h4>
                  {hits.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-[var(--rule-light)] last:border-b-0 text-sm text-[var(--ink-soft)] leading-relaxed">
                      <div className="w-2 h-2 rounded-full bg-[var(--red)] shrink-0 mt-1.5" />
                      <div>
                        <strong className="text-[var(--ink)]">{h.flag}</strong><br />
                        {h.text}
                        <div className="text-[12.5px] text-[var(--grey)] mt-1">
                          {isZh ? "建议：" : "Advice: "}{h.advice}
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
              {isZh ? "重新测试" : "Start Over"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
