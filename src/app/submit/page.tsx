"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";
import { flags } from "@/data/flags";

const countries = [
  { zh: "日本", en: "Japan", ja: "日本" },
  { zh: "美国", en: "United States", ja: "アメリカ" },
  { zh: "加拿大", en: "Canada", ja: "カナダ" },
  { zh: "英国", en: "United Kingdom", ja: "イギリス" },
  { zh: "澳大利亚", en: "Australia", ja: "オーストラリア" },
  { zh: "新西兰", en: "New Zealand", ja: "ニュージーランド" },
  { zh: "新加坡", en: "Singapore", ja: "シンガポール" },
  { zh: "马来西亚", en: "Malaysia", ja: "マレーシア" },
  { zh: "韩国", en: "South Korea", ja: "韓国" },
  { zh: "德国", en: "Germany", ja: "ドイツ" },
  { zh: "法国", en: "France", ja: "フランス" },
  { zh: "荷兰", en: "Netherlands", ja: "オランダ" },
  { zh: "意大利", en: "Italy", ja: "イタリア" },
  { zh: "西班牙", en: "Spain", ja: "スペイン" },
  { zh: "瑞士", en: "Switzerland", ja: "スイス" },
  { zh: "瑞典", en: "Sweden", ja: "スウェーデン" },
  { zh: "泰国", en: "Thailand", ja: "タイ" },
  { zh: "越南", en: "Vietnam", ja: "ベトナム" },
  { zh: "印度尼西亚", en: "Indonesia", ja: "インドネシア" },
  { zh: "菲律宾", en: "Philippines", ja: "フィリピン" },
  { zh: "阿联酋", en: "UAE", ja: "UAE" },
  { zh: "中国大陆", en: "Mainland China", ja: "中国本土" },
  { zh: "中国香港", en: "Hong Kong", ja: "香港" },
  { zh: "中国澳门", en: "Macau", ja: "マカオ" },
  { zh: "中国台湾", en: "Taiwan", ja: "台湾" },
  { zh: "其他", en: "Other", ja: "その他" },
];

