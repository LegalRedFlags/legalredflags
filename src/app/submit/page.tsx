"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";
import { flags } from "@/data/flags";

const countries = [
  { zh: "日本", en: "Japan" },
  { zh: "美国", en: "United States" },
  { zh: "加拿大", en: "Canada" },
  { zh: "英国", en: "United Kingdom" },
  { zh: "澳大利亚", en: "Australia" },
  { zh: "新西兰", en: "New Zealand" },
  { zh: "新加坡", en: "Singapore" },
  { zh: "马来西亚", en: "Malaysia" },
  { zh: "韩国", en: "South Korea" },
  { zh: "德国", en: "Germany" },
  { zh: "法国", en: "France" },
  { zh: "荷兰", en: "Netherlands" },
  { zh: "意大利", en: "Italy" },
  { zh: "西班牙", en: "Spain" },
  { zh: "瑞士", en: "Switzerland" },
  { zh: "瑞典", en: "Sweden" },
  { zh: "泰国", en: "Thailand" },
  { zh: "越南", en: "Vietnam" },
  { zh: "印度尼西亚", en: "Indonesia" },
  { zh: "菲律宾", en: "Philippines" },
  { zh: "阿联酋", en: "UAE" },
  { zh: "中国大陆", en: "Mainland China" },
  { zh: "中国香港", en: "Hong Kong" },
  { zh: "中国澳门", en: "Macau" },
  { zh: "中国台湾", en: "Taiwan" },
  { zh: "其他", en: "Other" },
];

