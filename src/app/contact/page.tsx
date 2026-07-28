"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useI18n } from "@/i18n/context";

export default function ContactPage() {
  const { t, locale } = useI18n();
  const isZh = locale === "zh";

  const [form, setForm] = useState({
    type: "",
    message: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const typeOptions = [
    { zh: "内容纠错", en: "Content Correction", email: "feedback@legalredflag.org" },
    { zh: "专业合作", en: "Professional Collaboration", email: "collaborate@legalredflag.org" },
    { zh: "媒体咨询", en: "Media Inquiry", email: "hello@legalredflag.org" },
    { zh: "其他", en: "Other", email: "hello@legalredflag.org" },
  ];

  function handleSubmit() {
    const selected = typeOptions.find(
      (o) => (isZh ? o.zh : o.en) === form.type
    );
    const toEmail = selected?.email || "hello@legalredflag.org";

    const body = [
      `【${isZh ? "类型" : "Type"}】${form.type}`,
      "",
      `【${isZh ? "内容" : "Message"}】`,
      form.message,
      "",
      `【${isZh ? "联系方式" : "Contact"}】${form.contact || (isZh ? "匿名" : "Anonymous")}`,
    ].join("\n");

    const subject = encodeURIComponent(
      isZh ? `[Legal Red Flags] ${form.type}` : `[Legal Red Flags] ${form.type}`
    );
    const mailBody = encodeURIComponent(body);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${mailBody}`;
    setSubmitted(true);
  }

  const inputClass =
    "w-full p-4 bg-[var(--ground)] border border-[var(--rule)] text-[15px] text-[var(--ink)] placeholder:text-[var(--grey-light)] focus:outline-none focus:border-[var(--green)] transition-colors";
  const labelClass = "block text-[15px] font-semibold text-[var(--ink)] mb-2";

  return (
    <>
      <Navbar />
      <section className="max-w-[960px] mx-auto px-7 pt-20 pb-16">
        <h1 className="font-serif text-[clamp(28px,5vw,38px)] font-bold leading-tight mb-4">
          {t("联系我们", "Contact Us")}
        </h1>
        <p className="text-[17px] text-[var(--grey)] leading-relaxed max-w-[600px] mb-12">
          {t(
            "无论是内容纠错、专业建议、合作提议还是媒体咨询，我们都欢迎你的来信。",
            "Whether it's a content correction, professional advice, collaboration, or media inquiry — we welcome your message."
          )}
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 mb-12">
          {[
            {
              title: t("提交经历", "Share Your Story"),
              desc: t("分享你的法律维权经历，帮助更多人识别风险。", "Share your legal experience to help others identify risks."),
              email: "submit@legalredflag.org",
              link: "/submit",
              linkText: t("前往提交页面 →", "Go to submission page →"),
            },
            {
              title: t("内容纠错", "Content Corrections"),
              desc: t("发现内容有误或不准确？请告诉我们，我们重视每一条反馈。", "Found something inaccurate? Let us know — we value every piece of feedback."),
              email: "feedback@legalredflag.org",
            },
            {
              title: t("专业合作", "Professional Collaboration"),
              desc: t("法律专业人士、学者、记者——你的专业知识可以让这个平台更准确。", "Legal professionals, academics, journalists — your expertise can make this platform more accurate."),
              email: "collaborate@legalredflag.org",
            },
            {
              title: t("其他事务", "General Inquiries"),
              desc: t("任何其他问题或建议。", "Any other questions or suggestions."),
              email: "hello@legalredflag.org",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[var(--surface)] border border-[var(--rule)] p-7"
            >
              <h3 className="font-serif text-[17px] font-bold mb-2">{item.title}</h3>
              <p className="text-[14px] text-[var(--grey)] leading-relaxed mb-4">{item.desc}</p>
              <a
                href={`mailto:${item.email}`}
                className="text-[14px] text-[var(--green)] no-underline hover:underline font-medium"
              >
                {item.email}
              </a>
              {item.link && (
                <div className="mt-2">
                  <Link href={item.link} className="text-[13px] text-[var(--grey-light)] no-underline hover:text-[var(--ink)] transition-colors">
                    {item.linkText}
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div className="mb-12">
          <h2 className="font-serif text-[22px] font-bold mb-6">
            {t("在线留言", "Send a Message")}
          </h2>

          {submitted ? (
            <div className="bg-[var(--surface)] border border-[var(--green)] p-12 text-center">
              <div className="text-[48px] mb-4">✉️</div>
              <h3 className="font-serif text-[20px] font-bold mb-3">
                {t("感谢你的留言", "Thank You")}
              </h3>
              <p className="text-[15px] text-[var(--grey)] mb-6 max-w-[480px] mx-auto">
                {t(
                  "你的邮件客户端应该已经打开了。如果没有，请直接发送邮件到对应邮箱。",
                  "Your email client should have opened. If not, please send your message directly to the relevant email address above."
                )}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[var(--green)] text-sm underline cursor-pointer bg-transparent border-none"
              >
                {t("再发一条", "Send another")}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className={labelClass}>
                  {t("留言类型", "Message type")}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {typeOptions.map((o) => {
                    const label = isZh ? o.zh : o.en;
                    const selected = form.type === label;
                    return (
                      <button
                        key={o.en}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, type: label }))}
                        className={`px-4 py-2.5 text-[14px] border cursor-pointer transition-all ${
                          selected
                            ? "border-[var(--green)] bg-[var(--green-pale)] text-[var(--ink)] font-semibold"
                            : "border-[var(--rule)] bg-[var(--ground)] text-[var(--ink-soft)] hover:border-[var(--grey)]"
                        }`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className={labelClass}>
                  {t("留言内容", "Your message")}
                  <span className="text-[var(--red)] ml-1">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  rows={6}
                  placeholder={t(
                    "请描述你想说的内容……",
                    "Tell us what's on your mind..."
                  )}
                  className={inputClass + " resize-y"}
                />
              </div>

              <div>
                <label className={labelClass}>
                  {t("联系方式（选填）", "Contact info (optional)")}
                </label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => setForm((prev) => ({ ...prev, contact: e.target.value }))}
                  placeholder={t("邮箱、微信或其他", "Email, WeChat, or other")}
                  className={inputClass}
                />
              </div>

              <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-4 pt-4 border-t border-[var(--rule)]">
                <p className="text-[13px] text-[var(--grey-light)] max-w-[400px]">
                  {t(
                    "点击发送后会打开你的邮件客户端，内容已自动填入。",
                    "Clicking send will open your email client with the message pre-filled."
                  )}
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={!form.type || !form.message}
                  className="px-8 py-3.5 bg-[var(--green)] text-white text-[15px] font-semibold cursor-pointer border-none hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  {t("发送留言", "Send Message")}
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-[var(--ground-warm)] border border-[var(--rule)] p-7 text-[14px] text-[var(--grey)] leading-relaxed">
          <strong className="text-[var(--ink-soft)]">{t("请注意：", "Please note: ")}</strong>
          {t(
            "我们不是法律服务机构，无法提供具体的法律建议。如果你正在遭遇法律纠纷，请咨询当地的执业律师。我们能做的是帮你了解该注意什么。",
            "We are not a legal service provider and cannot offer specific legal advice. If you're facing a legal dispute, consult a licensed attorney in your area. What we can do is help you know what to watch for."
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