export default function SubmitPage() {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";
  const isJa = locale === "ja";

  const [form, setForm] = useState({
    location: "",
    locationDetail: "",
    timeRange: "",
    summary: "",
    timeline: "",
    selectedFlags: [] as string[],
    lessons: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleFlag(num: string) {
    setForm((prev) => ({
      ...prev,
      selectedFlags: prev.selectedFlags.includes(num)
        ? prev.selectedFlags.filter((f) => f !== num)
        : [...prev.selectedFlags, num],
    }));
  }

  function handleSubmit() {
    const flagLabels = form.selectedFlags
      .map((num) => {
        const f = flags.find((fl) => fl.num === num);
        return f ? `#${f.num} ${isZh ? f.category : isJa ? (f.categoryJa ?? f.categoryEn) : f.categoryEn}` : num;
      })
      .join("\n  ");

    const locationStr = form.location + (form.locationDetail ? ` - ${form.locationDetail}` : "");

    const labelLocation = isZh ? "事件发生地点" : isJa ? "発生場所" : "Location";
    const labelTime = isZh ? "时间范围" : isJa ? "期間" : "Time Period";
    const labelSummary = isZh ? "概述" : isJa ? "概要" : "Summary";
    const labelFlags = isZh ? "涉及的危险信号" : isJa ? "関連する危険信号" : "Red Flags Involved";
    const labelDetail = isZh ? "详细经过" : isJa ? "詳細な経過" : "Detailed Account";
    const labelLessons = isZh ? "经验教训" : isJa ? "学んだ教訓" : "Lessons Learned";
    const labelContact = isZh ? "联系方式" : isJa ? "連絡先" : "Contact";
    const notProvided = isZh ? "未填写" : isJa ? "未記入" : "Not provided";
    const noneSelected = isZh ? "未选择" : isJa ? "未選択" : "None selected";
    const anonymous = isZh ? "匿名提交" : isJa ? "匿名投稿" : "Anonymous";

    const body = [
      `【${labelLocation}】`,
      `  ${locationStr || notProvided}`,
      "",
      `【${labelTime}】`,
      `  ${form.timeRange || notProvided}`,
      "",
      `【${labelSummary}】`,
      `  ${form.summary || notProvided}`,
      "",
      `【${labelFlags}】`,
      `  ${flagLabels || noneSelected}`,
      "",
      `【${labelDetail}】`,
      `  ${form.timeline || notProvided}`,
      "",
      `【${labelLessons}】`,
      `  ${form.lessons || notProvided}`,
      "",
      `【${labelContact}】`,
      `  ${form.contact || anonymous}`,
    ].join("\n");

    const subject = encodeURIComponent(
      isZh ? "提交我的经历" : isJa ? "体験の投稿" : "Sharing My Story"
    );
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:submit@legalredflag.org?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full p-4 bg-[var(--ground)] border border-[var(--rule)] text-[15px] text-[var(--ink)] placeholder:text-[var(--grey-light)] focus:outline-none focus:border-[var(--green)] transition-colors";
  const labelClass = "block text-[15px] font-semibold text-[var(--ink)] mb-2";
  const hintClass = "text-[13px] text-[var(--grey-light)] mb-3";

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t({ zh: "提交你的经历", en: "Share Your Story", ja: "体験を投稿する" })}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t({
            zh: "你的亲身经历可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息，绝不泄露任何可识别身份的细节。",
            en: "Your firsthand experience can help others avoid the same traps. We strictly anonymize all personal information and never reveal any identifiable details.",
            ja: "あなたの実体験が、他の人が同じ罠に陥るのを防ぐ助けになります。すべての個人情報は厳格に匿名化処理し、身元を特定できる情報は一切公開しません。",
          })}
        </p>

        {/* Promise bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { icon: "🔒", zh: "严格匿名", en: "Fully anonymized", ja: "厳格な匿名化" },
            { icon: "✅", zh: "发布前确认", en: "Confirmed before publishing", ja: "公開前に確認" },
            { icon: "↩️", zh: "随时可撤回", en: "Removable anytime", ja: "いつでも撤回可能" },
          ].map((p) => (
            <div
              key={p.zh}
              className="flex items-center gap-2 px-4 py-2.5 bg-[var(--surface)] border border-[var(--rule)] text-[13px] text-[var(--ink-soft)]"
            >
              <span>{p.icon}</span>
              {locale === "zh" ? p.zh : locale === "ja" ? p.ja : p.en}
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="bg-[var(--surface)] border border-[var(--green)] p-12 text-center">
            <div className="text-[48px] mb-4">✉️</div>
            <h2 className="font-serif text-[22px] font-bold mb-3">
              {t({ zh: "感谢你的分享", en: "Thank You for Sharing", ja: "ご共有ありがとうございます" })}
            </h2>
            <p className="text-[15px] text-[var(--grey)] mb-6 max-w-[480px] mx-auto">
              {t({
                zh: "你的邮件客户端应该已经打开了。如果没有，请直接发送邮件到 submit@legalredflag.org。我们会在收到后尽快回复。",
                en: "Your email client should have opened. If not, please send your story directly to submit@legalredflag.org. We'll respond as soon as possible.",
                ja: "メールクライアントが開いたはずです。開かない場合は、submit@legalredflag.org に直接メールをお送りください。受領後、できるだけ早くご返信いたします。",
              })}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[var(--green)] text-sm underline cursor-pointer bg-transparent border-none"
            >
              {t({ zh: "返回表单", en: "Back to form", ja: "フォームに戻る" })}
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Location */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <div>
                <label className={labelClass}>
                  {t({ zh: "事件发生地", en: "Where did this happen?", ja: "発生場所" })}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <p className={hintClass}>
                  {t({
                    zh: "选择国家/地区，便于我们后续形成地域分布数据。",
                    en: "Select a country/region for geographic analysis.",
                    ja: "国/地域を選択してください。地域分布データの分析に使用します。",
                  })}
                </p>
                <select
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  className={inputClass + " cursor-pointer"}
                >
                  <option value="">
                    {t({ zh: "-- 选择国家/地区 --", en: "-- Select country/region --", ja: "-- 国/地域を選択 --" })}
                  </option>
                  {countries.map((c) => (
                    <option key={c.en} value={c.en}>
                      {locale === "zh" ? c.zh : locale === "ja" ? c.ja : c.en}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  {t({ zh: "城市（选填）", en: "City (optional)", ja: "都市（任意）" })}
                </label>
                <p className={hintClass}>
                  {t({ zh: "可以更具体，也可以不填。", en: "Optional — be as specific as you like.", ja: "任意です。具体的に書いても、書かなくても構いません。" })}
                </p>
                <input
                  type="text"
                  value={form.locationDetail}
                  onChange={(e) => update("locationDetail", e.target.value)}
                  placeholder={t({ zh: "如：东京、旧金山", en: "e.g. Tokyo, San Francisco", ja: "例：東京、大阪" })}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Time range */}
            <div>
              <label className={labelClass}>
                {t({ zh: "事件时间范围", en: "When did this happen?", ja: "発生時期" })}
                <span className="text-[var(--red)] ml-1">*</span>
              </label>
              <p className={hintClass}>
                {t({
                  zh: "大概的时间即可，如「2019年至2023年」或「大约三年前」。",
                  en: "Approximate is fine, e.g. \"2019–2023\" or \"about three years ago\".",
                  ja: "おおよその時期で構いません。例：「2019年〜2023年」「約3年前」",
                })}
              </p>
              <input
                type="text"
                value={form.timeRange}
                onChange={(e) => update("timeRange", e.target.value)}
                placeholder={t({ zh: "如：2020年至2024年", en: "e.g. 2020–2024", ja: "例：2020年〜2024年" })}
                className={inputClass}
              />
            </div>

            {/* Summary */}
            <div>
              <label className={labelClass}>
                {t({ zh: "用一两句话概述", en: "Brief summary", ja: "概要（1〜2文で）" })}
                <span className="text-[var(--red)] ml-1">*</span>
              </label>
              <p className={hintClass}>
                {t({
                  zh: "简要描述发生了什么，不需要详细，抓住核心即可。",
                  en: "What happened in a nutshell? Just the core — details come next.",
                  ja: "何が起きたかを簡潔に。要点だけで結構です。詳細は次の項目で。",
                })}
              </p>
              <textarea
                value={form.summary}
                onChange={(e) => update("summary", e.target.value)}
                rows={3}
                placeholder={t({
                  zh: "如：委托律师处理公司纠纷，律师私账收费后消极怠工，维权三年未追回费用。",
                  en: "e.g. Hired a lawyer for a business dispute. The lawyer billed off-book, then ghosted. Three years of fighting, nothing recovered.",
                  ja: "例：会社の紛争で弁護士に依頼。弁護士が個人口座で請求後、怠慢に。3年間闘ったが費用は回収できず。",
                })}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Red flags */}
            <div>
              <label className={labelClass}>
                {t({ zh: "涉及哪些危险信号？", en: "Which red flags were involved?", ja: "どの危険信号に該当しますか？" })}
              </label>
              <p className={hintClass}>
                {t({
                  zh: "选择你经历中遇到的情况，可多选。不确定也没关系。",
                  en: "Select any that match your experience. It's okay if you're unsure.",
                  ja: "あなたの経験に当てはまるものを選んでください。複数選択可。わからなくても大丈夫です。",
                })}
              </p>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
                {flags.map((f) => {
                  const selected = form.selectedFlags.includes(f.num);
                  return (
                    <button
                      key={f.num}
                      type="button"
                      onClick={() => toggleFlag(f.num)}
                      className={`flex items-start gap-3 p-3.5 text-left text-[13px] leading-snug border cursor-pointer transition-all ${
                        selected
                          ? "border-[var(--green)] bg-[var(--green-pale)] text-[var(--ink)]"
                          : "border-[var(--rule)] bg-[var(--ground)] text-[var(--ink-soft)] hover:border-[var(--grey)]"
                      }`}
                    >
                      <span
                        className={`w-[18px] h-[18px] shrink-0 mt-0.5 border-2 rounded-[3px] flex items-center justify-center text-[11px] font-bold transition-all ${
                          selected
                            ? "border-[var(--green)] bg-[var(--green)] text-white"
                            : "border-[var(--rule)]"
                        }`}
                      >
                        {selected ? "✓" : ""}
                      </span>
                      <span>
                        <strong>#{f.num}</strong>{" "}
                        {isZh ? f.category : isJa ? (f.categoryJa ?? f.categoryEn) : f.categoryEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed timeline */}
            <div>
              <label className={labelClass}>
                {t({ zh: "详细经过", en: "Detailed account", ja: "詳細な経過" })}
              </label>
              <p className={hintClass}>
                {t({
                  zh: "按时间顺序描述关键事件。不需要完美叙述，写你记得的就好。个人信息我们会匿名处理。",
                  en: "Describe key events chronologically. No need to be perfect — write what you remember. We'll anonymize personal details.",
                  ja: "重要な出来事を時系列で記述してください。完璧でなくて構いません。覚えていることを書いてください。個人情報は匿名化処理します。",
                })}
              </p>
              <textarea
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                rows={8}
                placeholder={t({
                  zh: "第1年：经朋友介绍委托了一位律师……\n第2年：律师开始不回消息……\n第3年：向律协投诉……",
                  en: "Year 1: Hired a lawyer through a friend's referral...\nYear 2: The lawyer stopped responding...\nYear 3: Filed a complaint with the bar association...",
                  ja: "1年目：友人の紹介で弁護士に依頼……\n2年目：弁護士が返信しなくなった……\n3年目：弁護士会に苦情を申し立てた……",
                })}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Lessons */}
            <div>
              <label className={labelClass}>
                {t({ zh: "你的经验教训", en: "Your lessons learned", ja: "学んだ教訓" })}
              </label>
              <p className={hintClass}>
                {t({
                  zh: "回头看，你希望自己当初知道什么？什么建议想给后来的人？",
                  en: "Looking back, what do you wish you had known? What advice would you give others?",
                  ja: "振り返ってみて、当時知っておきたかったことは？後に続く人へのアドバイスは？",
                })}
              </p>
              <textarea
                value={form.lessons}
                onChange={(e) => update("lessons", e.target.value)}
                rows={4}
                placeholder={t({
                  zh: "如：永远不要把律师费打到个人账户；签合同前一定要加退费条款……",
                  en: "e.g. Never wire fees to a personal account; always insist on a refund clause before signing...",
                  ja: "例：弁護士費用を個人口座に振り込まない。契約前に必ず返金条項を入れる……",
                })}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Contact */}
            <div>
              <label className={labelClass}>
                {t({ zh: "联系方式（选填）", en: "Contact info (optional)", ja: "連絡先（任意）" })}
              </label>
              <p className={hintClass}>
                {t({
                  zh: "如果你愿意，留一个联系方式便于我们确认细节。完全匿名提交也可以。",
                  en: "Leave a way to reach you if you're comfortable. Fully anonymous submissions are welcome too.",
                  ja: "差し支えなければ、連絡先をお知らせください。完全匿名での投稿も歓迎します。",
                })}
              </p>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => update("contact", e.target.value)}
                placeholder={t({ zh: "邮箱、微信或其他", en: "Email, WeChat, or other", ja: "メールアドレス、LINE、その他" })}
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-[var(--rule)]">
              <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                <p className="text-[13px] text-[var(--grey-light)] max-w-[400px]">
                  {t({
                    zh: "点击提交后会打开你的邮件客户端，内容已自动填入。你可以在发送前检查和修改。",
                    en: "Clicking submit will open your email client with the form pre-filled. You can review and edit before sending.",
                    ja: "送信をクリックするとメールクライアントが開き、内容が自動入力されます。送信前に確認・修正できます。",
                  })}
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={!form.location || !form.timeRange || !form.summary}
                  className="px-8 py-3.5 bg-[var(--green)] text-white text-[15px] font-semibold cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {t({ zh: "提交经历", en: "Submit Story", ja: "体験を送信" })}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 pt-8 border-t border-[var(--rule)]">
          <Link
            href="/cases"
            className="text-sm text-[var(--green)] no-underline hover:underline"
          >
            &larr; {t({ zh: "查看已发布的案例", en: "View published cases", ja: "公開中の事例を見る" })}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