export default function SubmitPage() {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";

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
        return f ? `#${f.num} ${isZh ? f.category : f.categoryEn}` : num;
      })
      .join("\n  ");

    const locationStr = form.location + (form.locationDetail ? ` - ${form.locationDetail}` : "");

    const body = [
      `【${isZh ? "事件发生地点" : "Location"}】`,
      `  ${locationStr || (isZh ? "未填写" : "Not provided")}`,
      "",
      `【${isZh ? "时间范围" : "Time Period"}】`,
      `  ${form.timeRange || (isZh ? "未填写" : "Not provided")}`,
      "",
      `【${isZh ? "概述" : "Summary"}】`,
      `  ${form.summary || (isZh ? "未填写" : "Not provided")}`,
      "",
      `【${isZh ? "涉及的危险信号" : "Red Flags Involved"}】`,
      `  ${flagLabels || (isZh ? "未选择" : "None selected")}`,
      "",
      `【${isZh ? "详细经过" : "Detailed Account"}】`,
      `  ${form.timeline || (isZh ? "未填写" : "Not provided")}`,
      "",
      `【${isZh ? "经验教训" : "Lessons Learned"}】`,
      `  ${form.lessons || (isZh ? "未填写" : "Not provided")}`,
      "",
      `【${isZh ? "联系方式" : "Contact"}】`,
      `  ${form.contact || (isZh ? "匿名提交" : "Anonymous")}`,
    ].join("\n");

    const subject = encodeURIComponent(
      isZh ? "提交我的经历" : "Sharing My Story"
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
          {t("提交你的经历", "Share Your Story")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t(
            "你的亲身经历可以帮助更多人避免同样的陷阱。我们会严格匿名化处理所有个人信息，绝不泄露任何可识别身份的细节。",
            "Your firsthand experience can help others avoid the same traps. We strictly anonymize all personal information and never reveal any identifiable details."
          )}
        </p>

        {/* Promise bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { icon: "🔒", zh: "严格匿名", en: "Fully anonymized" },
            { icon: "✅", zh: "发布前确认", en: "Confirmed before publishing" },
            { icon: "↩️", zh: "随时可撤回", en: "Removable anytime" },
          ].map((p) => (
            <div
              key={p.zh}
              className="flex items-center gap-2 px-4 py-2.5 bg-[var(--surface)] border border-[var(--rule)] text-[13px] text-[var(--ink-soft)]"
            >
              <span>{p.icon}</span>
              {isZh ? p.zh : p.en}
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="bg-[var(--surface)] border border-[var(--green)] p-12 text-center">
            <div className="text-[48px] mb-4">✉️</div>
            <h2 className="font-serif text-[22px] font-bold mb-3">
              {t("感谢你的分享", "Thank You for Sharing")}
            </h2>
            <p className="text-[15px] text-[var(--grey)] mb-6 max-w-[480px] mx-auto">
              {t(
                "你的邮件客户端应该已经打开了。如果没有，请直接发送邮件到 submit@legalredflag.org。我们会在收到后尽快回复。",
                "Your email client should have opened. If not, please send your story directly to submit@legalredflag.org. We'll respond as soon as possible."
              )}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-[var(--green)] text-sm underline cursor-pointer bg-transparent border-none"
            >
              {t("返回表单", "Back to form")}
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Location */}
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
              <div>
                <label className={labelClass}>
                  {t("事件发生地", "Where did this happen?")}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <p className={hintClass}>
                  {t(
                    "选择国家/地区，便于我们后续形成地域分布数据。",
                    "Select a country/region for geographic analysis."
                  )}
                </p>
                <select
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  className={inputClass + " cursor-pointer"}
                >
                  <option value="">
                    {t("-- 选择国家/地区 --", "-- Select country/region --")}
                  </option>
                  {countries.map((c) => (
                    <option key={c.en} value={c.en}>
                      {isZh ? c.zh : c.en}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>
                  {t("城市（选填）", "City (optional)")}
                </label>
                <p className={hintClass}>
                  {t("可以更具体，也可以不填。", "Optional — be as specific as you like.")}
                </p>
                <input
                  type="text"
                  value={form.locationDetail}
                  onChange={(e) => update("locationDetail", e.target.value)}
                  placeholder={t("如：东京、旧金山", "e.g. Tokyo, San Francisco")}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Time range */}
            <div>
              <label className={labelClass}>
                {t("事件时间范围", "When did this happen?")}
                <span className="text-[var(--red)] ml-1">*</span>
              </label>
              <p className={hintClass}>
                {t(
                  "大概的时间即可，如「2019年至2023年」或「大约三年前」。",
                  "Approximate is fine, e.g. \"2019–2023\" or \"about three years ago\"."
                )}
              </p>
              <input
                type="text"
                value={form.timeRange}
                onChange={(e) => update("timeRange", e.target.value)}
                placeholder={t("如：2020年至2024年", "e.g. 2020–2024")}
                className={inputClass}
              />
            </div>

            {/* Summary */}
            <div>
              <label className={labelClass}>
                {t("用一两句话概述", "Brief summary")}
                <span className="text-[var(--red)] ml-1">*</span>
              </label>
              <p className={hintClass}>
                {t(
                  "简要描述发生了什么，不需要详细，抓住核心即可。",
                  "What happened in a nutshell? Just the core — details come next."
                )}
              </p>
              <textarea
                value={form.summary}
                onChange={(e) => update("summary", e.target.value)}
                rows={3}
                placeholder={t(
                  "如：委托律师处理公司纠纷，律师私账收费后消极怠工，维权三年未追回费用。",
                  "e.g. Hired a lawyer for a business dispute. The lawyer billed off-book, then ghosted. Three years of fighting, nothing recovered."
                )}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Red flags */}
            <div>
              <label className={labelClass}>
                {t("涉及哪些危险信号？", "Which red flags were involved?")}
              </label>
              <p className={hintClass}>
                {t(
                  "选择你经历中遇到的情况，可多选。不确定也没关系。",
                  "Select any that match your experience. It's okay if you're unsure."
                )}
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
                        {isZh ? f.category : f.categoryEn}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detailed timeline */}
            <div>
              <label className={labelClass}>
                {t("详细经过", "Detailed account")}
              </label>
              <p className={hintClass}>
                {t(
                  "按时间顺序描述关键事件。不需要完美叙述，写你记得的就好。个人信息我们会匿名处理。",
                  "Describe key events chronologically. No need to be perfect — write what you remember. We'll anonymize personal details."
                )}
              </p>
              <textarea
                value={form.timeline}
                onChange={(e) => update("timeline", e.target.value)}
                rows={8}
                placeholder={t(
                  "第1年：经朋友介绍委托了一位律师……\n第2年：律师开始不回消息……\n第3年：向律协投诉……",
                  "Year 1: Hired a lawyer through a friend's referral...\nYear 2: The lawyer stopped responding...\nYear 3: Filed a complaint with the bar association..."
                )}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Lessons */}
            <div>
              <label className={labelClass}>
                {t("你的经验教训", "Your lessons learned")}
              </label>
              <p className={hintClass}>
                {t(
                  "回头看，你希望自己当初知道什么？什么建议想给后来的人？",
                  "Looking back, what do you wish you had known? What advice would you give others?"
                )}
              </p>
              <textarea
                value={form.lessons}
                onChange={(e) => update("lessons", e.target.value)}
                rows={4}
                placeholder={t(
                  "如：永远不要把律师费打到个人账户；签合同前一定要加退费条款……",
                  "e.g. Never wire fees to a personal account; always insist on a refund clause before signing..."
                )}
                className={inputClass + " resize-y"}
              />
            </div>

            {/* Contact */}
            <div>
              <label className={labelClass}>
                {t("联系方式（选填）", "Contact info (optional)")}
              </label>
              <p className={hintClass}>
                {t(
                  "如果你愿意，留一个联系方式便于我们确认细节。完全匿名提交也可以。",
                  "Leave a way to reach you if you're comfortable. Fully anonymous submissions are welcome too."
                )}
              </p>
              <input
                type="text"
                value={form.contact}
                onChange={(e) => update("contact", e.target.value)}
                placeholder={t("邮箱、微信或其他", "Email, WeChat, or other")}
                className={inputClass}
              />
            </div>

            {/* Submit */}
            <div className="pt-4 border-t border-[var(--rule)]">
              <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4">
                <p className="text-[13px] text-[var(--grey-light)] max-w-[400px]">
                  {t(
                    "点击提交后会打开你的邮件客户端，内容已自动填入。你可以在发送前检查和修改。",
                    "Clicking submit will open your email client with the form pre-filled. You can review and edit before sending."
                  )}
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={!form.location || !form.timeRange || !form.summary}
                  className="px-8 py-3.5 bg-[var(--green)] text-white text-[15px] font-semibold cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {t("提交经历", "Submit Story")}
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
            &larr; {t("查看已发布的案例", "View published cases")}
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
